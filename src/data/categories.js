export default class Categories {
  constructor() {
    this.category = []
    this._followers = []
  }

  follow(func) {
    this._followers.push(func)
  }

  unfollow(func) {
    this._followers = this._followers.filter(follower => follower !== func)
  }

  notify() {
    this._followers.forEach(func => func(this.category))
  }

  addCategory(category) {
    this.category.push(category)
    this.notify()
  }
}