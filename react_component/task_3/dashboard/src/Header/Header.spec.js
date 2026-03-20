import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header renders without crashing', () => {
  render(<Header />);
});

test('Header contains the Holberton logo', () => {
  render(<Header />);
  const logo = screen.getByAltText(/holberton logo/i);
  expect(logo).toBeInTheDocument();
});

test('Header contains h1 with correct text', () => {
  render(<Header />);
  const heading = screen.getByRole('heading', { name: /School dashboard/i });
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H1'); // safe uppercase check
});