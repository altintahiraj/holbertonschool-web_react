import React from "react";

const NotificationItem = ({ id, type = "default", value, html, markAsRead }) => {
    const style = {
        color: type === "urgent" ? "red" : "blue",
    };

    return (
        <li
            data-notification-type={type}
            style={style}
            onClick={() => markAsRead && markAsRead(id)}  
        >
            {html ? <span dangerouslySetInnerHTML={html} /> : value}
        </li>
    );
};

export default NotificationItem;