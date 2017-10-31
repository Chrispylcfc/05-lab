(function(){
  let sent = document.getElementById("sentence");
  let form = document.getElementById("sentence-form");
  let section = document.getElementById("paragraphs");

  function AddParagraphs() {
    let para = document.createElement("p");
    let text = document.createTextNode(sent.value);

    para.appendChild(text);
    section.appendChild(para);

    event.preventDefault();
  }

  form.addEventListener("submit", AddParagraphs);

}());
