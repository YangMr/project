import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    cartarry:[],//存储购物车商品的数组
  },
  mutations: {
    //设置vuex的token
    settoken(state,token){
      state.token=token
    },
    //添加商品到购物车
    tocart(state,tag){
      let goods=state.cartarry.find(v=>v.title==tag.label)
      if(goods){
        goods.cartCount+=1
      }else{
        state.cartarry.push({title:tag.label,cartCount:1})
      }
    }
  },
  actions: {

  },
  //相当于我们vue 计算属性
  getters:{
      countsum:state=>{
        let num=0
        state.cartarry.forEach(v=>{
          num+=v.cartCount
        })
        return num
      }
  }
})
