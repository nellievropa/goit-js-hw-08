!function(){var e=document.querySelector(".session"),o=document.querySelector(".local"),t=document.querySelector(".remove");e.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("local"))||[];console.log(e),e.forEach((function(e){console.log(e)}))}));var c=[1,2,3,4,5];o.addEventListener("click",(function(){localStorage.setItem("local",JSON.stringify(c)),localStorage.setItem("local1",JSON.stringify(c)),localStorage.setItem("local2",JSON.stringify(c))})),t.addEventListener("click",(function(){localStorage.clear()}))}();
//# sourceMappingURL=index.5ddded93.js.map
