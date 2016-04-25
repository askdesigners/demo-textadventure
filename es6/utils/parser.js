import Parser from './mingy';

var P = new Parser(); 

console.log(P);

P.addValidator('validDirection', function(lexeme) {

    var validDirections = ['north','south','east','west','n','s','e','w'];

    return {
        'success': (validDirections.indexOf(lexeme) != -1),
        'message': "That's not a direction I understand.\n"
    }
});
            

export default P;