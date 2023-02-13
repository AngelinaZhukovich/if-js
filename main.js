const users1 = [
    {
        id: 1,
        name: 'Jon',
        lastname: 'Smith',
    },
    {
        id: 4,
        name: 'Jo',
        lastname: 'Sm',
    },
    {
        id: 3,
        name: 'Oon',
        lastname: 'Ith',
    },
];
const usersMap = users1.reduce((acc, user) => {
    acc.set(user.id, user);
    return acc;
}, new Map());
console.log(usersMap);
console.log(usersMap.get(1));

//4
// const users = new Map([[1, {
//   name: 'Jon',
//   lastname: 'Smith',
// }]]);
// console.log(users)

//3
// const users = new Map();
// users.set(1, {
//   name: 'Jon',
//   lastname: 'Smith',
// });
// console.log(users)

//2
// const users1 = [
//     {
//         id: 1,
//         name: 'Jon',
//         lastname: 'Smith',
//     },
//     {
//         id: 2,
//         name: 'Jo',
//         lastname: 'Sm',
//     },
//     {
//         id: 3,
//         name: 'Oon',
//         lastname: 'Ith',
//     },
// ];
// // console.log(users1);
// const nameJo = users1.find((user) => user.id === 3);
// console.log(nameJo)

//1
// const map = new Map();
// map.set('1', 'str1'); // a string key
// map.set(1, 'num1'); // a numeric key
// map.set(true, 'bool1'); // a boolean key
// console.log(map.get(1)); // 'num1'
// console.log(map.get('1')); // 'str1'
// console.log(map.size);
