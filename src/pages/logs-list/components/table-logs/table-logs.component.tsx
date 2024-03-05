import { useEffect } from 'react';
import { type TLog } from '../../logs-type';
import '../table.css';

interface TableLogProps {
  logs: TLog[];
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const TableLogs = ({ logs, selectedIds, setSelectedIds }: TableLogProps) => {
  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setSelectedIds((prevIds: string[]) => {
      if (isChecked) {
        return [...prevIds, id];
      } else {
        return prevIds.filter((prevId) => prevId !== id);
      }
    });
  };
  useEffect(() => {
    console.log(selectedIds);
  }, [selectedIds]);

  return (
    <table className="w-full">
      <thead className="h-14 shadow-2xl">
        <tr>
          <th className="table-th">External id</th>
          <th className="table-th">Date</th>
          <th className="table-th">CNPJ</th>
          <th className="table-th">Description</th>
          <th className="table-th">Status</th>
          <th className="table-th text-center">Reprocess</th>
        </tr>
      </thead>
      <tbody id="logsTableBody">
        {logs !== undefined && logs?.length > 0 ? (
          logs.map((log: TLog) => (
            <tr key={log.id} className="table-tr">
              <td className="table-td">{log.id}</td>
              <td className="table-td">{log.date}</td>
              <td className="table-td">{log.cnpj}</td>
              <td className="table-td">{log.description}</td>
              <td className={`table-td ${log.status}`}>{log.status}</td>
              <td className="table-td flex justify-center">
                {log.status === 'Pending' && (
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedIds.includes(log.id)}
                    onChange={(e) => {
                      handleCheckboxChange(log.id, e.target.checked);
                    }}
                  />
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="table-td text-center">
              No logs available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableLogs;
