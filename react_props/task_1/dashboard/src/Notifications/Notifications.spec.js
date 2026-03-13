import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

describe("Notifications component", () => {
  test("renders the notifications list and handles close button click", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications />);

    const notificationTitle = screen.getByText(
      /here is the list of notifications/i
    );
    expect(notificationTitle).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});
