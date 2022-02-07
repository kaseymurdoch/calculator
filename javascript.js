const display = document.getElementById(`display`)
const log = document.getElementById(`log`)
const zero = document.getElementById(`0`)
const one = document.getElementById(`1`)
const two = document.getElementById(`2`)
const three = document.getElementById(`3`)
const four = document.getElementById(`4`)
const five = document.getElementById(`5`)
const six = document.getElementById(`6`)
const seven = document.getElementById(`7`)
const eight = document.getElementById(`8`)
const nine = document.getElementById(`9`)
const add = document.getElementById(`add`)
const subtract = document.getElementById(`subtract`)
const multiply = document.getElementById(`multiply`)
const divide = document.getElementById(`divide`)
const equals = document.getElementById(`equals`)
const decimal = document.getElementById(`decimal`)
const openParantheses = document.getElementById(`openParentheses`)
const closeParantheses = document.getElementById(`closeParentheses`)
const percent = document.getElementById(`percent`)
const buttons = document.querySelectorAll(`button`)
let displayValue = 0
let storedValue = 0
let operatorText = ``
let temp = ``

function addFunc(a, b) {
    return a + b
}
function subtractFunc(a, b) {
    return a - b
}
function multiplyFunc(a, b) {
    return a * b
}
function divideFunc(a, b) {
    return a / b
}

// Iterates through each button and does something depending on which you click on
buttons.forEach((e) => {
    e.addEventListener('click', () => {
        let clickedButton = e.textContent

        if (clickedButton < 10){
            log.textContent += clickedButton
            input(clickedButton)
            enableOp()
        }
        if (clickedButton === `C`) {
            store(clickedButton)
            operatorText = ``
            displayValue = `0`
            log.textContent = ``
            enableNum()
            enableOp()
        }
        if (clickedButton === `=`) {
            // If an operation has already completed. Do nothing
            if (operatorText === ``) {
                return
            }
            else {
                // Converts the display strings to numbers then operates with the given operator
                disableNum()
                log.textContent += clickedButton
                operate(operatorText)
                log.textContent += displayValue

            }
        }
        if (clickedButton === `+`|| clickedButton === `-`|| clickedButton === `/`|| clickedButton === `*`) {
            disableOp()
            // If an operator has already been clicked before, we make future operators act as equals signs as well
            if (operatorText !== ``) {
                // If an operation has already completed and you want to operate on the result, wipe everything on log except the result
                if (log.textContent.includes(`=`)) {
                    log.textContent = `${displayValue}`
                }
                log.textContent += clickedButton
                // Temp makes sure operate() doesnt clear the operator stored value. Does not seem like this was needed since store() will make operatorText = (e)
                // temp = operatorText
                operate(operatorText)
                // operatorText = temp
                store(clickedButton)
                enableNum()
            }
            else {
                // If an operation has already completed and you want to operate on the result, wipe everything on log except the result
                if (log.textContent.includes(`=`)) {
                    if (displayValue === `Infinity` || displayValue === `NaN`) {
                        displayValue = `0`
                    }
                    log.textContent = `${displayValue}`
                }
                log.textContent += clickedButton
                store(clickedButton)
                enableNum()
            }
        }
    })
})


// Value on display becomes stored/erased, operator that was clicked is stored
function store(value) {
    storedValue = displayValue
    display.textContent = ``
    operatorText = value
}

// Clicking on number will add it to display and tack onto displayValue
function input(value) {
    display.textContent += value
    displayValue = display.textContent
    console.log(displayValue)
}

function operate(operator) {
    // Convert display strings to numbers that can be operated on
    storedValue = parseInt(storedValue, 10)
    displayValue = parseInt(displayValue, 10)
    // Use the numbers to operate then display them
    if (operator === `+`) {
        display.textContent = addFunc(storedValue, displayValue)   
    }
    if (operator === `-`) {
        display.textContent = subtractFunc(storedValue, displayValue)
    }
    if (operator === `*`) {
        display.textContent = multiplyFunc(storedValue, displayValue)
    }
    if (operator === `/`) {
        display.textContent = divideFunc(storedValue, displayValue)
    }

    operatorText = ``
    displayValue = display.textContent
    
    if (displayValue === `Infinity` || displayValue === `NaN`) {
        display.textContent = `Bruh that is illegal`
    }
}
function disableOp() {
    divide.disabled = true
    add.disabled = true
    subtract.disabled = true
    multiply.disabled = true
    equals.disabled = true
}
function enableOp() {
    divide.disabled = false
    add.disabled = false
    subtract.disabled = false
    multiply.disabled = false
    equals.disabled = false
}
function disableNum() {
    one.disabled = true
    two.disabled = true
    three.disabled = true
    four.disabled = true
    five.disabled = true
    six.disabled = true
    seven.disabled = true
    eight.disabled = true
    nine.disabled = true
    zero.disabled = true
    decimal.disabled = true
}
function enableNum() {
    one.disabled = false
    two.disabled = false
    three.disabled = false
    four.disabled = false
    five.disabled = false
    six.disabled = false
    seven.disabled = false
    eight.disabled = false
    zero.disabled = false
    nine.disabled = false
    decimal.disabled = false
}