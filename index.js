const readlineSync = require('readline-sync')

const billAmount = Number(readlineSync.question('How much was the bill?'))
let tipPercent = Number(readlineSync.question('What percentage do you want to tip?'))
const partySize= Number(readlineSync.question('How many people are in your party?'))

console.log(`You said the bill was $${billAmount.toFixed(2)}.`)
console.log(`You said you wanted to tip ${tipPercent.toFixed(2)}%.`)

if (partySize >= 6) {
    tipPercent = 18
    console.log(`A 18% fixed tip will apply to partys bigger than 6`)
}else{

}

console.log(`You said there were ${partySize} people in your party.`)

const tipAmount = billAmount  * (tipPercent / 100)
const total = tipAmount + billAmount
const yourShare = total / partySize

console.log(`The tip should be $${tipAmount.toFixed(2)}.`)
console.log(`Your total is check should be  $${total.toFixed(2)}.`)
console.log(`Each person should pay $${yourShare.toFixed(2)}.`)