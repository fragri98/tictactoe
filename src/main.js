import Vue from 'vue'
import App from './App.vue'


window.Event = new Vue()

Vue.mixin({
  methods: {
    checkWin () {
      for (let i = 0; i < this.conditionsWin.length; i++) {
        let cw = this.conditionsWin[i]
        let cells = this.cells
        if (this.equal(cells[cw[0]], cells[cw[1]], cells[cw[2]])) {
          return true
        }
      }
      return false
    },
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
