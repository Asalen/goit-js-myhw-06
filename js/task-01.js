// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems -
//     массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется
// в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала
//  метод forEach.

function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
    orderedItems.forEach(function(orderedItem) {
        totalPrice += orderedItem;
    });


    // for (let i = 0; i < orderedItems.length; i += 1) {
    //     totalPrice += orderedItems[i];
    // }

    // Пиши код выше этой строки
    return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([21, 16, 6, 8, 11, 17, 20, 17, 19, 6, 20, 23, 11, 19, 10, 9, 12, 11, 20, 19, 7, 12, 5, 6]));