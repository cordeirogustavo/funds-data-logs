import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogsList from './logs-list.template';
import { describe, expect, it, vi } from 'vitest';
import { searchOnTable } from '../../hooks/hooks';

vi.mock('../../hooks/hooks', () => ({
  searchOnTable: vi.fn(),
}));

describe('LogsList Component', () => {
  it('should call searchOnTable with the correct parameters', async () => {
    render(<LogsList />);

    // Simula a mudança no input de busca
    const searchInput = screen.getByPlaceholderText('Search');
    await userEvent.type(searchInput, 'test');

    // Verifica a chamada de searchOnTable
    expect(searchOnTable).toHaveBeenCalledWith('logsTableBody', 'test', false);
  });
});

it('should filter by status', async () => {
  render(<LogsList />);

  // Seleciona um status
  await userEvent.selectOptions(screen.getByRole('combobox'), 'Pending');

  // Verifica como o filtro é aplicado
  const logs = screen.getAllByText(/Pending/i);
  expect(logs.length).toBeGreaterThan(0); // Supondo que existam logs Pending
});

it('should set default values on mount', () => {
  render(<LogsList />);

  expect(screen.getByRole('combobox')).toHaveValue('all');
  expect(screen.getByTestId('Date')).toHaveValue(
    new Date().toISOString().split('T')[0],
  );
});
