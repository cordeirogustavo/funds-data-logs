import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableLogs from './table-logs.component';
import { describe, expect, it } from 'vitest';

describe('TableLogs Component', () => {
  it('Deve renderizar corretamente quando logs são fornecidos', () => {
    const logs = [
      {
        id: '1',
        date: '2024-02-06',
        cnpj: '12345678901234',
        description: 'Teste de descrição',
        status: 'Pending',
      },
      {
        id: '2',
        date: '2024-02-07',
        cnpj: '56789012345678',
        description: 'Outro teste',
        status: 'Completed',
      },
    ];

    const { getByText, getAllByRole } = render(<TableLogs logs={logs} />);

    expect(getByText('External id')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('CNPJ')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Reprocess')).toBeInTheDocument();

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2024-02-06')).toBeInTheDocument();
    expect(getByText('12345678901234')).toBeInTheDocument();
    expect(getByText('Teste de descrição')).toBeInTheDocument();
    expect(getByText('Pending')).toBeInTheDocument();

    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes.length).toBe(1);
  });

  it('Deve renderizar corretamente quando não há logs fornecidos', () => {
    const { getByText } = render(<TableLogs logs={[]} />);
    expect(getByText('No logs available')).toBeInTheDocument();
  });

  it('Deve renderizar corretamente quando logs são undefined', () => {
    const { getByText } = render(<TableLogs logs={undefined} />);
    expect(getByText('No logs available')).toBeInTheDocument();
  });

  it('Deve renderizar corretamente quando logs são null', () => {
    const { getByText } = render(<TableLogs logs={null} />);
    expect(getByText('No logs available')).toBeInTheDocument();
  });
});
