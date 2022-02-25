export default function () {
  // here Full fucntion include
  let all = [cssCdn(), jsCdn(), template(), clenTemplate()];
  // default code here
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
  // ************Copy function************
  function copyDivToClipboard(idName) {
    var range = document.createRange();
    range.selectNode(idName);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
  }
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
  }
  // ---------------------------------OUR DATA---------------------------------
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

    return createElement("div", "card", "", card);
  }
  let cssCdnCopy = document.getElementById("cssCdnCopy");
  let cssCdnCode = document.getElementById("cssCdnCode");
  copyMethod(cssCdnCopy, cssCdnCode);
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
    return createElement("div", "card", "", card);
  }
  let jsCdnCopy = document.getElementById("jsCdnCopy");
  let jsCdnCode = document.getElementById("jsCdnCode");
  copyMethod(jsCdnCopy, jsCdnCode);

  // Start template
  function template() {
    let title = `<div class="card-title">
    <h2>Start Template bootstrap 5.0.2</h2>
  </div>
  `;
    let btn = `<div class="copy-view">
    <div class="copy"><button id="templateCopy">Copy</button></div>
  </div>`;
    let description = `
      <div class="card-body"><section id="templateCode">
        <div class="highlight">
        <div class="highlight">
        <pre class="chroma"><code class="language-html" data-lang="html"><span class="cp">&lt;!doctype html&gt;</span>
        <span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"en"</span><span class="p">&gt;</span>
          <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
            <span class="c">&lt;!-- Required meta tags --&gt;</span>
            <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">"utf-8"</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"viewport"</span> <span class="na">content</span><span class="o">=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="p">&gt;</span>
        
            <span class="c">&lt;!-- Bootstrap CSS --&gt;</span>
            <span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"</span> <span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;</span>
        
            <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Hello, world!<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
          <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
          <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">h1</span><span class="p">&gt;</span>Hello, world!<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
        
            <span class="c">&lt;!-- Optional JavaScript; choose one of the two! --&gt;</span>
        
            <span class="c">&lt;!-- Option 1: Bootstrap Bundle with Popper --&gt;</span>
            <span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
        
            <span class="c">&lt;!-- Option 2: Separate Popper and Bootstrap JS --&gt;</span>
            <span class="c">&lt;!--
        </span><span class="c">    &lt;script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"&gt;&lt;/script&gt;
        </span><span class="c">    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"&gt;&lt;/script&gt;
        </span><span class="c">    --&gt;</span>
          <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
        </code></pre>
        </div>
        </div>
      </section></div>`;

    let card = title + btn + description;
    return createElement("div", "card", "", card);
  }
  let templateCopy = document.getElementById("templateCopy");
  let templateCode = document.getElementById("templateCode");
  copyMethod(templateCopy, templateCode);

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
        <div class="highlight">
        <div class="highlight">
        <pre class="chroma"><code class="language-html" data-lang="html"><span class="cp">&lt;!doctype html&gt;</span>
        <span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"en"</span><span class="p">&gt;</span>
          <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">"utf-8"</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"viewport"</span> <span class="na">content</span><span class="o">=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="p">&gt;</span>
        
            <span class="c">&lt;!-- Bootstrap CSS --&gt;</span>
            <span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"</span> <span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;</span>
        
            <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Hello, world!<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
          <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
          <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
            &lt;-- start body code here --&gt;<br /><br /><br /></code></pre>
        <pre class="chroma"><code class="language-html" data-lang="html">       &lt;-- end body code here --&gt;</code></pre>
        <pre class="chroma"><code class="language-html" data-lang="html">       <span class="c">&lt;!-- Bootstrap Bundle with Popper --&gt;</span>
        <span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span> 
      <span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span> </code></pre>
        </div>
        </div>
      </section></div>`;

    let card = title + btn + description;
    return createElement("div", "card", "", card);
  }
  let clenTemplateCopy = document.getElementById("clenTemplateCopy");
  let clenTemplateCode = document.getElementById("clenTemplateCode");
  copyMethod(clenTemplateCopy, clenTemplateCode);
}
