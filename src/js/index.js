const session = document.querySelector('.session');
const local = document.querySelector('.local');
const remove = document.querySelector('.remove');

session.addEventListener('click', onSession);
const arr = [1,2,3,4,5]


function onSession() {
    // sessionStorage.setItem('session', 'hello session');
   try{
    const data = JSON.parse(localStorage.getItem('local')) || [];
    console.log(data);
    data.forEach(element => {
        console.log(element);
    });
   }catch(e){
    console.log(e);
   }
   console.log('hello world');
//     const data = JSON.parse(localStorage.getItem('local')) || [];
// console.log(data);
// data.forEach(element => {
//     console.log(element);
// });
    // якщо це- const arr =[1,2,3,4,5,]-масив то й тут додаємо пустий масив 
    // список позначається ...
    // const resp = JSON.parse(data)
    // console.log(resp);
    // sessionStorage.setItem('session', arr);

  
}

local.addEventListener('click', onLocal);

function onLocal() {
    // приводимо до рядка
    localStorage.setItem('local', 'hello');
    localStorage.setItem('local1', JSON.stringify(arr));
    localStorage.setItem('local2', JSON.stringify(arr));
}

remove.addEventListener('click', onRemove)

function onRemove() {
    // видаляем за назвою ключа
// localStorage.removeItem('local1');
// повністю чистимо локалсторадж
localStorage.clear();
}

// використовується при запитах на бекенд
// try{
//     console.log(a);
// }catch(e){
//     console.log(e);
// }

console.log('hello world');
