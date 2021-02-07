function show() {
    var element = document.getElementById("drawer");
    var denier = document.getElementById("denier");
    element.style.left= "0";
    denier.style.display= "block";
}
function hide() {
    var element = document.getElementById("drawer");
    var denier = document.getElementById("denier");
    element.style.left= "-100%";
    denier.style.display= "none";
}