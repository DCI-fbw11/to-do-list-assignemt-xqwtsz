class List {
  constructor(name) {
    this.name = name;
    this.list = [];
    this.targetList = document.getElementById("toDoList");
    this.userInput = document.getElementById("new-task");
    this.toDoForm = document.getElementById("toDoForm");
    console.log(this);
    this.toDoForm.addEventListener("submit", e => {
      e.preventDefault();
      this.add(this.userInput.value);
      console.log(this);
    });
  }

  add(item) {
    let newListItem = document.createElement("li");
    newListItem.innerHTML +=
      '<input type="checkbox" onclick="sel()" value="Select" />  ' + item;
    if (this.targetList.childElementCount == 0) {
      this.targetList.appendChild(newListItem);
      this.userInput.value = "";
    } else {
      this.targetList.insertBefore(newListItem, this.targetList.firstChild);
      this.userInput.value = "";
    }
    console.log(newListItem);
  }

  delete(item) {}

  check(item) {}

  unCheck(item) {}
}

let testList = new List("hi");

// const htmlList = document.getElementById("toDoList");
// let javascriptList = new List(htmlList);

/*
function addItem() {
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
*/
