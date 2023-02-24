import { observable, action, makeObservable } from 'mobx'

import { getWishList, createWishListItem, getWishListItem, updateWishListItem, deleteWishListItem } from 'api/wishList'
import { CreateWishListItem, WishListItem } from 'api/wishList/types'

import Store from '../Store'
import AppStore from '../AppStore'

class WishList extends Store {
  @observable wishList: WishListItem[] = []
  @observable currentWishListItem?: WishListItem

  constructor(public appStore: typeof AppStore) {
    super()
    makeObservable(this)
    this.getWistList()
  }

  @action private setWishList = (list: WishListItem[]) => {
    this.wishList = list
  }

  @action private setCurrenctWishListItem = (item: WishListItem) => {
    this.currentWishListItem = item
  }

  // fetchs
  getWistList = () => {
    this.setIsLoading(true)
    getWishList()
      .then((res) => {
        console.log({ res })
        this.setWishList(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  createWishListItem = (item: Partial<CreateWishListItem>) => {
    this.setIsLoading(true)
    createWishListItem(item as CreateWishListItem)
      .then((res) => {
        console.log({ res })
        this.wishList.push(res)
      })
      .catch((err) => {
        console.log({ err })
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  getWishListItem = (id: number) => {
    this.setIsLoading(true)
    getWishListItem(id)
      .then((res) => {
        this.setCurrenctWishListItem(res)
      })
      .catch(() => {
        // window.location.assign('/')
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  updateWishListItem = (item: WishListItem) => {
    this.setIsLoading(true)
    updateWishListItem(item.id, item)
      .then((res) => {
        console.log({ res })
      })
      .catch((err) => {
        console.log({ err })
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }

  deleteWishListItem = (item: WishListItem) => {
    this.setIsLoading(true)
    deleteWishListItem(item.id)
      .then((res) => {
        console.log({ res })
      })
      .catch((err) => {
        console.log({ err })
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }
}

export default WishList
