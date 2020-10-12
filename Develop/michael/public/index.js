const signUpButton = $("#sign-up-btn");

let newUser;

signUpButton.on('click', function(event){
    event.preventDefault();
    const fullName = $("#full-name").val();
    const userName = $("#username").val();
    const password = $("#password").val();
    const email = $("#email").val();
    const city = $("#city").val();
    const technologyStack = $("#technology-stack").val();
    const gitHub = $("#github").val();
    const linkedIn = $("#linkedin").val();
    const profileImage = $("#profile-image").val();
    newUser = {
        fullName,
        userName,
        password,
        email,
        city,
        technologyStack,
        gitHub,
        linkedIn,
        profileImage
    };
    console.log(newUser)
    
    $.post("/api/users/" + userName)
    .then((data)=>{
        console.log(data);
        alert("Adding new user...")
    });

});