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

function authenticateUser(event){
    
    event.preventDefault();
    email = document.getElementById("emailLoginId").value;
    password = document.getElementById("passLoginId").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
        console.log("Usuario logado com Sucesso!");
        let user = firebase.auth().currentUser;
        console.log(user);
        document.getElementById("messageLogin").innerText = "Usuario autenticado com Sucesso!";
    })
        .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("messageLogin").innerText = errorMessage;
        });

}

function storeNoticia(event){
    event.preventDefault();

    let tagNoticia = document.getElementById("tagNoticia").value;
    let tituloNoticia = document.getElementById("tituloNoticia").value;
    let imgNoticia = document.getElementById("imgNoticia").value;
    let textNoticia = document.getElementById("textNoticia").value;
    let autorNoticia = document.getElementById("autorNoticia").value;
    let likesNoticia = 0;

    db.collection("noticias").add({
        tagNoticia: tagNoticia,
        tituloNoticia: tituloNoticia,
        imgNoticia: imgNoticia,
        textNoticia: textNoticia,
        autorNoticia: autorNoticia,
        likesNoticia: likesNoticia

    })
    .then(function(docRef){
        console.log("Notícia armazenado com sucesso!");
        console.log("armazenado com ID: ", docRef.id);
    })
    .catch(function(error){
        console.error("Erro: ", error);
    });
}

function getDb(tagName){

    let noticiaPage = document.getElementById("center-page");

    db.collection('noticias').where("tagNoticia", "==", tagName).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            
            let newNoticia = `<div class="noticia">
            <div class="noticia-titulo">
                <h3>${doc.data().tituloNoticia}</h3>
            </div>
            <div class="noticia-foto">
                <img src="${doc.data().imgNoticia}" alt="">
            </div>
            <div class="noticia-text">                 
                <p>${doc.data().textNoticia}</p>
            </div>
            <div class="noticia-autor">
                <h4>${doc.data().autorNoticia}</h4>
            </div>
            <div class="noticia-like">
                <img src="Imagens/gostar.png" alt="icone curtir">
            </div>
        </div>`;

        noticiaPage.innerHTML += newNoticia;
        })
    })  
}