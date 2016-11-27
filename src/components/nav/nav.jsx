import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './nav.css';

class Nav extends Component {

  render() {
    return (
      <div styleName='container'>
        <div>Menu</div>
        <div>
          <span styleName="gender">Women</span>
          <span styleName="gender">Men</span>
        </div>
      </div>
    );
  }
}

export default CSSModules(Nav, styles);
