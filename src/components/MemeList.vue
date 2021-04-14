<template>
<div class="wrapper">
  <div class="memes">
    <div class="meme" v-for="meme in memes" :key="meme.id">
      <div class="image">
        <img :src="'/images/'+meme.path">
      </div>
      <div class="info">
        <p>Submitted by: {{meme.user}}</p>
        <button class="auto" v-on:click="like(meme)">Like</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MemeList',
  props: {
    memes: Array
  },
  methods: {
    like(meme) {
      this.$root.$data.liked.push(meme);
    }
  },
}
</script>

<style>
.memes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.meme {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 325px;
  width: wrap-content;
  border: solid #42b983 6px;
  margin-bottom: 30px;
  background-color: black;
}

.meme img {
  border-bottom: solid #42b983 2px;
  max-height: 250px;
  max-width: 250px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
