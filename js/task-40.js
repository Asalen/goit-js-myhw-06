// Дополни функцию sortByName(users) так,
// чтобы она возвращала массив пользователей
// отсортированный по их имени(свойство name) в алфавитном порядке.

// Пиши код ниже этой строки
const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));
// Пиши код выше этой строки
console.log(sortByName);