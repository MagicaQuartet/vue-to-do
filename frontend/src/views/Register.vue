<template>
  <auth-layout>
    <auth-form
      for="register"></auth-form>
  </auth-layout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout'
import AuthForm from '../components/auth/AuthForm'
  
export default {
  name: "Register",
  components: {
    AuthLayout,
    AuthForm
  }
}
</script>

<style scoped>

</style>