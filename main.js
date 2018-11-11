class List {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  updateList() {
    this.deleteDOMElements();
    let list_check = localStorage.getItem('todo');
    if (list_check !== null) {
      this.list = JSON.parse(list_check);
    }
    return this.list;
  }

  add(item) {
    this.list = this.updateList();

    if (this.list.length == 0) {
      this.list.push({
        'item': item,
        'checked': 'unchecked'
      });
    } else {
      this.list.unshift({
        'item': item,
        'checked': 'unchecked'
      });
    }

    localStorage.setItem('todo', JSON.stringify(this.list));

    this.render();
  }

  deleteDOMElements() {
    while (this.name.firstChild) {
      this.name.removeChild(this.name.firstChild);
    }
  }

  deleteItem(id) {
    this.list = this.updateList();
    this.list.splice(id, 1)

    localStorage.setItem('todo', JSON.stringify(this.list))
    this.deleteDOMElements();
    this.render();
  }

  toggle(item) {
    this.list = this.updateList();
    if (this.list[item].checked === "checked") {
      this.list[item].checked = "unchecked"
    } else {
      this.list[item].checked = "checked"
    }
    localStorage.setItem('todo', JSON.stringify(this.list))
    this.deleteDOMElements();
    this.render();

  }

  render() {

    this.list = this.updateList();



    for (let t = 0; t < this.list.length; t++) {
      let checked = '<input type="checkbox" onclick="toggle(this);" checked> ' + this.list[t].item + ' <button class="remove" onclick="remove(this);">remove</button>';
      let unchecked = '<input type="checkbox" onclick="toggle(this);"> ' + this.list[t].item;
      let toggle;
      if (this.list[t].checked === 'checked') {
        toggle = checked;
      } else {
        toggle = unchecked;
      }
      let newItem = document.createElement("li");
      newItem.innerHTML += `${toggle}`;
      newItem.id = t;
      newItem.className = this.list[t].checked
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
  javascriptList.add(userInput.value.toLowerCase())
  userInput.value = "";
});

function remove(element) {
  let id = element.parentNode.id;
  javascriptList.deleteItem(id);
}

function toggle(item) {
  let id = item.parentNode.id;
  /* console.log(item.parentNode.id + "is clicked"); */
  javascriptList.toggle(id);
}

javascriptList.render();