import axios from 'axios'
import store from './store'
import router from './router'

//http请求拦截
//token要放在我们请求的header上面返回给后端

export default function setAxios() {
    //请求拦截
    axios.interceptors.request.use(
        config => {
            if(store.state.token){


            }
            return config;
        }
    );
    //响应
    //每次的请求都是有返回的,都是先经过这个拦截器的
    axios.interceptors.response.use(
        response =>{
            if(response.status == 200){
                const data = response.data;
                if(data.code == -1){
                    //表示token过期,需要重新登录,可以跳转到登录页面
                    //然后在登录之前清空之前vuex中的token和localstorage中的token
                    store.commit("setToken","");
                    localStorage.removeItem("token");
                    //重定向到登录页面,去除历史纪录
                    router.replace({path:"/login"});
                }
                return data;
            }
            return response;
        }
    )
}
