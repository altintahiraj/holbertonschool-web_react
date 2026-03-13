import "./Notifications.css";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem.js";

function Notifications({ notifications = [] }) {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="notifications">
      <button
        type="button"
        style={{ position: "absolute", top: "15px", right: "20px" }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img
          src={closeIcon}
          alt="close"
          style={{ width: "10px", height: "10px" }}
        />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
