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
    for (let member of this.list) {
      let newItem = document.createElement("li");
      newItem.innerHTML +=
        '<input type="checkbox" onclick="List.prototype.check();" value="Select" />  ' +
        member +
        " " +
        '<a class="deleteButton" onclick="List.prototype.link();">Delete</a>';
      this.name.appendChild(newItem);
    }
  }

  delete(item) {}

  check() {
    console.log("checkbox clicked!");
  }

  link() {
    console.log("link clicked!");
  }
}
const theForm = document.getElementById("toDoForm");
const htmlList = document.getElementById("toDoList");
let javascriptList = new List(htmlList);

theForm.addEventListener("submit", e => {
  let userInput = document.getElementById("new-task");
  e.preventDefault();
  javascriptList.add(userInput.value);
});
