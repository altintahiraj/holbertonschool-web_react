import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login.jsx";

describe("Login component", () => {
  test("renders 2 labels, 2 inputs, and 1 button", () => {
    const { container } = render(<Login />);

    expect(container.querySelectorAll("label")).toHaveLength(2);
    expect(container.querySelectorAll("input")).toHaveLength(2);
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });

  test("focuses inputs when their labels are clicked", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const emailLabel = screen.getByText(/email/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();

    await user.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
  });
});
