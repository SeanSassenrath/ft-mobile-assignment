import { observable, action, computed } from 'mobx';
import axios from 'axios';
import ItemStore from './item-store.js';

export default class ItemsStore {

  @observable items = [];
  @observable currentItem = 0;
  @observable gender = 'womens';
  @observable category = null;
  @observable loading = true;

  constructor() {
    this.getItems();
    this.currentItem = 0;
  }


  @computed get productImage() {
    if (this.items.length > 1) {
      return this.items[this.currentItem].image;
    }
    return null;
  }

  @computed get productObjectFit() {
    if (this.items.length > 1) {
      return this.items[this.currentItem].objectFit;
    }
    return null;
  }

  @computed get regularPrice() {
    if (this.items.length > 1) {
      return `$${this.items[this.currentItem].price}`;
    }
    return null;
  }

  @computed get salePrice() {
    if (this.items.length > 1) {
      return this.items[this.currentItem].salePrice;
    }
    return null;
  }

  @computed get brand() {
    if (this.items.length > 1) {
      return this.items[this.currentItem].brand;
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

  @action setGender() {
    const item = this.items[this.currentItem];
    if (item.gender === 'mens') {
      item.gender = 'womens';
    } else {
      item.gender = 'mens';
    }
  }

  @action setObjectFit() {
    const item = this.items[this.currentItem];
    if (item.objectFit === 'contain') {
      item.objectFit = 'cover';
    } else {
      item.objectFit = 'contain';
    }
  }

  @action setFeatured() {
    const item = this.items[this.currentItem];
    return !item.featured;
  }

  @action save(category) {
    const item = this.items[this.currentItem];
    const now = new Date();
    item.active = true;
    item.activeTimeStamp = now;
    item.category = category;
    console.log('item', item);
    axios({
      method: 'PUT',
      url: 'http://fairthreads-api.herokuapp.com/admin/product-lists/edit',
      data: {
        data: {
          active: item.active,
          activeTimeStamp: item.activeTimeStamp,
          category: item.category,
          gender: item.gender,
          id: item.id,
          name: item.name,
          objectFit: item.objectFit,
          stylistPick: item.featured
        }
      }
    }).then(action((res) => {
      console.log('response', res);
      this.currentItem = this.currentItem + 1;
    }));
  }

  @action delete() {
    axios({
      method: 'PUT',
      url: 'http://fairthreads-api.herokuapp.com/admin/product-lists/delete',
      data: {
        id: this.items[this.currentItem].id
      }
    }).then(action((res) => {
      console.log('response', res);
      this.currentItem = this.currentItem + 1;
    }));
  }
}
