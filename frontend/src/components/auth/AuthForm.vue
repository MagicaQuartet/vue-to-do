<template>
  <form @submit.prevent="onSubmit">
    <h1>{{ title }}</h1>
    <div class="login-form">
      <div class="form-input">
        <label for="username">Username</label>
        <input v-model="username" type="text" name="username" id="username">
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input v-model="password" type="password" name="password" id="password">
      </div>
      <input type="submit" :value="title">
      <router-link v-if="!isRegister" to="/register" id="register-link">Sign up</router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  props: ['title'],
  data: function() {
    return {
      username: "",
      password: ""
    }
  },
  computed: {
    isRegister: function() {
      return this.title === "Register"
    }
  },
  methods: {
    onSubmit: function() {
      const component = this;
      console.log(this.$data);
      
      this.$http.post('/api/auth/login', this.$data)
        .then(function(response) {
          component.message = response.data;
        }).catch(function(err) {
          console.log(err);
        });
    }
  }
}
</script>

<style scoped>
  .login-form {
    padding: 20px 30px;
    margin-top: 30px;
    border-radius: 10px;
    background-color: #f7f7f7;
  }
  
  h1 {
    text-align: center;
  }
  
  .form-input {
    margin: 0.5rem 0;
  }
  
  input, label {
    display: block;
    margin: 0;
  }
  
  input {
    width: 100%;
    outline: none;
  }
  
  #register-link {
    display: block;
    margin-top: 0.5rem;
    text-align: right;
  }
</style>