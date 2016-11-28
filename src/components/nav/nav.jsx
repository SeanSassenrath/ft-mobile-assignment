import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import styles from './nav.css';

@observer
class Nav extends Component {

  static propTypes = {
    items: PropTypes.object
  }

  render() {
    const { items } = this.props;
    return (
      <div styleName="container">
        <div>Menu</div>
        <div>
          <button styleName="gender" onClick={() => items.fetchByGender('womens')}>Womens</button>
          <button styleName="gender" onClick={() => items.fetchByGender('mens')}>Men</button>
        </div>
      </div>
    );
  }
}

export default CSSModules(Nav, styles);
