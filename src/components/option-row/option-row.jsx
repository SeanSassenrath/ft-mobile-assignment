import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './option-row.css';

class OptionRow extends Component {

  static propTypes = {
    children: PropTypes.array
  }

  render() {
    return (
      <div styleName="container">
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(OptionRow, styles);
