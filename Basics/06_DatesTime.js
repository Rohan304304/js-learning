const date = new Date()
// console.log(date);

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString())
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

let day = new Date(2023, 9, 25,10,23,5)
// console.log(day.toLocaleString());
// let day1 = new Date("08-30-2025")
// console.log(day.toLocaleString());

let timestamp = Date.now()
console.log(timestamp);
console.log(day.getTime());
console.log(day.getMonth() +1);

console.log(`${day.getMonth()} kjvb`)

console.log(day.toLocaleString('default',{weekday: "long"}))





