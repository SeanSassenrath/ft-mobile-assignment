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
          <p styleName="info">{items.brand}</p>
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
          <p styleName="info">{items.regularPrice}</p>
          <p styleName="info">{items.salePrice}</p>
        </div>
      </div>
    );
  }
}

export default CSSModules(ProductPreview, styles);
