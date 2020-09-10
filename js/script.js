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

//smooth scroll

var scroll_link = document.getElementsByClassName("scroll-link");
var i;
for(i=0;i<scroll_link.length;i++)
{
    scroll_link[i].onclick = function(event){
      event.preventDefault();
      var id = this.getAttribute("href").slice(1);
      var element = document.getElementById(id);
      const navHeight = nav.getBoundingClientRect().height;
      const containerHeight = links_container.getBoundingClientRect().height;
      const fixedNav = nav.classList.contains("fixed-nav");
      let position = element.offsetTop - navHeight;
      if (!fixedNav) {
        position = position - navHeight;
      }
      if (navHeight > 82) {
        position = position + containerHeight;
      }
      window.scrollTo({
        left : 0,
        top : position,
        transition: 5
      });
      links_container.style.height = 0;
    }
}