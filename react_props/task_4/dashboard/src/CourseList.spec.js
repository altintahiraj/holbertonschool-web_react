import { render } from "@testing-library/react";
import CourseList from "./CourseList/CourseList.jsx";

const courses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component", () => {
  test("renders 5 rows when it receives course data", () => {
    const { container } = render(<CourseList courses={courses} />);

    expect(container.querySelectorAll("tr")).toHaveLength(5);
  });

  test("renders 1 body row when it receives an empty array", () => {
    const { container } = render(<CourseList courses={[]} />);

    expect(container.querySelectorAll("tbody tr")).toHaveLength(1);
  });
});
