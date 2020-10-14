$(document).ready(() => {
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
    $("#uploadBtn").click(event => {
      event.preventDefault();
      const input = document.querySelector("input[type=file]"),
        file = input.files[0];
      const formData = new FormData();
      formData.append("avatar", file);
      const url = "/uploads";
      $.ajax({
        type: "POST",
        url: url,
        data: formData,
        //  success: success,
        //  dataType: dataType,
        encType: "multipart/form-data",
        contentType: false,
        processData: false
      });
    });

    $.ajax({
      url: "https://api.github.com/users/" + userGit,
      data: {
        // eslint-disable-next-line camelcase
        client_id: "b9315bcd5a07fcd759d8",
        // eslint-disable-next-line camelcase
        client_secret: "a2b698bf7e7c02f898197cf136d1a41f704ca8e4"
      }
    }).done((user) => {
      $.ajax({
        url: "https://api.github.com/users/" + userGit + "/repos",
        data: {
          // eslint-disable-next-line camelcase
          client_id: "b9315bcd5a07fcd759d8",
          // eslint-disable-next-line camelcase
          client_secret: "a2b698bf7e7c02f898197cf136d1a41f704ca8e4",
          sort: "created: asc",
          // eslint-disable-next-line camelcase
          per_page: 5
        },
      }).done(repos => {
        console.log(user.avatar_url);
        $("#profileImage").attr("src", "${user.avatar_url}");

        $.each(repos, (_index, repo) => {
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