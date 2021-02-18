// Замени объявление функции getCommonElements()
// и коллбек для метода forEach()
// на стрелочные функции.

// // Пиши код ниже этой строки
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // Пиши код выше этой строки
    return commonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements([8, 15, 12, 15, 11, 8, 20, 15, 11, 7, 10, 19, 8, 9, 15, 17, 10, 22, 6, 22, 23], [18, 22, 15, 14, 21, 8, 17, 21, 18, 5, 14, 24, 20, 12, 14, 8, 22, 18, 15, 11, 13]));