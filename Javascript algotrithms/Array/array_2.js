// Arrayı kopyalayan funnksiya yazın 
let numbers=[1,2,3,4,5,6,7]
// 1 way
// numberCopy=[...numbers]
// console.log(numberCopy)

// 2 way
// let numberCopy=[];
// for(let i=0; i<numbers.length; i++){
//     if(numberCopy[i]=numbers[i]){
//         console.log(numberCopy)
//     }
// }
//  3 way
// let numberCopy=numbers.map((num) => num)
// console.log(numberCopy)

// 4 way
// numbers = [1, 2, 3];
// numbersCopy = numbers.filter(() => true);
// console.log(numbersCopy)

// 5 way
// numbersCopy=numbers.slice(0)
// console.log(numbersCopy)

// 6 way
// let num=numbers.concat()
// console.log(num)

// 7 way
// let num= Array.from(numbers)
// console.log(num)