const saveCodeButton = $('#save-code-form');
const deleteButton = $('.delete-btn')

function saveCode(event){
    event.preventDefault();
    const userCode = {
        title: $('#title').val(),
        code: $('#description').val(),
        description: $('#description').val()
    }

    console.log(userCode)

    $.ajax("/api/code", {
      type: "POST",
      data: userCode
    }).then(
      function() {
        console.log("created new code");
        location.reload();
      }
    );
};

function deleteCode(event){
  let id = $(this).data("codeid");
  
  console.log(id)

  $.ajax("/api/code/"+id, {
    type: "DELETE"
  }).then(
    function(){
      console.log("deleted code with id ", id)
      location.reload();
    }
  )
}

function updateCode(event){

};

saveCodeButton.on('submit', saveCode);
deleteButton.on('click', deleteCode);