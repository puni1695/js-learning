//   object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Puneet",
    "lastName": "Kumar Singh",
    [mySym]: "myKey1",
    dob: "16/12/1997",
    location: "Aligarh",
    isLoggedIn: false
}


// console.log(jsUser.location);
// console.log(jsUser["name"]);
// console.log(jsUser["lastName"]);
// console.log(jsUser[mySym]);

// jsUser.location = "Hyderabad"
// Object.freeze(jsUser)
jsUser.location = "Hyderabad"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello Puneet!!");
// }
// jsUser.greeting2 = function(){
//     console.log(`Hello Puneet ${this.lastName}!!`);
// }
// jsUser.greeting2();


//   Singleton

// const user = new Object()
const user = {}
user.id = "123qwe"
user.name = "Poonam"
user.isActive = false
// console.log(user);

const regUser = { 
    email: "poo@gmail.com",
    userfName: {
        regfName: {
            fName: "Poonam",
            lName: "Singh"
        }
    }
}

// console.log(regUser.userfName.regfName.fName);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "c", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {... obj1, ...obj2}
// console.log(obj1);
// console.log(obj3);

console.log(user);

console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isActive'));



