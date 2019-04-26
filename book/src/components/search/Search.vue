<template>
  <div>
      <div class="search-head">
        <span class="search-icon">
          <img src="../../assets/search.svg" alt="">
        </span>
        <input type="text" @input="autoComplete" @keyup.enter="fuzzySearch" v-model="searchWord" placeholder="输入书名或者作者名" class="search-input">
      </div>

      <div class="search-info" v-if="!searchWord">
        <!--热搜关键词-->
        <ul class="search-word" v-if="searchHotWords">
          <v-touch tag="li" class="search-hot-word" v-for="(item,index) in searchHotWords" :key="index">
            {{item.word}}
          </v-touch>
        </ul>
        <!--搜索历史纪录-->
        <p v-for="(item,index) in b" :key="index">{{item}}</p>
      </div>

      <!--自动补全-->
      <ul class="auto-complete-list" v-if="autoCompleteList.length  && searchWord">
        <v-touch tag="li" v-for="(item,index) in autoCompleteList" :key="index">
          {{item}}
        </v-touch>
      </ul>

      <!--搜索结果-->
      <ul class="search-result" v-if="searchResult.length">
        <Booklist v-for="(book,index) in searchResult" :key="index" :book="book"></Booklist>
      </ul>
  </div>
</template>

<script>
    import api from '../../api/api'
    import Booklist from '../common/Booklist'
    import util from '../../utils/util'
    export default {
        name: "Search",
        components : {
          Booklist
        },
        data : function(){
          return {
            searchHotWords : null,
            searchWord : "",
            autoCompleteList: [],
            searchResult : [],
            b : [],
            a : []
          }
        },
        methods : {
          autoComplete(){
            api.getAutoComplete(this.searchWord).then(response=>{
              // console.log(response)
              this.autoCompleteList = response.data.keywords;
            }).catch(error=>{
              console.log(error);
            })
          },
          fuzzySearch(){
            var str = window.localStorage.getItem("item")
            api.getFuzzySearch(this.searchWord).then(response=>{
              this.searchResult = response.data.books;
            }).catch(error=>{
              console.log(error);
            })
            if(util.getLocalStroageData("keyword")){
              this.a = util.getLocalStroageData("keyword");
            }
            util.setLocalStroageData("keyword",[this.searchWord,...this.a]);
          }
        },
        created() {
          api.getHotWords().then(response=>{
            this.searchHotWords = response.data.searchHotWords;
            this.searchHotWords.length = 15;
          }).catch(error=>{
            console.log(error);
          })
          this.b = util.getLocalStroageData("keyword")
        }
    }
</script>

<style scoped>
  .search-head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1rem;
    background: #04b1ff;
  }
  .search-icon img {
    position: absolute;
    left: 1.4rem;
    line-height: 3.5rem;
    width: 20px;
    top: 0.75rem;
  }
  .search-input {
    width: 100%;
    line-height: 1.4rem;
    padding-left: 1.8rem;
    border-radius: .2rem;
    border: none;
  }
  .search-input:focus,
  .cancel:focus {
    outline: none;
  }
  .search-info{
    width: 100vw;
  }
  .search-word {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 3rem;
    border-bottom: 1px solid #f2f2f2;
  }
  .search-hot-word {
    font-size: 0.6rem;
    padding: 0.2rem 0.6rem;
    border: 1px solid #f2f2f2;
    border-radius: 0.8rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .search-hot-word:active {
    background: #f2f2f2;
  }
  .auto-complete-list {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    width: 100vw;
  }
  .auto-complete-list li {
    padding-left: 1.5rem;
    line-height: 2rem;
    border-bottom: 1px solid #f2f2f2;
  }
  .auto-complete-list li:active {
    background: #f2f2f2;
  }
  .search-result {
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0;
    width: 100vw;
    background: #f2f2f2;
  }
</style>
