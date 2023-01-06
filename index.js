
let dataToConvert = 0
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", function() {
    dataToConvert = inputEl.value
    meterToFeet(dataToConvert)
    literToGallon(dataToConvert)
    kilogramToPounds(dataToConvert)
    
})

function meterToFeet(input) {
    let convertedLength = ""
    let feet = input
    let meters = input
    feet = input * 3.281
    meters = input / 3.281
    convertedLength = ` ${input} meters = ${feet.toFixed(3)} feet | ${input} feet = ${meters.toFixed(3)} meters `
    lengthResult.innerHTML = convertedLength
}
function literToGallon(input) {
    let convertedVolume = ""
    let gallon = input
    let liter = input
    gallon = input * 0.264
    liter = input / 0.264
    convertedVolume = ` ${input} liters = ${gallon.toFixed(3)} gallons | ${input} gallons = ${liter.toFixed(3)} liters `
    volumeResult.innerHTML = convertedVolume
}
function kilogramToPounds(input) {
    let convertedMass = ""
    let pounds = input
    let kilograms = input
    pounds = input * 2.204
    kilograms = input / 2.204
    convertedMass = ` ${input} kilograms = ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilograms.toFixed(3)} kilograms `
    massResult.innerHTML = convertedMass
}