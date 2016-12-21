var y = 10;  // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo.
var y2= 60.22;  
var alt= 60.22; 
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer;
var timerFuel=null;
var fuel=100;
var intentos = 1;
//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    document.getElementById("showm").onclick = function () {
	document.getElementsByClassName("c")[0].style.display = "block";
	stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
	document.getElementsByClassName("c")[0].style.display = "none";
	start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		encenderMotor();
 	  } 
	  else {
  		apagarMotor();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = encenderMotor;
	document.onkeyup = apagarMotor;
	//Empezar a mover nave
	start();
}
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}
function stop(){
	clearInterval(timer);
}
function reanudar() {
	start();
	document.getElementById("reanudar").style.display="none";
	document.getElementById("pausa").style.display="inline-block";
}
function pausar() {
	stop();
	document.getElementById("pausa").style.display="none";
	document.getElementById("reanudar").style.display="inline-block";
}
function moverNave(){
	v +=a*dt;
	vel = v.toFixed(2);
	document.getElementById("velocidad").innerHTML=vel;
	y +=v*dt;
	y2 -=v*dt;
	alt = y2.toFixed(2);
	document.getElementById("altura").innerHTML= alt;
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	}
	else{ 
		stop(); finalizarJuego();
	}  
}
function encenderMotor() {
	a=-g;
	fuel--;
	document.getElementById("fuel").innerHTML=fuel;
	document.getElementById("fotofuego").style.display="block";
	if (fuel<=0) {
			apagarMotor();
			document.getElementById("fuel").innerHTML=0;
		}
}
function apagarMotor() {
	a=g
	document.getElementById("fotofuego").style.display="none";
}
function finalizarJuego() {
	if (v>5) {
		document.getElementById("fotonave").src="img/explosion.png";
		document.getElementById("finJuego").style.display="block";
		document.getElementById("intentos").innerHTML=intentos;
	} 
	else {
		document.getElementById("conseguido").style.display="block";	
	}
}
function reiniciarJuego() {
	stop();
	document.getElementById("reanudar").style.display="none";
	document.getElementById("pausa").style.display="inline-block";
	intentos++;
	y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
	y2 = 60.22;
	alt = 60.22;
	v = 0;
	g = 1.622;
	a = g;
	dt = 0.016683;
	fuel=100;
	clearInterval(timer);
	start();
	document.getElementById("intentos").innerHTML=intentos;
	document.getElementById("fotonave").src="img/nave.png";
	document.getElementById("finJuego").style.display="none";
	document.getElementById("conseguido").style.display="none";
	document.getElementById("fuel").innerHTML=fuel;
}
function actualizarAltura(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
}