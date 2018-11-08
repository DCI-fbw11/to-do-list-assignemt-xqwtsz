class ListBinding {
  constructor(element) {
    this.element = element; // an ordered or under list
    this.textList = [];
  }
  /* delete all element from list*/
  deleteAll() {
    while (this.element.firstChild)
      this.element.removeChild(this.element.firstChild);
  }

  /*  update the GUI*/
  update() {
    this.deleteAll();
    for (let text of this.textList) {
      let item = document.createElement("li");
      item.textContent = text;
      this.element.appendChild(item);
    }
  }

  /*add element into list */

  add(item) {
    this.textList.push(item);
    this.update();
  }
  /* delete first element of the list  */
  deleteFirst() {
    this.textList.shift();
    this.update();
  }
}
const myList = document.getElementById("myList");
let listBinding = new ListBinding(myList);
listBinding.update();
