<template>
    <div>
      <mt-header fixed :title="major">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="select">
        <ul class="select-bar">
          <v-touch tag="li" v-for="(item,key,index) in types" :key="index">
            {{item.name}}
          </v-touch>
        </ul>
        <ul class="select-bar">
          <li data-type="hot">全部</li>
          <v-touch tag="li" v-for="(item,index) in mins" :key="index">
            {{item}}
          </v-touch>
        </ul>
      </div>
      <div class="load-wrap" ref="wrapper" :style="{height:wrapperHeight + 'px'}">
        <mt-loadmore class="loadmore" :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false" ref="loadmore">
          <ul class="book-list">
            <Booklist v-for="(book,index) in books" :book="book" :key="index"></Booklist>
          </ul>
        </mt-loadmore>
      </div>


    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    import api from '../../api/api'
    import Booklist from '../common/Booklist'
    export default {
        name: "BookcatDetail",
        components : {
          Booklist
        },
        methods : {

          getNovelListByCat(gender, type, major, minor){
            Indicator.open('加载中...');
            api.getNovelListByCat(gender, type, major, minor).then(response => {
              console.log(response.data.books)
              this.books = response.data.books
              Indicator.close();
            }).catch(error => {
              console.log(error)
            })
          },

          loadTop(){
            // 加载更多数据
            this.getNovelListByCat(this.gender, this.type, this.major, this.minor)
            this.$refs.loadmore.onTopLoaded()
          },

          loadBottom(){
            let that = this
            Indicator.open('加载中')
         /*   api.getNovelListByCat(this.gender, this.type, this.major, this.minor, this.currentPage * 10).then(response => {
              that.books = [...that.books, ...response.data.books]
              that.currentPage++
              Indicator.close()
            }).catch(err => {
              console.log(err)
            })*/

            this.$refs.loadmore.onBottomLoaded()
          },

          mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
          }
        },
        data : function(){
          return {
            books : null,
            wrapperHeight : "",
            type : "hot",
            major : "",
            gender : "",
            minor : "",
            mins : "",
            types: [{
              type: 'hot',
              name: '热门'
            }, {
              type: 'new',
              name: '新书'
            }, {
              type: 'reputation',
              name: '好评'
            }, {
              type: 'over',
              name: '完结'
            }, {
              type: 'monthly',
              name: '包月'
            }]
          }
        },
        created() {

        },
        beforeRouteEnter(to,from,next){
          next(vm => {
            vm.major = vm.$route.query.major
            vm.gender = vm.$route.query.gender

            api.getCategoryDetail().then(response=>{
              response.data[vm.$route.query.gender].forEach((type)=>{
                if(type.major == vm.$route.query.major){
                  vm.mins = type.mins
                }
              })
            }).catch(error=>{
              console.log(error)
            })

            vm.getNovelListByCat(vm.$route.query.gender, vm.type, vm.$route.query.major)
            /*api.getNovelListByCat(vm.$route.query.gender,vm.mins,vm.$route.query.major).then(response => {
              console.log(response.data.books)
              vm.books = response.data.books
            }).catch(error => {
              console.log(error)
            })*/

            vm.$store.commit("changeTitle","分类")
          })
        }
    }
</script>

<style scoped>
  .load-wrap{
    overflow: auto;
  }
  .select {
    position: fixed;
    top: 2rem;
    left: 0;
    background: #fff;
    z-index: 10;
  }
  .select-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    height: 2rem;
    width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 1px solid #f2f2f2;
  }
  .select-bar li {
    flex-shrink: 0;
    line-height: 2rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    font-size: 0.7rem;
  }
  .active {
    color: red;
  }
  .book-list {
    width: 100vw;
    background: #f2f2f2;
  }
  .loadmore {
    margin-top: 6rem;
  }
  .active {
    color: #26a2ff;
  }
</style>
