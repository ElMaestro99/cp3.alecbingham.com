<template>
<div v-if="empty">
  <h2 id="emptyMessage">Explore and like memes on the home page!</h2>
</div>
<div v-else>
  <div class="wrapper">
    <div class="liked">
      <div class="likedMeme" v-for="meme in memes" :key="meme.id">
        <div class="image">
          <img :src="'/images/'+meme.path">
        </div>
        <div class="info">
          <p>Submitted by: {{meme.user}}</p>
          <button class="auto" v-on:click="unlike(meme)">Unlike</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LikedMemes',
  props: {
    memes: Array
  },
  computed: {
    empty() {
      return this.memes.length === 0;
    }
  },
  methods: {
    unlike(meme) {
      let index = this.memes.indexOf(meme);
      this.memes.splice(index, 1);
    }
  },
}
</script>

<style>
#emptyMessage {
  margin-bottom: 400px;
}

.liked {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.likedMeme {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  width: wrap-content;
  border: solid #42b983 6px;
  margin-bottom: 30px;
  background-color: black;
}

.likedMeme img {
  border-bottom: solid #42b983 2px;
  max-height: 300px;
  max-width: 300px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
