import { render, screen } from "@testing-library/react";
import Footer from "./Footer.jsx";

describe("Footer component", () => {
  test("renders the correct copyright string", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        `Copyright ${new Date().getFullYear()} - Holberton School`
      )
    ).toBeInTheDocument();
  });
});
