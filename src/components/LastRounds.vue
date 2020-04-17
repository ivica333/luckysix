<template>
   <div class="results">
   
     <v-layout row wrap  v-for="event in getLastRoundResults" :key="event.eventId">
       <v-flex xs12 md12 lg12>
          <div>
             <div class="result-titles">Event {{event.eventId}} | {{getEventTime(event.eventTime)}}</div> 
             <hr>
          </div>
       </v-flex>

       <v-flex xs8 md8 lg8>
         <p class="result-titles">Preballs</p>
       </v-flex> 
       <v-flex xs8 md6 lg6>
          <div class="preballs" v-for="preball in event.balls.slice(0,5)" :key="preball.ball">
         
           <div>{{preball.ball}}</div>
         
        </div>
       </v-flex>
       <v-flex xs8 md8 lg8>
          <p class="result-titles">Drawn balls</p>
       </v-flex>
       <v-flex xs8>
         <div class="preballs" v-for="preball in event.balls" :key="preball.ball">
          
          <div> {{preball.ball}}</div>
         
        </div> 
       </v-flex> 
          <v-flex xs4 md4 lg4>
         <div class="additional-results">
           <p>First Ball Color</p>
           <p>Pre Numbers Sum {{getPreballsSum(event.balls.slice(0,5))}}</p>
           <p>First Number Even/Odd {{getFirstEvenOdd(event.balls.slice(0,1))}}</p>
           <p>First Number (-24,5+) {{getFirstNumLimit(event.balls.slice(0,1))}}</p>
           <p>Even/Odd Pre Numbers {{getPreballsEvenOdd(event.balls.slice(0,5))}}</p>
         </div>
        </v-flex>
       </v-layout>
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
    methods:{
       getEventTime(timestamp){
         var date = new Date(timestamp);
         var year = date.getFullYear()
         var month = date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)
         var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
         var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
         var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
         return  year+"-"+day+"-"+month+" "+hours+":"+minutes
  },
       getPreballsSum(preballs){
         var limit = 122.5
         var sum = 0
         for (let index = 0; index < preballs.length; index++) {
              sum += preballs[index].ball    
           }
         return sum > limit ? "OVER" : "UNDER"
        },
        getFirstEvenOdd(preballs){
         var firstNum;
         for (let index = 0; index < preballs.length; index++) {
              firstNum = preballs[index].ball    
           }
         return firstNum % 2 == 0  ? "EVEN" : "ODD"
        },
        getFirstNumLimit(preballs){
         var firstNum;
         var limit = 24.5
         for (let index = 0; index < preballs.length; index++) {
              firstNum = preballs[index].ball    
           }
         return firstNum > limit ? "OVER" : "UNDER"
        },
        getPreballsEvenOdd(preballs){
         var even = 0
         var odd = 0
         for (let index = 0; index < preballs.length; index++) {
              if(preballs[index].ball % 2 == 0){
                even++
              }else{
                odd++
              }
           }
         return even > odd ? "EVEN" : "ODD"
        }

  },
    computed:{
     ...mapGetters(["getLastRoundResults"])
    }
  }
  
</script>
<style lang="less" scoped>

@import '../less/variables.less';

.preballs div{
  text-align: center;
  line-height: 27px;
  border: 1px solid @startBallsColor; 
  float: left;
  width:@resultBallSize;
  height: @resultBallSize;
  margin-left: @ballSpace;
  border-radius: @ballRadius;
  color: @startBallsColor;
}

.results{
  margin-top: 10px;
  background-color: lighten(@backgroundColor,20%);
}
.result-titles{
  color: @textColorWhite;
}
.additional-results p{
  color:@lastRoundsColor;
}
</style>