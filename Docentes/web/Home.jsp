<%-- 
    Document   : Home
    Created on : 22/04/2022, 07:41:53 PM
    Author     : hp
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="css/EstilPagInicio.css" type="text/css" media="all">
        <%
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        
        if(session.getAttribute("txtUsuario") == null && session.getAttribute("nombre") == null){
            response.sendRedirect("index.html");
        }
        %>
    </head>
    <body>
        <div class="contenidoInicio">
            <h1>Hola <%=request.getSession().getAttribute("nombre")%>,¡Bienvenido! </h1>

            <p><a></a></p>

            <p> Sesión iniciada como: ${txtUsuario} </p>

            <form action="CerrarS">
                <input type="submit" value="Cerrar Sesión">
            </form>
        </div>
    </body>
</html>