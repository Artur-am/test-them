!function(){let e=[];!function(t){if(!(document.getElementsByClassName("btn-consultation")[0]instanceof HTMLElement))return null;e.push({event:"btn-consultation",modal:"modal-consultation"})}(),function(t){if(!(document.getElementsByClassName("video-block-img")[0]instanceof HTMLElement))return null;e.push({event:"video-block-img",modal:"modal-video"})}(),function(e){let t=null;for(let n of e)(t=document.getElementsByClassName(n.event)[0])&&t.addEventListener("click",function(e){var t;t=n.modal,document.body.classList.add("modal"),document.getElementsByClassName(t)[0].classList.add("modal-active")});document.getElementsByClassName("modal-close")[0].addEventListener("click",function(e){document.body.classList.remove("modal");let t=document.querySelector(".modal-item.modal-active");t&&t.classList.remove("modal-active")})}(e),function(){let e=document.querySelector("header.header"),t=function(t){e.classList.contains("nav-active")&&e.classList.remove("nav-active")};t(),document.getElementsByClassName("mob-menu")[0].addEventListener("click",function(t){e.classList.toggle("nav-active")}),window.addEventListener("resize",t,!1)}(),window.addEventListener("scroll",function(e){let t=document.querySelector("header.header");document.body.scrollTop>t.clientHeight||document.documentElement.scrollTop>t.clientHeight?(t.classList.add("f-nav"),t.classList.remove("wrapper")):t.classList.contains("f-nav")&&(t.classList.remove("f-nav"),t.classList.add("wrapper"))})}();