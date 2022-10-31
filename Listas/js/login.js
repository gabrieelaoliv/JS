function validationForm(){
    username = document.getElementById("username")
    password = document.getElementById("password")
    if(username.value == ""){
        alertWifi("Usuario invalido, tente novamente!",false,0,"toupeira.gif",20)
        password.focus()
    }
    else if(password.value == ""){
        alertWifi("Senha invalida, tente novamente!",false,0,"toupeira.gif",20)
        password.focus()
    }
    else{
        readJson(username.value, password.value);  
    }
}

function readJson(username, password){
    var file = "json/user.json"
    fetch(file)
        .then((response) => response.json())
        .then((content) => checkUser(content,username,password))
        .then((err) => console.log(`${err} erro na leitura do JSON`));
}
function checkUser(content, username, password){
    var achou = false
    for(i=0; i < content.usuarios.length; i++){
        if(content.usuarios[i].user == username && content.usuarios[i].pwd == password){
            achou = true
            break
        }
    }

    if(achou)
        alertWifi(`Bem vindo, ${username}`,false,0,"toupeira.gif",20)
    else
        alertWifi(`${username} invalido!`,false,0,"toupeira.gif",20)
}