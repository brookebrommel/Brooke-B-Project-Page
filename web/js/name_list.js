// Main Javascript File

function updateTable() {
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
        $('#datatable tr').remove();


        for (var i = 0; i < json_result.length; i++) {
            var mystring = json_result[i].phone;
            mystring = mystring.substring(0,3) + "-" + mystring.substring(3,6) + "-" + mystring.substring(6,10);
            $("#datatable tbody").append("<tr><td>"+json_result[i].id+"</td>" +
                "<td>"+json_result[i].first+"</td>" +
                "<td>"+json_result[i].last+"</td>" +
                "<td>"+json_result[i].email+"</td>" +
                "<td>"+mystring+"</td>" +
                "<td>"+json_result[i].birthday+"</td>" +
                "<td><button type='button' name='delete' class='deleteButton btn' value='" + json_result[i].id + "'>Delete</button></td>" +
                "<td><button type='button' name='edit' class='editButton btn' value='" + json_result[i].id + "'>Edit</button></td></tr>");
            }

            var deleteButtons = $(".deleteButton");
            deleteButtons.on("click", deleteItem);

            var editButton = $(".editButton");
            editButton.on("click", editItem);

            console.log("Done");
        }
    );
}

// There's a button in the form with the ID "addItem"
// Associate the function showDialogAdd with it.
var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

// Called when "Add Item" button is clicked
function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");

    $('#lastName').val("");

    $('#email').val("");

    $('#phone').val("");

    $('#birthday').val("");



    // Show the hidden dialog
    $('#myModal').modal('show');
    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameGlyph').removeClass("glyphicon-ok");
    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameGlyph').removeClass("glyphicon-ok");
    $('#emailDiv').removeClass("has-error");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailGlyph').removeClass("glyphicon-ok");
    $('#phoneDiv').removeClass("has-error");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneGlyph').removeClass("glyphicon-ok");
    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    $('#myModal').modal('show');
}

// Called when "Save Changes" button is clicked
    function saveFormChanges() {
        validateFunction();
        // Print that we got here
        console.log("Saving Changes");
    }

    function validateFunction(event) {
        // Get the field
        var v1 = $('#firstName').val();
        var v2 = $('#lastName').val();
        var v3 = $('#email').val();
        var v4 = $('#phone').val();
        var v5 = $('#birthday').val();

        // Create the regular expression
        var reg = /^[a-z ,.'-]+$/i;
        var regEmail = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var regPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        var regBirthday = /(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/;

        var valid_form = true;

        // Test the regular expression to see if there is a match
        if (reg.test(v1)) {
            $('#firstNameDiv').removeClass("has-error");
            $('#firstNameDiv').addClass("has-success");
            $('#firstNameGlyph').removeClass("glyphicon-remove");
            $('#firstNameGlyph').addClass("glyphicon-ok");
            $('firstNameStatus').val("(success)");
            console.log("success");
        } else {
            $('#firstNameDiv').removeClass("has-success");
            $('#firstNameDiv').addClass("has-error");
            $('#firstNameGlyph').removeClass("glyphicon-ok");
            $('#firstNameGlyph').addClass("glyphicon-remove");
            $('firstNameStatus').val("(error)");
            console.log("failed");
            valid_form = false;
        }
        if (reg.test(v2)) {
            $('#lastNameDiv').removeClass("has-error");
            $('#lastNameDiv').addClass("has-success");
            $('#lastNameGlyph').removeClass("glyphicon-remove");
            $('#lastNameGlyph').addClass("glyphicon-ok");
            $('lastNameStatus').val("(success)");
            console.log("success");
        } else {
            $('#lastNameDiv').removeClass("has-success");
            $('#lastNameDiv').addClass("has-error");
            $('#lastNameGlyph').removeClass("glyphicon-ok");
            $('#lastNameGlyph').addClass("glyphicon-remove");
            $('lastNameStatus').val("(error)");
            console.log("failed");
            valid_form = false;
        }
        if (regEmail.test(v3)) {
            $('#emailDiv').removeClass("has-error");
            $('#emailDiv').addClass("has-success");
            $('#emailGlyph').removeClass("glyphicon-remove");
            $('#emailGlyph').addClass("glyphicon-ok");
            $('emailStatus').val("(success)");
            console.log("success");
        } else {
            $('#emailDiv').removeClass("has-success");
            $('#emailDiv').addClass("has-error");
            $('#emailGlyph').removeClass("glyphicon-ok");
            $('#emailGlyph').addClass("glyphicon-remove");
            $('emailStatus').val("(error)");
            console.log("failed");
            valid_form = false;
        }
        if (regPhone.test(v4)) {
            $('#phoneDiv').removeClass("has-error");
            $('#phoneDiv').addClass("has-success");
            $('#phoneGlyph').removeClass("glyphicon-remove");
            $('#phoneGlyph').addClass("glyphicon-ok");
            $('phoneStatus').val("(success)");
            console.log("success");
        } else {
            $('#phoneDiv').removeClass("has-success");
            $('#phoneDiv').addClass("has-error");
            $('#phoneGlyph').removeClass("glyphicon-ok");
            $('#phoneGlyph').addClass("glyphicon-remove");
            $('phoneStatus').val("(error)");
            console.log("failed");
            valid_form = false;
        }
        if (regBirthday.test(v5)) {
            $('#birthdayDiv').removeClass("has-error");
            $('#birthdayDiv').addClass("has-success");
            $('#birthdayGlyph').removeClass("glyphicon-remove");
            $('#birthdayGlyph').addClass("glyphicon-ok");
            $('birthdayStatus').val("(success)");
            console.log("success");
        } else {
            $('#birthdayDiv').removeClass("has-success");
            $('#birthdayDiv').addClass("has-error");
            $('#birthdayGlyph').removeClass("glyphicon-ok");
            $('#birthdayGlyph').addClass("glyphicon-remove");
            $('birthdayStatus').val("(error)");
            console.log("failed");
            valid_form = false;
        }

        if (valid_form){
            var url = "/api/name_list_edit";
            var id = $("#id").val();
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var birthday = $("#birthday").val();

            var dataToServer = { "id" : id, "firstName" : firstName, "lastName" : lastName, "email" : email, "phone" : phone, "birthday" : birthday};
            console.log(dataToServer);

           $.post(url, dataToServer, function (dataFromServer) {
                console.log("Finished calling servlet.");
                console.log(dataFromServer);
               $('#myModal').modal('hide');
               $('#datatable tr').remove();
               updateTable();
            });
        }
    }



var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveFormChanges);



function deleteItem(e) {
    console.debug("Delete");
    var idValue = e.target.value;
    console.debug(idValue);
    var url = "api/name_list_delete";
    var dataToServer = { id : idValue };

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $('#datatable tr').remove();
        updateTable();
    })
}

var buttons = $("deleteButton");
buttons.on("click", deleteItem);

function editItem(e) {
    console.debug("Edit");
    console.debug(e.target.value);

    // Grab the id from the event
    //var id = e.target.value;

    var id = e.target.value;
    var firstName = e.target.parentNode.parentNode.querySelectorAll("td")[1].innerHTML;
    console.log(firstName);
    var lastName = e.target.parentNode.parentNode.querySelectorAll("td")[2].innerHTML;
    console.log(lastName);
    var email = e.target.parentNode.parentNode.querySelectorAll("td")[3].innerHTML;
    console.log(email);
    var phone = e.target.parentNode.parentNode.querySelectorAll("td")[4].innerHTML;
    console.log(phone);
    var birthday = e.target.parentNode.parentNode.querySelectorAll("td")[5].innerHTML;
    console.log(birthday);


    $('#id').val(id); // Yes, now we set and use the hidden ID field
    console.log($('#id').val());
    $('#firstName').val(firstName);
    $('#lastName').val(lastName);
    $('#email').val(email);
    $('#phone').val(phone);
    $('#birthday').val(birthday);

    $('#myModal').modal('show');
}




// Call your code.
updateTable();
