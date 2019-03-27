import axios from 'axios'
import store from './store'
import router from './router'

//http全局拦截
//token要放在我们请求的header上面带回去给后端


export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token=store.state.token
            }
            return config
        }
    )
        //每次的请求有返回的，都是先经过这个拦截器先的
    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                const data=response.data
                if(data.code==-1){
                    //登录过期 需要重新登录 清空vuex的token和localstorage的token
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    //跳转到login页面
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}