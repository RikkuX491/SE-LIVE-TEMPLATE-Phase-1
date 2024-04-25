// Solution code for Deliverables

// Deliverable # 1
const greeting = "Welcome to Flatburger"

// Deliverable # 2
const num1 = 7

// Deliverable # 3
let num2 = "14"

// Deliverable # 4
console.log(typeof num2)

// Deliverable # 5
num2 = Number(num2)

// Deliverable # 6
console.log(typeof num2)

// Deliverable # 7
const sum = num1 + num2

// Deliverable # 8
const sumString = `${num1} + ${num2} = ${sum}`

// Deliverable # 9
if(num1 === 7 || num1 === 49){
    console.log("That's a lucky number!")
}

// Deliverable # 10
else if(num1 > 7 && num1 < 49){
    console.log("That might be a lucky number!")
}

// Deliverable # 11
else{
    console.log("That's not a lucky number.")
}

// Deliverable # 12
const luckyPhrase = num1 === 7 && num2 === 7 ? "Lucky Sevens!" : "Better luck next time"
console.log(luckyPhrase)