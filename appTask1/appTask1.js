
function runApp() {

  let buttonElement = document.getElementById("buttonElement");
  let taskList = document.getElementById("taskList");
  let taskInput = document.getElementById("taskInput");

  buttonElement.addEventListener("click", function() {

    let newElem = document.createElement("LI");
    let newContent = document.createTextNode(taskInput.value);

    //delete button
    let newButton = document.createElement("BUTTON");
    let buttonName = document.createTextNode("delete");
    newButton.appendChild(buttonName);
    newButton.addEventListener("click", function() {
      newElem.parentNode.removeChild(newElem);
    });

    newElem.appendChild(newContent);
    newElem.appendChild(newButton);

    taskList.appendChild(newElem);






  });
}


runApp();
