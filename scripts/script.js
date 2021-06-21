function confirmPassword(a,b){
    if(a == b){
        return true;
    }else{
        return false;
    }
}

function createUser(event){
    
    event.preventDefault();
    email = document.getElementById("emailBoxId").value;
    password = document.getElementById("passBoxId").value;
    passConfirm = document.getElementById("passConfirmBoxId").value;

    if(confirmPassword(password, passConfirm)){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        console.log("Usuario criado com Sucesso!");
        document.getElementById("message").innerText = "Usuario criado com Sucesso!";
        location.href=''
    })
        .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("message").innerText = errorMessage;
        });
    }else{
        document.getElementById("message").innerText = "As senhas não coincidem";
    }
}