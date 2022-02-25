export default function Color() {
  // all category button
  function allCategroyButton() {
    let btn = `
    <div class="copy-view">
      <div class="category">
        <button>All</button>
        <button>Color</button>
        <button>bg-color</button>
        <button>text-color</button>
        <button>border-color</button>
      </div>
    </div>
    `

    let card = btn;
    return createElement("div", "card", "", card);
  }



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
    return createElement("div", "card", "", card);
  }

  // background color
  function bsBgColor() {
    let title = `<div class="card-title">
    <h2>Background <b>Color</b> <i>.bg-color</i></h2>
  </div>
  `;
    let img = `<div class="card-image">
    <div class="images">
    <div class="item" id="bg-primary">.bg-primary</div>
    <div class="item" id="bg-secondary">.bg-secondary</div>
    <div class="item" id="bg-success">.bg-success</div>
    <div class="item" id="bg-info">.bg-info</div>
    <div class="item" id="bg-warning">.bg-warning</div>
    <div class="item" id="bg-danger">.bg-danger</div>
    <div class="item" id="bg-white">.bg-white</div>
    <div class="item" id="bg-light">.bg-light</div>
    <div class="item" id="bg-black">.bg-black</div>
    <div class="item" id="bg-dark">.bg-dark</div>
    </div>
    </div>`;

    let card = title + img;
    return createElement("div", "card", "", card);
  }


  // text color
  function textColor() {
    let title = `<div class="card-title">
    <h2><b>Text Color</b> <i>.text-color</i></h2>
  </div>
  `;
    let img = `<div class="card-image">
    <div class="images">
    <div class="item" id="text-primary">.text-primary</div>
    <div class="item" id="text-secondary">.text-secondary</div>
    <div class="item" id="text-success">.text-success</div>
    <div class="item" id="text-info">.text-info</div>
    <div class="item" id="text-warning">.text-warning</div>
    <div class="item" id="text-danger">.text-danger</div>
    <div class="item" id="text-white">.text-white</div>
    <div class="item" id="text-light">.text-light</div>
    <div class="item" id="text-black">.text-black</div>
    <div class="item" id="text-dark">.text-dark</div>
    </div>
    </div>`;

    let card = title + img;
    return createElement("div", "card", "", card);
  }


  
  // border color
  function borderColor() {
    let title = `<div class="card-title">
    <h2><b>Border Color</b> <i>.border-color</i></h2>
  </div>
  `;
    let img = `<div class="card-image">
    <div class="images">
    <div class="item" id="border-primary">.border-primary</div>
    <div class="item" id="border-secondary">.border-secondary</div>
    <div class="item" id="border-success">.border-success</div>
    <div class="item" id="border-info">.border-info</div>
    <div class="item" id="border-warning">.border-warning</div>
    <div class="item" id="border-danger">.border-danger</div>
    <div class="item" id="border-white">.border-white</div>
    <div class="item" id="border-light">.border-light</div>
    <div class="item" id="border-black">.border-black</div>
    <div class="item" id="border-dark">.border-dark</div>
    </div>
    </div>`;

    let card = title + img;
    return createElement("div", "card", "", card);
  }


  // here all include
  let all = [allCategroyButton() ,bsColor(), bsBgColor(), textColor(), borderColor()];

  let section = createElement("section", "", "install");
  append(section, all);
  let main = document.querySelector(".right-side");
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
}
