import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders portfolio branding', () => {
    render(<App />);
    expect(screen.getByText(/Brandon \(Sharp\)/i)).toBeInTheDocument();
  });
});
