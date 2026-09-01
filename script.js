function afficherHeure(){
  let now=new Date();
  let heure=now.getHours();
  let minutes=now.getMinutes();
  let secondes=now.getSeconds();
  if(heure<10){
    heure="0"+heure;
  }
    if(minutes<10){
    minutes="0"+minutes;
  }
    if(secondes<10){
    secondes="0"+secondes;
  }
  document.getElementById("horloge").textContent=heure +":"+ minutes +":"+ secondes;
}
  afficherHeure();
setInterval(afficherHeure,1000);

function afficherDate(){
  let now= new Date();
let annee=now.getFullYear();
let mois=now.getMonth();
let jour=now.getDate();
let allmois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"];
let moisch=allmois[mois];
let alljours=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
j=now.getDay();
jourch=alljours[j];
  
document.getElementById("date").textContent = "Aujourd'hui, le " + jourch + " " + jour + " " + moisch + " " + annee;
}
afficherDate();

  
