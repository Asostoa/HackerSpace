$(document).ready(function(){
$("#uploadBtn").click(function(event){
    event.preventDefault();
    var input = document.querySelector("input[type=file]"),
      file = input.files[0];
      const url="/uploads"
   $.ajax({
     type: "POST",
     url: url,
     data: file,
    //  success: success,
    //  dataType: dataType,
     contentType: "multipart/form-data",
   })

});


});