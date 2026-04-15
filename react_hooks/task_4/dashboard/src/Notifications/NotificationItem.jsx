import { memo } from "react";
import PropTypes from "prop-types";

const NotificationItem = memo(function NotificationItem({
  id = 0,
  type = "default",
  value = "",
  html = null,
  markAsRead = () => {},
}) {
  const style = {
    color: type === "urgent" ? "red" : "blue",
  };

  const handleClick = () => {
    markAsRead(id);
  };

  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
        style={style}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      onClick={handleClick}
      style={style}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.oneOf(["default", "urgent"]),
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

export default NotificationItem;
