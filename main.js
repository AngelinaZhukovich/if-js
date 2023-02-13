let user = 'John Doe';
console.log(user);

const student = 'Angelina';

user = student; // Angelina
console.log(user);

let test = 1;
test = ++test; //2
test = test + '1';
console.log(test); //21

test = --test;
console.log(test); //20

Boolean(test); // false
console.log(test);
//  вывело 20

const x = [2, 3, 5, 8];
console.log(x);

let result = 1;

for (let i = 0; i < x.length; i++) {
  result *= x[i];
}
console.log(result);

const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 5 && arr1[i] < 10) {
    console.log(arr1[i]);
  }
}

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0 && arr1[i] !== 0) {
    console.log(arr1[i]);
  }
}

// classwork

