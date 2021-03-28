import { observable, action, makeObservable } from 'mobx'

import FilterStore from '../FilterStore'
import QueryStore from '../QueryStore'

class AppStore {
  filterStore: FilterStore
  queryStore: QueryStore

  @observable isLoading = true

  constructor() {
    makeObservable(this)
    this.filterStore = new FilterStore(this)
    this.queryStore = new QueryStore(this)

    setTimeout(() => {
      this.setIsLoading(false)
    }, 5000)
  }

  @action setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }
}

export default new AppStore()
