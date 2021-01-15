<template>
  <td class="cell" @click="strike">{{ marker }}</td>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      //con frozen mi assicuro che una volta posizionato il marker questo non si possa cancellare o spostare
      //con false abilito il giocatore a posizionare il marker
      frozen: false,
      marker: ''
    }
  },
  methods: {
    strike () {
      if (! this.frozen) {
        // prende X o O dal parent Tabella
        this.marker = this.$parent.activePlayer
        this.frozen = true
        //lancio evento per segnalare che il marker è stato aggiunto
        Event.$emit('strike', this.name)
      }
    }
  },
  created () {
    Event.$on('clearCell', () => {
      this.marker = ''
      this.frozen = false
    })
    Event.$on('freeze', () => this.frozen = true)
  }
}
</script>
<style>
.cell {
  width: 33.333%;
  height: 90px;
  border: 4px solid #FFC0CB;
  font-size: 4em;
  color: #FFC0CB;
  text-align: center;
  font-family: 'Gochi Hand', sans-serif;
}

.cell:hover {
  background-color: #B0E2FF;
}

.cell::after {
  content: '';
  display: block;
}

.cell:first-of-type {
  border-left-color: transparent;
  border-top-color: transparent;
}

.cell:nth-of-type(2) {
  border-top-color: transparent;
}

.cell:nth-of-type(3) {
  border-right-color: transparent;
  border-top-color: transparent;
}

tr:nth-of-type(3) .cell {
  border-bottom-color: transparent;
}

</style>
