// /* global moment */

// // When user clicks add-btn
// $("form").on("submit", function(event) {
//   event.preventDefault();

//   // Make a newChirp object
//   var newPost = {
//     title: $("#code_title").val(),
//     code: $("#code").val(),
//     description: $("#description_code").val(),
//     created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
//   };

//   console.log(newPost);

//   // Send an AJAX POST-request with jQuery
//   $.post(
//     " https://cors-anywhere/api/new",
//     newPost
//   )
//     // On success, run the following code
//     .then(function () {
//       var row = $("<div>");
//       row.addClass("post");

//       row.append("<p>" + newPost.title + " Posted: </p>");
//       row.append("<p>" + newPost.code + "</p>");
//       row.append("<p>" + newPost.description + "</p>");
//       row.append(
//         "<p>At " + moment(newPost.created_at).format("h:mma on dddd") + "</p>"
//       );

//       $("#CodePost").prepend(row);
//     });

//   // Empty each input box by replacing the value with an empty string
//   $("#code_title").val("");
//   $("#description_code").val("");
//   $("#code").val("");
// });

// // When the page loads, grab all of our chirps
// $.get("/api/all", function(data) {

//   if (data.length !== 0) {

//     for (var i = 0; i < data.length; i++) {

//       var row = $("<div>");
//       row.addClass("post");

//       row.append("<p>" + data[i].author + " posted.. </p>");
//       row.append("<p>" + data[i].code + "</p>");
//       row.append("<p>" + data[i].description + "</p>");
//       row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//       $("#CodePost").prepend(row);

//     }

//   }

// });
