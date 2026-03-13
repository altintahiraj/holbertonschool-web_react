import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

describe("Notifications component", () => {
  test("renders the notifications list and handles close button click", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications />);

    const notificationTitle = screen.getByText("Here is the list of notifications");
    expect(notificationTitle).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(closeButton).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});