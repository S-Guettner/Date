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
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
]

let date = new Date()
console.log(date)
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(wochenTag[date.getDay()])
console.log(monate[date.getMonth()])