import React from 'react';
import { render } from 'react-dom';
// import { observable } from 'mobx';
// import axios from 'axios';
import App from './components/app/app.jsx';
import ItemsStore from './stores/items-store.js';

const x = new ItemsStore();

/* eslint-disable no-undef */
render(
  <App />,
  document.getElementById('app')
);
