!function(){var o=document.querySelector(".session"),e=document.querySelector(".local"),l=document.querySelector(".remove");o.addEventListener("click",(function(){try{var o=JSON.parse(localStorage.getItem("local"))||[];console.log(o),o.forEach((function(o){console.log(o)}))}catch(o){console.log(o)}console.log("hello world")}));var c=[1,2,3,4,5];e.addEventListener("click",(function(){localStorage.setItem("local","hello"),localStorage.setItem("local1",JSON.stringify(c)),localStorage.setItem("local2",JSON.stringify(c))})),l.addEventListener("click",(function(){localStorage.clear()})),console.log("hello world")}();
//# sourceMappingURL=index.97e28a6c.js.map
