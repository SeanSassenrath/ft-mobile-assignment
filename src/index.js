import React from 'react';
import { render } from 'react-dom';
import { observable } from 'mobx';
import axios from 'axios';
import App from './components/App/App.js';
import { ItemObservable } from './observables/item-observable.js';

const items = observable([]);

axios.get('http://fairthreads-api.herokuapp.com/admin/product-list', {
  params: {
    gender: 'womens',
    category: 'dresses',
    stylistPick: false
  }
}).then((res) => {
  console.log('response', res);
}).catch((error) => {
  console.log(error)
})


render(
  <App />,
  document.getElementById('App')
);
