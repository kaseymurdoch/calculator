const display = document.getElementById(`display`)
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
const openParantheses = document.getElementById(`openParantheses`)
const closeParantheses = document.getElementById(`closeParantheses`)
const percent = document.getElementById(`percent`)
const buttons = document.querySelectorAll(`button`)
console.log(buttons)
let displayValue = 0
let storedValue = 0
let operator

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


buttons.forEach((e) => {
    e.addEventListener('click', () => {
        console.log(e)
        if (e.textContent < 10){
            input(e.textContent)
        }
        if (e.textContent === `+`) {
            storedValue = displayValue
            display.textContent = ``
            operator = `+`
        }
        if (e.textContent === `-`) {
            storedValue = displayValue
            display.textContent = ``
            operator = `-`
        }
        if (e.textContent === `*`) {
            storedValue = displayValue
            display.textContent = ``
            operator = `*`
        }
        if (e.textContent === `/`) {
            storedValue = displayValue
            display.textContent = ``
            operator = `/`
        }
        if (e.textContent === `=`) {
            storedValue = parseInt(storedValue, 10)
            displayValue = parseInt(displayValue, 10)
            operate(operator)
        }
    })
})

function input(value) {
    display.textContent += value
    displayValue = display.textContent
    console.log(displayValue)
    return displayValue
}

function operate(a) {
    if (a === `+`) {
        display.textContent = addFunc(storedValue, displayValue)
    }
    if (a === `-`) {
        display.textContent = subtractFunc(storedValue, displayValue)
    }
    if (a === `*`) {
        display.textContent = multiplyFunc(storedValue, displayValue)
    }
    if (a === `/`) {
        display.textContent = divideFunc(storedValue, displayValue)
    }
    displayValue = display.textContent
    console.log(displayValue)
}