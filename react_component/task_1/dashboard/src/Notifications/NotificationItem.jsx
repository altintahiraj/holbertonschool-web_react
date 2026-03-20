import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value = '', html = null }) {
  const color = type === 'urgent' ? 'red' : 'blue';

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={{ color }}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      style={{ color }}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

export default NotificationItem;