const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    //Verifica se o usuario foi digitado
    if(usernameValue == '') {
        setErrorFor(username, 'O nome de usuário é obrigatório.');
    } else {
        setSuccessFor(username);
    }

    //Vai verificar se o email é válido
    if(emailValue == '') {
        setErrorFor(email, 'O email é obrigatório.');
    } else if(!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um email válido.');
    } else {
        setSuccessFor(email);
    }

    //Verifica a condição da senha
    if(passwordValue == '') {
        setErrorFor(password, 'A senha é obrigatória.');
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres.');
    } else {
        setSuccessFor(password);
    }

    if(passwordConfirmationValue == '') {
        setErrorFor(passwordConfirmation, 'A senha precisa ser igual a anterior');
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, 'As senhas não conferem.');
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control');

    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === 'form-control success');
      });

    if (formIsValid) {
        console.log ('O formulário está 100% válido!');
    }  
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Adicionar a mensagem de erro
    small.innerText = message;

    //Adicionar a classe de errro
    formControl.className = 'form-control error';
    
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = 'form-control success';
}

//Checar caracteres válidos de email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
