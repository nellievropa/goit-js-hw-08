const session = document.querySelector('.session');
const local = document.querySelector('.local');

session.addEventListener('click', onSession);
const arr =[1,2,3,4,5,]
function onSession() {
    // sessionStorage.setItem('session', 'hello session');
    sessionStorage.setItem('session', arr);
}

local.addEventListener('click', onLocal);

function onLocal() {
    localStorage.setItem('local', JSON.stringify(arr))
}