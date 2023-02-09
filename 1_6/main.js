date1 = new Date(1999, 10, 5, 15)
date2 = new Date()
date3 = new Date(2019, 12, 3, 12)
date4 = new Date(2000, 1, 1, 11)

console.log(date1.getHours() <= 12 ? "PM" : "AM")
console.log(date2.getHours() <= 12 ? "PM" : "AM")
console.log(date3.getHours() <= 12 ? "PM" : "AM")
console.log(date4.getHours() <= 12 ? "PM" : "AM")