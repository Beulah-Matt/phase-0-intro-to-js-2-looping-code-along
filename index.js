// Code your solutions in this file
 
const names= ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    var cardMessages=[]
  for (let i = 0; i < names.length; i++) {
    var messages = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    console.log (" Yellow" + messages);
    cardMessages.push(messages);
    debugger;
  }

  return cardMessages;
}
writeCards(names);

//While loop
function countDown(){
let i=10;
while (i> -1){
    console.log(i--);
}
}
countDown();