<template>
    <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553852664107&di=4cdada9b17e3451279102c41af4a6547&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161008%2Fe8fadf087de643e8862d2836d0a65bba_th.png" alt="">
        <cube-form
                :model="model"
                :schema="schema"
                @submit.prevent="submitHandler"
        ></cube-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                model : {
                    username : "",
                    password : ""
                },
                schema : {
                    fields : [
                        //用户名配置
                        {
                            type : "input",
                            modelKey : "username",
                            label : "用户名",
                            props : {
                                placeholder : "请输入用户名"
                            },
                            rules : {
                                //校验规则
                                required : true,
                                type : "string",
                                min : 3,
                                max : 15
                            },
                            trigger : "blur",
                            message : {
                                required : "用户名不能为空",
                                min : "用户名不能少于3个字符",
                                max : "用户名不能大于15个字符"
                            }
                        },
                        //密码配置
                        {
                            type : "input",
                            modelKey : "password",
                            label : "密　码",
                            props : {
                                placeholder : "请输入密码",
                                type : "password",
                                eye : {
                                    open : false
                                }
                            },
                            rules : {
                                //校验规则
                                required : true
                            },
                            trigger : "blur",
                        },
                        {
                            type : "submit",
                            label : "登录"
                        }
                    ]
                }
            }
        },
        methods : {
            async submitHandler(){
               try{
                    const result = await this.$http.get("/api/login",{params : this.model});
                   if(result.code == "0"){
                       this.$store.commit("setToken",result.token);
                       localStorage.setItem("token",result.token);
                       this.$router.replace({path : "/index"});
                       alert(result.message);
                   }else{
                       alert(result.message);
                   }
               }catch (error) {
                   console.log(error);
               }
            }
        }
    }
</script>

<style scoped lang="stylus">
    img
        max-width:100%
        height :120px
        display :block
        margin: 0 auto

</style>
