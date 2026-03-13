import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow.jsx";

describe("CourseListRow component", () => {
  test("renders one column header with colspan 2 when second cell is null", () => {
    render(<table><tbody><CourseListRow isHeader textFirstCell="Header" /></tbody></table>);

    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(1);
    expect(headers[0]).toHaveAttribute("colspan", "2");
  });

  test("renders two th cells when isHeader is true and second cell exists", () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            isHeader
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </tbody>
      </table>
    );

    expect(screen.getAllByRole("columnheader")).toHaveLength(2);
  });

  test("renders two td cells when isHeader is false", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" />
        </tbody>
      </table>
    );

    expect(container.querySelectorAll("tr")).toHaveLength(1);
    expect(container.querySelectorAll("td")).toHaveLength(2);
  });
});
