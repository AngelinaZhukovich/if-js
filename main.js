function sum (n) {
    return function (x) {
        return n + x;
    };
}

console.log(sum(5)(2)); // 7