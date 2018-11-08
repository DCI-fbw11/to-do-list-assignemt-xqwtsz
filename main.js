/*class List {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  add(item) {}

  delete(item) {}

  check(item) {}

  unCheck(item) {}
}*/

let list = document.getElementById("toDoList");

function addItem() {
  let list = document.getElementById("toDoList");
  let userInput = document.getElementById("new-task");
  let newListItem = document.createElement("li");
  newListItem.innerHTML +=
    '<input type="checkbox" onclick="sel()" value="Select" />  ' +
    userInput.value;
  newListItem.onclick = function() {
    this.parentNode.removeChild(this);
  };
  if (list.childElementCount == 0) {
    list.appendChild(newListItem);
    userInput.value = "";
  } else {
    list.insertBefore(newListItem, list.firstChild);
    userInput.value = "";
  }
}

function test() {
  console.log("Item Clicked!");
}

list.addEventListener("click", test);
