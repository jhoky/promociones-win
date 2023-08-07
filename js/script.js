$(document).ready(function() {
$(".planes-paquetes").on("click", function() {
    $(this).addClass("item-select");
    $(".planes-paquetes").not(this).removeClass("item-select");
    
    
    if($(this).html().trim() === "DÚOS"){
        $('.planes-paquetes-duos').removeAttr('hidden');
        $('.planes-paquetes-trios').attr('hidden', true);

        $('.planduo1').removeAttr('hidden');
        $('.planinternet').attr('hidden', true);
        $('.planduo2').attr('hidden', true);
        $('.planduo3').attr('hidden', true);
        $('.plantrio1').attr('hidden', true);
        $('.plantrio2').attr('hidden', true);
        
    }else if($(this).html().trim() === "TRIOS"){
        $('.planes-paquetes-trios').removeAttr('hidden');
        $('.planes-paquetes-duos').attr('hidden', true);


        $('.plantrio1').removeAttr('hidden');
        $('.planinternet').attr('hidden', true);
        $('.planduo1').attr('hidden', true);
        $('.planduo2').attr('hidden', true);
        $('.planduo3').attr('hidden', true);
        $('.plantrio2').attr('hidden', true);

    }else if($(this).html().trim() === "INTERNET"){
        $('.planes-paquetes-duos').attr('hidden', true);
        $('.planes-paquetes-trios').attr('hidden', true);


        $('.planinternet').removeAttr('hidden');
        $('.planduo1').attr('hidden', true);
        $('.planduo2').attr('hidden', true);
        $('.planduo3').attr('hidden', true);
        $('.plantrio1').attr('hidden', true);
        $('.plantrio2').attr('hidden', true);
    }

    
    
  });
  /*
  $(".paquetes").on("click", function() { 
    var plan = $(this).val();
    var url = "https://api.whatsapp.com/send?phone=+51933944120&text=Hola, quiero solicitar más información sobre los planes de win";
    window.open(url, "_blank");
  });
  */
});

$(".paquetes-duos").on("click", function() {
  $(this).addClass("item-select-paquetes-duos");
  $(".paquetes-duos").not(this).removeClass("item-select-paquetes-duos");
  
  
  if($(this).html().trim() === "INTERNET + WINTV"){
    $('.planduo1').removeAttr('hidden');
    $('.planduo2').attr('hidden', true);
    $('.planduo3').attr('hidden', true);
  }else if($(this).html().trim() === "INTERNET + DGO"){
    $('.planduo1').attr('hidden', true);
    $('.planduo2').removeAttr('hidden');
    $('.planduo3').attr('hidden', true);
  }else if($(this).html().trim() === "INTERNET + FONOWIN"){
    $('.planduo1').attr('hidden', true);
    $('.planduo2').attr('hidden', true);
    $('.planduo3').removeAttr('hidden');
  }
});

$(".paquetes-trios").on("click", function() {
  $(this).addClass("item-select-paquetes-trios");
  $(".paquetes-trios").not(this).removeClass("item-select-paquetes-trios");
  
  
  if($(this).html().trim() === "INTERNET + WINTV + FONO WIN"){
    $('.plantrio1').removeAttr('hidden');
    $('.plantrio2').attr('hidden', true);
  }else if($(this).html().trim() === "INTERNET + DGO + FONO WIN"){
    $('.plantrio1').attr('hidden', true);
    $('.plantrio2').removeAttr('hidden');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  function detectarPantalla() {
    var imageUrl;
    if (window.innerWidth <= 767) {
      imageUrl = "img/header-win-movil.png";

      $('.contenedor-swiper').addClass('swiper-slide');
      $('.swiper-wrapper').removeClass('planes');
      $('.swiper-wrapper').removeClass('beneficios');
      const swiper = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
      $("#img-cabeza").attr("src", imageUrl);
    } else {
      imageUrl = "img/header-win.png";
      $('.contenedor-swiper').removeClass('swiper-slide');
      $('.swiper-wrapper').addClass('planes');
      $('.swiper-wrapper').addClass('beneficios');
      $("#img-cabeza").attr("src", imageUrl);
    }
  }
  detectarPantalla();
  window.addEventListener('resize', detectarPantalla);
});

function enviarsolicitudplan(){

}
