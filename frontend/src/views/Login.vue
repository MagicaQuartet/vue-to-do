<template>
  <div class="login">
    <form @submit.prevent="onSubmit(username, password)">
      <h1>Sign in</h1>
      <div class="login-form">
        <div class="form-input">
          <label for="username">Username</label>
          <input v-model="username" type="text" name="username" id="username">
        </div>
        <div class="form-input">
          <label for="password">Password</label>
          <input v-model="password" type="password" name="password" id="password">
        </div>
        <input type="submit" value="Sign in">
      </div>
    </form>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
      message: ""
    }
  },
  methods: {
    onSubmit: function(username, password) {
      const component = this;
      
      this.$http.post('/api/auth/login', {
        username,
        password
      }).then(function(response) {
        component.message = response.data;
      }).catch(function(err) {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
  .login {
    width: 340px;
    padding: 30px;
    margin: 85px auto;
    background-color: #eeeeee;
    border-radius: 10px;
  }
  
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
    margin: 10px 0;
  }
  
  input, label {
    display: block;
    margin: 0;
  }
  
  input {
    width: 100%;
    outline: none;
  }
</style>