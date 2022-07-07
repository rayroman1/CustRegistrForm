function showtext(){

    const name = document.getElementById("form1");


    var email1=name.elements[0].value;
 var pasw = name.elements[1].value;
 var psr = name.elements[2].value;




document.getElementById("show").innerHTML= email1+"<br>"+pasw+"<br>"+psr;
}