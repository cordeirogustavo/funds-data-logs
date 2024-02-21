import { render } from '@testing-library/react';
import LoadingSpinner from './loading-spinner.component';
import { describe, expect, it } from 'vitest';

describe('LoadingSpinner Component', () => {
  it('renders correctly', () => {
    const { container } = render(<LoadingSpinner />);
    const spinnerElement = container.querySelector('.loading-spinner');

    // Verifique se o componente foi renderizado
    expect(spinnerElement).toBeInTheDocument();

    // Verifique se o elemento possui a classe loading-spinner
    expect(spinnerElement).toHaveClass('loading-spinner');
  });
});
