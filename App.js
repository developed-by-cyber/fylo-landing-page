let email1 = document.getElementById('email1');
let email2 = document.getElementById('email2');
let emailError1 = document.querySelector('.email1-error');
let emailError11 = document.querySelector('.email11-error');
let emailError2 = document.querySelector('.email2-error');
const Email1Form = document.getElementById('form1')
const Email2Form = document.getElementById('form2')

Email1Form.addEventListener('submit', (e) =>{
    let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    e.preventDefault();
    if(email1.value === ""){
        email1.style.borderColor = 'crimson';
        emailError1.innerHTML = 'Please enter your email';
        emailError11.innerHTML = 'Please enter your email';
        return;
    }
    else if(!email1.value.match(emailReg)){
         emailError1.innerHTML = 'Please check your email';
         return;
    }
  
})
Email2Form.addEventListener('submit', (e) =>{
    let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    e.preventDefault();

     if(email2.value === ""){
        email2.style.borderColor = 'crimson';
        emailError2.innerHTML = 'Please enter your email';
        return;
    }
    else if(!email2.value.match(emailReg)){
         emailError2.innerHTML = 'Please check your email';
         return;
    }
  
})


