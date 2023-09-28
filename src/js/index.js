const session = document.querySelector('.session');
const local = document.querySelector('.local');

session.addEventListener('click', onSession);

function onSession() {
    sessionStorage.setItem('session', 'hello session');

}

local.addEventListener('click', onLocal);

function onLocal() {
    localStorage.setItem('local', 'hello Local')
}