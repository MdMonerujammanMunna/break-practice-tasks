/*

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
// let a = 1
// while (a <= 200) {
//     console.log(a)
//     if (a === 100) {
//         break
//     }
//     a++
// }

/*
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0
let num = 1
while (num <= 100) {
    sum = sum + num
    num++
    if (sum >= 100) {
        break
    }
}
console.log("When we add 15th number this is break" + num)
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/