import {
  activeNavColor,
  copyMethod,
  oneClickShow,
  show,
} from "../../js/functions.js";
export default function () {
  // here all include
  let all = [
    allCategroyButton(),
    bsColor(),
    bsBgColor(),
    textColor(),
    borderColor(),
  ];

  let section = createElement("section", "", "install");
  append(section, all);
  let main = document.querySelector("main");
  main.appendChild(section);

  function createElement(tagName, className, id, innerHTML) {
    let tag = document.createElement(tagName);
    tag.innerHTML = innerHTML || "";
    tag.className = className || "";
    tag.id = id || "";
    return tag;
  }
  function append(parent, children) {
    children.forEach((child) => parent.appendChild(child));
  }
  // ------------- START HERE ------------

  // all category button
  function allCategroyButton() {
    let btn = `
    <div class="copy-view">
      <div class="category">
        <button class="active" id="all">All</button>
        <button id="mainBscolor">Color</button>
        <button id="bg-color">bg-color</button>
        <button id="btn-text-color">text-color</button>
        <button id="border-color">border-color</button>
      </div>
    </div>
    `;

    let card = btn;
    return createElement("div", "card", "", card);
  }
  // Top nav color Function Here
  let categoryNav = document.querySelector(".category");
  activeNavColor(categoryNav);
  // category btn selected
  let allCard = document.getElementById("all");
  let mainBscolor = document.getElementById("mainBscolor");
  let bgColor = document.getElementById("bg-color");
  let TextColorBtn = document.getElementById("btn-text-color");
  let borderColors = document.getElementById("border-color");

  // bootstrap main color
  function bsColor() {
    let title = `<div class="card-title">
    <h2>Bootstrap Main <b>Color</b></h2>
  </div>
  `;
    let img = `<div class="card-image">
    <div class="images">
    <div class="item" id="primary">.primary</div>
    <div class="item" id="secondary">.secondary</div>
    <div class="item" id="success">.success</div>
    <div class="item" id="info">.info</div>
    <div class="item" id="warning">.warning</div>
    <div class="item" id="danger">.danger</div>
    <div class="item" id="white">.white</div>
    <div class="item" id="light">.light</div>
    <div class="item" id="black">.black</div>
    <div class="item" id="dark">.dark</div>
    </div>
    </div>`;

    let card = title + img;
    return createElement("div", "card", "cardMainColor", card);
  }
  {
    copyMethod(primary, primary);
    copyMethod(secondary, secondary);
    copyMethod(success, success);
    copyMethod(info, info);
    copyMethod(warning, warning);
    copyMethod(danger, danger);
    copyMethod(white, white);
    copyMethod(light, light);
    copyMethod(black, black);
    copyMethod(dark, dark);
  }
  let cardMainColor = document.getElementById("cardMainColor");
  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(
        cardMainColor,
        cardBgColors,
        cardTextColors,
        cardBorderColor
      );
    });
  })(mainBscolor);

  // background color
  function bsBgColor() {
    let title = `<div class="card-title">
    <h2><b>Background Color</b> <i>.bg-color</i></h2>
  </div>
  `;
    let img = `<div class="card-image">
    <div class="images">
    <div class="item" id="bg_primary">.bg-primary</div>
    <div class="item" id="bg_secondary">.bg-secondary</div>
    <div class="item" id="bg_success">.bg-success</div>
    <div class="item" id="bg_info">.bg-info</div>
    <div class="item" id="bg_warning">.bg-warning</div>
    <div class="item" id="bg_danger">.bg-danger</div>
    <div class="item" id="bg_white">.bg-white</div>
    <div class="item" id="bg_light">.bg-light</div>
    <div class="item" id="bg_black">.bg-black</div>
    <div class="item" id="bg_dark">.bg-dark</div>
    </div>
    </div>`;

    let card = title + img;
    return createElement("div", "card", "cardBgColor", card);
  }
  {
    copyMethod(bg_primary, bg_primary);
    copyMethod(bg_secondary, bg_secondary);
    copyMethod(bg_success, bg_success);
    copyMethod(bg_info, bg_info);
    copyMethod(bg_warning, bg_warning);
    copyMethod(bg_danger, bg_danger);
    copyMethod(bg_white, bg_white);
    copyMethod(bg_light, bg_light);
    copyMethod(bg_black, bg_black);
    copyMethod(bg_dark, bg_dark);
  }
  let cardBgColors = document.getElementById("cardBgColor");
  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(
        cardBgColors,
        cardMainColor,
        cardTextColors,
        cardBorderColor
      );
    });
  })(bgColor);

  // text color
  function textColor() {
    let title = `<div class="card-title">
    <h2><b>Text Color</b> <i>.text-color</i></h2>
  </div>
  `;
    let img = `<div class="card-image">
    <div class="images">
    <div class="item" id="text_primary">.text-primary</div>
    <div class="item" id="text_secondary">.text-secondary</div>
    <div class="item" id="text_success">.text-success</div>
    <div class="item" id="text_info">.text-info</div>
    <div class="item" id="text_warning">.text-warning</div>
    <div class="item" id="text_danger">.text-danger</div>
    <div class="item" id="text_white">.text-white</div>
    <div class="item" id="text_light">.text-light</div>
    <div class="item" id="text_black">.text-black</div>
    <div class="item" id="text_dark">.text-dark</div>
    </div>
    </div>`;

    let card = title + img;
    return createElement("div", "card", "cardTextColors", card);
  }
  {
    copyMethod(text_primary, text_primary);
    copyMethod(text_secondary, text_secondary);
    copyMethod(text_success, text_success);
    copyMethod(text_info, text_info);
    copyMethod(text_warning, text_warning);
    copyMethod(text_danger, text_danger);
    copyMethod(text_white, text_white);
    copyMethod(text_light, text_light);
    copyMethod(text_black, text_black);
    copyMethod(text_dark, text_dark);
  }
  let cardTextColors = document.getElementById("cardTextColors");
  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(
        cardTextColors,
        cardBgColors,
        cardMainColor,
        cardBorderColor
      );
    });
  })(TextColorBtn);

  // border color
  function borderColor() {
    let title = `<div class="card-title">
    <h2><b>Border Color</b> <i>.border-color</i></h2>
  </div>
  `;
    let img = `<div class="card-image">
    <div class="images">
    <div class="item" id="border_primary">.border-primary</div>
    <div class="item" id="border_secondary">.border-secondary</div>
    <div class="item" id="border_success">.border-success</div>
    <div class="item" id="border_info">.border-info</div>
    <div class="item" id="border_warning">.border-warning</div>
    <div class="item" id="border_danger">.border-danger</div>
    <div class="item" id="border_white">.border-white</div>
    <div class="item" id="border_light">.border-light</div>
    <div class="item" id="border_black">.border-black</div>
    <div class="item" id="border_dark">.border-dark</div>
    </div>
    </div>`;

    let card = title + img;
    return createElement("div", "card", "cardBorderColor", card);
  }
  {
    copyMethod(border_primary, border_primary);
    copyMethod(border_secondary, border_secondary);
    copyMethod(border_success, border_success);
    copyMethod(border_info, border_info);
    copyMethod(border_warning, border_warning);
    copyMethod(border_danger, border_danger);
    copyMethod(border_white, border_white);
    copyMethod(border_light, border_light);
    copyMethod(border_black, border_black);
    copyMethod(border_dark, border_dark);
  }
  let cardBorderColor = document.getElementById("cardBorderColor");
  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(
        cardBorderColor,
        cardMainColor,
        cardBgColors,
        cardTextColors
      );
    });
  })(borderColors);

  // showAllCard(allCard);
  (function (e) {
    e.addEventListener("click", function () {
      show(cardMainColor);
      show(cardBgColors);
      show(cardTextColors);
      show(cardBorderColor);
    });
  })(allCard);

}
