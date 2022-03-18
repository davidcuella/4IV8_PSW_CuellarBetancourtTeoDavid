function calcular(){
    var sueldo = parseFloat(document.formula.sueldo.value);
    //dinero por ventas
    var c1 = parseFloat(document.formula.v1.value);
    var c2 = parseFloat(document.formula.v2.value);
    var c3 = parseFloat(document.formula.v3.value);
    

    if(isNaN(c1)|| c1<1|| isNaN(c2)|| c2<1 || isNaN(c3)|| c3<1){
      alert("Tienes que ingresar todos los campos obligatoriamente y tienen que ser positivos :)");
    }else if(c1==undefined || c2==undefined || c3 == undefined){
  }else {
    var ventas = c1+c2+c3;
    var comision = (10*ventas)/100;
    var total=sueldo+comision;
    alert(total+ " : "+ comision);
  }
    //sueldo total
    
    //impresiones
    document.formula.porcentaje.value=comision;
    document.formula.total.value=total;
  }
  