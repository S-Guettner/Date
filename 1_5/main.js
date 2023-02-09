let list = [
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

const monatsName = (year,month,day) => {
    let date = new Date(`${month} ${day} , ${year}`)
    let monthOutput = list[date.getMonth()]
    return monthOutput
}
console.log(monatsName(2001,3,4))
console.log(monatsName(2019,12,24))
console.log(monatsName(1410,07,15))