// Дополни функцию getNamesSortedByFriendCount(users) так,
// чтобы она возвращала массив имён пользователей отсортированный
// по возрастанию количества их друзей(свойство friends).

// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
// Пиши код выше этой строки
console.log(getNamesSortedByFriendCount);