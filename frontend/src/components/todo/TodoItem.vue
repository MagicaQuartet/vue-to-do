<template>
  <div class="todo-item" :class="{ completed: completed }">
    <label class="item-checkbox">
      <input type="checkbox" v-model="completed">
      <component :is="checkboxIcon" font-scale="2"></component>
    </label>
    <span class="item-content">{{ content }}</span>
    <span class="item-datetime">{{ datetimeString }}</span>
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
    props: ['content', 'datetime'],
    data: function() {
      return {
        completed: false
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
        return this.completed ? 'b-icon-check-circle' : 'b-icon-circle';
      }
    }
  }
</script>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    margin: 10px 0;
    height: 3.6rem;
    border-radius: 10px;
    background-color: #eeeeee;
  }
  
  .todo-item > * {
    padding: 0 0.25rem;
  }
  
  .todo-item.completed .item-content {
    text-decoration: line-through;
  }
  
  .item-checkbox {
    margin: 0;
  }
  
  .item-checkbox input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  
  .item-content {
    font-size: 1rem;
  }
  
  .item-datetime {
    font-size: 0.8rem;
    font-style: italic;
  }
</style>