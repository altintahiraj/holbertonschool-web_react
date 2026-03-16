import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the dashboard layout', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /holberton logo/i })).toBeInTheDocument();
  });

  test('renders the sign in form', () => {
    render(<App />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});
