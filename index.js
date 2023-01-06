
let dataToConvert = 0
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", function() {
    dataToConvert = inputEl.value

    lengthResult.innerHTML = convert(dataToConvert, 3.281, "meters", "feet")
    
    volumeResult.innerHTML = convert(dataToConvert, 0.264, "liters", "gallons")

    massResult.innerHTML = convert(dataToConvert, 2.204, "kilograms", "pounds")
    
})

function convert(input, conversionRate, stringOne, stringTwo) {
    
    let convertedString = ""
    let metricOne = input
    let metricTwo = input

    metricOne = input * conversionRate
    metricTwo = input / conversionRate

    convertedString = ` ${input} ${stringOne} = ${metricOne.toFixed(3)} ${stringTwo} | ${input} ${stringTwo} = ${metricTwo.toFixed(3)} ${stringOne} `
    return convertedString
}
