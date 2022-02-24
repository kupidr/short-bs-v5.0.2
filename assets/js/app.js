// Import all files here
import Install from "./component/install/install.js";

let install = document.querySelector('a#install')
install.addEventListener('click', function(){
  Install()
})