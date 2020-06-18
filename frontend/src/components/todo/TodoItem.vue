<template>
  <div class="todo-item" :class="{ completed: itemCompleted }">
    <label class="item-checkbox">
      <input type="checkbox" v-model="itemCompleted" @change="updateCompleted">
      <component :is="checkboxIcon" font-scale="2" class="fake-checkbox"></component>
      <span class="item-content">{{ content }}</span>
      <span class="item-datetime">{{ datetimeString }}</span>
    </label>
  </div>
</template>

<script>
  import { BIconCircle, BIconCheckCircle } from 'bootstrap-vue'
  
  export default {
    name: "TodoItem",
    components: {
      BIconCircle,
      BIconCheckCircle
    },
    props: ['todoId', 'content', 'completed', 'datetime'],
    data: function() {
      return {
        itemCompleted: this.completed,
      }
    },
    computed: {
      datetimeString: function() {
        return `
          ${this.datetime.getFullYear()}년 \
          ${this.datetime.getMonth()+1}월 \
          ${this.datetime.getDate()}일 \
          ${this.datetime.getHours()}시 \
          ${this.datetime.getMinutes()}분
        `;
      },
      checkboxIcon: function() {
        return this.itemCompleted ? 'b-icon-check-circle' : 'b-icon-circle';
      }
    },
    methods: {
      updateCompleted: function() {
        this.$store.dispatch('user/updateTodo', {
          _id: this.todoId,
          completed: this.itemCompleted,
        });
      }
    }
  }
</script>

<style>
  .todo-item {
    padding: 0.8rem;
    margin: 10px 0;
    border-radius: 10px;
    background-color: #eeeeee;
    box-shadow: 3px 3px 3px gray;
  }
  
  .todo-item.completed {
    background-color: #c7c7c7;
  }
  
  .todo-item label {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .todo-item label > span {
    padding: 0 0.5rem;
  }
  
  .completed .item-content {
    text-decoration: line-through;
  }
  
  .item-checkbox {
    margin: 0;
    position: relative;
    padding-left: 32px;
  }
  
  .item-checkbox input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  
  .fake-checkbox {
    position: absolute;
    top: 0.15rem;
    left: 0;
  }
  
  .fake-checkbox:hover {
    transform: scale(1.1);
  }
  
  .item-content {
    font-size: 1.5rem;
  }
  
  .item-datetime {
    font-size: 0.75rem;
    font-style: italic;
  }
</style>