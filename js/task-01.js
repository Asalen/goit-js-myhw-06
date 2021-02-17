// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;
// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

console.log(parent.hasOwnProperty('surname'));
console.log(parent.hasOwnProperty('heritage'));
console.log(child.hasOwnProperty('name'));
console.log(child.hasOwnProperty('age'));
console.log(child.hasOwnProperty('surname'));
console.log(child.hasOwnProperty('heritage'));
console.log(parent.isPrototypeOf(child));
console.log(parent);
console.log(child);
console.log(child.age);