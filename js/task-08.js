const form = document.querySelector('.login-form');
let user;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;

    if(email.value === '' || password.value === ''){
        alert('Todos los espacios deben ser rellenados');
    }else{
         user = {
            email: email.value,
            password: password.value,
        }
        console.log(user);
    }
    event.currentTarget.reset();
}