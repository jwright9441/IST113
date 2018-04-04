var myKey = "listValues";
var myItems = [];

function runApp() {

  if(localStorage.getItem(myKey) !== null) {
    let myItemsString = localStorage.getItem(myKey);

    myItems = JSON.parse(myItemsString);

    $(myItems).each(function() {
      createItem(this);
    });
  }
  else {
    createItem("List Goes Here");
  }

  //button
  $("#buttonElement").on("click", function() {

    //create button
    let taskValue = $("#taskInput").val();

    //call create item function
    createItem(taskValue);



    //push item to array
    myItems.push(taskValue);

    //save array
    saveItems();

  });

  //Form display button
  $("#formButton").on("click", function() {
    if ($(".my-form").css("visibility") == "hidden") {
      $(".my-form").css("visibility", "visible");
    }
    else {
      $(".my-form").css("visibility", "hidden");      
    }
  });

}


  //create items function
  function createItem(itemValue) {
    let $newElem = $("<li></li>").text(itemValue);
    $("#taskList").append($newElem);

    //delete button
    let delButton = $('<button>',
    {
      text: "delete",
      click: function() {
        removeItem($newElem);
        $(this.parentNode).remove();

      }
    });
   $newElem.append(delButton);
  }

  function removeItem(item) {

    let index = item.index();
    myItems.splice(index, 1);
    saveItems();

  }

  //save items function
  function saveItems() {
    let myItemsString = JSON.stringify(myItems);
    localStorage.setItem(myKey, myItemsString);
  }

  $("#delAll").on("click", function() {
    myItems = [];
    $("ul").empty();
    saveItems();
  })


//run the app
$(function() {
  runApp();
});
