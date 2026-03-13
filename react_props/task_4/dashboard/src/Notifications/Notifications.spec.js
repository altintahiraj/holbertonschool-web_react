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
  test("renders notification items from the notifications prop", () => {
    render(<Notifications notifications={notifications} />);

    const notificationTitle = screen.getByText(
      /here is the list of notifications/i
    );
    expect(notificationTitle).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(screen.getByText(/test notification 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test notification 2/i)).toBeInTheDocument();
    expect(screen.getByText(/test notification 3/i)).toBeInTheDocument();
  });

  test("logs when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications notifications={notifications} />);

    const closeButton = screen.getByRole("button", { name: /close/i });

    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});
