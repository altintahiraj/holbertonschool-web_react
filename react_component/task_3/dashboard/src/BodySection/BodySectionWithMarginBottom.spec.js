import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

describe('BodySectionWithMarginBottom component', () => {
  it('renders a div with class bodySectionWithMargin', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('.bodySectionWithMargin')).toHaveLength(1);
  });

  it('renders the BodySection component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);
  });

  it('passes the title prop to BodySection', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).prop('title')).toBe('test title');
  });

  it('passes children to BodySection', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>child content</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).prop('children')).toBeTruthy();
  });
});