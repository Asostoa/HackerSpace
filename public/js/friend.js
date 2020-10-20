$(document).ready(()=>{
    const imported = sessionStorage.getItem("hackerSearch");
    const importParsed = JSON.parse(imported)
    console.log(importParsed)
    $.get("/api/friend/codeSnippets").then((data) => {
      //Here we are looping thru the lengthof the codeSnippets that we have inside of the database.
      if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
          //Here we are creating the list of items for each one of th codes
          var row = $("<ul>");
          row.addClass("codeList");

          row.append("<li>Title: " + data[i].title + "</li>");
          row.append("<li>Code: " + data[i].code + "</li>");
          row.append("<li>Description: " + data[i].description + "</li>");

          row.append("</ul>");

          $("#codeContainerWork").prepend(row);
        }
      }
    });
})