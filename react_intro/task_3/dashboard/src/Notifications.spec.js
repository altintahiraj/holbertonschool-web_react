import { fireEvent, render, screen } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

describe("Notifications component", () => {
  test("renders all required notifications elements ignoring case", () => {
    render(<Notifications />);

    const notificationTitle = screen.getByText(
      /here is the list of notifications/i
    );
    const closeButton = screen.getByRole("button", { name: /close/i });
    const closeIcon = screen.getByRole("img", { name: /close icon/i });
    const notificationList = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(notificationTitle).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
    expect(notificationList).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
    expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
    expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
    expect(screen.getByText(/complete by eod/i)).toBeInTheDocument();
    expect(listItems[0]).toHaveAttribute("data-priority", "default");
    expect(listItems[1]).toHaveAttribute("data-priority", "urgent");
    expect(listItems[2]).toHaveAttribute("data-priority", "urgent");
  });

  test("renders the notifications title", () => {
    render(<Notifications />);

    const notificationTitle = screen.getByText(
      /here is the list of notifications/i
    );
    expect(notificationTitle).toBeInTheDocument();
  });

  test("renders the close button", () => {
    render(<Notifications />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("renders 3 list items", () => {
    render(<Notifications />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("logs when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});
