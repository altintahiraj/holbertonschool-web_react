import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main dashboard shell", () => {
    render(<App />);

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /holberton logo/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
});
