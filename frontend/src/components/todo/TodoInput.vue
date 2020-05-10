<template>
  <div class="todo-input">
    <input
      class="new-todo"
      placeholder="새 할 일 입력"
      ref="input"
      :value="value"
      @keyup.enter="submitItem">
    <b-icon-plus
      class="add-button"
      font-scale="2.5"
      @click="submitItem($event)"></b-icon-plus>  
  </div>
</template>

<script>
  import { BIconPlus } from 'bootstrap-vue'

  export default {
    name: 'TodoInput',
    props: ['value'],
    components: {
      BIconPlus
    },
    methods: {
      submitItem: function() {
        if (this.$refs.input.value.length > 0) {
          this.$emit('input', this.$refs.input.value);
          this.$refs.input.value = "";
        }
      }
    }
  }
</script>

<style scoped>
  .todo-input {
    display: flex;
    align-items: center;
  }
  
  .new-todo {
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 30px;
    outline: none;
    background-color: #eeeeee;
  }
  
  .add-button {
    border-radius: 50%;
    margin-left: 20px;
    background-color: #b7b7b7;
  }
</style>