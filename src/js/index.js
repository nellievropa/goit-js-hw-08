const session = document.querySelector('.session');
const local = document.querySelector('.local');
const remove = document.querySelector('.remove');

session.addEventListener('click', onSession);
const arr =[1,2,3,4,5,]
function onSession() {
    // sessionStorage.setItem('session', 'hello session');
    const data = JSON.parse(localStorage.getItem('local')) || [];
    console.log(data);
    // якщо це- const arr =[1,2,3,4,5,]-масив то й тут додаємо пустий масив 
    // const resp = JSON.parse(data)
    // console.log(resp);
    // sessionStorage.setItem('session', arr);

    data.forEach(element => {
        console.log(element);
    });
}

local.addEventListener('click', onLocal);

function onLocal() {
    // приводимо до рядка
    localStorage.setItem('local', JSON.stringify(arr));
    localStorage.setItem('local1', JSON.stringify(arr));
    localStorage.setItem('local2', JSON.stringify(arr));
}

remove.addEventListener('click', onRemove)

function onRemove() {
// localStorage.removeItem('local');
localStorage.clear();
}