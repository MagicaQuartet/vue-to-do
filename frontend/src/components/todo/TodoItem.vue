<template>
  <div class="todo-item">
    <div class="item-content">{{ content }}</div>
    <div class="item-datetime">{{ datetimeString }}</div>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ['content', 'datetime'],
    computed: {
      datetimeString: function() {
        return `
          ${this.datetime.getFullYear()}년 \
          ${this.datetime.getMonth()+1}월 \
          ${this.datetime.getDate()}일 \
          ${this.datetime.getHours()}시 \
          ${this.datetime.getMinutes()}분
        `;
      }
    }
  }
</script>

<style>
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    margin: 10px 0;
    height: 3.6rem;
    border-radius: 10px;
    background-color: #eeeeee;
  }
  
  .item-content {
    font-size: 1rem;
  }
  
  .item-datetime {
    font-size: 0.8rem;
    font-style: italic;
  }
</style>