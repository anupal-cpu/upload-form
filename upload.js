let profiles = [
  {
    id: 1,
    img: "./profile.jpg",
    name: "johnas patric",
    price: "$60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae suscipit molestias labore esse quisqua m!",
  },
  {
    id: 2,
    img: "./profile2.jpg",
    name: "amily scatdtman",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae suscipit molestias labore esse quisqua m!",
  },
  {
    id: 3,
    img: "./profile3.jpg",
    name: "hardic vanshal",
    price: "$90",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae suscipit molestias labore esse quisqua m!",
  },
  {
    id: 4,
    img: "./profile4.jpg",
    name: "denim cougar",
    price: "$170",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae suscipit molestias labore esse quisqua m!",
  },
  {
    id: 5,
    img: "./profile5.jpg",
    name: "camron rodrigo",
    price: "$120",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae suscipit molestias labore esse quisqua m!",
  },
];

//selectors
// file-input
// name-input
//price-input
//massage
let fileImg = document.querySelector(".file-input");
let nameInput = document.querySelector(".name-input");
let price = document.querySelector(".price-input");
let description = document.querySelector(".massage");
let btn = document.querySelector(".btn");
let sectionCenter = document.querySelector(".main");
let uploadBtn = document.querySelector(".upload-btn");
let uploadForm = document.querySelector(".upload");
let closeForm = document.querySelector(".close");
let bd = document.querySelector(".wrap");

//eventListeners
let display = profiles.map(function (item) {
  return `<div class="container">
  <img src=${item.img} alt="profile image" />
  <article class="info">
    <div class="tittle">
      <h3 class="name">${item.name}</h3>
      <h3 class="price">${item.price}</h3>
    </div>
    <hr />
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      possimus sunt, voluptatem fugiat tempora labore?
    </p>
  </article>
</div>`;
});

window.addEventListener("DOMContentLoaded", function () {
  display = display.join("");
  sectionCenter.innerHTML = display;
});

uploadBtn.addEventListener("click", bringForm);
closeForm.addEventListener("click", formGone);
btn.addEventListener("click", uploading);
let layer;
//functions

//upload coming

function bringForm() {
  uploadForm.classList.add("slide-down");
  // making layer
  layer = document.createElement("div");
  layer.classList.add("mask1");
  bd.appendChild(layer);
  layer.addEventListener("click", function(){
    uploadForm.classList.remove("slide-down");
    layer.classList.add("hide");
  layer.addEventListener("transitionend", function () {
    layer.remove();
  });
  })
}

// upload form disappearing

function formGone() {
  // closing form
  uploadForm.classList.remove("slide-down");

  //removing layer
  layer.classList.add("hide");
  layer.addEventListener("transitionend", function () {
    layer.remove();
  });
}

// uploading something

function uploading() {
  let obj = {};
  obj.img = "./profile.jpg";
  obj.name = nameInput.value;
  obj.price = price.value;
  obj.description = description.value;
  profiles.push(obj);
  console.log(profiles);
  //displaying

  let show = profiles.map(function (sweets) {
    return `<div class="container">
  <img src=${sweets.img} alt="profile image" />
  <article class="info">
    <div class="tittle">
      <h3 class="name">${sweets.name}</h3>
      <h3 class="price">${sweets.price}</h3>
    </div>
    <hr />
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      possimus sunt, voluptatem fugiat tempora labore?
    </p>
  </article>
</div>`;
  });
  show = show.join("");
  sectionCenter.innerHTML = show;
  uploadForm.classList.remove("slide-down");
  layer.classList.add("hide");
  layer.addEventListener("transitionend", function () {
    layer.remove();
  });
}
