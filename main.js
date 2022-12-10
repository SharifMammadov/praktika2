let input = document.querySelector(".form-control"); // input
let addInput = document.querySelector(".plus"); //plus button
let addTodo = document.querySelector(".list"); //ad to do
let listGroup = document.querySelector(".list-group"); //ul

addTodo.addEventListener("click", () => {
  
  if (input.value.trim() != "") {
    listGroup.innerHTML += `<li class="list-group-items"> <span class="todo-text">${input.value}</span>
    <div class="delete-todo"><img src="/icons/Group 77.svg" alt=""><img src="/icons/Group 70.svg"
            alt=""></div>
</li>`;

    input.value = "";
  } else {
    alert("to do elave edin");
  }
});

// document.querySelector(".delete-todo").addEventListener("click", () => {console.log('deleted')});
document.body.addEventListener("click", (e) => {
if(e.target.classList.contains("delete-todo")){
  e.target.parentElement.remove()
}

});
input.addEventListener("click", () => {
  input.placeholder.onfocus = none;

});