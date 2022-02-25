export default function Aside() {
  function myProfile() {
    let div = `div`;
    let html = `<a href="https://kupidr.com" target="_blank"
              ><img src="./assets/images/kupidr.png" alt=""
            /></a>`;
    return createElement(div, html, "profile");
  }
  function sideNav() {
    let div = `div`;
    let html = `
    <nav>
            <ul>
              <li id="home" class="active">Home</li>
              <li id="install">install</li>
              <li id="color">color</li>
            </ul>
          </nav>
    `;
    return createElement(div, html, "nav-bar");
  }
  // push all function here
  let all = [myProfile(), sideNav()];
  // push html code here
  let container = createElement("container");
  append(container, all);
  let header = document.querySelector("aside");
  header.appendChild(container);

  // tagName, innerHTML, className, id
  function createElement(tagName, innerHTML, className, id) {
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
