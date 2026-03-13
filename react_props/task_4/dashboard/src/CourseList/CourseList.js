import { createElement } from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow.js";

function CourseList({ courses = [] }) {
  const bodyRows =
    courses.length === 0
      ? createElement(CourseListRow, { textFirstCell: "No course available yet" })
      : courses.map((course) =>
          createElement(CourseListRow, {
            key: course.id,
            textFirstCell: course.name,
            textSecondCell: course.credit,
          })
        );

  return createElement(
    "table",
    { id: "CourseList" },
    createElement(
      "thead",
      null,
      createElement(CourseListRow, {
        isHeader: true,
        textFirstCell: "Available courses",
      }),
      createElement(CourseListRow, {
        isHeader: true,
        textFirstCell: "Course name",
        textSecondCell: "Credit",
      })
    ),
    createElement("tbody", null, bodyRows)
  );
}

export default CourseList;
