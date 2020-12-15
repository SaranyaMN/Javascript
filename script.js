$(document).ready(function() {
    $("button").click(function() {

        var user = $("#uname").val();
        var admin = "admin"
        var pass = "12345";
        var pas = $("#password").val();
        if (user == admin && pas == pass) {
            window.location.href = "home.html";
        } else {
            alert("Please check your username or password");
        }
    });
});
