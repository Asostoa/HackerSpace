$(document).ready(function () {

    let signUpForm = $("form.signup");
    let firstName = $("#first_name");
    let lastName = $("#last_name");
    let userEmail = $("#user_email");
    let userName = $("#user_name");
    let userPassword = $("#user_password");
    let userTechnology = $("#user_technology");
    let userGithub = $("#user_github");
    let userLinkedin = $("#user_linkedin");
    let userPicture = $("#user_picture")

    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            email: userEmail.val().trim(),
            user_name: userName.val().trim(),
            password: userPassword.val().trim(),
            technology: userTechnology.val().trim(),
            github: userGithub.val().trim(),
            linkedin: userLinkedin.val().trim(),
            profilePicture: userPicture.val().trim()
        };

        if (!userData.first_name || !userData.last_name ||  !userData.email ||  !userData.user_name ||  !userData.password ||!userData.technology ||  !userData.github || !userData.linkedin || !userdata.profilePicture ) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.first_name, userData.last_name  , userData.email, userData.user_name, userData.password , userData.technology, userData.github, userData.linkedin ,userdata.profilePicture);
        
        first_name.val("");
        last_name.val("");
        userEmail.val("");
        userPassword.val("");
        userTechnology.val("");
        userGithub.val("");
        userLinkedin.val("");
        userPicture.val("");
     });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(first_name,last_name,email,user_name,password,technology,github,profilePicture) {
        $.post("/api/signup", {
            first_name: first_name,
            last_name: last_name,
            user_name: user_name, 
            email : email,
            password: password,
            technology: technology,
            github: github,
            linkedin :linkedin,
            profilePicture :profilePicture
        })
            .then(function (data) {
                window.location.replace("/members");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});