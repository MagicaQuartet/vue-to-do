<template>
  <div class="todo-list">
    <todo-item
      v-for="item in list"
      :key="item.id"
      :content="item.content"
      :datetime="item.datetime"></todo-item>
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  
  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    props: ['list']
  }
</script>

<style scoped>
  .todo-list {
    max-height: 480px;
    padding: 0.8rem 1.2rem;
    overflow: auto;
  }
</style>