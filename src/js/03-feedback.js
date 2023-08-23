
// створити функцію, яка приймає масив з данних про час витрачений на оплату покупки на касі і 2 параметр- кількість кас
// підрахувати треба скільки часу буде працювати кожна каса
// 1 каса 17+2+15 =29
// 2 каса 3+5+6+7 =21
// покупець іде туди, де менша черга

function fn(arr, cash) {
    const obj = {};

    for (let i = 1; i <= cash; i += 1) {
    //    це номер каси
        obj[i] = 0;

    }
    console.log(obj);
//    для кожного покупця перебираєм масив
    arr.forEach(bayer => {
        const values = Object.values(obj);
        const minValue = Math.min(...values);
        // треба знайти індекс елемента (індекси починаються з 0) на якій касі найменший час
        const currentCash = values.indexOf(minValue) + 1;
        console.log(currentCash);
        // відправляем на касу з меншим значення покупця
        obj[currentCash] += bayer;
    });
    return obj;
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 2))