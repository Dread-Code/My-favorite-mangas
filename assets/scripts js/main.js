/**let celdas = document.querySelectorAll("td");
celdas.forEach(td => {
    td.addEventListener("click",()=>{
        console.log("click");
    })
});
console.log(links); */

/**let links = document.querySelectorAll(".close");

links.forEach(function (link) {
    
    link.addEventListener("click",function (ev) {
       ev.preventDefault();
    });
})
 */

/**
 let iconos = document.querySelectorAll("i")

 iconos.forEach(icono => {
     icono.classList.remove("fa-star");
     icono.classList.add("fa-star");
 });
 */
let links = document.querySelectorAll(".close");

links.forEach(function (link) {
    
    link.addEventListener("click",function (ev) {
       ev.preventDefault();

       let content = document.querySelector(".content");

        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function () {
             location.href = "/";
        },600);

       

       return false;
    });
})
 
