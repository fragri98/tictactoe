<template>
  <div>
    <div class="statusGame" :class="colorStatusGame">
      {{ messageStatusGame }}
    </div>
    <table class="grid">
      <tr>
        <cell name="1"></cell>
        <cell name="2"></cell>
        <cell name="3"></cell>
      </tr>
      <tr>
        <cell name="4"></cell>
        <cell name="5"></cell>
        <cell name="6"></cell>
      </tr>
      <tr>
        <cell name="7"></cell>
        <cell name="8"></cell>
        <cell name="9"></cell>
      </tr>
    </table>
  </div>
</template>

<script>
import Cell from './Cell.vue'
export default {
  components: { Cell },
  data () {
    return {
      //faccio partire come giocatore attivo O
      activePlayer: 'O',
      //inizialmente lo stato del gioco è impostato su turno
      statusGame: 'turn',
      messageStatusGame: `Fai la tua mossa`,
      //il colore dello stato di gioco varia a seconda dei casi:turno,vincita,pareggio
      colorStatusGame: 'turnStatus',
      //num mosse per ogni giocatore (max = 9)
      moves: 0,
      //celle da riempire
      cells: {
        1: '', 2: '', 3: '',
        4: '', 5: '', 6: '',
        7: '', 8: '', 9: ''
      },
      //combinazioni per vincere
      conditionsWin: [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],//righe
        [1, 4, 7], [2, 5, 8], [3, 6, 9],//colonne
        [1, 5, 9], [3, 5, 7]//diagonali
      ],
    }
  },
  computed: {
    //definisco la funzione che permette il cambio di giocatore
    nonActivePlayer () {
      if (this.activePlayer === 'O') {
        return 'X'
      }
      return 'O'
    }
  },
  watch: {
    //per settare il messaggio dello stato di gioco e il colore a seconda di come cambiano le property
    statusGame () {
      if (this.statusGame === 'win') {
        this.colorStatusGame = 'winStatus'
        return
      } else if (this.statusGame === 'draw') {
        this.colorStatusGame = 'drawStatus'
        this.messageStatusGame = 'Pareggio !'
        return
      }
      this.messageStatusGame = `Fai la tua mossa`
      return
    }
  },
  methods: {
    changePlayer () {
      this.activePlayer = this.nonActivePlayer
    },
    //controllo la vittoria utilizzando l'array condizioniVittoria

    gameWin () {
      Event.$emit('win', this.activePlayer)
      this.messageStatusGame = `${this.activePlayer} vince !`
      Event.$emit('freeze')
      return 'win'
    },
    //cambio lo stato del gioco verificando se è vittoria, pareggio o semplicemente turno di
    changeStatusGame () {
      if (this.checkWin()) {
        return this.gameWin()
        //se il gioco non è vinto ma tutte le celle sono riempite allora ho pareggio
      } else if (this.moves === 9) {
        return 'draw'
      }
      return 'turn'
    },
    equal () {
      var len = arguments.length;
      //scorre tra tutti gli argomenti e ritorna false se un argomento non è uguale al precedente
      for (var i = 1; i < len; i++){
        if (arguments[i] === '' || arguments[i] !== arguments[i-1])
        return false;
      }
      return true;
    }
  },
  created () {
    //ascolto evento lanciato in Cella.vue
    Event.$on('strike', (numberCell) => {
      //mette X o O nella cella cliccata, presente nell'array celle
      this.cells[numberCell] = this.activePlayer
      this.moves++
      //setto lo stato del gioco chiamando la funzione
      this.statusGame = this.changeStatusGame()
      this.changePlayer()
    })
    //ascolto evento reset
    Event.$on('gridReset', () => {
      Object.assign(this.$data, this.$options.data())
    })
  }
}
</script>

<style>
.grid {
  background-color: #030102;
  color: #fff;
  width: 100%;
  border-collapse: collapse;
}

.statusGame {
  margin: 0px;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #60DBE6;
  color: #000;
  text-align: center;
  font-size: 1.7em;
  font-weight: bold;
}

.turnStatus {
  background-color: #00B2EE;
}

.winStatus {
  background-color: #FF8C00;
}

.drawStatus {
  background-color: #BA55D3;
}

</style>
