
import axios from 'axios'
import * as types from '../mutation-types'

//state
 const state = {

  newRoundStarts:false, 
  countdownData:null,
  drawnOutBalls:[],
  lastRoundResults:[],
  additionalBetting:[]

} 
const getters = {

   getDrawnOutBalls(state){
      return state.drawnOutBalls
   },
   getCountdownTime(state){
      return state.countdownData
   },
   newRoundStarting(state){
      return state.newRoundStarts
   },
   getLastRoundResults(state){
      return state.lastRoundResults.slice(0,10)
   },
   getAdditionalBets(state){
      return state.additionalBetting
   }

}
//actions
 const actions = {

  getAllData({commit}){
    commit("GET_ALL_DATA")
  },

  getLastRounds({commit}){
     commit("GET_LAST_ROUNDS")
  }

 }
//mutations
const mutations = {
    [types.GET_LAST_ROUNDS](){
      axios.get('https://services-staging.7platform.com/web/events/1d0d6713-b7c9-4f07-ab23-3451a06e8989.json?count=11').then(function(response){
        state.lastRoundResults = response.data
            })
    },
    [types.GET_ALL_DATA](state){
      axios.get('https://gcm-fra-staging-1.7platform.com:8008/get-lb').then( function  ( response ) {  
        var   socketUrl  =  response.data.url ,
     socket  =  io ( socketUrl, { query:  'token=token&clientType=user' }); 
     socket.on ( 'connect' ,  function  () { 
     socket.emit ( 'subscribe' , {
     channel:   '1d0d6713-b7c9-4f07-ab23-3451a06e8989',  subChannels:  
     {  language:   'en' ,
       deliveryPlatform:   'Web' , 
        playerUuid:   null
    } })
    }); 
  socket.on ( '1d0d6713-b7c9-4f07-ab23-3451a06e8989' ,  function  ( response ) {
    if  ( response ) {
    var   eventType  =  response.type ;  
    var   data  =  response.data ; 
     switch ( eventType ) {
    case   'state' :
    state.additionalBetting = data.specialOdds
    break ; 
     case   'new' :
    state.drawnOutBalls = []
    state.newRoundStarts = false
    break ;  
    case   'ball' :
    state.drawnOutBalls.push(data.ball)
    break ; 
     case   'results' :
    axios.get('https://services-staging.7platform.com/web/events/1d0d6713-b7c9-4f07-ab23-3451a06e8989.json?count=11').then(function(response){
        state.lastRoundResults = response.data
            })
    break ;
    case   'countdown' :
    state.countdownData = (data.delay - 1)
    state.newRoundStarts = true
    break ; }
   }
     });
    });
 }
   
}

export default {
  state,
  actions,
  mutations,
  getters
}
