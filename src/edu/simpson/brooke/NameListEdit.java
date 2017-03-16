package edu.simpson.brooke;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;



/**
 * Created by brooke.brommel on 2/14/2017.
 */
@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {

    private final static Logger log = Logger.getLogger(NameListEdit.class.getName());
    private Pattern firstNameValidationPattern;
    private Pattern lastNameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;


    public NameListEdit() {



        // --- Compile and set up all the regular expression patterns here ---
        firstNameValidationPattern = Pattern.compile("^/^[a-z ,.'-]+$/i");
        lastNameValidationPattern = Pattern.compile("^/^[a-z ,.'-]+$/i");
        emailValidationPattern = Pattern.compile("/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/i");
        phoneValidationPattern = Pattern.compile("/\\(?([0-9]{3})\\)?([ .-]?)([0-9]{3})\\2([0-9]{4})/");
        birthdayValidationPattern = Pattern.compile("/(\\d+)(-|\\/)(\\d+)(?:-|\\/)(?:(\\d+)\\s+(\\d+):(\\d+)(?::(\\d+))?(?:\\.(\\d+))?)?/");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String id = request.getParameter("id");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("First Name='" + firstName + "'," + "Last Name='" + lastName + "'," + "Email='" + email + "'," + "Phone='" + phone + "'," + "Birthday='" + birthday + "'");

        Matcher m1 = firstNameValidationPattern.matcher(firstName);
        if (m1.find()) {
            out.println("Passed first name validation");
        } else {
            out.println("Did not pass first name validation");
        }

        Matcher m2 = lastNameValidationPattern.matcher(lastName);
        if (m2.find()) {
            out.println("Passed last name validation");
        } else {
            out.println("Did not pass last name validation");
        }

        Matcher m3 = emailValidationPattern.matcher(email);
        if (m3.find()) {
            out.println("Passed email validation");
        } else {
            out.println("Did not pass email  validation");
        }

        Matcher m4 = phoneValidationPattern.matcher(phone);
        if (m4.find()) {
            out.println("Passed phone validation");
        } else {
            out.println("Did not pass phone validation");
        }

        Matcher m5 = birthdayValidationPattern.matcher(birthday);
        if (m5.find()) {
            out.println("Passed birthday validation");
        } else {
            out.println("Did not pass birthday validation");
        }



        Person person = new Person();
        person.setId(Integer.parseInt(id));
        out.println("made it");
        out.println(Integer.parseInt(id));
        person.setFirst(firstName);
        person.setLast(lastName);
        person.setEmail(email);
        person.setPhone(phone);
        person.setBirthday(birthday);

        if (id.equals("")) {
            PersonDAO.setPerson(person);
        } else {
            PersonDAO.updatePerson(person);
        }
    }
}




