import { render } from '@testing-library/react';
import LoadingLogo from './loading-logo.component';
import { describe, expect, it } from 'vitest';

describe('LoadingLogo Component', () => {
  it('renders correctly', () => {
    const { container } = render(<LoadingLogo />);
    const logoElement = container.querySelector('.loading-logo');

    // Verifique se o componente foi renderizado
    expect(logoElement).toBeInTheDocument();

    // Verifique se o elemento possui a classe loading-logo
    expect(logoElement).toHaveClass('loading-logo');
  });
});
