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
  document.write(heure +":"+ minutes +":"+ secondes);
}
  afficherHeure();
setInterval(afficherHeure,1000);
  
