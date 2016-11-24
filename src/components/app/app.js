import React, { Component, PropTypes } from 'react';
import Nav from '../nav/nav.js';
import Devtools from 'mobx-react-devtools';
import ProductPreview from '../product-preview/product-preview';
import OptionGrid from '../option-grid/option-grid';
import OptionRow from '../option-row/option-row';
import CSSModules from 'react-css-modules';
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
    )
  }
}

export default CSSModules(App, styles)
