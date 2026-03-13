import "./Notifications.css";
import closeButton from "./assets/close-button.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="notification-items">
      <button
        type="button"
        aria-label="Close"
        style={{
          background: "transparent",
          position: "absolute",
          right: "10px",
          top: "10px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <img
          src={closeButton}
          alt="close"
          style={{ width: "10px", height: "10px" }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
