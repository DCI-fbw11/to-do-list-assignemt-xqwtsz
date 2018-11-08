class List {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  add(item) {
    if (this.list.length == 0) {
      this.list.push(item);
    } else {
      this.list.unshift(item);
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
    for (let member = 0; member < this.list.length; member++) {
      let newItem = document.createElement("li");
      newItem.innerHTML +=
        `<input type="checkbox" onclick="List.prototype.check();" tag="${member}" value="Select" />` +
        " " +
        this.list[member] +
        " " +
        `<a class="deleteButton" onclick="List.prototype.link();" tag="${member}">Delete</a>`;
      this.name.appendChild(newItem);
    }
  }

  delete(item) {}

  check() {
    console.log("checkbox clicked!");
    var current = this;
    for (var i = 0; i < elem.length; i++) {
      if (current != elem[i]) {
        elem[i].classList.remove("active");
      } else if (current.classList.contains("active") === true) {
        current.classList.remove("active");
      } else {
        current.classList.add("active");
      }
    }
  }

  link() {
    console.log("link clicked!");
    console.log(this);
  }
}

const theForm = document.getElementById("toDoForm");
const htmlList = document.getElementById("toDoList");
let javascriptList = new List(htmlList);

theForm.addEventListener("submit", e => {
  let userInput = document.getElementById("new-task");
  e.preventDefault();
  javascriptList.add(userInput.value);
  console.log(javascriptList.list);
});

console.log(javascriptList.list);
