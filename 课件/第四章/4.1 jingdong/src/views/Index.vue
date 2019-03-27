<template>
    <div id="index">
        <!-- 轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],//轮播图数组
    }
  },
  methods: {
    changePage(current) {
    //   console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
 async created(){
     try{
         //获取轮播图数据
         const items=await this.$http.get('/api/banner')
         this.items=items.data
     }catch(err){
         console.log(err)
     }
  }
}
</script>

<style lang="stylus" scoped>
    #index
        a
            .banner
                display block
                width 100%
                height  175px
        .listul
            display flex
            flex-wrap   wrap
        .listli
            width 20%
            justify-content center
            img
                width 35px
                height  35px
                border-radius  50%
                padding 5px 0
            p
                font-size  14px
                padding-bottom  10px
</style>

