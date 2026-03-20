import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('renders 5 rows when courses array is provided', () => {
    const wrapper = shallow(<CourseList courses={coursesList} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('renders 1 row when courses array is empty', () => {
    const wrapper = shallow(<CourseList courses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });
});