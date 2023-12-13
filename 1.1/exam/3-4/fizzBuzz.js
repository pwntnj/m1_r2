function fizzBuzz(max) {
    if (max === undefined || max === null) {
        return undefined
    }
    let a = ''
    if (max > 0) {
        for (let i = 1; i <= max; i++) {
            if (i%3 === 0 && i%5 ===0) {
                a+='FizzBuzz'
            } else if (i%3 === 0) {
                a+='Fizz'
            }else if (i%5 === 0){
                a+='Buzz'
            }else{
                a+=i
            }
        }
    }
    return a
}
module.exports = fizzBuzz




















// function fizzBuzz(max) {
//     if (max === null || max === undefined) {
//         return undefined
//     }
//     let a = ''
//     if (max > 0) {
//         for (let i = 1; i <= max; i++) {
//             if (i%3 === 0 && i%5 === 0) {
//                 a = a +'FizzBuzz' 
//             } 
//             else if (i%3 === 0) {
//                 a = a + 'Fizz'
//             }
//             else if (i%5 === 0) {
//                 a = a + 'Buzz'
//             } else {
//             a = a + i 
//             }
//         }  

//     }
//     return a
// }
// module.exports = fizzBuzz
