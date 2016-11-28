import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import OptionRow from '../option-row/option-row.jsx';
import OptionButton from '../option-button/option-button.jsx';
import styles from './option-grid.css';

class OptionGrid extends Component {

  render() {
    return (
      <div>
        <OptionRow>
          <OptionButton>Gender</OptionButton>
          <OptionButton>ObjectFit</OptionButton>
          <OptionButton>Featured</OptionButton>
          <OptionButton>Delete</OptionButton>
        </OptionRow>
      </div>
    );
  }
}

export default CSSModules(OptionGrid, styles);
