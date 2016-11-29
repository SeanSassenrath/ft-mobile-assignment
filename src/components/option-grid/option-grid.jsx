import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import OptionRow from '../option-row/option-row.jsx';
import OptionButton from '../option-button/option-button.jsx';
import styles from './option-grid.css';

@observer
class OptionGrid extends Component {

  static propTypes = {
    items: PropTypes.object
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <OptionRow>
          <OptionButton>Gender</OptionButton>
          <OptionButton>ObjectFit</OptionButton>
          <OptionButton>Featured</OptionButton>
          <OptionButton onClick={() => items.delete()}>Delete</OptionButton>
        </OptionRow>
      </div>
    );
  }
}

export default CSSModules(OptionGrid, styles);
