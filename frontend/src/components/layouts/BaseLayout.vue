<template>
  <div class="base-layout">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
    </nav>
    <main>
      <slot/>
    </main>
    <footer>
      &copy; 2020 MagicaQuartet &lt;dev.dskim@gmail.com>&gt;
    </footer>
  </div>
</template>

<script>

</script>

<style scoped>

</style>