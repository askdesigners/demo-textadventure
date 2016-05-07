import parser from '../utils/parser';

var validators = function (Game) {
  
  var validThings = [];
  var validDirections = ['north', 'south', 'east', 'west', 'n', 's', 'e', 'w'];
  
  for (var ttt of Object.keys(Game.things.collection)) {
    validThings.push(ttt);
  }

  parser.addValidator('validDirection', function (lexeme) {
    return {
      'success': (validDirections.indexOf(lexeme) != -1),
      'message': "That's not a direction I understand.\n"
    }
  });

  parser.addValidator('validThing', function (lexeme) {
    return {
      'success': (validThings.indexOf(lexeme) != -1),
      'message': "That's not thing you can take.\n"
    }
  });
};

export default validators;