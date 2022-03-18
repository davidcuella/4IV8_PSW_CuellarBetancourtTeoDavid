var comp=true;
var calificacion=0;
function parciales(){
  var p1= parseFloat(document.formula.p1.value);
  var p2 = parseFloat(document.formula.p2.value);
  var p3 = parseFloat(document.formula.p3.value);

  if(isNaN(p1)||p1>10 || p1<0 ||isNaN(p2)|| p2>10 || p2<0 ||isNaN(p3)||p3>10 ||p3<0){
    alert("Solo puedes ingresar califiaciones entre 0-10");
    comp=false;
  }else{
  var prom = (p1+p2+p3)/3;
  calificacion = ((prom*55)/100)}
}

function examen(){
  var examen=parseFloat(document.formula.examen.value);
  if(examen>10 || examen<0){
    alert("Solo puedes ingresar califiaciones entre 0-10");
    comp=false;
  }else{
  calificacion += ((30*examen)/100);
  }
}

function trabajofi(){
  var trabajo=parseFloat(document.formula.trabajo.value);
  if(trabajo>10 || trabajo<0){
    alert("Solo puedes ingresar califiaciones entre 0-10");
    comp=false;
  }else{
  calificacion += ((15*trabajo)/100);
  }
}

function llamar(){
  parciales();
  examen();
  trabajofi();
  if(comp==true){
    alert("tu calificacion es: "+ calificacion);
  }
}
