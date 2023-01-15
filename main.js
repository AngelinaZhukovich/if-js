const word = `шалаш`;
// console.log(word[0])
// console.log(word[word.length - 1])
// console.log(word[word.length - 2])

function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str[0] === str[str.length - 1]) & (str[1] === [str.length - 2])) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindrome(word);

// ((pageName) => {
//     console.log(pageName);
//     const calc = (p1, p2, ...args) => {
//         let result = p1 + p2 || 1;
//
//         for (let i = 0; i < args.length; i++) {
//             result *= args[i];
//         }
//         return result;
//     };
//
//     const bob = (a) => a + 100;
//
//     console.log(bob(1));
//
//     const num1 = 1;
//     const num2 = 2;
//     const num3 = 3;
//     const num4 = 4;
//
//     const sum = calc(num1, num2, num3, num4);
//     console.log(sum);
// })();

//work online
// function summ(number) {
//     if (number > 10) {
//         return number;
//     }
// }
//
// console.log(summ(16));

// function calc(...args) {
//     let acc = 1;
//
//     for (let i = 0; i < args.length; i++) {
//         acc *= args[i];
//     }
//
//     return acc;
// }
//
// const summ = calc(num1, num2, num3, num4);
// console.log(summ);
// console.log(calc(num1, num2, num3, num4));
//
// const bob = (a) => a + 100;
//
// console.log(bob(3));
