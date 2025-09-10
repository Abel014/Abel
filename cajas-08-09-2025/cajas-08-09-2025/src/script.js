//Desafio de LAS CAJAS//

// Desafio 1: cambiar el titulo .getElementById//

document.getElementById("btn-titulo").addEventListener("click",()=>
{
  const titulo =
        document.getElementById("titulo");
  titulo.textContent = "¡Yuritsa Páez!";
  
  });

// Desafio 2 cambiar el color de las cajas getElementsByClassName//

document.getElementById("btn-cajas").addEventListener("click",()=>
 {
  const cajas =
   document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++)
    {
      cajas[i].style.backgroundColor = "red";
    }
});         

//Desafio 3: Cambiar el color de la primera caja con querySelector//
 
document.getElementById("btn-primera").addEventListener("click",()=>
 {
  const primeracaja =
        document.querySelector(".caja");
  
  primeracaja.style.backgroundColor = "green";
});

// Desafio 4: querySelectorAll() cambiarle el borde a todas las cajas//

document.getElementById("btn-bordes").addEventListener("click",()=>
{
  const cajas =
     document.querySelectorAll(".caja");
  cajas.forEach(caja=>{
    caja.style.border = "4px solid #C827F5"
  });
});