import { observable, action, computed } from 'mobx';

export default class ItemStore {
  constructor(item) {
    this.brand = item.brand;
    this.gender = item.gender;
    this.id = item._id;
    this.image = item.imageOriginal;
    this.objectFit = item.objectFit;
    this.price = item.price;
    this.salePrice = item.salePrice;
  }

  @observable gender = 'womens';
  // @observable softDelete = false;
  // @observable category = item.category || null;
  // @observable objectFit = item.objectFit || null;
  // @observable featured = item.featured || null;
  // Do I need to add an 'active' field? Check backend API

  @action setGender(gender) {
    this.gender = gender;
  }

  // @computed get price() {
  //   return item.price;
  // }
  // @computed get salePrice() {
  //   return item.saleprice;
  // }
}
