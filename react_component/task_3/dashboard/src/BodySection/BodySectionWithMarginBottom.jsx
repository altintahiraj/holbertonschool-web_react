import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="bodySectionWithMargin">
        <BodySection title={title}>
          {children}
        </BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

export default BodySectionWithMarginBottom;