localStorage.setItem('user', 'coex')
localStorage.setItem('pass', 'Coex#2023')

let username = document.querySelector('#usuario')
let newpass = document.querySelector('#contrasena')
let $btn = document.querySelector('#btn')
const usuario = localStorage.getItem('user')
const contra = localStorage.getItem('pass')

$btn.addEventListener('click', function () {
    const username = document.querySelector('#username').value;
const password = document.querySelector('#password').value;

if (username.trim() === '' || password.trim() === '') {
  alert('Por favor ingrese usuario y contraseña.');
  return;
}

if (username !== 'usuario' || password !== 'contraseña') {
  alert('Usuario o contraseña incorrectos.');
  return;
}


})