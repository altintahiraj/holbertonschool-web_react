import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  describe('when isHeader is true', () => {
    it('renders one th with colspan=2 when textSecondCell is null', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="First" />
      );
      const th = wrapper.find('th');
      expect(th).toHaveLength(1);
      expect(th.prop('colSpan')).toBe(2);
    });

    it('renders two th elements when textSecondCell is not null', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
      );
      expect(wrapper.find('th')).toHaveLength(2);
    });
  });

  describe('when isHeader is false', () => {
    it('renders two td elements within a tr element', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />
      );
      expect(wrapper.find('tr')).toHaveLength(1);
      expect(wrapper.find('td')).toHaveLength(2);
    });
  });
});