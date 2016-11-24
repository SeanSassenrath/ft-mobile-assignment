import React, { Component, PropTypes } from 'react';
import OptionButton from '../option-button/option-button.js';
import CSSModules from 'react-css-modules';
import styles from './option-grid.css';

class OptionGrid extends Component {

  render() {
    return (
      <div styleName='test-container'>
        <OptionButton>Test</OptionButton>
        <OptionButton>Test</OptionButton>
        <OptionButton>Test</OptionButton>
        <OptionButton>Test</OptionButton>
        <OptionButton>Test</OptionButton>
        <OptionButton>Test</OptionButton>
      </div>
    )
  }
}

export default CSSModules(OptionGrid, styles)
