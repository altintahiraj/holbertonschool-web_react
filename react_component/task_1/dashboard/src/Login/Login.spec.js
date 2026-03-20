import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('Login renders without crashing', () => {
  render(<Login />);
});

test('Login includes 2 labels, 2 inputs, and 1 button', () => {
  const { container } = render(<Login />);
  expect(container.querySelectorAll('label')).toHaveLength(2);
  expect(container.querySelectorAll('input')).toHaveLength(2);
  expect(container.querySelectorAll('button')).toHaveLength(1);
});

test('inputs get focused when related label is clicked', async () => {
  const user = userEvent.setup();
  render(<Login />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);

  await user.click(screen.getByText(/email/i));
  expect(emailInput).toHaveFocus();

  await user.click(screen.getByText(/password/i));
  expect(passwordInput).toHaveFocus();
});