let num_1 = 6;
let num_2 = 7;
let sum = num_1+num_2;
let blackJack = false;
// is alive tracks failed round
let isAlive = true;
//message variab;e
let message = "";
if(sum <= 20){
    message = "draw card?";
    
}
else if(sum === 21){
    message = "win!";
    
    blackJack = true;
}
else{

    message = "you lose";
    
    isAlive = false;
}

console.log("blackJack win: " + blackJack);
console.log("isAlive: " + isAlive);
console.log(message);