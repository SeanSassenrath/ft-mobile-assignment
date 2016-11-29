import React, { Component, PropTypes } from 'react';
import Devtools from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import Nav from '../nav/nav.jsx';
import ProductPreview from '../product-preview/product-preview.jsx';
import OptionGrid from '../option-grid/option-grid.jsx';
import OptionRow from '../option-row/option-row.jsx';
import styles from './app.css';

@observer
class App extends Component {

  static propTypes = {
    items: PropTypes.object
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <Devtools />
        <Nav items={items} />
        <ProductPreview items={items} />
        <OptionGrid items={items} />
      </div>
    );
  }
}

export default CSSModules(App, styles);
