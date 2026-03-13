import { render } from "@testing-library/react";
import Header from "./Header.jsx";

test("renders Header without crashing", () => {
  render(<Header />);
});
