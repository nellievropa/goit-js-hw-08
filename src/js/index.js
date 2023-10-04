// // 1 отримали контейнер з HTML
// const container = document.querySelector('.js-content')
// // console.log(container);
// // 2 створюємо гравця Х по дефолту
// let player = "X";
// // 3 створимо історії ходів двох гравців і їх пусті масиви, які будуть заповнюватися даними
// // щоб легко було очистити поля задамо змінні через Let а не const
// let historyX = [];
// let historyO = [];
// // 4 створюємо масив масивів всіх виграшних комбінацй
// const wins = [
//     [1, 2, 3],
//     [3, 6, 9],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 5, 9],
//     [3, 5, 7],
// ];
// //5 Створюємо функцію генерування розмітки
// //6 створюємо  змінну markup, в яку кожен раз буде додаватися нове поле ігрове div, у якого клас js-item - щоб первірити куди ми клікнули і data-id -щоб записувати історію ходів
// // і переносимо її функцію createMarkup()
// // створюємо нову функцию, щоб можна було перевикористовувати, і переносимо дані в неї
// function createMarkup() {
//     let markup = "";
//     for (let i = 1; i < 10; i += 1){
//         markup += `<div class="item js-item" data-id="${i}"></div>`;
//     }
//     // console.log(markup);
//     //7 наповнили наш HTML контейнер квадратиками!!
//     container.innerHTML = markup;
// }
// // і зразу її викликаємо
// createMarkup();

// //8 щоб знати, на який квадратик клікаєм на БАТЬКІВСЬКИЙ елемент вішаємо прослуховувача
// container.addEventListener('click', onClick);

// function onClick(evt) {
//     //9 Делегували подій робимо через Деструктуризацію таргета - коли побвачили, що елемент часто повторюється- робимо змінну і прибираємо його з коду
//     const { target } = evt;
// // якщо ми клікнули НЕ на квадратик, то одразу виходимо
// // 10 перевіряємо якщо наш елемент не містить класу "js-item" або якщо його текстовий контент зайнятий!!!- то зразу виходимо 
//     if (!target.classList.contains("js-item") || target.textContent) {
//         return;
//     }
//     // а потім другу умову додаємо через або в перший иф
//     // ця умова не дає змінювати Х на 0 на ОДНІЙ клітинці!!!
//     // якщо клітинка пуста - дозволяємо хід, якщо зайнята - не дозволяємо
//     // if (etarget.textContent) {
//     //     return;
//     // }
//     // щоб дізнатись ID клітинки на яку клікнули- шукаємо її номер, зразу для обох ігроків
//      // але з data atributa  він прийде у форматі рядка, а наші масиви- то числа тому приводимо його до числа 

//     // const { id } = Number(target.dataset); - так не працює, тому змінюємо на 
//     // 11 Дістаємо id кожної клітинки і приводимо його до числа
//     const  id  = Number(target.dataset.id);
//     // створимо змінну для переможця
// let result = false;
// // 23 робимо змінну на перевірку кількості ходів 
// const isEndGame = historyO.length + historyX.length === 9;
//     // 12 Ідемо і перевіряємо, якщо поточний гравець здійснив хід- пушим його в історію
//     // нам треба визначитись, хто робить хід, тому створюємо умову
//     if (player === "X") {
//         historyX.push(id);
//         // 13 Змінній result присвоюємо результат виконання функції isWinner
//         result = isWinner(historyX)
//     } else {
//         historyO.push(id);
//         result = isWinner(historyO)
//     }
//       // текстовий контент елемента, по якому клікнули = Х - це перший ход
//     //   17 перевизначаємо хід для наступного гравця
//       target.textContent = player;
//     //   18 якщо результат TRUE - у нас є переможець і ми підставляємо його в результат ${player}
//     if (result) {
//         console.log(`Winner is ${player}`);
//         // 19 і перезавантажуємо гру функцією resetGame(), яка прописана нижче
//         resetGame();
//         return;
//         // 22 якщо переможця немає, але всі клітинки запонились
//         // перевіряємо кількість ходів і щоб не робити таку довгу умову виносимо цю перевірку в змінну
//         // а тут тоді перевіряємо на булеве значення
//     }else if(isEndGame) {
// console.log(`Try again!`);
// resetGame();
// return;
//     }
// // отримуємо просто номер  const {id} = target.dataset
//     // але з data atributa  він прийде у форматі рядка, а наші масиви- то числа 
//     // console.log('X', historyX);
//     //  console.log('0', history0);
//     // console.log( isWinner(historyX));
  
// //21 якщо переможця не визначено то ми змінюємо чергу ходу
// //  змінюємо чергу ходу на 0: якщо був Х змінюємо на 0
// // перевизначаємо player = 
//     player = player === 'X' ? 'O' : 'X';

//     // currentTarget-батько(весь контейнер
//     // target-кожен маленький квадратик)
//     // console.log(evt.currentTarget);
//     // console.log(evt.target)
// }
// // щоб визначити, хто виграв нам потрібно знати ID клітинки!!!
// // тому ми його додаємо в код вище!

// // створимо функцію, яка буде перевіряти чи виграв хтось з гравців
// // порівнювати з виграшими комбінаціями
// // в функцыю приходить історыя ходів в вигляді масива
// // 14 в цій функції перевіряємо чи історія ходів є виграшною!
// function isWinner(arr) {
// //15 ми  перебираємо масив wins з допомогою методу some
// // перевіряємо чи є в історії ходів подібна комбінація цифр
// // 16 наша умова для методу some це результат виконання методу every
//                     //   [2, 5, 8]
// return wins.some((item) => item.every(id => arr.includes(id))); 
//                     //every повертає  TRUE тільки якщо ВСІ елементи задовільнили умові
// }

// // щоб очищати ігрові поля створимо функцію resetGame і викличемо її в тому разі коли є переможець
// function resetGame(){
//     // 20.1 запускає функцію створення розмітки
//     createMarkup();
//     // 20.2 визначає пустим масивом історії Х і О
//     historyX = [];
//     historyO = [];
//     // 20.3 повертаемо до початкового плеєра Х
//     player = "X";
// }





const content = document.querySelector('.content')
const restart = document.querySelector('.js-restart');
content.insertAdjacentHTML('beforeend', createMarkup())
content.addEventListener('click', onClick);
restart.addEventListener('click', onRestart);
let player = 'X';
// масиви для збереження даних про ходи
const stepX = [];
const stepO =[];

const win = [
    [1, 2, 3],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7]
];

function createMarkup() {
    let markup = '';
    for (let i = 1; i <= 9; i += 1)  {
markup += `<div class="item" data-id="${i}"></div>`
    }
    return markup;
}

function onClick(evt) {
    if (!evt.target.textContent) {
        evt.target.textContent = player;
        console.dir(evt.target);
        const id = Number(evt.target.dataset.id);
      
        if(player === "X") {
            stepX.push(id)
        }else {
            stepO.push(id)
        }
       console.log('stepX', stepX);
       console.log('stepO', stepO);
        player = player === "X" ? "0" : "X";        
    } else {
        alert('Change!!!')
    }
}

function onRestart() {
    player = "X";
    content.innerHTML = createMarkup();
}




















// const session = document.querySelector('.session');
// const local = document.querySelector('.local');
// const remove = document.querySelector('.remove');

// session.addEventListener('click', onSession);
// const arr =[1,2,3,4,5,]
// function onSession() {
//     // sessionStorage.setItem('session', 'hello session');
//     const data = JSON.parse(localStorage.getItem('local')) || [];
//     console.log(data);
//     // якщо це- const arr =[1,2,3,4,5,]-масив то й тут додаємо пустий масив 
//     // const resp = JSON.parse(data)
//     // console.log(resp);
//     // sessionStorage.setItem('session', arr);

//     data.forEach(element => {
//         console.log(element);
//     });
// }

// local.addEventListener('click', onLocal);

// function onLocal() {
//     // приводимо до рядка
//     localStorage.setItem('local', JSON.stringify(arr));
//     localStorage.setItem('local1', JSON.stringify(arr));
//     localStorage.setItem('local2', JSON.stringify(arr));
// }

// remove.addEventListener('click', onRemove)

// function onRemove() {
// // localStorage.removeItem('local');
// localStorage.clear();
// }