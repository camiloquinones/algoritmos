function verificarcalificacion(){
    var calificacion;
calificacion=parseInt(prompt("ingresela calificacion del estudiante"));
if(calificacion<5){
    alert("El alumno reprobo");
}else
if(calificacion>6){
    alert("El alumno aprobo");
}
}
function preciodehorasdetrabajo(){
    var horas;
    var precio;
    var sueldo;
horas=parseInt(prompt("digite las horas trabajadas durante el mes "));
precio=parseInt(prompt("digite el valor por hora trabajada "));
sueldo=horas*precio;
alert("el sueldo del trabajador es "+sueldo);

}
function conparacion(){
    var uno;
    var dos;
    uno=parseInt(prompt("ingrese el primer numero "));
    dos=parseInt(prompt("ingresa el segundo numero"));
    if (uno==dos){
    alert("los dos numero son iguales");
    }
    else{
        alert("los dos numeros son diferentes");
    }

}
function sumartodoslonumeroshastaprecionar0(){
    var suma=0,numero=0;
    alert("se sumara todos  los numeros ingresados hasta oprimir el cero");
    numero=parseInt(prompt("ingresa los numeros a sumar"));
    do { 
    suma=parseInt(prompt("ingresa ingresa mas numeros"));
    numero=numero+suma
    }while(suma!=0){
        alert("la suma total es :"+numero);

    }
}
function adivinaentre1a10(){
    alert("adivinaras el numero entre 1 a 10 y tienes un intento");
    var i=3;
    var y=0;
    var na=8;
  
  var n=parseInt(prompt("digita un numero"));


  if(y==i){
      alert("has perdido hasta la proxima");
     
    }
    if(n==na){
        alert("felicitaciones has ganado! un viaje a tu casa ida y vuelta");
    
    }
    else{
        alert("has fallado tienes otra oportunidad");
        y++;
    }
}
    
function mayoroigual(){
    var uno,dos;
    uno=parseInt(prompt("digita el primer numero"));
    dos=parseInt(prompt("digita el segundo numero"));
    alert("conpararemos si uno  es mayor o igual a dos ");
    if(uno>=dos){
        alert("es verdadad por que uno es mayor o igual a :"+" "+ dos);
    }
    else{
        alert("es falso por que uno no es mayor:"+" "+dos);
    }
}
function modulo(){
    var uno,dos,modulo;
    uno=parseInt(prompt("digite el primer numero"));
    dos=parseInt(prompt("digita el segundo numero"));
    modulo=uno%dos;
    alert("el resultado de el modulo es:"+modulo);
}

function multiplicaiconysuma(){
   var a;
   var b;
  
   var respuesta;
    a=parseInt(prompt("digita el primer numero"));
    b=parseInt(prompt("digita el segundo numero"));
    
    respuesta=a*b+2;
    alert("la respuesta de las dos operaciones es :"+respuesta)
}
function restasumamultiplicacion(){
    var a,b,c;
    var respuesta;
    a=parseInt(prompt("digita el primer numero"));
    b=parseInt(prompt("digita el segundo numero"));
    c=parseInt(prompt("digita el tercer numero"));

    respuesta=a-b+c*2;
    alert("el total es la siguiente :"+respuesta)
}
function restaydivicion(){
    var a,b,c;
   var respuesta;
   a=parseInt(prompt("digita el primer numero"));
   b=parseInt(prompt("digita el segundo numero"));
   c=parseInt(prompt("digita el tercer numero"));
   respuesta=a-b/c;
   alert("la resta con divicion es la siguiente :"+ respuesta)
}
function restamasdivicionmasmultiplicacionmarsuma(){
    var a,b,c,d,e,respuesta;
    a=parseInt(prompt("digita el primer numero"));
   b=parseInt(prompt("digita el segundo numero"));
   c=parseInt(prompt("digita el tercer numero"));
   d=parseInt(prompt("digita el cuarto numero"));
   e=parseInt(prompt("digita el quinto  numero"));
  respuesta=a-b/c*d+e;
  alert("el resultado es :"+respuesta)
}  
function areadeunrectagulo(){
    var a,b,h;
    
   b=parseInt(prompt("digite la base"));
   h=parseInt(prompt("digite la altura"));
   a=b*h;
   alert("el area del rectagulo es :"+a)
}
function areadeuntriangulo(){
    var a,b,h;
    b=parseInt(prompt("digite la base"));
   h=parseInt(prompt("digite la altura"));
   a=b*h/2;
   alert("el area del rectagulo es :"+a)
}
function perimetrodeunhexagono(){
    var a=6,b,perimetro;
    
    b=parseInt(prompt("digita el  numero de lados"));
    perimetro=a*b;
    alert("el perimetro del hexagono es :"+perimetro)
}
function areadeuncuadrado(){
   var a,b,c;
  
   b=parseInt(prompt("digita el lado"));
   c=parseInt(prompt("digita el lado"));
   a=b*c;
   alert("El area del cuadrado es "+a)
   
}
function areadeltrapecio(){
    var a,b,c;
    b=parseInt(prompt("digita la base"));
    c=parseInt(prompt("digita la altura"));
    a=b*c/2;
    alert("El area del cuadrado es "+a)
}