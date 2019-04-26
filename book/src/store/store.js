import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    title : "书架"
  },
  getters : {

  },
  mutations:{
    changeTitle(state,data){
      this.state.title = data;
    }
  },
  actions:{

  }
})

export default store
