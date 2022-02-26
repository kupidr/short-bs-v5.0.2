export default function(){
  function title(){
    let h1 = `
    <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">Bootstrap <sub>v</sub>5</a>
    `
    return createElement("h1", h1)
  }
  // push all function here
  let all =[
    title(),
  ]
  // push html code here
  let container = createElement("container")
  append(container, all)
  let header = document.querySelector("header")
  header.appendChild(container)
  
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