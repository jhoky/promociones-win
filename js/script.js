$(document).ready(function() {
$(".planes-paquetes").on("click", function() {
    $(this).addClass("item-select");
    $(".planes-paquetes").not(this).removeClass("item-select");
    
    
    if($(this).html().trim() === "DÚOS"){
        $('.planes-paquetes-duos').removeAttr('hidden');
        $('.planes-paquetes-trios').attr('hidden', true);
        console.log($(this).html());
    }else if($(this).html().trim() === "TRIOS"){
        $('.planes-paquetes-trios').removeAttr('hidden');
        $('.planes-paquetes-duos').attr('hidden', true);
    }else if($(this).html().trim() === "INTERNET"){
        $('.planes-paquetes-duos').attr('hidden', true);
        $('.planes-paquetes-trios').attr('hidden', true);
    }
  });

  /*
  $(".paquetes").on("click", function() { 
    var plan = $(this).val();
    var url = "https://api.whatsapp.com/send?phone=+51933944120&text=Hola, quiero solicitar el plan de "+plan;
    window.open(url, "_blank");
  });
  */
});

document.addEventListener("DOMContentLoaded", function() {
  // Función para detectar el tamaño de la pantalla
  function detectarPantalla() {
    var imageUrl;
    if (window.innerWidth <= 767) {
      // Si el ancho de la pantalla es menor o igual a 767px (dispositivos móviles), eliminar la clase
      
      imageUrl = "img/header-win-movil.png";

      $('.contenedor-swiper').addClass('swiper-slide');
      $('.swiper-wrapper').removeClass('planes');
      $('.swiper-wrapper').removeClass('beneficios');
      const swiper = new Swiper('.swiper', {

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      });
      $("#img-cabeza").attr("src", imageUrl);
    } else {
      imageUrl = "img/header-win.png";
      // Si el ancho de la pantalla es mayor a 767px (pantallas más grandes), agregar la clase
      $('.contenedor-swiper').removeClass('swiper-slide');
      $('.swiper-wrapper').addClass('planes');
      $('.swiper-wrapper').addClass('beneficios');
      $("#img-cabeza").attr("src", imageUrl);
    }
  }

  // Ejecutar la función al cargar la página
  detectarPantalla();

  // Agregar un listener para detectar cambios en el tamaño de la pantalla y volver a ejecutar la función si es necesario
  window.addEventListener('resize', detectarPantalla);
});

