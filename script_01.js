const lastName        = document.getElementById('last-name');
const firstName       = document.getElementById('first-name');
const age             = document.getElementById('age');
const email           = document.getElementById('email');
const emailConfirm    = document.getElementById('email-confirm');
const password        = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const cgu             = document.getElementById("cgu")

const validateForm = () => {
  if(firstName.value.length < 3){
    firstName.classList.add('input-error');
    let errorText = document.createElement('p');
    errorText.innerHTML='Le prénom doit faire plus de 3 lettres';
    errorText.classList.add('error-text');
    firstName.parentElement.appendChild(errorText)
    return false;
  }
  if(age.value < 18){
    age.classList.add('input-error');
    let errorText = document.createElement('p');
    errorText.innerHTML='Vous devez avoir plus de 18 ans';
    errorText.classList.add('error-text');
    age.parentElement.appendChild(errorText)
    return false;
  }
  if(email.value != emailConfirm.value){
    email.classList.add('input-error');
    emailConfirm.classList.add('input-error');
    let errorText = document.createElement('p');
    errorText.innerHTML='Les deux adresses mails doivent être semblable';
    errorText.classList.add('error-text');
    emailConfirm.parentElement.appendChild(errorText)
    return false;
  }  
  if(password.value.length < 6){
    password.classList.add('input-error');
    passwordConfirm.classList.add('input-error');
    let errorText = document.createElement('p');
    errorText.innerHTML='Le mot de passe doit faire plus de 6 charactères';
    errorText.classList.add('error-text');
    password.parentElement.appendChild(errorText)
    return false;
  }
  if(password.value != passwordConfirm.value){
    password.classList.add('input-error');
    passwordConfirm.classList.add('input-error');
    let errorText = document.createElement('p');
    errorText.innerHTML='Les deux mots de passe doivent être semblable';
    errorText.classList.add('error-text');
    passwordConfirm.parentElement.appendChild(errorText)
    return false;
  }
  if(cgu.checked == false){
    cgu.classList.add('input-error');
    let errorText = document.createElement('p');
    errorText.innerHTML='Veuillez valider les CGU';
    errorText.classList.add('error-text');
    cgu.parentElement.appendChild(errorText)
    return false;
  }
  return true
}

const deleteError = (ev) => {
  if(ev.target.classList.contains('input-error')){
    ev.target.classList.remove('input-error');
    let errorText = document.getElementsByClassName('error-text')[0];
    errorText.remove();
  }
}

const deleteEmailError = () =>{
  email.classList.remove('input-error');
  emailConfirm.classList.remove('input-error');
}

const deletePasswordError = () =>{
  password.classList.remove('input-error');
  passwordConfirm.classList.remove('input-error');
}

firstName.addEventListener('click',deleteError);
age.addEventListener('click',deleteError)
emailConfirm.addEventListener('click',deleteError);
emailConfirm.addEventListener('click',deleteEmailError);
email.addEventListener('click',deleteError);
email.addEventListener('click',deleteEmailError);
password.addEventListener('click',deleteError);
password.addEventListener('click',deletePasswordError);
passwordConfirm.addEventListener('click',deleteError);
passwordConfirm.addEventListener('click',deletePasswordError);
cgu.addEventListener('click',deleteError);