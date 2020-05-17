<template>
  <auth-layout>
    <auth-form
      for="login"></auth-form>
  </auth-layout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout'
import AuthForm from '../components/auth/AuthForm'
  
export default {
  name: "Login",
  components: {
    AuthLayout,
    AuthForm
  }
}
</script>

<style scoped>

</style>