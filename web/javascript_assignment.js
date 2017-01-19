// Part 1
function myUpdateFunction(event) {
    console.log("Hello");
}

var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);


// Part 2




function myAddUpdateFunction() {
    var first = $("#field1").val();
    var second = $("#field2").val();
    var result = Number(first) + Number(second);
    $("#field3").val(result);

}



var formButton2 = $('#button2');
formButton2.on("click", myAddUpdateFunction);


// Part 3

function hideFunction(event) {
    if ($("#paragraphToHide").is(":visible")){
        $("#paragraphToHide").hide(500);
    }
    else {
        $("#paragraphToHide").show(500);
    }
}

var formButton3 = $('#button3');
formButton3.on("click", hideFunction);


// Part 4

function validateFunction(event) {
    var v1 = $('#phoneField').val();
    var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (reg.test(v1)) {
        console.log("Ok");
    } else {
        console.log("Bad");
    }}

var formButton4 = $('#button4');
formButton4.on("click", validateFunction);




// Part 5

function jsonFunction(event){

    var formObject = {};

    //set a field in the objecgt to the value in this form field
    formObject.firstName = $('#firstName').val();
    formObject.last = $('#lastName').val();
    formObject.email = $('#email').val();

    // Build the JSON string based on that object's fields
    var jsonString = JSON.stringify(formObject);


    console.log(jsonString);



}

var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);/**
 * Created by brooke.brommel on 1/19/2017.
 */
