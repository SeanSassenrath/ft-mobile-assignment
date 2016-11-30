import { observable } from 'mobx';

export default class ItemStore {

  @observable gender = 'womens';
  @observable softDelete = false;
  @observable objectFit = 'contain';
  @observable fairthreadsCategory = '';
  @observable featured = false;
  @observable active = false;
  // Do I need to add an 'active' field? Check backend API

  constructor(item) {
    this.brand = item.brand;
    this.gender = item.gender;
    this.id = item._id;
    this.image = item.imageOriginal;
    this.name = item.name;
    this.objectFit = item.objectFit;
    this.price = item.price;
    this.salePrice = item.salePrice;
  }
}
