import { TableLogs } from './components';
import { type TLog } from './logs-type';
import './logs-list.css';
import React, { useRef } from 'react';
import { searchOnTable } from '../../hooks/hooks';
const LogsList: React.FC = () => {
  const statusRef = React.useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (statusRef.current != null) {
      statusRef.current.value = 'all';
    }
    if (dateRef.current != null) {
      dateRef.current.value = new Date().toISOString().split('T')[0];
    }
  }, []);
  function generateRandomLogsList(): TLog[] {
    const logsList = [];

    for (let i = 1; i <= 100; i++) {
      const log = {
        id: String(i),
        date: generateRandomDate(),
        cnpj: generateRandomCNPJ(),
        description: `Log ${i}`,
        status: i % 2 === 0 ? 'Pending' : 'Finished',
        reprocess: false,
      };

      logsList.push(log);
    }

    return logsList;
  }

  function generateRandomDate() {
    const year = Math.floor(Math.random() * 3) + 2022;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
  function generateRandomCNPJ() {
    const cnpj = Math.floor(Math.random() * 99999999999999);
    return String(cnpj).padStart(14, '0');
  }

  const logs = generateRandomLogsList();

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
              <button className="button">Filter</button>
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
                searchOnTable('logsTableBody', e.target.value, false);
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
        <TableLogs logs={logs} />
      </div>
      <div className="flex justify-end">
        <button className="button w-32 m-6 mt-0">Reprocess</button>
      </div>
    </div>
  );
};

export default LogsList;
