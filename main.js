let input = document.querySelector(".form-control"); // input
let addInput = document.querySelector(".plus"); //plus button
let addTodo = document.querySelector(".list"); //ad to do
let listGroup = document.querySelector(".list-group"); //ul
let greyDown = document.querySelector(".down1");
let greyUpper = document.querySelector(".upper1");
let blackDown = document.querySelector(".down2");
let blackUpper = document.querySelector(".upper2");
let deleteBtnPink = document.querySelector(".delete-pink");
let deleteBtnGrey = document.querySelector(".delete-grey");

//sasasa
addTodo.addEventListener("click", () => {
  if (input.value.trim() != "") {
    listGroup.innerHTML += `<li class="list-group-items"> <span class="todo-text">${input.value}</span>
    <div class="delete-todo"><img class="delete-grey" src="/praktika2/icons/Group 70.svg" alt=""><img class="delete-pink" src="/praktika2/icons/Group 77.svg"
            alt=""></div>
</li>`;
    input.value = "";
  } else {
    alert("to do elave edin");
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-todo")) {
    e.target.parentElement.remove();
  }
});
deleteBtnPink.addEventListener("mouseover", (event) => {
  event.target.style.display = "none";
});

addTodo.addEventListener("click", (event) => {
  if (input.value.trim() != "") {
    greyDown.style.display = "block";
  }
});
greyDown.addEventListener("mouseover", () => {
greyDown.style.display ="none"
blackDown.style.display = "block"

});

// sortLiIconUpperBlack.addEventListener("click", () => {
//   sortLiIconUpperBlack.style.display = "none"
//   sortLiIconDownBlack.style.display = "block"
// });
// sortLiIconUpperBlack.addEventListener("mouseout", () => {
//   sortLiIconUpperBlack.style.display = "none"
//   sortLiIconUpperGrey.style.display = "block"
// });//+
// sortLiIconDownBlack.addEventListener("mouseout", () => {
//   sortLiIconDownBlack.style.display = "none"
//   sortLiIconDownGrey.style.display = "block"
// });//+
