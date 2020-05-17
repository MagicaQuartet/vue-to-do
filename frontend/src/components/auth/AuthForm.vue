<template>
  <form @submit.prevent="onSubmit">
    <h1>{{ title }}</h1>
    <div class="login-form">
      <div class="form-input">
        <label for="username">Username</label>
        <input v-model="params.username" type="text" name="username" id="username">
        <p class="warning" v-if="isRegister">{{ warning.username }}</p>
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input v-model="params.password" type="password" name="password" id="password">
      </div>
      <input type="submit" :value="title">
      <router-link v-if="!isRegister" to="/register" id="register-link">Sign up</router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  props: ['for'],
  data: function() {
    return {
      params: {
        username: "",
        password: "",
      },
      warning: {
        username: ""
      }
    }
  },
  computed: {
    isRegister: function() {
      return this.for === "register";
    },
    title: function() {
      return this.isRegister ? "Sign up" : "Sign in";
    },
    requestUri: function() {
      return '/api/auth/' + this.for;
    },
    redirectUri: function() {
      return this.isRegister ? '/login' : '/';
    }
  },
  methods: {
    onSubmit: function() {
      const component = this;
      
      this.$http.post(this.requestUri, this.$data.params)
      .then(function(response) {
        const success = response.data.success;
        
        if (success) {
          component.warning.username = "";
          component.$router.push(component.redirectUri)
        } else {
          component.warning.username = "이미 존재하는 username입니다.";
        }
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
  
  .warning {
    margin: 0;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--danger);
  }
  
  #register-link {
    display: block;
    margin-top: 0.5rem;
    text-align: right;
  }
</style>