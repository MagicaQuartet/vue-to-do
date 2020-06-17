<template>
  <div class="todo-list">
    <todo-item
      v-for="item in notCompletedTodos"
      :key="item.id"
      :todo-id="item.id"
      :completed="item.completed"
      :content="item.content"
      :datetime="new Date(item.modifiedDatetime)"></todo-item>
    <todo-item
      v-for="item in completedTodos"
      :key="item.id"
      :todo-id="item.id"
      :completed="item.completed"
      :content="item.content"
      :datetime="new Date(item.modifiedDatetime)"></todo-item>
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  
  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    computed: {
      completedTodos: function() {
        return this.$store.getters['user/getCompletedTodos'];
      },
      notCompletedTodos: function() {
        return this.$store.getters['user/getNotCompletedTodos'];
      }
    }
  }
</script>

<style scoped>
  .todo-list {
    padding: 0.8rem 1.2rem 0 0;
    overflow: auto;
  }
</style>