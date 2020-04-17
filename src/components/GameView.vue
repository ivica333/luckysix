<template>
<div class="game-view">
   <Balls></Balls>
</div>
</template>
<script>
import Balls from './Balls'
  export default {
    components: {
        Balls
      },
    data () {
      return {
    
      }
    },
    created(){

       this.$store.dispatch("getAllData")
       this.$store.dispatch("getLastRounds")
 
    }
    
  }
  
</script>
<style lang="less" scoped>

@import '../less/variables.less';

.game-view{
  background-color: @backgroundColor;
}
</style>





