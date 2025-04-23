const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const imovel = document.getElementById("imovel");

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkForm();
   
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})


function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha o seu nome.")
 }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
}




}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "o email é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue === ""){
        errorInput(telefone, "O telefone é obrigatório.") 
    
        errorInput(telefone, "o telefone precisa ter o +55 e o DDD")    
    }else{
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}


function checkInputImovel(){
    const imovelValue = imovel.value;
    const ImovelValue = imovel.value;

    if(imovelValue === ""){
        errorInput(imovel, "A confirmação do imovel é obrigatoria.")
    }else{
    const formItem = imovel.parentElement;
    formItem.className = "form-content"    
    }
       
    
}
   
function checkForm(){
     checkInputUsername();
    checkInputEmail();
    checkInputTelefone();
    checkInputImovel();

   
   
}

const formItems = form.querySelectorAll(".form-content")

const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
});




function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}