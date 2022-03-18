var total=0;
function compras(){
    var aux = prompt("Ingrese la cantidad gastada:");
    if(isNaN(aux)|| aux<1){
      alert("solo puedes ingresar números positivos :)");
    }else if(aux==undefined){
    }else {
      total+=parseFloat(aux);
      document.formula.precio.value=total;
      descuento();
    }
}

function descuento(){
  var desc=parseFloat((total*15)/100);
  var dos=parseFloat(total-desc);
  document.formula.total.value= dos;
}

function clean(){
  total=0;
}
