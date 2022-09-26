document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("darkmode");
    document.getElementsByClassName("switch")[0].classList.toggle("on");
});