var state = {
  actors: {
    // keys by names of ids : user objects
  },
  places: {
    
  }
}

var player = {
  position: 'a4',
  holding: [],
  health: 13
}

// each place an objects
// this is a lookup map haha of the objects 
// use "blockedTo" prop to make toX props

// audio should be Diegetic. Ship noise, machines etc, nothing too temporal, but ambient.

var map = {
   a1:{
     description: "you are standing in square a1",
     action: object.canEnter,// maybe link a function here to happen in this place
     toW: 'null', // blocked from here... or a function to check if open?
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   a2:{
     description: "you are standing in square a2",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   a3:{
     description: "you are standing in square a3",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   a4:{
     description: "you are standing in square a4",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   b1:{
     description: "you are standing in square b1",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   b2:{
     description: "you are standing in square b2",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   b3:{
     description: "you are standing in square b3",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   b4:{
     description: "you are standing in square b4",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   c1:{
     description: "you are standing in square c1",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   c2:{
     description: "you are standing in square c2",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   c3:{
     description: "you are standing in square c3",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   c4:{
     description: "you are standing in square c4",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   d1:{
     description: "you are standing in square d1",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   d2:{
     description: "you are standing in square d2",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   d3:{
     description: "you are standing in square d3",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   },
   d4:{
     description: "you are standing in square d4",
     action: function(){},// maybe link a function here to happen in this place
     toW: 'null',
     toE: 'a2',
     toS: 'b2',
     toN: 'd3'
   }
  
};