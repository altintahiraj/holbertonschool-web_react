import { fireEvent, render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {

  test("renders the notifications content", () => {
    render(<Notifications />);

    const text = screen.getByText(/here is the list of notifications/i);
    expect(text).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    expect(listItems[0]).toHaveAttribute("data-priority", "default");
    expect(listItems[1]).toHaveAttribute("data-priority", "urgent");
    expect(listItems[2]).toHaveAttribute("data-priority", "urgent");
  });

  test("logs when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });

});