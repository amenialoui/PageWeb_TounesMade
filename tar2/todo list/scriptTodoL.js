let popup=document.getElementById('popup');
function openpopup() {
    popup.classList.add('open-popup') 
}
function closepopup() {
    popup.classList.remove('open-popup') 
}

//  first select all elements

const form = document.querySelector("#new-item-form");
const input = document.querySelector("#input");
const list = document.querySelector(".items");

// when i submit the form i want to add a new item to the list

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // create a new item
  const item = document.createElement("div");
  //adding the class to the item
  item.classList.add("item");
  // adding the text to the item from the input value
  item.innerText = input.value;
  // adding the item to the list
  list.appendChild(item);
  // clear the input
  input.value = "";
  // focus on the input
  input.focus();

  // create a delete event listner when we click on the item
  //   item.addEventListener("click", () => {
  //     list.removeChild(item);
  //   });

  // create a delete button
  const button = document.createElement("div");
  // adding the text to the button
  button.innerText = "X";
  // adding the class to the button
  button.classList.add("delete-button");
  // adding the button to the item
  item.appendChild(button);

 

  // create a delete event listner when we click on the button
  button.addEventListener("click", function () {
    list.removeChild(item);
  });
});
