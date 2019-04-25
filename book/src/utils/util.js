import _ from 'lodash'
const localStroage = window.localStorage
export default {
  staticPath : "http://statics.zhuishushenqi.com",

  //创建获取本地数据的方法
  getLocalStroageData (item) {
    return _.isEmpty(JSON.parse(localStroage.getItem(item))) ? null : JSON.parse(localStroage.getItem(item))
  },

  //创建设置本地数据的方法
  setLocalStroageData (item, obj) {
    localStroage.setItem(item, JSON.stringify(obj))
  }
}
