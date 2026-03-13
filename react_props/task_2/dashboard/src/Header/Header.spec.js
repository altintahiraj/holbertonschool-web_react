import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

describe("Header component", () => {
  test("renders the Holberton logo", () => {
    render(<Header />);

    expect(
      screen.getByRole("img", { name: /holberton logo/i })
    ).toBeInTheDocument();
  });

  test("renders the h1 heading with the correct text", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
  });
});
