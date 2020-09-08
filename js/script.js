// ***===================== set date===================***
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//**==================toggle button===================***
var toggle_btn = document.querySelector(".nav-toggle");
var links_container = document.querySelector(".links-container");
var links = document.querySelector(".links");
var bars = document.getElementById("bars");
toggle_btn.onclick = function(){
   var container_height = links_container.offsetHeight;
   var links_height = links.offsetHeight;
   if(container_height == 0)
   {
     links_container.style.height = links_height+"px";
   }
   else{
    links_container.style.height = 0;
   }
}
 
var nav = document.getElementById("nav");
var top_link_btn = document.querySelector(".top-link");
window.addEventListener("scroll",function(){
 var scroll_height = window.pageYOffset;
 var nav_height = links_container.offsetHeight;
 if(scroll_height > 150)
 {
   nav.setAttribute("class","fixed-nav");
 }
 else{
  nav.removeAttribute("class","fixed-nav");
 }
});