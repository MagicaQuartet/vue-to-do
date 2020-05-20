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
    beforeCreate: function() {
      const username = this.$store.getters['auth/getUsername'];
      const component = this;
      
      if (username !== null) {
        this.$http.get(`/api/todos/${username}`)
        .then(function(response) {
          const loadedTodos = response.data;
          loadedTodos.forEach(function(todo) {
            todo.modifiedDatetime = new Date(todo.modifiedDatetime);
          });

          component.counter = loadedTodos.length;
          component.todos = loadedTodos;
        });
      }
    },
    data: function() {
      return {
        counter: 0,
        newItem: "",
        todos: []
      }
    },
    methods: {
      receiveItem: function(value) {
        const username = this.$store.getters['auth/getUsername'];
        const params = {
          id: this.counter,
          content: value,
          completed: false,
          modifiedDatetime: new Date(),
        };
        //const component = this;
        
        this.todos.push(params);
        this.$http.post(`/api/todos/${username}`, params);
        
        this.counter++;
      }
    },
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