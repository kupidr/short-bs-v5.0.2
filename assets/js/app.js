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
  Install();

  // Click and show document and nav mhere
  let navClick = document.querySelector(".nav-bar  nav ul");
  activeNavColor(navClick);
}
