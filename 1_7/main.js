let date = new Date()
let dayOutput = date.getDay()
let monthOutput = date.getMonth()

const year = document.querySelector("#year").innerHTML = date.getFullYear()

monthOutput = monthOutput <= 9 ? "0" + monthOutput : monthOutput
const month = document.querySelector("#month").innerHTML = monthOutput


dayOutput = dayOutput <= 9 ? "0" + dayOutput : dayOutput
const day = document.querySelector("#day").innerHTML = dayOutput



