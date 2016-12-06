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
          <OptionButton onClick={() => items.setGender()}>Gender</OptionButton>
          <OptionButton onClick={() => items.setObjectFit()}>ObjectFit</OptionButton>
          <OptionButton onClick={() => items.setFeatured()}>Featured</OptionButton>
          <OptionButton onClick={() => items.delete()}>Delete</OptionButton>
        </OptionRow>
        <OptionRow>
          <OptionButton onClick={() => items.save('underwear')}>Underwear</OptionButton>
          <OptionButton onClick={() => items.save('athleisure')}>Athleisure</OptionButton>
          <OptionButton onClick={() => items.save('shoes')}>Shoes</OptionButton>
          <OptionButton onClick={() => items.save('tops')}>Tops</OptionButton>
        </OptionRow>
        <OptionRow>
          <OptionButton onClick={() => items.save('dresses')}>{items.gender === 'womens' ? 'Dresses' : '-'}</OptionButton>
          <OptionButton onClick={() => items.save('outerwear')}>Outerwear</OptionButton>
          <OptionButton onClick={() => items.save('accessories')}>Accessories</OptionButton>
          <OptionButton onClick={() => items.save('bottoms')}>Bottoms</OptionButton>
        </OptionRow>
      </div>
    );
  }
}

export default CSSModules(OptionGrid, styles);
