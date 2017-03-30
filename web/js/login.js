/**
 * Created by brooke.brommel on 3/23/2017.
 */
<!-- AJAX Post -->
function invalidateSessionButton() {

    var url = "api/invalidate_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $('#logout').hide();
        getSessionJava();
    });
}

function getSessionJava() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $('#getSessionResult').html(dataFromServer);
        dataFromServer = dataFromServer.trim();
        console.log("dataFromServer '"+dataFromServer+"'");
        if(dataFromServer === "You are not logged in."){
            $('#logout').hide();
            console.log("hide");
        }
        else{
            $('#logout').show();
            console.log("Show");

        }
    });
}

function setSessionJava() {

    var url = "api/login_servlet";


    var loginId = $("#loginId").val();

    var dataToServer = {loginId : loginId};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $("#loginId").val("");
        getSessionJava();


    });
}
button = $('#getSessionJava');
button.on("click", getSessionJava);

button = $('#setSessionJava');
button.on("click", setSessionJava);


button = $('#invalidateSession');
button.on("click", invalidateSessionButton);



$('#logout').hide();
getSessionJava();
