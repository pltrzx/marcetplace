'use strict'
let counter = 0

const button_plus = document.querySelector('#Plus') 
const button_minus = document.querySelector('#Minus')
const h1 = document.querySelector('h1')

console.log(button_plus, button_minus,h1)
function getClickPlus() {
    counter ++
    h1.innerText = counter
}

function getClickMinus() {
    if (counter >0 ){
        
    counter --
    h1.innerText = counter

    }

    
}
button_plus.onclick = getClickPlus
button_minus.onclick = getClickMinus