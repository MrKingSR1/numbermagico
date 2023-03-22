  window.onload = function() {
      var numeroMagico = Math.floor(Math.random() * 101);
      var intentos = 0;
      var tiempoRestante = 60;
    
       const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
          Swal.fire({
            title: '¡Bienvenido!',
            text: `¡Al juego del Numero Mágico ${nombreUsuario}!`,
            icon: 'success',
            confirmButtonText: 'JUGAR',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
          });
      document.getElementById("userN").innerHTML = nombreUsuario;


      document.getElementById("intento").innerHTML = intentos;

      function actualizarIntentos(acerto) {
      if (acerto) {
        // Si acertó, no se hace nada
        return;
      }

      intentos--;
      document.getElementById("intento").textContent = intentos;
      if (intentos === 0) {
        // Si se quedó sin intentos, actualiza el puntaje y reinicia los intentos
        puntuacion -= 0;
        document.getElementById("puntos").textContent = puntuacion;
        intentos = 0;
        document.getElementById("intento").textContent = intentos;
      }
    }

  
      var temporizador = setInterval(function() {
        tiempoRestante--;
        document.getElementById("tiempo").innerHTML = tiempoRestante;
        if (tiempoRestante === 0) {
          clearInterval(temporizador);
              Swal.fire({
              icon: 'warning',
              title: 'Se acabó el tiempo',
              text: 'Lo siento, intentalo de nuevo.',
              confirmButtonText: 'Jugar de nuevo',
              allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
            }).then(() => location.reload());
        }
      }, 1000);


      document.getElementById("boton-adivinar").onclick = function() {
        var numeroIngresado = parseInt(document.getElementById("numero-ingresado").value);
        if (isNaN(numeroIngresado)) {
          Swal.fire({
            title: 'Número inválido',
            text: 'Por favor ingrese un número válido.',
            icon: 'info',
            confirmButtonText: 'Continuar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false

          });
          return;
        }
        intentos++;
        if (numeroIngresado === numeroMagico) {
          var puntuacion = 100 - intentos;
          clearInterval(temporizador);
          document.getElementById("mensaje-felicitacion").innerHTML = "¡Felicidades! Adivinaste en " 
          + intentos + " Intentos. Con una puntuación de: " + puntuacion;
          document.getElementById("mensaje-felicitacion").classList.add("mensaje");
          document.getElementById("temporizador").style.display = "none";
        } else if (numeroIngresado < numeroMagico) {
           Swal.fire({
            title: '¡Casi!',
            text: 'El número mágico es mayor. Intenta de nuevo.',
            icon: 'warning',
            confirmButtonText: 'Continuar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
          });
        } else {
           Swal.fire({
            title: '¡Casi!',
            text: 'El número mágico es menor. Intenta de nuevo.',
            icon: 'warning',
            confirmButtonText: 'Continuar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
          });
        }
        document.getElementById("numero-ingresado").value = "";
      };
    };