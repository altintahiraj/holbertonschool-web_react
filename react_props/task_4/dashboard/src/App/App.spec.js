import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the Login component when isLoggedIn is false", () => {
    render(<App isLoggedIn={false} />);

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  test("renders the CourseList component when isLoggedIn is true", () => {
    render(<App isLoggedIn />);

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /available courses/i })
    ).toBeInTheDocument();
    expect(screen.queryByText(/login to access the full dashboard/i)).not.toBeInTheDocument();
  });
});
