<template>
  <div id="app">
    <tournament></tournament>  
    <todo></todo>
  </div>
</template>

<script>
import Todo from './components/Todo'
import Tournament from './components/Tournament'

export default {
  name: 'app',
  components: {
    Todo,
    Tournament
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
