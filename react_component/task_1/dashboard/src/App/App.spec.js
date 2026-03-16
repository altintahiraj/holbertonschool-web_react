import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Header component', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the Login component', () => {
    render(<App />);
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<App />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  it('calls the logOut function once when Ctrl+H is pressed', async () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);

    await userEvent.keyboard('{Control>}h{/Control}');

    expect(logOut).toHaveBeenCalledTimes(1);
  });

  it('calls alert with Logging you out when Ctrl+H is pressed', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);

    await userEvent.keyboard('{Control>}h{/Control}');

    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  });
});
