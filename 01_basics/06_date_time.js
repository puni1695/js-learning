const myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

const myCreatedDate = new Date(2023, 16, 23)
// console.log(myCreatedDate.toDateString());
const myNewDate = new Date("12-01-2023")
// console.log(myNewDate.toDateString());


let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));
console.log(myNewDate.getMonth() + 1);
console.log(myCreatedDate.toLocaleString('default', {
    weekday: "long", 
}))

