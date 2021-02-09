class Utils {
  static isType (value, target) {
    const type = Object.prototype.toString.call(value)
    return `[object ${target}]` === type
  }

  static getStorage (key) {
    let res
    const v = localStorage.getItem(key)
    try {
      res = JSON.parse(v)
    } catch (e) {
      res = v
    }
    return res
  }

  static setStorage (key, value) {
    if (!this.isType(value, 'String')) {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  static removeStorage (key) {
    localStorage.removeItem(key)
  }
}

export default Utils
