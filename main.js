class List {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  updateList() {
    this.deleteAll();
    let list_check = localStorage.getItem('todo');
    if (list_check !== null) {
      this.list = JSON.parse(list_check);
    }
    return this.list;
  }

  add(item) {
    this.list = this.updateList();

    if (this.list.length == 0) {
      this.list.push(item);
    } else {
      this.list.unshift(item);
    }

    localStorage.setItem('todo', JSON.stringify(this.list));

    this.render();
  }

  deleteAll() {
    while (this.name.firstChild) {
      this.name.removeChild(this.name.firstChild);
    }
  }

  deleteItem(id) {
    this.list = this.updateList();
    this.list.splice(id, 1)

    localStorage.setItem('todo', JSON.stringify(this.list))
    this.deleteAll();
    this.render();
  }

  /* toggle(item) {
    if (item.classList.contains('checked')) {
      item.classList.remove('checked');
    } else {
      item.classList.add('checked');
    }
  } */

  render() {

    this.list = this.updateList();


    for (let t = 0; t < this.list.length; t++) {
      let newItem = document.createElement("li");
      newItem.innerHTML += "&#9830;  " + this.list[t] + '<button class="remove" onclick="remove();">delete</button>';
      newItem.id = t;
      /* newItem.onclick = toggle; */
      this.name.appendChild(newItem);
    }
  }
}

const theForm = document.getElementById("toDoForm");
const htmlList = document.getElementById("toDoList");
let javascriptList = new List(htmlList);

theForm.addEventListener("submit", e => {
  let userInput = document.getElementById("new-task");
  e.preventDefault();
  javascriptList.add(userInput.value)
  userInput.value = "";

});

function remove() {
  let id = this.id;
  javascriptList.deleteItem(id);
}

/* function toggle() {
  javascriptList.toggle(this);
  //console.log(this + "is clicked");
  /*
    if (this.classList.contains('checked')) {
      this.classList.remove('checked');
    } else {
      this.classList.add('checked');
    }
}*/

javascriptList.render();