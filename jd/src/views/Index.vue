<template>
    <div id="index">
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
        name: "Index",
        data() {
            return {
                items: [
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    },
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    },
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                    }
                ]
            }
        },
        methods: {
            changePage(current) {
                console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                console.log(item, index)
            }
        },
        async created(){
            try{
                const items = await this.$http.get("/api/banner");
                this.items = items.data;
            }catch (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped lang="stylus">
    #index
        a
            .banner
                display block
                max-width 100%
                height 175px
</style>
