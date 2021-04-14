<template>
<div class="all">
  <div class="home">
    <img class="logo" alt="MRU logo" src="../assets/new_logo.jpg">
    <h1>Memes 'R' Us</h1>
  </div>
  <MemeList :memes="memes" />
</div>
</template>

<script>
import MemeList from "../components/MemeList.vue"
export default {
  name: 'Home',
  components: {
    MemeList
  },
  computed: {
    memes() {
      return this.$root.$data.memes;
    },
  },
}
</script>

<style>
  .home {
    margin-bottom: 50px;
  }

  .logo {
    width: 175px;
  }
</style>
