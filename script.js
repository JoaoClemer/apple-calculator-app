let disp = document.getElementById('display')

let operation = ''
let number1 = 0
let number2 = 0
let operationSelected = false

function comma() {
    if (disp.innerText.includes(',')) {
        return
    }
    disp.innerText = disp.innerText + ','
}

function clearClick() {
    disp.innerText = "0"
    number1 = 0
    number2 = 0
    operation = ''
    operationSelected = false
}

function negativeClick() {
    if (Number(disp.innerText) < 0) {
        disp.innerText = disp.innerText.replace('-', '')
        return
    }
    disp.innerText = "-" + disp.innerHTML
}

function percent() {
    let percent = Number(disp.innerText) / 100
    disp.innerText = percent.toString().replace('.', ',')
}

function division() {
    if (operation && number2 != 0) {
        equals()
    }
    number1 = disp.innerText.includes(',') ? Number(disp.innerText.replace(',', '.')) : Number(disp.innerText)
    operation = '/'
    operationSelected = true
}

function multiplication() {
    if (operation && number2 != 0) {
        equals()
    }
    number1 = disp.innerText.includes(',') ? Number(disp.innerText.replace(',', '.')) : Number(disp.innerText)
    operation = '*'
    operationSelected = true
}

function subtraction() {
    if (operation && number2 != 0) {
        equals()
    }
    number1 = disp.innerText.includes(',') ? Number(disp.innerText.replace(',', '.')) : Number(disp.innerText)
    operation = '-'
    operationSelected = true
}

function sum() {
    if (operation && number2 != 0) {
        equals()
    }
    number1 = disp.innerText.includes(',') ? Number(disp.innerText.replace(',', '.')) : Number(disp.innerText)
    operation = '+'
    operationSelected = true
}

function equals() {
    number2 = disp.innerText.includes(',') ? Number(disp.innerText.replace(',', '.')) : Number(disp.innerText)
    switch (operation) {
        case '+':
            var result = number1 + number2
            disp.innerText = result.toLocaleString('pt-BR')
            break
        case '-':
            var result = number1 - number2
            disp.innerText = result.toLocaleString('pt-BR')
            break
        case '*':
            var result = number1 * number2
            disp.innerText = result.toLocaleString('pt-BR')
            break
        case '/':
            var result = number1 / number2
            disp.innerText = result.toLocaleString('pt-BR')
            break
        default:
            disp.innerText = disp.innerText
    }
    number2 = 0
    number1 = 0
}

function seven() {
    if (operationSelected) {
        disp.innerText = "7"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '7'
    } else {
        disp.innerText = disp.innerText + "7"
    }
}

function eight() {
    if (operationSelected) {
        disp.innerText = "8"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '8'
    } else {
        disp.innerText = disp.innerHTML + "8"
    }
}

function nine() {
    if (operationSelected) {
        disp.innerText = "9"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '9'
    } else {
        disp.innerText = disp.innerHTML + "9"
    }
}

function four() {
    if (operationSelected) {
        disp.innerText = "4"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '4'
    } else {
        disp.innerText = disp.innerHTML + "4"
    }
}

function five() {
    if (operationSelected) {
        disp.innerText = "5"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '5'
    } else {
        disp.innerText = disp.innerHTML + "5"
    }
}

function six() {
    if (operationSelected) {
        disp.innerText = "6"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '6'
    } else {
        disp.innerText = disp.innerHTML + "6"
    }
}

function one() {
    if (operationSelected) {
        disp.innerText = "1"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '1'
    } else {
        disp.innerText = disp.innerHTML + "1"
    }
}

function two() {
    if (operationSelected) {
        disp.innerText = "2"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '2'
    } else {
        disp.innerText = disp.innerHTML + "2"
    }
}

function three() {
    if (operationSelected) {
        disp.innerText = "3"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerText = '3'
    } else {
        disp.innerText = disp.innerHTML + "3"
    }
}

function zero() {
    if (operationSelected) {
        disp.innerText = "0"
        operationSelected = false
    } else if (Number(disp.innerText) === 0) {
        disp.innerHTML = '0'
    } else {
        disp.innerText = disp.innerHTML + "0"
    }
}
