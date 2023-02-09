let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
]

let wochenTag = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat"
]

let date = new Date()
console.log(date)
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(wochenTag[date.getDay()])
console.log(monate[date.getMonth()])

let minutesOutput = date.getMinutes()
minutesOutput = minutesOutput <= 9 ? "0" + minutesOutput : minutesOutput
let secondsOutput = date.getSeconds()
secondsOutput = secondsOutput <= 9 ? "0" + secondsOutput : secondsOutput
let dayTime = date.getHours() <= 12 ? "PM" : "AM"

const day = document.querySelector("#day").innerHTML = wochenTag[date.getDay()]
const hour = document.querySelector("#hour").innerHTML = date.getHours()
const minutes = document.querySelector("#minutes").innerHTML = minutesOutput
const seconds = document.querySelector("#seconds").innerHTML = secondsOutput
const dayTimeOutput = document.querySelector("#dayTime").innerHTML = dayTime