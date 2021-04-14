<template>
<div>
  <h2 class="header">Liked Memes</h2>
  <LikedMemes :memes="mine" />
</div>
</template>

<script>
import LikedMemes from "../components/LikedMemes.vue"
export default {
  name: "MyMemes",
  components: {
    LikedMemes
  },
  data() {
    return {
    }
  },
  computed: {
    mine() {
      return this.$root.$data.liked;
    }
  },
  methods : {
  }
}
</script>

<style>
  .header {
    margin-bottom: 50px;
  }
</style>
