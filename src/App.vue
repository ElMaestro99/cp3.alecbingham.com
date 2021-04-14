<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/MyMemes">My Memes</router-link>
    </div>
    <router-view/>
    <div class="footer">
      <a id="gitLink" href="https://github.com/ElMaestro99/cp3.alecbingham.com.git">GitHub</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  display: flex;
  justify-content: center;
  background-color: #42b983;
  height: 75px;
}

.footer a {
  text-decoration: none;
  color: #2c3e50;
}

#gitLink {
  margin-top: 30px;
}
</style>
