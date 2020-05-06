<template>
  <div class="todo-list">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>  
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    props: ['list']
  }
</script>

<style scoped>
  .todo-list {
    height: 300px;
    background-color: #eeeeee;
  }
</style>