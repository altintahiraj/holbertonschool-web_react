import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
  ];

  it('renders "Your notifications" text in all cases', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.notification-title').text()).toBe('Your notifications');
  });

  describe('when displayDrawer is false', () => {
    it('does not display the close button', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('button')).toHaveLength(0);
    });

    it('does not display the p element', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('p')).toHaveLength(0);
    });

    it('does not display notification items', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} notifications={notificationsList} />);
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
    });

    it('still displays "Your notifications" text', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.notification-title').text()).toBe('Your notifications');
    });
  });

  describe('when displayDrawer is true', () => {
    it('displays the close button', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} notifications={notificationsList} />);
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('displays the p element with correct text', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} notifications={notificationsList} />);
      expect(wrapper.find('p').first().text()).toBe('Here is the list of notifications');
    });

    it('displays notification items', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} notifications={notificationsList} />);
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('still displays "Your notifications" text', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} notifications={notificationsList} />);
      expect(wrapper.find('.notification-title').text()).toBe('Your notifications');
    });
  });

  describe('when displayDrawer is true and notifications is empty', () => {
    it('displays "No new notification for now"', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} notifications={[]} />);
      expect(wrapper.find('p').someWhere(n => n.text() === 'No new notification for now')).toBe(true);
    });

    it('still displays "Your notifications" text', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} notifications={[]} />);
      expect(wrapper.find('.notification-title').text()).toBe('Your notifications');
    });
  });

  describe('markAsRead', () => {
    it('logs "Notification {id} has been marked as read" when a NotificationItem is clicked', () => {
      const consoleMock = jest.spyOn(console, 'log').mockImplementation(() => {});

      const wrapper = shallow(
        <Notifications displayDrawer={true} notifications={notificationsList} />
      );

      wrapper.find(NotificationItem).at(1).prop('markAsRead')(2);

      expect(consoleMock).toHaveBeenCalledWith('Notification 2 has been marked as read');

      consoleMock.mockRestore();
    });
  });
});