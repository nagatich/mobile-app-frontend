import { observable, action, makeObservable } from 'mobx'

class Store {
  @observable isLoading = false

  constructor() {
    makeObservable(this)
  }

  @action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }
}

export default Store
