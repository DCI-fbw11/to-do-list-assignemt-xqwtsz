class List {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  add(item) {
    let newItem = document.createElement("li");
    newItem.onclick = deleteItem;
    newItem.innerHTML += item;
    if (this.list.length == 0) {
      this.list.push(newItem);
    } else {
      this.list.unshift(newItem);
    }
    //this.list.push(item);
    this.render();
  }

  cleanList() {
    while (this.name.firstChild) {
      this.name.removeChild(this.name.firstChild);
    }
  }
  render() {
    this.cleanList();
    for (let item = 0; item < this.list.length; item++) {
      if (this.list[item].class === "click") {
        this.list.splice(item, 1);
      }
    }
    for (let member = 0; member < this.list.length; member++) {
      this.list[member].tag = member;
      this.name.appendChild(this.list[member]);
      // console.log(this.list[member].tag);
    }
  }

  deleteItem() {
    console.log("link clicked!");
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].addEventListener("click", function() {
        this.class = "click";
      });
    }
    this.render();
  }
}

const theForm = document.getElementById("toDoForm");
const htmlList = document.getElementById("toDoList");
let javascriptList = new List(htmlList);

theForm.addEventListener("submit", e => {
  let userInput = document.getElementById("new-task");
  e.preventDefault();
  javascriptList.add(userInput.value);
  // console.log(javascriptList.list);
});

// console.log(javascriptList.list);

function check() {
  javascriptList.check();
}

function deleteItem() {
  javascriptList.deleteItem();
  // var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li");
  // for (var i = 0; i < listItems.length; i++) {
  //   listItems[i].addEventListener("click", function() {
  //     this.parentNode.removeChild(this);
  //   });
  // }
}
