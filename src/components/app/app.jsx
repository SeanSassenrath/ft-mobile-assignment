import React, { Component, PropTypes } from 'react';
import Devtools from 'mobx-react-devtools';
import CSSModules from 'react-css-modules';
import Nav from '../nav/nav.jsx';
import ProductPreview from '../product-preview/product-preview.jsx';
import OptionGrid from '../option-grid/option-grid.jsx';
import OptionRow from '../option-row/option-row.jsx';
import styles from './app.css';

class App extends Component {

  render() {
    return (
      <div>
        <Devtools />
        <Nav />
        <ProductPreview />
        <OptionGrid />
      </div>
    );
  }
}

export default CSSModules(App, styles);
