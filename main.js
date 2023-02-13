const num1 = 7;
const num2 = 5;

function min(a, b) {
    if (a > b) {
        return b;
    }
    return a;
}

min(num1, num2);

console.log(min(num1, num2));

const num3 = 8;
const num4 = 18;

function max(a, y) {
    if (a > y) {
        return a;
    }
    return y;
}

console.log(max(num3, num4));

const word = 'шалаш';
const word1 = 'малыш';
// console.log(word);
// console.log(word[0])
// console.log(word[word.length - 1])
// console.log(word[word.length - 2])
function palindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// console.log(word.length)

console.log(palindrome(word));
console.log(palindrome(word1));

//не знаю как вытянуть в двухзначных числах 0 - чтоб цикл был
const massiv = [0, 12, 20, 25, 34, 43, 51, 67, 79, 80];
function masiv(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr[i] = 'zero';
        }
        if (arr[i] == 20) {
            arr[i] = 2 + 'zero';
        }
        if (arr[i] == 80) {
            arr[i] = 8 + 'zero';
        }
    }
    return arr;
}
console.log(masiv(massiv));

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
//
//
// function summ (number) {
//     if (number > 10) {
//         return number;
//     }
// }

// console.log(summ(16));
//
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
