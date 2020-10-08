const signUpButton = $("#sign-up-button");

const form = $("#form");

// let user = {
//     fullName,
//     email,
//     city,
//     technologyStack,
//     gitHub,
//     linkedIn,
//     profileImage
// }

signUpButton.on('click', function(event){
    event.preventDefault();
    const fullName = $("#full-name").val();
    const email = $("#email").val();
    const city = $("#city").val();
    const technologyStack = $("#technology-stack").val();
    const gitHub = $("#github").val();
    const linkedIn = $("#linkedin").val();
    const profileImage = $("#profile-image").val();
    console.log(fullName);
});