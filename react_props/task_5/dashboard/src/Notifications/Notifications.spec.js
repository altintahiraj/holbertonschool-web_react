import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications.js";

const notifications = [
  { id: 1, type: "default", value: "Test notification 1" },
  { id: 2, type: "urgent", value: "Test notification 2" },
  {
    id: 3,
    type: "urgent",
    html: { __html: "<strong>Test notification 3</strong>" },
    value: "",
  },
];

describe("Notifications component", () => {
  test("always displays the notifications title", () => {
    render(<Notifications />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test("does not display drawer content when displayDrawer is false", () => {
    render(<Notifications notifications={notifications} />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/here is the list of notifications/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  test("displays drawer content when displayDrawer is true", () => {
    render(<Notifications displayDrawer notifications={notifications} />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByText(/test notification 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test notification 2/i)).toBeInTheDocument();
    expect(screen.getByText(/test notification 3/i)).toBeInTheDocument();
  });

  test("displays an empty state when displayDrawer is true and notifications is empty", () => {
    render(<Notifications displayDrawer notifications={[]} />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/here is the list of notifications/i)
    ).not.toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  test("logs when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications displayDrawer notifications={notifications} />);

    const closeButton = screen.getByRole("button", { name: /close/i });

    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});
