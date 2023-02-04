const text = 'hello world';

console.log(text);

const String = 'diedie   jdeijdiejdei'
// const String1 = new String(name);
// console.log(String1)
// console.log(name.indexOf('j', 5))
// console.log(name.lastIndexOf('j'))
console.log(String.length)
console.log(String.padEnd(25, '?'))
console.log(String.padStart(25, '?'))
console.log(String.repeat(5))
console.log(String.split('  ')) // разбивает на слова
console.log(String.split('')) /// на буквы
console.log(String.split()) // просто массив
// console.log(String.fromCharCode(189,43,190,61));
// console.log(String.fromCodePoint())


// const getText = (name) => `My name is ${name}`
// console.log(getText(`Angelina`))

// const s_prim= 'foo';
// const s_obj = new String(s_prim);
// console.log(s_obj);
// // если дописать toString
// console.log(s_obj.toString()); // обратно получим строку 'foo'

//
// // eslint-disable-next-line no-unused-vars
// const word = 'cat';
// console.log('word'.charAt (0)); // выводит word -w-
// console.log(word.charAt(0)); // выводит word -c-