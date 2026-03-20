import React, { PureComponent } from "react";

class NotificationItem extends PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;

    const style = {
      color: type === "urgent" ? "red" : "blue",
    };

    if (html) {
      return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
          style={style}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        style={style}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  id: 0,
  type: "default",
  value: "",
  html: null,
  markAsRead: () => {},
};

export default NotificationItem;
