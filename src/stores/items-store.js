import { observable, action, computed } from 'mobx';
import axios from 'axios';

export default class ItemsStore {

  @observable items = [];
  @observable gender = 'womens';

  constructor() {
    this.getItems();
  }

  @action getItems() {
    axios.get('http://fairthreads-api.herokuapp.com/admin/product-list', {
      params: {
        gender: this.gender,
        category: 'dresses',
        stylistPick: false
      }
    }).then((res) => {
      console.log('response', res);
    }).catch((error) => {
      console.log(error);
    });
  }

  @action setGender(gender) {
    this.gender = gender;
  }
}
