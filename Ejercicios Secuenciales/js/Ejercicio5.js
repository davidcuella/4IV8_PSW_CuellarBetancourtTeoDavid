function validar(){
    var muj= parseInt(document.formula.mujeres.value);
    var hom= parseInt(document.formula.hombres.value);
    var total=parseInt(document.formula.total.value);
    var totale=(muj+hom);
    if(muj>=0 && hom>=0 && muj<999999 && hom<999999){
      var pmuj=(100*muj)/totale;
      var phom=(100*hom)/totale;
      var total=(muj +hom);
      document.formula.pmuj.value=pmuj;
      document.formula.phom.value=phom;
      document.formula.total.value=total;
    }else{
      alert("Ingresa solo numeros positivos>:)");
    }
  }