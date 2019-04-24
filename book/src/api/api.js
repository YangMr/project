import Vue from 'vue'

export default {
  //请求所有分类的接口
  getCategory(){
    return Vue.http.get("/cats/lv2/statistics")
  },
  //获取排行榜的戒酒
  getRank(){
    return Vue.http.get("/ranking/gender")
  }
}


