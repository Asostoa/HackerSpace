const router = require('express').Router();
const path = require('path');

router.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,"../index.html"));
});

router.get("/sign-in-page",(request,response)=>{
    response.sendFile(path.join(__dirname,"../signInPage.html"));
});

router.get("/user-profile/:username",(request,response)=>{
    response.sendFile(path.join(__dirname,"../userProfile.html"));
});


module.exports = router;