import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header.component';
import { describe, expect, it } from 'vitest';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector('.w-full');

    expect(headerElement).toBeInTheDocument();

    expect(headerElement).toHaveClass('w-full');
  });
});
