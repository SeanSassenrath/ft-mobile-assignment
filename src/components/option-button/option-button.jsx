import React, { Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './option-button.css';

class OptionButton extends Component {

  static propTypes = {
    children: PropTypes.string
  }

  render() {
    return (
      <div styleName="container" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(OptionButton, styles);
