import { observable, action, computed } from 'mobx';

class ItemObservable {
  constructor(item) {
  }

  id = item.id;
  @observable gender = item.gender;
  @observable softDelete = false;
  @observable category = item.category || null;
  @observable objectFit = item.objectFit || null;
  @observable featured = item.featured || null;
  //Do I need to add an 'active' field? Check backend API

  @computed get price() {
    return item.price;
  }

  @computed get salePrice() {
    return item.saleprice;
  }
}

export default ItemObservable;
