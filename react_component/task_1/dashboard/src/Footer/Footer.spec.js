import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer renders without crashing', () => {
  render(<Footer />);
});

test('Footer renders correct copyright text when isIndex is true', () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const paragraph = screen.getByText(`Copyright ${currentYear} - Holberton School`);
  expect(paragraph).toBeInTheDocument();
});