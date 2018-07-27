let z=10;
let pute=0;
console.log(z);

let prix=150;
let remise=30;

if (prix>= 100)
{
  prix=prix*(100-remise)/100;
}

let compteur = document.querySelector(".compteur");
let fusee = document.querySelector(".vaisseau");
console.log(compteur);



window.setInterval(
  // On déclare une fonction
  ()=>{
    if (z>0)
    {
      z=z-1;
      compteur.innerHTML= z;
    }else if(pute >-2000){
      compteur.innerHTML= "Attention regardez !";
      pute -= 50 ;
      fusee.style.transform = `translateY(${pute}px)`;
    }
    console.log(z);
    // Ce qui sera fait tous les x temps
  },
  100
);
