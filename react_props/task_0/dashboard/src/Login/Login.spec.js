import { render } from "@testing-library/react";
import Login from "./Login.jsx";

test("renders Login without crashing", () => {
  render(<Login />);
});
