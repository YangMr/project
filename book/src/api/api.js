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
  },
  //获取分类小类别接口数据
  getCategoryDetail () {
    return Vue.http.get('/cats/lv2')
  },
  //根据分类获取小说列表接口
  getNovelListByCat (gender, type, major, minor = '', start = 0, limit = 10) {
    return Vue.http.get('/book/by-categories?gender=' + gender + '&type=' + type + '&major=' + major + '&minor=' + minor + '&start=' + start + '&limit=' + limit)
  }
}


