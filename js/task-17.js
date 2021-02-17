// В приложении нужен администратор с возможностью
// добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство
// AccessLevel(уровень доступа), значение которого это
// объект { BASIC: 'basic', SUPERUSER: 'superuser' }.

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}

class Admin extends User {
    // Пиши код ниже этой строки
    accessLevel;

    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser'
    };

    constructor({ email, accessLevel }) {
        super(email);
    }

    // Пиши код выше этой строки
}

const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser