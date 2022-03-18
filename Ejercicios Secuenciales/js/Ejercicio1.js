function interes(){
    var dineroinicial = parseFloat(document.formula.dineroinicial.value);
//dinero a invertir
if(isNaN(dineroinicial)|| dineroinicial<1){
    alert("Tienes que ingresar una cantidad obligatoriamente y tiene que ser positiva :)");
  }else if(dineroinicial==undefined){
}else {
    var interesgenerado =dineroinicial+(dineroinicial*(0.02));
    alert("El total con interés generado es:" + interesgenerado);
}


//imprimir
document.formula.interesgenerado.value=interesgenerado;
}


