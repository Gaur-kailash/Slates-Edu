window.onchange = function (){
let csC= document.getElementById("cs");  
let managementC= document.getElementById("management");  
let electronicsC= document.getElementById("electronics");  
let civilC= document.getElementById("civil");  
let select= document.getElementsByTagName("select")[0];
console.log(csC)
if(select.value=="Cs"){
  cs();
}
else if(select.value=="management"){
  manage();
}
else if(select.value=="Electronics"){
  electrical();
}
else if(select.value=="Civil"){
  civil();
}

// Function for cs 
function cs(){
  csC.style.display="block";
  managementC.style.display="none";
  electronicsC.style.display="none";
  civilC.style.display="none";
}
function manage(){
  csC.style.display="none";
  managementC.style.display="block";
  electronicsC.style.display="none";
  civilC.style.display="none";
}
function electrical(){
  csC.style.display="none";
  managementC.style.display="none";
  electronicsC.style.display="block";
  civilC.style.display="none";
}
function civil(){
  csC.style.display="none";
  managementC.style.display="none";
  electronicsC.style.display="none";
  civilC.style.display="block";
}
}

