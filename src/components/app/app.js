import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.css';
import Nav from '../nav/nav.js';
import ProductPreview from '../product-preview/product-preview';
import OptionGrid from '../option-grid/option-grid';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <ProductPreview />
        <OptionGrid />
      </div>
    )
  }
}

export default CSSModules(App, styles)
