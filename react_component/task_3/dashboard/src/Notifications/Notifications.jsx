import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeButton from '../assets/close-button.png';

class Notifications extends Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications = [], displayDrawer = false } = this.props;

    const handleClick = () => {
      console.log('Close button has been clicked');
    };

    return (
      <div className="Notifications">
        <div className="notification-title">Your notifications</div>
        {displayDrawer && (
          <div className="notification-items">
            <p>Here is the list of notifications</p>
            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <ul>
                {notifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    id={notif.id}
                    type={notif.type}
                    value={notif.value}
                    html={notif.html}
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            )}
            <button aria-label="Close" onClick={handleClick}>
              <img src={closeButton} alt="close" style={{ width: '13px', height: '10px' }} />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
};

export default Notifications;