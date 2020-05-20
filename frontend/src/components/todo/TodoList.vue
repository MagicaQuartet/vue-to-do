<template>
  <div class="todo-list">
    <todo-item
      v-for="item in list"
      :key="item.id"
      :completed="item.completed"
      :content="item.content"
      :datetime="item.modifiedDatetime"></todo-item>
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
    padding: 0.8rem 1.2rem 0 0;
    overflow: auto;
  }
</style>