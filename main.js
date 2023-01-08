let user = {
  name: 'John Doe',
};

console.log(user);

let student = {
  name: 'Angelina',
};

(user = student), // Angelina
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
  result = result * x[i];
}

console.log(result);

const a = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < a.length; i++) {
  if (a[i] > 5 && a[i] < 10) {
    console.log(a[i]);
  }
}

const b = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < b.length; i++) {
  if (b[i] %2 === 0 && b[i]!=0) {
    console.log(b[i]);
  }
}