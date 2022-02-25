// Import all files here
import Header from "../component/header/Header.js";
import Aside from "../component/aside/Aside.js";
import Home from "../component/home/Home.js";
import Install from "../component/install/Install.js";
import Color from "../component/color/Color.js";

Header();
Aside();
Home();
// Click and show document here
let navClick = document.querySelector(".nav-bar  nav ul").children;
for (let i = 0; i < navClick.length; i++) {
  navClick[i].addEventListener("click", function () {
    for (let j = 0; j < navClick.length; j++) {
      navClick[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// ***********There is All components***********
// let rInstall = document.querySelector("right-side section#install")
// let hom = document.querySelector(".nav-bar  nav ul #home");
// let ins = document.querySelector(".nav-bar  nav ul #install");
// let col = document.querySelector(".nav-bar  nav ul #color");
// hom.addEventListener("click", function () {
//   window.location.reload()
// });
// ins.addEventListener("click", function () {
//   if(rInstall === 0){
//     Install()
//   }
// });
// col.addEventListener("click", function () {
//   Color();
// });
Color()
