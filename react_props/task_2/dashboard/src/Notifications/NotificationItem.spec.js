import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem.js";

describe("NotificationItem component", () => {
  test("renders a default notification in blue", () => {
    render(<NotificationItem type="default" value="New course available" />);

    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveAttribute("data-notification-type", "default");
    expect(listItem).toHaveStyle({ color: "rgb(0, 0, 255)" });
  });

  test("renders an urgent notification in red", () => {
    render(<NotificationItem type="urgent" value="New resume available" />);

    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveAttribute("data-notification-type", "urgent");
    expect(listItem).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });
});
