import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import styles from './product-preview.css';

@observer
class ProductPreview extends Component {

  static propTypes = {
    items: PropTypes.object
  }

  render() {
    const { items } = this.props;
    console.log(items.loading);
    return (
      <div styleName="container">
        <div styleName="info-container">
          <p styleName="info">Featured: 34</p>
          <p styleName="info">Unassigned: 1,200</p>
        </div>
        <div styleName="product-container">
          <div styleName="product">
            <img
              styleName="product-image"
              src={items.productImage}
              role="presentation"
              style={{ objectFit: items.productObjectFit }}
            />
          </div>
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
