!function(){var e=document.querySelector(".content"),t=document.querySelector(".js-restart");e.insertAdjacentHTML("beforeend",a()),e.addEventListener("click",(function(e){if(e.target.textContent)alert("Change!!!");else{e.target.textContent=n,console.dir(e.target);var t=Number(e.target.dataset.id);"X"===n?r.push(t):o.push(t),console.log("stepX",r),console.log("stepO",o),n="X"===n?"0":"X"}})),t.addEventListener("click",(function(){n="X",e.innerHTML=a()}));var n="X",r=[],o=[];function a(){for(var e="",t=1;t<=9;t+=1)e+='<div class="item" data-id="'.concat(t,'"></div>');return e}}();
//# sourceMappingURL=index.f176ef44.js.map
