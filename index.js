// increment count when "INCREMENT" button is cliked
// in the button element from html add an onclick action that connects to a 
//  fucntion in this file called "increment"
let count = 0
//variable for stand in for the elemnet that displays count in html
let countEl = document.getElementById("count-el")
let savedLs = document.getElementById("saved-ls")
function increment(){
    count += 1
    //change tect of count-el in html to count variable
    countEl.innerText = count
    
}

function save(){
    
    //pint in cosole
    console.log(count);
}

function history(){
    let countStr = count + " - "
    //display the history of saved values in browser
    savedLs.innerText += countStr
    count = 0
    countEl.innerText = count
}
//test segment
//increment();
//console.log(count)