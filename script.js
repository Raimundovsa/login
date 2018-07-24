
let Nome = document.querySelector ("#Nome");
let Senha = document.querySelector("#Senha");
let Email = document.querySelector("#Email");

var button = document.querySelector ("button")
button.onclick = validarForm;

function validarForm() {
    if (Nome.value == ""){
        alert("Digite seu nome")
    }
    else if (Senha.value == ""){
        alert("Digite uma senha")
    }
    else if (Email.value == ""){
        alert("Digite um e-mail")
    }
    else {
        alert( Nome.value + "\n" + Senha.value + "\n" + Email.value)
    }
}


