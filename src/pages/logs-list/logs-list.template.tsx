import { TableLogs } from './components';
import { type TLog } from './logs-type';
import './logs-list.css';
import React, { useRef, useState } from 'react';
import { searchOnTable } from '../../hooks/hooks';
import { fetcher } from 'services/fetcher';
import { LoadingLogo } from '@components';

const LogsList = () => {
  const statusRef = React.useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const [logs, setLogs] = React.useState<TLog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (statusRef.current != null) {
      statusRef.current.value = 'all';
    }
    if (dateRef.current != null) {
      dateRef.current.value = new Date().toISOString().split('T')[0];
    }
  }, []);
  // const endDate = '2023-12-06';
  const cnpj = '40751130000180';

  const handleClick = async () => {
    setIsLoading(true);
    console.log('dateRef', dateRef.current?.value);
    console.log('idRef', idRef.current?.value);
    try {
      const response = await fetcher('cnpj', { cnpj });
      const data = await response;
      setLogs(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  function recebeEventoDoFiltro(e: React.ChangeEvent<HTMLInputElement>) {
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
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <div className="flex flex-col">
              <p className="label">External id</p>
              <input type="tel" ref={idRef} className="input" />
            </div>
            <div className="flex flex-col">
              <p className="label">CNPJ</p>
              <input type="tel" ref={idRef} className="input" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0.5 lg:space-x-4">
              <div className="flex flex-col">
                <p className="label">Date</p>
                <input
                  data-testid="Date"
                  type="date"
                  ref={dateRef}
                  className="input p-0.5"
                />
              </div>
            </div>
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
                recebeEventoDoFiltro(e);
                // searchOnTable('logsTableBody', e.target.value, false);
              }}
            />
          </div>
          <div className="flex flex-col w-full lg:w-64 p-4">
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
