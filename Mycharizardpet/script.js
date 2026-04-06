const criatura = document.getElementById("charizarda");
const btn= document.getElementById("bota");
const estados = {
  normal: "cha_normal.jpg",
  puto: "cha_bravo.jpg",
  morto: "cha_morto.jpg",
  comendo: "cha_comendo.jpg",
  feliz: "cha_feliz.jpg",
  
}
const dias ={
  fundoDia : "dia.jpg",
  fundoNoite : "noite.jpg",
}
const somClique=new Audio("ferliniee.mp3");
let horas = 0;
let contador = 0;
let intervalo = null;
let time_click= null;
let time_out= null;
let morto = false;
function controlador(){
  if(intervalo) clearinterval(intervalo);
  intervalo=setInterval(
    
    ()=>{contador++;
      if (morto) return;
      console.log("tempo: ",contador);
      if(contador==15){
          criatura.src=estados.puto;
      }
      if(contador==30){
        criatura.src=estados.morto;
        morto=true;
         if (morto==true){
  alert("charizard se fudeu de f5 cachorra ");
  return;
 }
   
        clearInterval(intervalo);
      }

    }, 1000);

}
 function alimentar() {

    if (morto==true){

  return;
 }
    contador = 0;
   criatura.src = estados.comendo;
    console.log("Comendo");

    if (time_out) clearTimeout(time_click);

    time_click = setTimeout(() => {
       if( !morto) criatura.src = estados.feliz;

        time_out = setTimeout(() => {
           if( !morto)    criatura.src = estados.normal;
        }, 3000);

    }, 1000);
  }
  const toggleClima = document.getElementById('toggle=clima');
function atualizarFundo(){
   
    if(typeof intervalId !=='undefined')clearInterval(intervalId);

    intervalId=setInterval(()=>{
        horas++;
        if (horas>=24) horas=0;
        
   
        toggleClima.checked=(horas>=12);
        
        aplicarFundo();
    },1000);
}
function aplicarFundo() {
    if (horas>=12) {
        document.body.style.backgroundImage=`url('${dias.fundoNoite}')`;
    } else {
        document.body.style.backgroundImage=`url('${dias.fundoDia}')`;
    }
}
toggleClima.addEventListener('change',() => {
    if (toggleClima.checked){
        horas=12;
    } 
    else{
        horas=0;
    }
    aplicarFundo();
});
function ferlinimeuabor() {
    const img = document.getElementById('avatar-img');
    somClique.currentTime = 0; 
    somClique.play();
    if (img.src.includes('arahabaki.jpg')) {
        img.src = 'ferliniderp.jpeg';
    } else {
        img.src = 'arahabaki.jpg';
    }
}
controlador();
atualizarFundo();
