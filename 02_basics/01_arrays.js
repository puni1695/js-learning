const arr = [0,1,2,3,4,5]
// console.log(arr);

const arr2 = new Array(1,2,3,4)


// console.log(arr[2]);

// Array Methods

arr2.push(5)
// console.log(arr2);

arr2.pop()
// console.log(arr2);

arr2.unshift(9)

// console.log(arr2);
arr2.shift()

// console.log(arr2);


// console.log(arr2.indexOf(3));

// const newArr = arr2.join()
// console.log(typeof newArr);

// console.log(arr2.slice(1, 3));
// console.log(arr2);

// console.log(arr2.splice(1, 3));
// console.log(arr2);

const myHeroes = ["Ant Man", "Iron Man", "Spider Man"]

const dcHeroes = ["Super Man", "Flash", "Bat Man"]

// myHeroes.push(dcHeroes)
// console.log(myHeroes);

// const allHeroes = myHeroes.concat(dcHeroes)

const allHeroes = [...myHeroes, ...dcHeroes]
// console.log(allHeroes);

const arr3 = [1,2,3, [4,5,6], 7, [6,7,[2,5]]]

const arr4 = arr3.flat(Infinity)
// console.log(arr4);

// console.log(Array.isArray("Puneet"));
// console.log(Array.from("Puneet"));
// console.log(Array.from({name: "Puneet"}))

let sc1= 100
let sc2= 200
let sc3= 300

console.log(Array.of(sc1, sc2, sc3));
