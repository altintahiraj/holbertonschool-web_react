import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('renders a heading with the title prop value', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test</p></BodySection>);
    expect(wrapper.find('h2').text()).toBe('test title');
  });

  it('renders children passed to it', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>first child</p>
        <p>second child</p>
      </BodySection>
    );
    expect(wrapper.find('p')).toHaveLength(2);
    expect(wrapper.find('p').first().text()).toBe('first child');
    expect(wrapper.find('p').last().text()).toBe('second child');
  });

  it('renders a div with class bodySection', () => {
    const wrapper = shallow(<BodySection title="test"><p>test</p></BodySection>);
    expect(wrapper.find('.bodySection')).toHaveLength(1);
  });
});