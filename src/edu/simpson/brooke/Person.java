package edu.simpson.brooke;

/**
 * Created by brooke.brommel on 1/30/2017.
 */

public class Person {

    private int id;
    private String first;
    private String last;
    private String email;
    private String phone;
    private String birthday;

    public int getId() {return id; }
    public void setId(int id) { this.id = id; }

    public String getFirst() {return first; }
    public void setFirst(String first) {this.first = first; }

    public String getLast() {return last; }
    public void setLast(String last) {this.last = last; }

    public String getEmail() {return email; }
    public void setEmail(String email) {this.email = email; }

    public String getPhone() {return phone; }
    public void setPhone(String first) {this.phone = phone; }

    public String getBirthday() {return birthday; }
    public void setBirthday(String first) {this.birthday = birthday; }
}