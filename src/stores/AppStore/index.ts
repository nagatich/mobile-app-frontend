import { observable, action, makeObservable } from 'mobx'

import FilterStore from '../FilterStore'
import QueryStore from '../QueryStore'
import AuthStore from '../AuthStore'
import WishListStore from '../WishListStore'

class AppStore {
  filterStore: FilterStore
  queryStore: QueryStore
  authStore: AuthStore
  wishListStore: WishListStore

  @observable isLoading = true

  constructor() {
    makeObservable(this)
    this.filterStore = new FilterStore(this)
    this.queryStore = new QueryStore(this)
    this.authStore = new AuthStore(this)
    this.wishListStore = new WishListStore(this)

    setTimeout(() => {
      this.setIsLoading(false)
    }, 5000)
  }

  @action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }
}

export default new AppStore()
