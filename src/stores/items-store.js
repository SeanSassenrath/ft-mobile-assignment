import { observable, action, computed } from 'mobx';
import axios from 'axios';
import ItemStore from './item-store.js';

export default class ItemsStore {

  @observable items = [];
  @observable gender = 'womens';
  @observable category = null;
  @observable loading = true;

  constructor() {
    this.getItems();
  }

  @computed get productImage() {
    if (this.items.length > 1) {
      return this.items[0].image;
    }
    return null;
  }

  @computed get productObjectFit() {
    if (this.items.length > 1) {
      return this.items[0].objectFit;
    }
    return null;
  }

  @computed get regularPrice() {
    if (this.items.length > 1) {
      return `$${this.items[0].price}`;
    }
    return null;
  }

  @computed get salePrice() {
    if (this.items.length > 1) {
      return this.items[0].salePrice;
    }
    return null;
  }

  @computed get brand() {
    if (this.items.length > 1) {
      return this.items[0].brand;
    }
    return null;
  }

  @action getItems() {
    axios.get('http://fairthreads-api.herokuapp.com/admin/product-list', {
      params: {
        active: false,
        gender: this.gender,
      }
    })
    .then((res) => {
      console.log('response', res);
      this.items = [];
      return res.data;
    })
    .then((products) => {
      console.log('products', products)
      products.forEach((product) => {
        this.items.push(new ItemStore(product));
      });
      this.loading = false;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  @action fetchByGender(gender) {
    this.gender = gender;
    this.getItems();
  }

  @action fetchByCategory(category) {
    this.category = category;
    this.getItems();
  }
}
