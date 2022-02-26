// Import all files here
import { activeNavColor } from "./functions.js";
import Header from "../component/header/Header.js";
import Aside from "../component/aside/Aside.js";
import Home from "../component/home/Home.js";
import Install from "../component/install/Install.js";
import Color from "../component/color/Color.js";

export default function () {
  Header();
  Aside();
  Home();
  Color();

  // Click and show document and nav mhere
  let navClick = document.querySelector(".nav-bar  nav ul");
  activeNavColor(navClick);
}

// ***********There is All components***********
// let rInstall = document.querySelector("main section#install")
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
