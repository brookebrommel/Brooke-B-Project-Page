package edu.simpson.brooke;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(name = "LoginServlet")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();


        String sessionValue = request.getParameter("loginId");

        HttpSession session = request.getSession();
        session.setAttribute("loginId", sessionValue);

        out.println("Done setting the session variable");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
