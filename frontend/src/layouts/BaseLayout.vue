<template>
  <div class="base-layout">
    <b-navbar toggleable="md" type="dark" variant="dark" :sticky="true">
      <b-navbar-brand to="/">To-Do</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main>
      <slot/>
    </main>
    <footer>
      &copy; 2020 MagicaQuartet &lt;dev.dskim@gmail.com&gt;
    </footer>
  </div>
</template>

<script>
export default {
  beforeCreate: function() {
    if (this.$store.getters['user/getUsername'] === null) {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
  main {
    padding: 30px;
  }
  
  footer {
    text-align: center;
  }
</style>