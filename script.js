const generateEl = document.getElementById('generate')
const resultEl = document.getElementById('result')
const clipboardEl = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol:getRandomSymbol
}


generateEl.addEventListener('click', () => {
    //+ changes the data type of length to number
    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = upper + lower + number + symbol
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
  

    if (typesCount === 0) {
        return ''
    }

    for (i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunctions[funcName]()
        });
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}







function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
    
}

// console.log(getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol())