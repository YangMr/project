<template>
    <div>
        <div class="goods" v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>            
        </div>
        <cube-button style="margin:10px 0;">下单</cube-button>
        <cube-button @click="clearcart">清空购物车</cube-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            // cartarr:[]
        }
    },
    computed:{
        ...mapState({
           cartarr:state=>state.cartarry 
        })
    },
    methods:{
        //减少商品
        removeCart(index){
            this.$store.commit('cartremove',index)
        },
        //增加商品
        addCart(index){
            this.$store.commit('cartadd',index)
        },
        //清空购物车
        clearcart(){
            this.$store.commit('clearcart')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left 
        .goodsright
            float  right
        i 
            font-size 18px
</style>