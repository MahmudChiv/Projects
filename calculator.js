//calculator.js

//document.getElementById("totaltip").style.display = "none";
//document.getElementById("each").style.display = "none";

$('#totaltip').fadeOut(1);


document.getElementById("calculate").onclick = function() { calculate(); };

function calculate(){
    
    let bill = document.getElementById("Bill").value;
    let service = document.getElementById("Service").value;
    let people = document.getElementById("People").value;
    
    if(bill === "" || service == "0") {
        
        return window.alert("pls enter the required Info...");
        
    }
    
    if(people === "" || people <= 1) {
        
        people = 1;
        
        document.getElementById("each").style.display = "none";
        
       } else if(people > 1){
           
        document.getElementById("each").style.display = "block";
           
       }
    
    let total = (bill * service) / people ;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(1);
    
    window.alert(total);
        
    
    document. getElementById("totaltip").style.display = "block";
    document. getElementById("tip").innerHTML = total;
    
    $("#totaltip").fadeIn(10000);
}






