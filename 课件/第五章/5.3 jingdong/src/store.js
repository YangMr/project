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
    },
    //购物车商品数量加一
    cartadd(state,index){
      state.cartarry[index].cartCount++
    },
    //购物车商品数量减一
    cartremove(state,index){
      if(state.cartarry[index].cartCount>1){
        state.cartarry[index].cartCount--
      }else{
        if(window.confirm('确定从购物车移除商品吗？')){
          state.cartarry.splice(index,1)
        }
      }
    },
    //清空购物车
    clearcart(state){
      state.cartarry=[]
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
