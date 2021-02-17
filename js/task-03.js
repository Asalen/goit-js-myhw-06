// Функция getCommonElements(firstArray, secondArray)
// принимает два массива произвольной длины в параметры
// firstArray и secondArray, и возвращает новый массив
// их общих элементов, то есть тех которые есть в обоих
// массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла
// for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
    firstArray.forEach((firstArr) => {
        if (secondArray.includes(firstArr)) {
            commonElements.push(firstArr);
        }

    });





    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }

    return commonElements;
    // Пиши код выше этой строки
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements([8, 18, 16, 15, 14, 5, 9, 21, 18, 12, 16, 13, 12, 19, 18, 5, 19, 15], [20, 12, 12, 8, 23, 23, 10, 15, 6, 22, 15, 11, 20, 22, 16, 13, 10, 18]));