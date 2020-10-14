$(document).ready(() => {

  $("#uploadBtn").click(function(event) {
    event.preventDefault();
    var input = document.querySelector("input[type=file]"),
      file = input.files[0];
    var formData = new FormData();
    formData.append("avatar", file);

    const url = "/uploads";
    $.ajax({
      type: "POST",
      url: url,
      data:{form:formData},
      processData:false,
      //  success: success,
      //  dataType: dataType,
      contentType: false,
    });
  });
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $("#name").text(data.name);
    $("#email").text(data.email);
    $("#city").text(data.city);
    $("#technology").text(data.technology);
    $("#github").text(data.github);
    $("#linkedin").text(data.linkedin);

    const userGit = data.github;

    $.ajax({
      url: "https://api.github.com/users/" + userGit,
      data: {
        client_id: "b9315bcd5a07fcd759d8",
        client_secret: "a2b698bf7e7c02f898197cf136d1a41f704ca8e4",
      },
    }).done(function(user) {
      $.ajax({
        url: "https://api.github.com/users/" + userGit + "/repos",
        data: {
          client_id: "b9315bcd5a07fcd759d8",
          client_secret: "a2b698bf7e7c02f898197cf136d1a41f704ca8e4",
          sort: "created: asc",
          per_page: 5,
        },
      }).done(function(repos) {
        console.log(user.avatar_url);
        $("#profileImage").attr("src", "${user.avatar_url}");

        $.each(repos, function(index, repo) {
          $("#repos").append(`
          <div class="card">
            <div class="row">
              <div class="col-md-8">
                <strong>${repo.name}</strong>: ${repo.description}
              </div>
              <div id="stars" class="col-md-4">
                <span class="badge badge-info">Stars: ${repo.stargazers_count}</span>
              </div>
              <div id="repoBtn" class="col-md-12 pull-right">
                <a href="${repo.html_url}" target="_blank" class="btn btn-dark">Repo Page</a>
              </div>
            </div>
          </div>
        `);
        });
      });
      $("#profile").html(`
      <div id="repos"></div>
      `);
    });
  });



});
