import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

function runTests() {
  try {
    // Test default type
    const wrapperDefault = shallow(
      <NotificationItem type="default" value="test notification" />
    );
    const liDefault = wrapperDefault.find('li');
    if (
      liDefault.prop('data-notification-type') !== 'default' ||
      liDefault.prop('style').color !== 'blue'
    ) {
      throw new Error('Default type test failed');
    }

    // Test urgent type
    const wrapperUrgent = shallow(
      <NotificationItem type="urgent" value="test notification" />
    );
    const liUrgent = wrapperUrgent.find('li');
    if (
      liUrgent.prop('data-notification-type') !== 'urgent' ||
      liUrgent.prop('style').color !== 'red'
    ) {
      throw new Error('Urgent type test failed');
    }

    console.log('OK'); // Must log OK to pass the expected output
  } catch (err) {
    console.log('NOK'); // Log NOK if any test fails
  }
}

runTests();