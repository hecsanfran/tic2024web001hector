document.getElementById('btnCreditos').addEventListener('click', function () {
      alert('Autor: Hector San Francisco\nCurso y Grupo: [2ºB. Nº27]');
    });

 document.getElementById('btnOcultar').addEventListener('click', function () {
      document.querySelector('.bloque1').style.display = 'none';
    });
  document.getElementById('btnMostrar').addEventListener('click', function () {
      document.querySelector('.bloque1').style.display = 'block';
    });
 document.getElementById('btnCambiarColor').addEventListener('click', function () {
      document.querySelector('.bloque1').style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
function mostrarFecha() {
      var currentDate = new Date();
      alert('Fecha: ' + currentDate.toLocaleDateString());
    }

    function cambiarColor() {
      document.querySelector('.bloque2').style.backgroundColor = getRandomColor();
    }

    function restaurarColor() {
      document.querySelector('.bloque2').style.backgroundColor = 'silver'; 
    }

document.getElementById('btnObtenerUbicacion').addEventListener('click', function () {
    obtenerUbicacion();
});

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;

            mostrarUbicacion(latitud, longitud);
        });
    } else {
        alert('Geolocalización no soportada por tu navegador.');
    }
}

function mostrarUbicacion(latitud, longitud) {
    alert('Latitud: ' + latitud + '\nLongitud: ' + longitud);

   
    var map = L.map('map').setView([latitud, longitud], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([latitud, longitud]).addTo(map)
        .bindPopup('Tu ubicación').openPopup();
}
 document.getElementById('btnObtenerUbicacion').addEventListener('click', function () {
      obtenerUbicacion();
    });

    function obtenerUbicacion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var latitud = position.coords.latitude;
          var longitud = position.coords.longitude;

          document.getElementById('coordenadas').innerText = 'Latitud: ' + latitud + ', Longitud: ' + longitud;

         
          mostrarMapa(latitud, longitud);
        });
      } else {
        alert('La geolocalización no está soportada por este navegador.');
      }
    }

    function mostrarMapa(latitud, longitud) {
      var map = L.map('map').setView([latitud, longitud], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      L.marker([latitud, longitud]).addTo(map)
        .bindPopup('Tu ubicación actual.')
        .openPopup();
    }