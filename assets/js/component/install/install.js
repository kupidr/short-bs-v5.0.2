export default function install() {
  let bsInstall = `
<div>
    <pre><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;!-- Required meta tags --&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;

    &lt;!-- Bootstrap CSS --&gt;
    &lt;link href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot; integrity=&quot;sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC&quot; crossorigin=&quot;anonymous&quot;&gt;

    &lt;title&gt;Hello, world!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;

    &lt;!-- Optional JavaScript; choose one of the two! --&gt;

    &lt;!-- Option 1: Bootstrap Bundle with Popper --&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js&quot; integrity=&quot;sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;

    &lt;!-- Option 2: Separate Popper and Bootstrap JS --&gt;
    &lt;!--
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js&quot; integrity=&quot;sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js&quot; integrity=&quot;sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
    --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
</div>
`;

  function Install() {
    let title = `<div class="card-title">
    <h1>Lorem ipsum dolor sit amet.</h1>
  </div>
  `;
    let img = `<div class="card-image">
      <img src="assets/images/bs-image.png" alt="">
    </div>`;
    let description =
      '<div class="card-body"><section>' + bsInstall + "</section></div>";

    let card = title + img + description;
    return createElement("div", "card", "", card);
  }

  // here all include
  let all = [Install()];

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
