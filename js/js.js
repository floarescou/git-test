// //===   lesson 1    ===
// //деление на ноль - infinity
// console.log(4/0);
//
// //невозможные математические операции (напр. умножение строки на число)
// console.log('string' * 9);
//
// //чего-то не существует
// // console.log(n1);
//
// //существующий объект без значения
// let a;
// console.log(a);
//
// // null - не объект, а отдельный тип данных
// console.log(null);
// console.log(typeof(null));
//
// let incr = 10;
// let decr = 10;
//
// console.log(incr++, decr--);
// console.log(++incr, --decr);
//
// console.log('10' == 10);
// console.log('10' === 10);
// //===   // lesson 1    ===

//===   lesson 2    ===
let num = 50;
//
// if (num < 49) {
//     console.log("Wrong");
// } else if (num > 100) {
//     console.log("Wrong");
// } else {
//     console.log("Right");
// }
//
// //тернарный оператор
// (num == 50) ? console.log("Right") : console.log("Wrong");

//switch
// let num = +prompt("Введите число");
switch (num) {
    case 49:
        console.log("Мало");
        break;
    case 100:
        console.log("Много!");
        break;
    case 80:
        console.log("Все еще много!");
        break;
    case 50:
        console.log("В точку!");
        break;
    default:
        console.log("Не в этот раз");
        break; 
}

//ЦИКЛЫ
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = 0; i < 8; i++) {
    console.log(i);
}
//===   // lesson 2    ===