var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var contener = document.querySelector(".contener");

menuicon.onclick = function()
{
    sidebar.classList.toggle("small-sidebar");
    contener.classList.toggle("large-contener");

}