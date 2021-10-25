
var sayi = Math.floor(Math.random()*101);
var sum=0
function tahmin() {
   while (true) {
    var x = document.getElementById("guess").value;
    if(x>sayi){
        sum +=1
        document.getElementById("demo").innerHTML="Enter a smaller numberr";
        document.getElementById("sayac").innerHTML =sum; 
        break;
    }
    else if(x<sayi){
        sum +=1
        document.getElementById("demo").innerHTML="Enter a larger number";
        document.getElementById("sayac").innerHTML=sum; 
        break;
    }
    else{
        
        document.getElementById("demo").innerHTML="Congratulations";
        break;
    }
   }
}




