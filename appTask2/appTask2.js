
function runApp() {

  $("#buttonElement").on("click", function() {
    let taskValue = $("#taskInput").val();
    $newElem = $("<li></li>").text(taskValue);


    $("#taskList").append($newElem);

    let delButton = $('<button>',
    {
      text: "delete",
      click: function() {
        this.parentNode.remove();
      }
    });

    $newElem.append(delButton);

  });

}

runApp();
