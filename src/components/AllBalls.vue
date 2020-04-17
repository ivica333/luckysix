<template>
<div>
  
    <v-layout row align-center justify-space-around>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.redBalls" :key="ball">
          <div :class="{reds:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.greenBalls" :key="ball">
          <div :class="{greens:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.blueBalls" :key="ball">
          <div :class="{blues:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.purpleBalls" :key="ball">
          <div :class="{purples:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.brownBalls" :key="ball">
          <div :class="{browns:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.yellowBalls" :key="ball">
          <div :class="{yellows:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.orangeBalls" :key="ball">
          <div :class="{oranges:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
      <v-flex xs6 md1 lg6>
        <div class="ball" v-for="ball in allBall.whiteBalls" :key="ball">
          <div :class="{whites:displayBall(ball)}" class="balls">{{ball}}</div>
        </div>
      </v-flex>
    </v-layout> 
</div>

</template>
<script>
import { mapGetters } from 'vuex'
import  ballColors  from '../ballList/ballcolor'
import axios from 'axios'

  export default {
    data () {
      return {
         allBall:ballColors
      }
    },
    methods:{
      displayBall(ind){
          return this.getDrawnOutBalls.some((nums) => {
              return nums == ind
      })
    }
   },
    computed:{
      ...mapGetters(["getDrawnOutBalls"])
    }
    
  }
  
</script>
<style lang="less" scoped> 

@import '../less/variables.less';
@import '../less/mixins.less'; 

.ball{
  padding: @ballSpace;
}
.balls{
 color: @startBallsColor;
 text-align: center;
 line-height: 37px;
 border: 1px solid @startBallsColor; 
 width:@ballSize;
 height: @ballSize;
 border-radius: 100px;
}
.reds{
  .drawn-ball(@redBall);
}
.greens{
  .drawn-ball(@greenBall);
}
.blues{
  .drawn-ball(@blueBall);
}
.purples{
  .drawn-ball(@purpleBall);
}
.browns{
  .drawn-ball(@brownBall);
}
.yellows{
  .drawn-ball(@yellowBall);
}
.oranges{
  .drawn-ball(@orangeBall);
}
.whites{
  .drawn-ball(@textColorWhite);
}
</style>





