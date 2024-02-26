import { render, screen } from '@testing-library/react';
import { describe, expect, it, test, vi } from 'vitest';
import { PageListComponent } from '.';
import axios from 'axios';

describe('PageListComponent', () => {
  it('should render the loading logo initially', () => {
    render(<PageListComponent />);

    const loadingLogo = screen.getByRole('img', { name: /Loading/i });
    expect(loadingLogo).toBeInTheDocument();
  });

  it('should fetch logs on mount and render LogsList component', async () => {
    vi.spyOn(axios, 'get').mockResolvedValue(async () => {
      return await Promise.resolve({ data: [] });
    });
    render(<PageListComponent />);

    await screen.findByText(/Logs/i);
  });
});
test('renders the api results', async () => {

  vi.spyOn(axios, 'get').mockImplementation(async () => {
    return await Promise.resolve({ data: [] });
  });
  render(<PageListComponent />);
  await screen.findByText(/Logs/i);
});
