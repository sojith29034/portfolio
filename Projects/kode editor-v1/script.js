function run() {
    let html = document.querySelector(".editor #html").value;
    let css = document.querySelector(".editor #css").value;
    let js = document.querySelector(".editor #js").value;
    let output = document.querySelector(".editor #output");

    output.contentDocument.body.innerHTML = html + "<style>"+css+"</style>";
    output.contentWindow.eval(js);
}


document.querySelector(".editor #html").addEventListener("keyup",run);
document.querySelector(".editor #css").addEventListener("keyup",run);
document.querySelector(".editor #js").addEventListener("keyup",run);