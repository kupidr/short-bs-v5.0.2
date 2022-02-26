// ************Copy function************
/*
 *First where click BtnId,
 *Second Who copyTextId
 *let BtnId = document.getElementById("cssCdnCopy");
 *let copyTextId = document.getElementById("cssCdnCode");
 */
function copyMethod(btn, des) {
  btn.addEventListener("click", function () {
    copyDivToClipboard(des);
    setTimeout(function () {
      btn.style.visibility = "hidden";
      setTimeout(function () {
        btn.style.visibility = "unset";
      }, 500);
    }, 50);
  });
  function copyDivToClipboard(idName) {
    var range = document.createRange();
    range.selectNode(idName);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
  }
}
// top nav item selectionn function and color change
function activeNavColor(e) {
  let topNav = e.children;
  for (let i = 0; i < topNav.length; i++) {
    topNav[i].addEventListener("click", function () {
      for (let j = 0; j < topNav.length; j++) {
        topNav[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}
function oneClickShow() {
  show(arguments[0]);
  for (let i = 0; i < arguments.length; i++) {
    if (i === 0) {
      show(arguments[i]);
    } else {
      hide(arguments[i]);
    }
  }
}
function show(e) {
  e.style.display = "block";
}
function hide(e) {
  e.style.display = "none";
}
export { copyMethod, activeNavColor, oneClickShow, show, hide };
