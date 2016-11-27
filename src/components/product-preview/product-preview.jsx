import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './product-preview.css';

class ProductPreview extends Component {

  render() {
    return (
      <div styleName="container">
        <div styleName="info-container">
          <p styleName="info">Featured: 34</p>
          <p styleName="info">Unassigned: 1,200</p>
        </div>
        <div styleName="product-container">
          <div styleName="product" />
        </div>
        <div styleName="price-container">
          <p styleName="info">Regular: $340</p>
          <p styleName="info">Sale: $150</p>
        </div>
      </div>
    );
  }
}

export default CSSModules(ProductPreview, styles);
