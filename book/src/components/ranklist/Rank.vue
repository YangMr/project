<template>
    <div>
      <div>
        <p>男生</p>
        <ul class="rank-type">
          <li v-for="item in ranklist.male" v-if="!item.collapse">
            <Rankitem :rankinfo="item"></Rankitem>
          </li>
          <v-touch @tap="showMoreMaleRank" tag="li" class="other-rank">
            <div class="rank-item">
              <img src="../../assets/rank_other.svg" alt=""> 别人家的排行榜
            </div>
            <span class="angle">
              <img src="../../assets/up.svg" v-if="maleOtherRankIsShow">
              <img src="../../assets/down.svg" v-else>
					  </span>
          </v-touch>
          <ul v-show="maleOtherRankIsShow" class="rank-type">
            <li v-for="item in ranklist.male" v-if="item.collapse">
              <Rankitem :rankinfo="item"></Rankitem>
            </li>
          </ul>
        </ul>

        <p>女生</p>
        <ul class="rank-type">
          <li v-for="item in ranklist.female" v-if="!item.collapse">
            <Rankitem :rankinfo="item"></Rankitem>
          </li>
          <v-touch @tap="showMorefeMaleRank" tag="li" class="other-rank">
            <div class="rank-item">
              <img src="../../assets/rank_other.svg" alt=""> 别人家的排行榜
            </div>
            <span class="angle">
              <img src="../../assets/up.svg" v-if="femaleOtherRankIsShow">
              <img src="../../assets/down.svg" v-else>
					  </span>
          </v-touch>
          <ul v-show="femaleOtherRankIsShow" class="rank-type">
            <li v-for="item in ranklist.female" v-if="item.collapse">
              <Rankitem :rankinfo="item"></Rankitem>
            </li>
          </ul>
        </ul>
      </div>
    </div>
</template>

<script>
    import api from '../../api/api'
    import Rankitem from './Rankitem'
    export default {
        name: "Rank",
        components : {
          Rankitem
        },
        data : function(){
          return {
            ranklist : {},
            maleOtherRankIsShow : false,
            femaleOtherRankIsShow : false
          }
        },
        methods : {
          showMoreMaleRank () {
            this.maleOtherRankIsShow = !this.maleOtherRankIsShow
          },
          showMorefeMaleRank(){
            this.femaleOtherRankIsShow = !this.femaleOtherRankIsShow
          }
        },
        created() {
          api.getRank().then( response => {
            this.ranklist = response.data;
          }).catch(error=>{
            console.log(error)
          })
        }
    }
</script>

<style scoped>
  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: .8rem;
    line-height: 2.4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-bottom: .01rem solid #f3f3f3;
  }
  .fa-icon {
    height: 1rem;
    width: 1rem;
    margin-right: .5rem;
  }
  p {
    background-color: #f9f0f0;
    margin: 0;
    padding: .5rem 0 .5rem 1rem;
  }
  .other-rank {
    justify-content: space-between;
  }
  .rank-type img {
    width: 1.2rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  .angle img {
    width: 0.8rem;
  }
</style>
