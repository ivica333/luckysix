<template>
   <div>
    
     <v-container fluid>
        <v-layout row wrap v-for="bets in getAdditionalBets" :key="bets.id">
          <v-flex xs12>
            <div class="additional-betting" v-if="bets.id == 5">
                  <h2>{{bets.name}}</h2>
                 <p>PICK 1 COLOR FOR {{bets.odds[0]}}X STAKE</p>
                 <p>PICK 2 COLOR FOR {{bets.odds[1]}}X STAKE</p>
                 <p>PICK 3 COLOR FOR {{bets.odds[2]}}X STAKE</p>
                 <p>PICK 4 COLOR FOR {{bets.odds[3]}}X STAKE</p>
            </div> 
          </v-flex>
          <v-flex xs12>
            <div class="additional-betting" v-if="bets.id == 6">
                  <h2>{{bets.name}}</h2>
                 <p>UNDER {{bets.limit}} FOR {{bets.odds}}X STAKE</p>
                 <p>OVER {{bets.limit}} FOR {{bets.odds}}X STAKE</p>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="additional-betting" v-if="bets.id == 7">
                  <h2>{{bets.name}}</h2>
                 <p>EVEN FOR {{bets.odds}}X STAKE</p>
                 <p>ODD FOR {{bets.odds}}X STAKE</p>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="additional-betting" v-if="bets.id == 8">
                  <h2>{{bets.name}}</h2>
                 <p>UNDER {{bets.limit}} FOR {{bets.odds}}X STAKE</p>
                 <p>OVER {{bets.limit}} FOR {{bets.odds}}X STAKE</p>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="additional-betting" v-if="bets.id == 10">
                  <h2>{{bets.name}}</h2>
                 <p>PICK FIRST NUMBER FOR {{bets.odds}}X STAKE</p>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="additional-betting" v-if="bets.id == 11">
                  <h2>{{bets.name}}</h2>
                 <p>EVEN FOR {{bets.odds}}X STAKE</p>
                 <p>ODD FOR {{bets.odds}}X STAKE</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      
   </div>
</template>
<script>
import { mapGetters } from 'vuex'

import axios from 'axios'
  export default {
    data () {
      return {
      
      }
    },
    computed:{
     ...mapGetters(["getAdditionalBets"])
    }
  }
  
</script>
<style lang="less" scoped>

@import '../less/variables.less';

.additional-betting h2,p{
  color: @lastRoundsColor;
}
</style>