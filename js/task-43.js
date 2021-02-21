// Дополни функцию getSortedFriends(users) так,
// чтобы она возвращала массив уникальных имён
// друзей(свойство friends) отсортированный по алфавиту.



// Пиши код ниже этой строки
const getSortedFriends = users => [...users]
    .flatMap((friend) => friend.friends)
    .filter((friends, index, array) => array.indexOf(friends) === index)
    .sort();
// Пиши код выше этой строки

console.log(getSortedFriends);