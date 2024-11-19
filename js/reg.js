$(document).ready(function() {
    $("#password1").keyup(function() {
        var num = $("#password").val();
        var num2 = $("#password1").val();
        
        if (num2.length === 0) {
            $("#lab p").html("Re-Password");
            $("#lab p").css({color: "gray"});
        } else if (num === num2) {
            $("#lab p").html("Correct pass");
            $("#lab p").css({color: "green"});
        } else {
            $("#lab p").html("Not same pass!");
            $("#lab p").css({color: "red"});
        }
    });
    

    $(".form").submit(function(e) {
        var pass1 = $('#password').val();
        var pass2 = $('#password1').val();
        if (pass2 !== pass1) {
            e.preventDefault();
        }
    });
    

});
