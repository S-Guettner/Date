let newDate = new Date()
newDate.setFullYear(2222)
newDate.setMonth(9)
newDate.setDate(23)
newDate.setHours(13)
newDate.setMinutes(25)
newDate.setSeconds(11)
const date1 = document.querySelector("#date1").innerHTML = newDate

let date2 = newDate
date2.setFullYear(2123)
date2.setMonth(1)
date2.setDate(24)
const date2Output = document.querySelector("#date2").innerHTML = date2

let date3 = date2
date3.setMonth(2)
const date3Output = document.querySelector("#date3").innerHTML = date3

let date4 = date3;
date4.setDate(3)
const date4Output = document.querySelector("#date4").innerHTML = date4

let date5 = new Date()
date5.setDate(date5.getDate() + 30)
const date5Output = document.querySelector("#date5").innerHTML = date5