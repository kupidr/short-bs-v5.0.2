export default function() {
  // css cdn link here
  let bsCssCdn = `
  <div class="highlight">
  <pre class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"</span> <span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;</span>
  </code></pre>
  </div>
`;
  function cssCdn() {
    let title = `<div class="card-title">
    <h2><b>css</b> cdn link bootstrap 5.0.2</h2>
  </div>
  `;
    let description =
      '<div class="card-body"><section>' + bsCssCdn + "</section></div>";

    let card = title + description;
    return createElement("div", "card", "", card);
  }

  // js cdn link here
  let bsJsCdn = `
  <div class="highlight">
  <div class="highlight">
  <pre class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
  </code></pre>
  </div>
  </div>
`;
  function jsCdn() {
    let title = `<div class="card-title">
    <h2><b>js</b> cdn link bootstrap 5.0.2</h2>
  </div>
  `;
    let description =
      '<div class="card-body"><section>' + bsJsCdn + "</section></div>";

    let card = title + description;
    return createElement("div", "card", "", card);
  }

  
  // Start template
  let bsTemplate = `
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
`;
  function template() {
    let title = `<div class="card-title">
    <h2>Start Template bootstrap 5.0.2</h2>
  </div>
  `;
    let description =
      '<div class="card-body"><section>' + bsTemplate + "</section></div>";

    let card = title + description;
    return createElement("div", "card", "", card);
  }

  
  // Clean template
  let bsClenTemplate = `
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
`;
  function clenTemplate() {
    let title = `<div class="card-title">
    <h2><b>Clean Template</b> you can use it.</h2>
  </div>
  `;
    let description =
      '<div class="card-body"><section>' + bsClenTemplate + "</section></div>";

    let card = title + description;
    return createElement("div", "card", "", card);
  }
  // here all include
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
}
