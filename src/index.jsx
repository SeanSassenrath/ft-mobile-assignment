import React from 'react';
import { render } from 'react-dom';
import { observable, Provider } from 'mobx-react';
// import axios from 'axios';
import App from './components/app/app.jsx';
import ItemsStore from './stores/items-store.js';

const itemsStore = new ItemsStore();

/* eslint-disable no-undef */
render(
  <App items={itemsStore} />,
  document.getElementById('app')
);
