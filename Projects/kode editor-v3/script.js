function run() {
    let html = document.querySelector(".editor #html").value;
    let css = document.querySelector(".editor #css").value;
    let js = document.querySelector(".editor #js").value;
    let outputLaptop = document.querySelector(".output #output");
    let outputMobile = document.querySelector(".sidebar .preview #preview");

    outputLaptop.contentDocument.body.innerHTML = html + "<style>"+css+"</style>";
    outputLaptop.contentWindow.eval(js);

    outputMobile.contentDocument.body.innerHTML = html + "<style>"+css+"</style>";
    outputMobile.contentWindow.eval(js);
}


document.querySelector(".editor #html").addEventListener("keyup",run);
document.querySelector(".editor #css").addEventListener("keyup",run);
document.querySelector(".editor #js").addEventListener("keyup",run);