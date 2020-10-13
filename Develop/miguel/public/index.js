$(document).ready(function(){
$("#uploadBtn").click(function(event){
    event.preventDefault();
    var input = document.querySelector("input[type=file]"),
      file = input.files[0];
    console.log(file)

})


});