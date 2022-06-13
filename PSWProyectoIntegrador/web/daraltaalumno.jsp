<%@page import="java.time.LocalDate"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/estilAltaAlumno.css" type="text/css" media="all">
        <title>JSP Page</title>
    </head>
    <body>
                <div class="cuerpoFormulario" id="cuerpoFormulario"> 
            <form class="formularioAlta" id="formularioAlta" method="post" action="Save2">
                <h1>Registro de Alumnos</h1>
                <div class='fecha'>
                Ciudad de México, a
                    <input type="date" value="<%=LocalDate.now()%>">
                
                <h3> <b>Asunto: <i>Carta Compromiso</i> </b> </h3>
            </div>
            <p>ING. María de Lourdes Hernández Mendoza
                , Presidente de la academia de programación
            </p>
            <p>Por medio de la presente yo
                <input type='text' id="txtnombre" name="txtnombre" placeholder='Nombre' onkeyup="botonenviar()" required="" >
                <input type='text' id="txtAppat" name="txtAppat" placeholder='Apellido Paterno' onkeyup="botonenviar()" required="" >
                <input type='text' id="txtApmat" name="txtApmat" placeholder='Apellido Materno'onkeyup="botonenviar()" required="" >
                Alumno(a) del CECyT 9 "Juan De Dios Bátiz", del turno inscrito(a) en el grupo <input type='text' id="txtGrupo" name="txtGrupo" placeholder='Grupo' onkeyup="botonenviar()" required="" >
                de la carrera Técnico en Programación, con número de boleta <input type='number' id="txtboleta" name="txtboleta" onkeyup="botonenviar()" placeholder='Boleta' min='0' required=""">
                    ,con fundamento en lo expresado en el artículo 107, fracciones <i>IX y X</i>, y en el artículo 108 <i>fracción IX</i> del
                    <i>Reglamento Interno del Instituto Politécnico Nacional</i>, , manifiesto mi compromiso de cuidar y hacer
                    buen
                    uso de los equipos de cómputo (CPU, monitor, teclado, mouse y demas componentes del mismo),
                    que me han sido asignados en los laboratorios del área. Así mismo me compromento a reportar con el
                    profesor(a) responsable, cualquier irregularidad o anomalía dentro de los 10 primeros minutos de
                    cada clase, siendo consciente de que, de
                    no ser así, puedo ser acreedor de alguna de las sanciones establecidas en el artículo 110 del citado
                    reglamento.
                    </p>
                    
                <h3>Ingresa una contraseña</h3>
                <div clas='botones'>
                <input type="password" id="txtcontrasena" onkeyup="botonenviar()" required="" name="txtcontrasena" placeholder="Escribe una contraseña">
                </div>
                
                <input type="submit" value="Enviar Datos" class="btn" id="btnEnviarDatos" disabled="">
                <input type="button" value="Borrar Datos" class="btn" id="btnBorrar" onclick="resetear()">
                
            </form>
        </div>
    </body>
      
</html>
