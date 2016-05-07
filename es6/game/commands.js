import parser from '../utils/parser';

var commands = function (Game) {
  
  parser.addCommand('go')
      .set('syntax', ['go <validDirection:direction>','move <validDirection:direction>','walk <validDirection:direction>','run <validDirection:direction>'])
      .set('logic', function (args, valid, result) {
        console.log('>>>>', args, valid, result);
          if (valid) {
              Game.moveTo(args.direction);
          } 
          // else {
          //     Game.rejectInput(result);
          // }
      });
      
  parser.addCommand('take')
      .set('syntax', ['take <validThing:thing>'])
      .set('logic', function (args, valid, result) {
        console.log('>>>>', args, valid, result);
          if (valid) {
              Game.pickupThing(args.thing);
          } 
          // else {
          //     Game.rejectInput(result);
          // }
      });
      
  parser.addCommand('drop')
      .set('syntax', ['drop <validThing:thing>', 'drop the <validThing:thing>', 'put down the <validThing:thing>'])
      .set('logic', function (args, valid, result) {
        console.log('>>>>', args, valid, result);
          if (valid) {
              Game.putDownThing(args.thing);
          } 
          // else {
          //     Game.rejectInput(result);
          // }
      });
      
  // parser.addCommand('walk')
  //     .set('syntax', ['walk <validDirection:direction>'])
  //     .set('logic', function (args, valid, result) {
  //         if (valid) {
  //             Game.moveTo(args.direction);
  //         } else {
  //             Game.rejectInput(result);
  //         }
  //     });
      
  // parser.addCommand('run')
  //     .set('syntax', ['run <validDirection:direction>'])
  //     .set('logic', function (args, valid, result) {
  //         if (valid) {
  //             Game.moveTo(args.direction);
  //         } else {
  //             Game.rejectInput(result);
  //         }
  //     });
      
  // parser.addCommand('move')
  //     .set('syntax', ['move <validDirection:direction>'])
  //     .set('logic', function (args, valid, result) {
  //         if (valid) {
  //             Game.moveTo(args.direction);
  //         } else {
  //             Game.rejectInput(result);
  //         }
  //     });

};
    
export default commands;