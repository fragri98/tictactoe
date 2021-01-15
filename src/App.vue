<template>
  <div>
    <div class="scoreboard">
      <span>O ha {{ wins.O }} vittorie</span>
      <h2>PUNTEGGIO</h2>
      <span>X ha {{ wins.X }} vittorie</span>
    </div>
    <div id="app">
      <div id="title">
        <h1>Tic Tac Toe</h1>
      </div>
      <grid></grid>
      <button class="restart" @click="restart">Restart</button>
    </div>
  </div>
</template>

<script>
import Grid from './components/Grid.vue'
export default {
  components: { Grid },
  name: 'app',
  data () {
    return {
      wins: {
        O: 0,
        X: 0
      }
    }
  },
  methods: {
    restart () {
      Event.$emit('clearCell')
      Event.$emit('gridReset')
    }
  },
  created () {
    Event.$on('win', winner => this.wins[winner]++)
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}

html, body {
  max-width: 100%;
  overflow-x: hidden;
}
body {
  background-color: #EEE0E5;
  color: #000;
  max-width: 100%;
  min-height: calc(100vh - 0px);
  font-family: 'Indie Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
}

#title{
  margin-bottom: 30px;
  text-align: center;
}

#app {
  margin: 0 auto;
  margin-top: 50px;
  max-width: 420px;
  color: #030102;

}
.grid {
  height:420px;
}

h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3.7em;
}

.restart {
  background-color: #EC4490;
  color: #000;
  border: 0px;
  margin: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.6em;
  font-weight: bold;
  padding: 17px;
  width: 100%;
}

.restart:hover {
  background-color: #FFC0CB;
  cursor: pointer;
}

.scoreboard {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20px;
  background-color: #FFC0CB;
  color: #000;
  padding: 20px;
  overflow-x: none;
  margin-left: -20px;

}

.scoreboard h2 {
  margin-right: 10px;
  margin-left: 10px;
}

.scoreboard span {
  float: right;
  font-size: 1.3em;
  font-weight: bold;
  margin-left: 5px;
}
</style>
