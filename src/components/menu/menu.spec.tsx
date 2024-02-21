import { render } from '@testing-library/react';
import Menu from './menu.component';
import { describe, expect, it } from 'vitest';

describe('Menu Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Menu />);

    const fundsDataText = getByText('Funds Data');
    expect(fundsDataText).toBeInTheDocument();

    const logsText = getByText('Logs');
    expect(logsText).toBeInTheDocument();
  });
});
