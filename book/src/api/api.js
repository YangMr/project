import Vue from 'vue'

export default {
  //请求所有分类的接口
  getCategory(){
    return Vue.http.get("/cats/lv2/statistics")
    console.log(Vue.http.get("/cats/lv2/statistics"))
  },
  //获取排行榜的戒酒
  getRank(){
    return Vue.http.get("/ranking/gender")
  },
  //获取热搜索词
  getHotWords(){
    return Vue.http.get("/book/search-hotwords")
  },
  //获取搜索自动补充
  getAutoComplete(searchWord){
    return Vue.http.get("/book/auto-complete?query=" + searchWord)
  },
  //获取模糊查询接口
  getFuzzySearch(searchWord){
    return Vue.http.get("/book/fuzzy-search?query=" + searchWord)
  }

}


