const container = document.querySelector('.js-content')
console.log(container);
const wins = [
    [1, 2, 3],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7],
];
let player = "X";
// якщо залишити цю змінну  тутБ то кожен раз буде додаватися нове поле ігрове
// тому переносимо її функцію createMarkup()

//  створимо двох гравців і їх пусті масиви, які будуть заповнюватися даними
// щоб легко було очистити поля задамо змінні через Let а не const
let historyX = [];
let historyO = [];
// створюємо нову функцию, щоб можна було перевикористовувати, і переносимо дані в неї
function createMarkup() {
    let markup = "";
    for (let i = 1; i < 10; i += 1){
        markup += `<div class="item js-item" data-id="${i}"></div>`;
    }
    // console.log(markup);
    // наповнили контейнер квадратиками!!
    container.innerHTML = markup;
}
// і зразу її викликаємо
createMarkup();

// щоб знати, на який квадратик клікаєм на БАТЬКІВСЬКИЙ елемент вішаємо прослуховувача
container.addEventListener('click', onClick);

function onClick(evt) {
    // коли побвачили, що елемент часто повторюється- робимо змінну і прибираємо його з коду
    const { target } = evt;
// якщо ми клікнули НЕ на квадратик, то одразу виходимо
    if (!target.classList.contains("js-item") || target.textContent) {
        return;
    }
    // а потім другу умову додаємо через або в перший иф
    // ця умова не дає змінювати Х на 0 на ОДНІЙ клітинці!!!
    // якщо клітинка пуста - дозволяємо хід, якщо зайнята - не дозволяємо
    // if (etarget.textContent) {
    //     return;
    // }
    // щоб дізнатись ID клітинки на яку клікнули- шукаємо її номер, зразу для обох ігроків
     // але з data atributa  він прийде у форматі рядка, а наші масиви- то числа тому приводимо його до числа 

    // const { id } = Number(target.dataset); - так не працює, тому змінюємо на 
// створимо змінну для переможця
let result = false;
    const  id  = Number(target.dataset.id);
    // нам треба визначитись, хто робить хід, тому створюємо умову
    if (player === "X") {
        historyX.push(id);
        result = isWinner(historyX)
    } else {
        historyO.push(id);
        result = isWinner(historyO)
    }
      // текстовий контент елемента, по якому клікнули = Х - це перший ход
      target.textContent = player;
    if (result) {
        console.log(`Winner is ${player}`);
        resetGame();
        return;
    }
// отримуємо просто номер  const {id} = target.dataset
    // але з data atributa  він прийде у форматі рядка, а наші масиви- то числа 
    // console.log('X', historyX);
    //  console.log('0', history0);
    console.log( isWinner(historyX));
  
// змінюємо чергу ходу на 0: якщо був Х змінюємо на 0
    player = player === 'X' ? 'O' : 'X';

    // currentTarget-батько(весь контейнер
    // target-кожен маленький квадратик)
    // console.log(evt.currentTarget);
    // console.log(evt.target)
}
// щоб визначити, хто виграв нам потрібно знати ID клітинки!!!
// тому ми його додаємо в код вище!

// створимо функцію, яка буде перевіряти чи виграв хтось з гравців
// порівнювати з виграшими комбінаціями
// в функцыю приходить ысторыя ходів в вигляді масива

function isWinner(arr) {
//  перебираємо масив з допомогою методу some
// перевіряємо чи є в історії ходів подібна комбінація цифр
return wins.some((item) => item.every(id => arr.includes(id))); 
}

// щоб очищати ігрові поля створимо функцію resetGame і викличемо її в тому разі коли є переможець
function resetGame(){
    createMarkup();
    historyX = [];
    historyO = [];
    player = 'X';
}



// const content = document.querySelector('.content')
// const restart = document.querySelector('.js-restart');
// content.insertAdjacentHTML('beforeend', createMarkup())
// content.addEventListener('click', onClick);
// restart.addEventListener('click', onRestart);
// let player = 'X';

// const win = [
//     [1, 2, 3],
//     [3, 6, 9],
//     [4, 5, 6,],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 5, 9],
//     [3, 5, 7,]
// ];

// function createMarkup() {
//     let markup = '';
//     for (let i = 1; i <= 9; i += 1)  {
// markup += `<div class="item" data-id= "${i}"></div>`
//     }
//     return markup
// }

// function onClick(evt) {
//     if (!evt.target.textContent) {
//         if (player === 'X') {

//         }
//         player = play === "X" ? "0" : "X";
//     } else {
//         alert('Change!!!')
//     }
// }

// function onRestart() {
//     player = "X";
//     content.innerHTML = createMarkup()
// }



















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