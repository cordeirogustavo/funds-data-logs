import { TableLogs } from './components';
import { type TLog } from './logs-type';
import './logs-list.css';
import React, { useEffect, useRef, useState } from 'react';
import { searchOnTable } from '../../hooks/hooks';
import { fetcher } from 'services/fetcher';
import { LoadingLogo } from '@components';
import * as z from 'zod';

const LogsList = () => {
  const statusRef = React.useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const cnpjRef = useRef<HTMLInputElement>(null);
  const calltypeRef = useRef<HTMLSelectElement>(null);
  const [logs, setLogs] = React.useState<TLog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputType, setInputType] = useState('endDate' as TInputType);

  React.useEffect(() => {
    if (statusRef.current != null) {
      statusRef.current.value = 'all';
    }
  }, []);
  // const endDate = '2023-12-06';
  // const cnpj = '40751130000180';

  const endDateSchema = z.object({
    endDate: z.string().refine((val) => !isNaN(Date.parse(val))),
  });

  const externalIdSchema = z.object({
    externalId: z.string(),
  });

  const cnpjSchema = z.object({
    cnpj: z.string().regex(/^\d{14}$/),
  });

  useEffect(() => {
    const dateNow = new Date().toISOString().split('T')[0];
    const fetchLogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher('endDate', { endDate: dateNow });
        const data = await response;
        console.log(data);
        setLogs(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    void fetchLogs();
  }, []);
  type TInputType = 'endDate' | 'externalId' | 'cnpj';

  const handleClick = async () => {
    setIsLoading(true);

    try {
      let validatedParams;

      if (inputType === 'endDate') {
        validatedParams = endDateSchema.parse({
          endDate: dateRef.current?.value,
        });
      } else if (inputType === 'externalId') {
        validatedParams = externalIdSchema.parse({
          externalId: idRef.current?.value,
        });
      } else if (inputType === 'cnpj') {
        validatedParams = cnpjSchema.parse({ cnpj: cnpjRef.current?.value });
      }

      const response = await fetcher(inputType, validatedParams);
      console.log('response', response);
      const data = await response;
      setLogs(data);
      console.log(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Erro de validação:', error.issues);
      } else {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  function handlerFilterList(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('fora', e.target.value);
    setTimeout(() => {
      console.log('debouncing', e.target.value);
      searchOnTable('logsTableBody', e.target.value, false);
    }, 500);
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-[#1B1F25] m-6 mb-0 rounded-2xl">
        <div className="flex flex-col lg:flex-row w-full p-4 justify-between">
          <div className="flex w-full lg:w-96 p-4">
            <div className="custom-select flex flex-col w-full lg:w-96 p-4">
              <p className="label">Status</p>
              <select
                ref={calltypeRef}
                className="input pb-2"
                onChange={() => {
                  setInputType(calltypeRef.current?.value as TInputType);
                }}
              >
                <option value="endDate">Date</option>
                <option value="externalId">External id</option>
                <option value="cnpj">Cnpj</option>
              </select>
            </div>
            {inputType === 'endDate' && (
              <div className="flex flex-col w-full lg:w-64 p-4 self-end">
                <p className="label">Date</p>
                <input
                  data-testid="Date"
                  type="date"
                  ref={dateRef}
                  className="input p-0.5"
                />
              </div>
            )}
            {inputType === 'cnpj' && (
              <div className="flex flex-col w-full lg:w-64 p-4 self-end">
                <p className="label">Cnpj</p>
                <input type="tel" ref={cnpjRef} className="input" />
              </div>
            )}
            {inputType === 'externalId' && (
              <div className="flex flex-col w-full lg:w-64 p-4 self-end">
                <p className="label">External id</p>
                <input type="tel" ref={idRef} className="input" />
              </div>
            )}
          </div>
          <div className="flex flex-col self-center">
            <div className="flex w-full lg:w-28 mt-4 ml-auto">
              <button onClick={handleClick} className="button">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#1B1F25] m-6 rounded-2xl overflow-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-64 p-4">
            <p className="label">Search</p>
            <input
              type="text"
              className="input"
              placeholder="Search"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handlerFilterList(e);
              }}
            />
          </div>
          <div className="custom-select flex flex-col w-full lg:w-64 p-4">
            <p className="label">Status</p>
            <select
              ref={statusRef}
              className="input pb-2"
              onChange={() => {
                if (
                  statusRef.current != null &&
                  statusRef.current.value !== 'all'
                ) {
                  searchOnTable('logsTableBody', statusRef.current.value, true);
                  return;
                }
                searchOnTable('logsTableBody', '', false);
              }}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="finished">Finished</option>
              <option value="dispatched">Dispatched</option>
            </select>
          </div>
        </div>
        {isLoading ? <LoadingLogo /> : <TableLogs logs={logs} />}
      </div>
      <div className="flex justify-end">
        <button className="button w-32 m-6 mt-0">Reprocess</button>
      </div>
    </div>
  );
};

export default LogsList;
