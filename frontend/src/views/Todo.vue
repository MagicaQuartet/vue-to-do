<template>
  <base-layout>
    <div class="todo">
      <h1>todos</h1>
      <todo-input
        :value="newItem"
        @input="receiveItem"></todo-input>
      <todo-list :list="todos"></todo-list>
    </div>
  </base-layout>
</template>

<script>
  import BaseLayout from '../layouts/BaseLayout.vue';
  import TodoInput from '../components/todo/TodoInput.vue'
  import TodoList from '../components/todo/TodoList.vue'

  export default {
    name: 'Home',
    components: {
      BaseLayout,
      TodoInput,
      TodoList
    },
    methods: {
      receiveItem: function(value) {
        this.todos.push({
          id: this.counter,
          content: value,
          datetime: new Date(),
        });
        this.counter++;
      }
    },
    data: function() {
      return {
        counter: 0,
        newItem: "",
        todos: []
      }
    }
  };
</script>

<style scoped>
  .todo {
    margin: 0 auto;
    max-width: 550px;
  }
  
  .todo > * {
    margin: 30px 0;
  }
  
  h1 {
    text-align: center;
  }
</style>