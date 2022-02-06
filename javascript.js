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


function input(value) {
    display.textContent += value
}
buttons.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.textContent < 10){
            input(e.textContent)
        }

    })
})
    