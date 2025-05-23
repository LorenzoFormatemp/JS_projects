const firstName = document.getElementById('name');
const lastName = document.getElementById('lastname');
const color = document.getElementById('color');
const pwd_generator = document.getElementById('pwd-generator');
const pwd_container = document.querySelector('.show_password');

pwd_generator.addEventListener('click', function(){
    let password = firstName.value + lastName.value + color.value;
    pwd_container.innerHTML = `<h2 class="text-center">${password}</h2>`;
});

