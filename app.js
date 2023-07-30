const sumbit_btn=document.querySelector(".sumbit_btn");
sumbit_btn.addEventListener("click",function(){
const numberDay=document.querySelector(".numberDay").value;
const numberMonth=document.querySelector(".numberMonth").value;
const numberYears=document.querySelector(".numberYear").value;

if(numberDay=="" ){
  document.querySelector(".daybug").innerHTML = "This field is required";
  document.querySelector(".Day").style.color= "red";
  document.querySelector(".numberDay").style.borderColor = "red";
ok1=false
}
else if(numberDay < 1 || numberDay>31 ){
  document.querySelector(".daybug").innerHTML = "Must be a valid day";
  document.querySelector(".Day").style.color= "red";
  document.querySelector(".numberDay").style.borderColor = "red";
ok1=false}
else{
  document.querySelector(".daybug").innerHTML = "";
  document.querySelector(".Day").style.color= "";
  document.querySelector(".numberDay").style.borderColor = "";
  ok1=true
}

// monthe test 
if(numberMonth=="" ){
  document.querySelector(".monthbug").innerHTML = "This field is required";
  document.querySelector(".Month").style.color= "red";
  document.querySelector(".numberMonth").style.borderColor = "red";
  ok2=false
}
else if(numberMonth < 1 || numberMonth>12 ){
  document.querySelector(".monthbug").innerHTML = "Must be a valid Month";
  document.querySelector(".Month").style.color= "red";
  document.querySelector(".numberMonth").style.borderColor = "red";
  ok2=false
}
else{
  document.querySelector(".monthbug").innerHTML = "";
  document.querySelector(".Month").style.color= "";
  document.querySelector(".numberMonth").style.borderColor = "";
  ok2=true
}
// years test
if(numberYears=="" ){
  document.querySelector(".yearsbug").innerHTML = "This field is required";
  document.querySelector(".Year").style.color= "red";
  document.querySelector(".numberYear").style.borderColor = "red";
  ok3=false;
}
else if(numberYears < 1913 || numberYears>2023 ){
  document.querySelector(".yearsbug").innerHTML = "Must be a valid Month";
  document.querySelector(".Year").style.color= "red";
  document.querySelector(".numberYear").style.borderColor = "red";
  ok3=false;
}
else{
  document.querySelector(".yearsbug").innerHTML = "";
  document.querySelector(".Year").style.color= "";
  document.querySelector(".numberYear").style.borderColor = "";
  ok3=true
}
if (ok1==true && ok2==true &&ok3==true){

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; 
  const currentDay = date.getDate();


  let ageYear = currentYear - numberYears;
  let ageMonth = currentMonth - numberMonth;
  let ageDay = currentDay - numberDay;

  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth = 12 - Math.abs(ageMonth);
    ageDay = 31 - Math.abs(ageDay);
  }


  document.querySelector(".yearsResul").innerHTML = ageYear;
  document.querySelector(".monthResul").innerHTML = ageMonth;
  document.querySelector(".dayResult").innerHTML = ageDay;


  
}


})