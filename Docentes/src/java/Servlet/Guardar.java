
package Servlet;

import SQL.MetodsSQL;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author hp
 */
public class Guardar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        MetodsSQL metodos = new MetodsSQL();
        String txtNumE = request.getParameter("txtNumE");
        String txtNombre = request.getParameter("txtNombre");
        String txtApellidos = request.getParameter("txtApellidos");
        String txtContrasena = request.getParameter("txtContrasena");
        String txtGenerarUsuario = request.getParameter("txtGenerarUsuario");

        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<body>");
        out.println("<script type=\"text/javascript\">");

        boolean usuarioRepetido = metodos.buscarUsuarioRepetidoBD(txtNumE);

        if (usuarioRepetido == true) { 
            out.println("alert('El docente con el Numero de empleado " + txtNumE + ", Ya esta registrado')");
            out.println("location='index.html'");
        } else { 
            
            boolean registro = metodos.registrarUsuario(txtNumE, txtNombre, txtApellidos, txtContrasena, txtGenerarUsuario);
            if (registro == true) {
                out.println("alert('Usuario registrado con éxito ')");
                out.println("location='index.html'");
            } else {
                out.println("alert('ERROR no se pudo registrar el usuario')");
                out.println("location='index.html'");
            }
            //System.out.println("El valor de registro en SERVLET es: " + registro);
            
        }

        out.println("</script>");
        out.println("</body>");
        out.println("</html>");

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
