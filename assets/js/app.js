// Import all files here
import Install from "./component/install/install.js";
import Color from "./component/color/color.js";
Color()

// Click and show document here
let install = document.querySelector('a#install')
install.addEventListener('click', function(){
  Install()
})
