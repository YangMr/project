<template>
    <div>
      <mt-button class="add-book" v-if="!books.length" @click="$emit('addBook','分类')" type="primary">添加小说</mt-button>
    </div>
</template>

<script>
    export default {
        name: "Bookshelf",
        data : function () {
          return {
            books : []
          }
        }
    }
</script>

<style scoped>
  .add-book{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
