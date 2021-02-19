// Дополни функцию getUserWithEmail(users, email) так,
// чтобы она возвращала объект пользователя, почта
// которого(свойство email) совпадает со значением
// параметра email.

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// Пиши код выше этой строки