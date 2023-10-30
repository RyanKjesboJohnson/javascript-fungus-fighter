// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 0;
let apCount = 0;
let fungusHPDamage = 10;
let apCost = 0;

function populateFungusHP(){
    let currentHP = document.getElementsByClassName('hp-text')[0].innerHTML.split(" ", 1);
    currentHP -= fungusHPDamage;
    document.getElementsByClassName('hp-text')[0].innerHTML = `${currentHP} HP`}

function attack
populateFungusHP();

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
//create variables for AP and HP

onReady()
