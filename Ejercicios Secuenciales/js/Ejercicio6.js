var añonacimien=0;
var mesnacimien=0;
var dianacimien=0;
/////////
var diavigen=0;
var mesvigen=0;
var añovigen=0;

function determina(){
  añonacimien=parseInt(document.formula.añonacimien.value);
  mesnacimien=parseInt(document.formula.mesnacimien.value);
  dianacimien=parseInt(document.formula.dianacimien.value);
  if(añonacimien>0 && añonacimien<99999 && mesnacimien>0 && mesnacimien<99999 && dianacimien>0 && dianacimien<99999){
    añovigen=parseInt(document.formula.añovigen.value);
    mesvigen
=parseInt(document.formula.mesvigen
    .value);
    diavigen=parseInt(document.formula.diavigen.value);
    if(añovigen>0 && añovigen<99999 && mesvigen>0 && mesvigen
    <99999 && diavigen>0 && diavigen<99999){
      calcular();
    }
  }
}

function calcular(){
  edadAprox=parseInt(añovigen-añonacimien);
  if(mesvigen
>mesnacimien){
    alert("tienes:" +edadAprox+" años");
  }else if(mesvigen
<mesnacimien){
    alert("Tienes:" +parseInt(edadAprox-1)+ "años");
  }else if(mesvigen==mesnacimien){
    if (diavigen<dianacimien) {
      alert("Tienes:" +parseInt(edadAprox-1)+ "años");
    }else if(diavigen>dianacimien){
      alert("tienes:" + parseInt(edadAprox)+ "años");
    }else if(diavigen==dianacimien){
      alert("Feliz cumpleaños!!!");
    }
  }else{
    alert("Ha ocurrido un error");
  }
}
