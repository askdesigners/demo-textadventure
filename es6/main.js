import {observable} from "mobx";
import G from './game/index';

window.game = G;
var messageList = document.getElementById("output");
var form = document.getElementById('input');
var inputField = document.getElementById('inputBox');

window.game.addResponseHandler(function(resp){
  var newP = document.createElement("p");
  newP.classList.add('response');
  newP.innerHTML = resp.message;
  messageList.appendChild(newP);
  messageList.scrollTop = messageList.scrollHeight;
});

form.addEventListener('submit', function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    var newP = document.createElement("p");
    newP.classList.add('request');
    newP.innerHTML = inputField.value;
    messageList.appendChild(newP);
    messageList.scrollTop = messageList.scrollHeight;
    
    window.game.parseText(inputField.value);
    inputField.value = '';
});