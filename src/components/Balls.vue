<template>
<div>
<v-toolbar flat class="countdown">
    <v-toolbar-title class="countdown-time">Round starting in {{minutes}}:{{seconds}}</v-toolbar-title>
</v-toolbar>
<v-tabs color="#000000" class="tab" hide-slider>

    <v-tab active-class="tab" class="white--text" href="#tab-1"> <v-icon color="white">apps</v-icon> Betting</v-tab>

    <v-tab active-class="tab" class="white--text" href="#tab-2"><v-icon color="white">fapps</v-icon> Additional betting</v-tab>
<v-tab-item :value="'tab-1'">

       <AllBalls></AllBalls>

</v-tab-item>
     <v-tab-item :value="'tab-2'">
         <AdditionalBetting></AdditionalBetting>
    </v-tab-item>
  </v-tabs>
<v-toolbar flat id="last-round-title">
    <v-toolbar-title >Last 10 rounds</v-toolbar-title>
</v-toolbar>  
  <LastRounds></LastRounds>
</div>
</template>
<script>
import { mapGetters  } from 'vuex'
import AllBalls from './AllBalls'
import LastRounds from './LastRounds'
import AdditionalBetting from './AdditionalBetting'
import axios from 'axios'

  export default {
    data () {
      return {
     minutes:"00",
     seconds:"00",
     interval:null
      }
    },
    components:{
      AllBalls,
      LastRounds,
      AdditionalBetting
    },
    computed:{
     ...mapGetters(["getCountdownTime","newRoundStarting"]),
    },
    created(){  
     this.interval = setInterval(() => {
       if(this.newRoundStarting){
         this.minutes = parseInt(this.getCountdownTime / 60)
         this.seconds = this.getCountdownTime % 60
         this.minutes = this.minutes < 10 ? "0" +this.minutes : this.minutes
         this.seconds = this.seconds < 10 ? "0" +this.seconds : this.seconds 
         this.$store.state.modul.countdownData--
         if(this.$store.state.modul.countdownData == 0){
             clearInterval(this.interval)
         }
       }
     },1000)
     
    }
  }
  
</script>

<style lang="less" scoped>

@import '../less/variables.less';

.countdown{
  margin-bottom: 5px;
  color: @textColorWhite;
  background-color: lighten(@backgroundColor,20%);
}

.tab{
  background-color: lighten(@backgroundColor,20%);
}
#last-round-title{
  background-color: @lastRoundsColor;
  color: @textColorWhite;
  }
  </style>