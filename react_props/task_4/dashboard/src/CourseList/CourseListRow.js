import { createElement } from "react";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  if (isHeader) {
    if (textSecondCell === null) {
      return createElement(
        "tr",
        null,
        createElement("th", { colSpan: 2 }, textFirstCell)
      );
    }

    return createElement(
      "tr",
      null,
      createElement("th", null, textFirstCell),
      createElement("th", null, textSecondCell)
    );
  }

  return createElement(
    "tr",
    null,
    createElement("td", null, textFirstCell),
    createElement("td", null, textSecondCell)
  );
}

export default CourseListRow;
