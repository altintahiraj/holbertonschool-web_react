import { cleanup, render, screen } from '@testing-library/react';
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

  it('renders the Login component when not logged in', () => {
    render(<App />);
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<App />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  it('renders the Login section when isLoggedIn is false', () => {
    const { container } = render(<App />);
    const loginComponent = container.querySelector('.App-body');
    expect(loginComponent).toBeInTheDocument();
  });

  it('renders the CourseList when isLoggedIn is true', () => {
    const { container } = render(<App isLoggedIn={true} />);
    const courseList = container.querySelector('#CourseList');
    expect(courseList).toBeInTheDocument();
  });

  it('displays the News from the School section with correct content by default', () => {
    render(<App />);
    expect(screen.getByText(/News from the School/i)).toBeInTheDocument();
    expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
  });
});
