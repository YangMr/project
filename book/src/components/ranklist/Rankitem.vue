<template>
    <div>
      <v-touch class="rank-item">
        <img class="" :src="imgUrl" alt="">
        <span class="">{{rankinfo.title}}</span>
      </v-touch>
    </div>
</template>

<script>
    import util from '../../utils/util'
    export default {
        name: "Rankitem",
        props : ["rankinfo"],
        computed : {
          imgUrl(){
            return util.staticPath + this.rankinfo.cover
          }
        }
    }
</script>

<style scoped>
  .rank-type {
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    line-height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-bottom: 0.01rem solid #f3f3f3;
  }
  .rank-type img {
    width: 1.2rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  .other-rank {
    justify-content: space-between;
  }
  .rank-item {
    width: 100%;
  }
  .rank-item a {
    color: #000;
  }

</style>
