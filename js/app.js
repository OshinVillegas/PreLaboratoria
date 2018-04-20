
  var puntuacionTotal = 0;

  function validarRespuesta1(boton){
    var puntos = 30;
    var respuestaCorrecta = 'Margaret Hamilton';
    var respuestaSeleccionada = boton.innerHTML

    document.getElementById('respuesta').innerHTML = '';

    if (respuestaCorrecta === respuestaSeleccionada){
      puntuacionTotal += puntos;

      document.getElementById('respuesta').innerHTML += "<p class='respuestaCorreta'>Respuesta Correcta</p>";
      document.getElementById('respuesta').innerHTML += "<p>Gano " + puntos + " puntos</p>";
      document.getElementById('respuesta').innerHTML += "<p>Total de " + puntuacionTotal + " puntos</p>";
    }
    else{
      document.getElementById('respuesta').innerHTML += "<p class='respuestaIncorrecta'>Respuesta Incorrecta></p> <p>Total de " + puntuacionTotal + " puntos</p>";

    }

    document.getElementById('pregunta1').style.visibility = 'hidden';
    document.getElementById('pregunta2').style.visibility = 'visible';
    document.getElementById('pregunta3').style.visibility = 'hidden';

  }

  function validarRespuesta2(boton){
    var puntos = 50;
    var respuestaCorrecta = 'Ada Lovelace';
    var respuestaSeleccionada = boton.innerHTML

    document.getElementById('respuesta').innerHTML = '';

    if (respuestaCorrecta === respuestaSeleccionada){
      puntuacionTotal += puntos;

      document.getElementById('respuesta').innerHTML += "<p class='respuestaCorreta'>Respuesta Correcta</p>";
      document.getElementById('respuesta').innerHTML += "<p>Gano " + puntos + " puntos</p>";
      document.getElementById('respuesta').innerHTML += "<p>Total de " + puntuacionTotal + " puntos</p>";

    }
    else{
      document.getElementById('respuesta').innerHTML += "<p class='respuestaIncorrecta'>Respuesta Incorrecta</p> <p>Total de " + puntuacionTotal + " puntos</p>";
    }

    document.getElementById('pregunta1').style.visibility = 'hidden';
    document.getElementById('pregunta2').style.visibility = 'hidden';
    document.getElementById('pregunta3').style.visibility = 'visible';
  }

  function validarRespuesta3(boton){
    var puntos = 20;
    var respuestaCorrecta = 'Angela Ruiz Robles';
    var respuestaSeleccionada = boton.innerHTML

    document.getElementById('respuesta').innerHTML = '';


    if (respuestaCorrecta === respuestaSeleccionada){
      puntuacionTotal += puntos;

      document.getElementById('respuesta').innerHTML += "<p class='respuestaCorreta'>Respuesta Correcta</p>";
      document.getElementById('respuesta').innerHTML += "<p> Gano " + puntos + " puntos</p>";
      document.getElementById('respuesta').innerHTML += "<p>Total de " + puntuacionTotal + " puntos</p>";

    }
    else{
      document.getElementById('respuesta').innerHTML += "<p class='respuestaIncorrecta'>Respuesta Incorrecta</p> <p>Total de " + puntuacionTotal + " puntos</p>";
    }

    document.getElementById('pregunta1').style.visibility = 'hidden';
    document.getElementById('pregunta2').style.visibility = 'hidden';
    document.getElementById('pregunta3').style.visibility = 'hidden';
  }
