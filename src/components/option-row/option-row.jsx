import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './option-row.css';

class OptionRow extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(OptionRow, styles);
