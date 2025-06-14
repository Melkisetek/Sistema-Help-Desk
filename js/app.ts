const logo = document.getElementById("logo");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu?.addEventListener("click", ()=>{
   barraLateral?.classList.toggle("max-barra-lateral");  
   if(barraLateral?.classList.contains("max-barra-lateral")){
      (menu?.children[0] as HTMLElement).style.display = "none";
      (menu?.children[1] as HTMLElement).style.display = "block";
   }
   else{
      (menu?.children[0] as HTMLElement).style.display = "block";
      (menu?.children[1] as HTMLElement).style.display = "none";
   }

   if(window.innerWidth <= 320){
      barraLateral?.classList.add("mini-barra-lateral");
      main?.classList.add("min-main");
      spans.forEach((span)=>{
         span.classList.add("oculto");
      })
   }

});

palanca?.addEventListener("click",()=>{
   let body = document.body
   body.classList.toggle("dark-mode");
   circulo?.classList.toggle("prendido");
});

logo?.addEventListener("click",()=>{
   barraLateral?.classList.toggle("mini-barra-lateral");
   main?.classList.toggle("min-main");

   spans.forEach((span)=>{
    span.classList.toggle("oculto");
   });
});