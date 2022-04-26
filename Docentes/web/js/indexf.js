

function cargar(url,elemento){
    var request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send(null);
    
    elemento.innerHTML =request.responseText;
}

function Daraltausuario(){
    cargar("daraltausuario.jsp",document.getElementById("contenido"));
}

function Login(){
  cargar("login.jsp",document.getElementById("contenido"));  
    
}
