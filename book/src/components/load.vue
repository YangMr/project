<template>
    <div class="wrap">
      <div class="load-wrapper" ref="wrapper" :style="{height:wrapperHeight + 'px'}">
        <mt-loadmore :bottom-method="loadBottom">
            <ul>
              <li v-for="item in 50">{{item}}</li>
            </ul>
        </mt-loadmore>
      </div>
    </div>
</template>

<script>

    export default {
        name: "load",
        data :function(){
          return {
            wrapperHeight : ""
          }
        },
        methods : {
          loadBottom(){
            console.log("hello")
          }
        },
        mounted() {
          this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        }
    }
</script>

<style scoped>
  .wrap{
    margin: 40px 0 55px 0;
  }
  .load-wrapper{
    overflow: auto;
  }
</style>
