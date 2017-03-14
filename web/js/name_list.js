// Main Javascript File

function updateTable() {
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
        $('#datatable tr:eq(1)').remove();

        for (var i = 0; i < json_result.length; i++) {
            var mystring = json_result[i].phone;
            mystring = mystring.substring(0,3) + "-" + mystring.substring(3,6) + "-" + mystring.substring(6,10);
            console.log(mystring);
            $("#datatable tbody").append("<tr><td>"+json_result[i].id+"</td>" +
                "<td>"+json_result[i].first+"</td>" +
                "<td>"+json_result[i].last+"</td>" +
                "<td>"+json_result[i].email+"</td>" +
                "<td>"+mystring+"</td>" +
                "<td>"+json_result[i].birthday+"</td>" +
                "<td><button type='button' name='delete' class='deleteButton btn' value='" + json_result[i].id + "'>Delete</button></td></tr>");
            }

            var deleteButtons = $(".deleteButton");
            deleteButtons.on("click", deleteItem);
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
}

// Called when "Save Changes" button is clicked
    function saveFormChanges() {

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
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var birthday = $("#birthday").val();

            var dataToServer = { "firstName" : firstName, "lastName" : lastName, "email" : email, "phone" : phone, "birthday" : birthday};
            console.log(dataToServer);

           $.post(url, dataToServer, function (dataFromServer) {
                console.log("Finished calling servlet.");
                console.log(dataFromServer);
            });
        }
    }



var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveFormChanges);
saveChangesButton.on("click", validateFunction);

function deleteItem(e) {
    console.debug("Delete");
    var idValue = e.target.value;
    console.debug(idValue);
    var url = "api/name_list_delete";
    var dataToServer = { id : idValue };

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        updateTable();
    })
}

var buttons = $(".deleteButton");
buttons.on("click", deleteItem);




// Call your code.
updateTable();
