# Proyecto Lunar Landing (JavaScript release)
## Autor: Antonio Garcías Muñoz
### Versión release del juego Lunar Landing que incluye:

  •	Html con los elementos básicos del juego.
  
  •	Css: d.css y m.css dos versiones que cargan mediante media query dependiendo del tamaño de pantalla.
  
  •	Js: con el javascript necesario para dejar caer la nave y parar cuando llega a un límite.
  
  • Dispone de imágenes obtenidas en la página gratuita "pixabay".
  

Previsualización: 

https://rawgit.com/toniGM/proyecto-lunar-landing-javascript-release-/master/principal.html

Se ha realizado un versión minified (branch). Para ver su funcionamiento se puede ver aquí:

https://rawgit.com/toniGM/proyecto-lunar-landing-javascript-release-/proyecto-lunar-landing-minified-javascript/principal.html


Partiendo del código esqueleto suministrador por el profesor mi aplicación web realiza las siguientes funciones

•	Se ha colocado como fondo del juego una imagen del cielo estelar para darle más realismo al juego.
  Como imagen de la nave se ha utilizado un dibujo tipo "nave transbordador challenguer" y para la luna una imagen del propio suelo         lunar.   Se ha colocado una imagen de la tierra que es visible adecuadamente en cualquier tipo de dispositivo. 
  Se han tratado y optimizado todas las imágenes con la página web "webresaizer" comprimiendo muchísimo su peso y así mejorar el peso       final   del juego. 
  Para el tamaño móvil se han reducido las imágenes de la tierra y de la nave, y así conseguir una mejor experiencia y visualización del   juego en su versión más pequeña. Esto lo hemos conseguido variando el css (m.css) para la versión móvil.
  
•	Se ha creado un menú del juego con diferentes accesos y botones, si bien, al reducir el tamaño de la pantalla o utilizar un móvil o       tablet, este quedará oculto a excepción del botón POWER que es el que encenderá y apagará el motor de la nave. Para poder ver el menú     en dispositivos móviles bastara con pulsar sobre la opción "show menú" así como a la opción "hide menú" si queremos volverlo a ocultar.   Pertenecientes a este menú del juego dispondremos de las ordenes "Inicio", con la que iniciaremos el juego siempre que queramos,          "About" que nos dará información acerca de la creación del juego y de las fuentes usadas, y "Instrucciones" que nos explicaran en que   consiste el juego y como jugar. También se dispone de 2 botones, uno de reinicio, y otro de play/pause, para mayor comodidad del         jugador.

•	Al pulsar la barra espaciadora del teclado o bien hacer click en la pantalla con el ratón, así como pulsando sobre el botón POWER, la     nave encenderá el motor o lo apagará, cambiando su aceleración para realizar el alunizaje correctamente.

•	Al mismo tiempo que realizamos la acción anterior el tanque de combustible se vaciará de forma proporcional al tiempo que mantenemos     pulsado el propulsor. Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la           dificultad del juego.

•	Al tocar la nave la superficie lunar, si la velocidad de impacto es inferior a 5 m/s, se mostrara un mensaje de "Lo has conseguido", 
  en caso negativo, y que la velocidad sea superior, explotará la nave. 
  En ambos casos el juego finaliza y puede reiniciarse con la opción del menú reiniciar.
  También se ha añadido la opción de un contador de intentos cuando la nave explota y nos muestra el mensaje de "volver a intentarlo",     para así saber nuestro progreso y las veces que lo henos intentado.

•	Como se ha citado anteriormente, hay una página de "Instrucciones"  y una página de "About" accesibles desde el menú.
  En caso se versión móvil será accesible una vez se haya pulsado "show menú".
  

