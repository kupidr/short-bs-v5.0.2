import {
  copyMethod,
  oneClickShow,
  activeNavColor,
  show,
  s,
} from "../../js/functions.js";
export default function () {
  // here Full fucntion include
  let all = [
    allCategroyButton(),
    cssCdn(),
    jsCdn(),
    template(),
    clenTemplate(),
  ];
  // default code here
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

  // --------------------------------- START HERE ---------------------------------
  // all category button
  function allCategroyButton() {
    let btn = `
  <div class="copy-view">
    <div class="category">
      <button class="active" id="all">All</button>
      <button id="css">css</button>
      <button id="js">js</button>
      <button id="start_template">startTemplate</button>
      <button id="clean_template">cleanTemplate</button>
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
  // let allCard = document.getElementById("all");
  // let css = document.getElementById("css");
  // let js = document.getElementById("js");
  // let start_template = document.getElementById("start_template");
  // let clean_template = document.getElementById("clean_template");

  // css cdn link here
  function cssCdn() {
    let title = `<div class="card-title">
    <h2><b>css</b> cdn link bootstrap 5.0.2</h2>
  </div>
  `;
    let btn = `<div class="copy-view">
    <div class="copy"><button id="cssCdnCopy">Copy</button></div>
  </div>`;
    let description = `<div class="card-body"><section id="cssCdnCode">
      <div class="highlight">
      <pre class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"</span> <span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;</span></code></pre>
      </div>
      </section></div>`;

    let card = title + btn + description;

    return createElement("div", "card", "cssCdnId", card);
  }
  // let cssCdnId = document.getElementById("cssCdnId");
  // let cssCdnCopy = document.getElementById("cssCdnCopy");
  // let cssCdnCode = document.getElementById("cssCdnCode");
  copyMethod(cssCdnCopy, cssCdnCode);
  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(cssCdnId, jsCdnId, startTemplateId, cleanTemplateId);
    });
  })(css);
  // js cdn link here
  function jsCdn() {
    let title = `<div class="card-title">
    <h2><b>js</b> cdn link bootstrap 5.0.2</h2>
  </div>
  `;
    let btn = `<div class="copy-view">
    <div class="copy"><button id="jsCdnCopy">Copy</button></div>
  </div>`;
    let description = `
      <div class="card-body"><section id="jsCdnCode">
        <div class="highlight">
        <div class="highlight">
        <pre class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
        </code></pre>
        </div>
        </div>
      </section></div>`;

    let card = title + btn + description;
    return createElement("div", "card", "jsCdnId", card);
  }
  // let jsCdnId = document.getElementById("jsCdnId");
  // let jsCdnCopy = document.getElementById("jsCdnCopy");
  // let jsCdnCode = document.getElementById("jsCdnCode");
  copyMethod(jsCdnCopy, jsCdnCode);
  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(jsCdnId, cssCdnId, startTemplateId, cleanTemplateId);
    });
  })(js);

  // Start template
  function template() {
    let title = `<div class="card-title">
    <h2><b>Start Template</b> bootstrap 5.0.2</h2>
  </div>
  `;
    let btn = `<div class="copy-view">
    <div class="copy"><button id="templateCopy">Copy</button></div>
  </div>`;
    let description = `
      <div class="card-body"><section id="templateCode">
      <pre>&lt;!DOCTYPE html&gt;
      &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
          &lt;!-- Required meta tags --&gt;
          &lt;meta charset=&quot;utf-8&quot; /&gt;
          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;
      
          &lt;title&gt;Hello, world!&lt;/title&gt;
          &lt;!-- Bootstrap CSS --&gt;
          &lt;link
            href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css&quot;
            rel=&quot;stylesheet&quot;
            integrity=&quot;sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC&quot;
            crossorigin=&quot;anonymous&quot;
          /&gt;
        &lt;/head&gt;
        &lt;body&gt;
          &lt;h1&gt;Hello, world!&lt;/h1&gt;
      
          &lt;!-- Optional JavaScript; choose one of the two! --&gt;
      
          &lt;!-- Option 1: Bootstrap Bundle with Popper --&gt;
          &lt;script
            src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js&quot;
            integrity=&quot;sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM&quot;
            crossorigin=&quot;anonymous&quot;
          &gt;&lt;/script&gt;
      
          &lt;!-- Option 2: Separate Popper and Bootstrap JS --&gt;
          &lt;!--
          &lt;script src=&quot;https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js&quot; integrity=&quot;sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
          &lt;script src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js&quot; integrity=&quot;sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
          --&gt;
        &lt;/body&gt;
      &lt;/html&gt;</pre>
      </section></div>`;

    let card = title + btn + description;
    return createElement("div", "card", "startTemplateId", card);
  }
  // let startTemplateId = document.getElementById("startTemplateId");
  // let templateCopy = document.getElementById("templateCopy");
  // let templateCode = document.getElementById("templateCode");
  copyMethod(templateCopy, templateCode);
  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(startTemplateId, jsCdnId, cssCdnId, cleanTemplateId);
    });
  })(s("#start_template"));

  // Clean template
  function clenTemplate() {
    let title = `<div class="card-title">
    <h2><b>Clean Template</b> you can use it.</h2>
  </div>
  `;
    let btn = `<div class="copy-view">
    <div class="copy"><button id="clenTemplateCopy">Copy</button></div>
  </div>`;
    let description = `
      <div class="card-body"><section id="clenTemplateCode">
        <pre>&lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
          &lt;head&gt;
            &lt;!-- Required meta tags --&gt;
            &lt;meta charset=&quot;utf-8&quot; /&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;
        
            &lt;title&gt;Hello, world!&lt;/title&gt;
            &lt;!-- Bootstrap CSS --&gt;
            &lt;link
              href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css&quot;
              rel=&quot;stylesheet&quot;
              integrity=&quot;sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC&quot;
              crossorigin=&quot;anonymous&quot;
            /&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;!-- start body code --&gt;
        
            &lt;!-- end body code --&gt;
            &lt;script
              src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js&quot;
              integrity=&quot;sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM&quot;
              crossorigin=&quot;anonymous&quot;
            &gt;&lt;/script&gt;
          &lt;/body&gt;
        &lt;/html&gt;
        </pre>
      </section></div>`;

    let card = title + btn + description;
    return createElement("div", "card", "cleanTemplateId", card);
  }
  // let cleanTemplateId = document.getElementById("cleanTemplateId");
  // let clenTemplateCopy = document.getElementById("clenTemplateCopy");
  // let clenTemplateCode = document.getElementById("clenTemplateCode");
  copyMethod(clenTemplateCopy, clenTemplateCode);

  (function (e) {
    e.addEventListener("click", function () {
      oneClickShow(cleanTemplateId, startTemplateId, jsCdnId, cssCdnId);
    });
  })(clean_template);

  // showAllCard(allCard);
  function allCardX(e) {
    e.addEventListener("click", function () {
      show(cssCdnId);
      show(jsCdnId);
      show(startTemplateId);
      show(cleanTemplateId);
    });
  }
  allCardX(s("#all"));
}
