<template>
  <div>
     <!--内容-->
    <mt-tab-container :swipeable="false" :value="selected" v-model="selected">
      <mt-tab-container-item  id="书架">
        <mt-header fixed :title="selected"></mt-header>
        <Bookshelf class="tab-container" @addBook="changeSelected"></Bookshelf>
      </mt-tab-container-item>
      <mt-tab-container-item id="分类">
        <mt-header fixed :title="selected"></mt-header>
        <Bookcategory class="tab-container"></Bookcategory>
      </mt-tab-container-item>
      <mt-tab-container-item id="排行">
        <mt-header fixed :title="selected"></mt-header>
        <Rank class="tab-container" @category="changeSelected"></Rank>
      </mt-tab-container-item>
      <mt-tab-container-item id="搜索">
        <Search></Search>
      </mt-tab-container-item>
    </mt-tab-container>

    <!--底部tab-->
    <mt-tabbar v-model="selected" :fixed="true" :value="selected">
      <mt-tab-item id="书架">
        <img slot="icon" src="../assets/book.svg">
        书架
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" src="../assets/category.svg">
        分类
      </mt-tab-item>
      <mt-tab-item id="排行">
        <img slot="icon" src="../assets/rank.svg">
        排行
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <img slot="icon" src="../assets/search.svg">
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
    // 引入书架组件
    import Bookshelf from './bookshelf/Bookshelf'
    // 引入所有分类组件
    import Bookcategory from './category/Bookcategory'
    //引入排行榜组件
    import Rank from './ranklist/Rank'
    //引入搜索组件
    import Search from './search/Search'
    export default {
        name: "Home",
        components : {
            Bookshelf,
            Bookcategory,
            Rank,
            Search
        },
        data : function () {
           return {
             selected : "书架",
           }
        },
      methods : {
          changeSelected : function (data) {
             this.selected = data;
          }
      }
    }

</script>

<style scoped>
  .tab-container {
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 55px;
    width: 100vw;
    min-height: 100vh;
  }
</style>
