<template>
    <div>
      <section v-for="(item,key,index) in category">
        <p class="category-type">{{categoryType[key]}}</p>
        <ul>
          <li v-for="(cat,index) in item">
             <p class="category">{{cat.name}}</p>
            <span class="book-count">{{cat.bookCount}}</span>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
    import api from '../../api/api'
    export default {
        name: "Bookcategory",
        data : function(){
          return {
            category : null,
            categoryType: {
              male: '男生',
              female: '女生',
              press: '出版'
            }
          }
        },
        created() {
            api.getCategory().then(response =>{
              this.category = response.data;
            }).catch(error => {
              console.log(error);
            })
        }
    }
</script>

<style scoped>
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 1rem;
    list-style-type: none;
  }
  ul li{
    width: 33.3%;
    text-align: center;
  }
  .category {
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    margin-top: 0.8rem;
    line-height: 1.3rem;
  }
  .book-count {
    color: #959595;
  }
  .category-type{
    line-height: 2rem;
    margin: 0 1rem;
    border-bottom: 1px solid #f3eded;
  }
</style>
