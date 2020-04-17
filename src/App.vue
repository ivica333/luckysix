<template>
<v-app>
  <v-content>
    <GameView></GameView>
  </v-content>
</v-app> 
</template>

<script>
import GameView from './components/GameView'

export default {
  name: 'App',
  components: {
    GameView
  },
  data () {
    return {
      //
    }
  }
}
</script>
