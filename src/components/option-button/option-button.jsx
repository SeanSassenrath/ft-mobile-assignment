import React, { Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './option-button.css';

class OptionButton extends Component {
  render() {
    return (
      <div styleName="container">
        Test
      </div>
    );
  }
}

export default CSSModules(OptionButton, styles);
