import './Notifications.css';
import closeIcon from './assets/close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
    return (
        <div className="notification-items">
            <button
                type="button"
                aria-label="Close"
                style={{
                    background: 'transparent',
                    border: 'none',
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    cursor: 'pointer',
                }}
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={closeIcon} alt="Close icon" width="10" />
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
