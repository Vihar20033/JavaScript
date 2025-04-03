let datetime = new Date()
console.log(datetime);
console.log(datetime.toString());
console.log(datetime.toDateString());
console.log(datetime.toISOString());
console.log(datetime.toJSON());
console.log(datetime.toLocaleDateString());
console.log(datetime.toLocaleTimeString());

//Month started from 0 => january

let mydatetime = new Date(2023,0,23,5,40)
console.log(mydatetime.toLocaleString());


let time = Date.now()
console.log(time);
console.log(mydatetime.getTime()); //Total time in milliseconds
console.log(Math.floor(mydatetime.getTime()/1000)); // time seconds




