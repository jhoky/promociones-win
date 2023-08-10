let plan;
let dniValue;
let celularValue;
let fechavalue;
let planvalue;

window.onload = function(){
  var fecha = new Date(); 
  var mes = fecha.getMonth()+1; 
  var dia = fecha.getDate(); 
  var ano = fecha.getFullYear(); 
  if(dia<10)
    dia='0'+dia;
  if(mes<10)
    mes='0'+mes 
  fechavalue=ano+"-"+mes+"-"+dia;

}


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
  
  $(".btn-wsp").on("click", function() { 
    var plan = $(this).val();
    var url = "https://api.whatsapp.com/send?phone=+51933944120&text=Hola, quiero solicitar más información sobre los planes de win";
    window.open(url, "_blank");
  });
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


  const paquetesBotones = document.querySelectorAll(".paquetes.paquetes-precio");
  const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));

  paquetesBotones.forEach(function(botones) {
    botones.addEventListener("click", function() {
      const value = this.value;
      plan = value;
      document.getElementById("dni").value = "";
      document.getElementById("celular").value = "";
    });
  });



  const continuarBtn = document.getElementById("continuarBtn");

  continuarBtn.addEventListener("click", function() {
    dniValue = document.getElementById("dni").value;
    celularValue = document.getElementById("celular").value;
    if (dniValue.trim() === "") {
      document.getElementById("dni").required = true;
      return; 
    }
    if (celularValue.trim() === "") {
      document.getElementById("celular").required = true;
      return; 
    }
    iniciarformular();

    modal.hide();
  });



  
});



function iniciarformular(){
  
  
  const palabra = plan;
  const partes = palabra.split("-");
  
  const reemplazos = {
    "duo1": "+wintv",
    "duo2": "+dgo",
    "duo3": "+fonowin",
    "trio1": "+wintv+fonowin",
    "trio2": "+dgo+fonowin"
  };
  if(partes.length>1){
    if (reemplazos.hasOwnProperty(partes[1])) {
      partes[1] = reemplazos[partes[1]];
    }
    planvalue = partes[0]+partes[1];
  }else{
    planvalue = partes[0];
  }
  
  enviarsolicitudplan();
  
}

function enviarsolicitudplan(){

  $.ajax({
    url: "http://localhost:8080/winpromociones/" + dniValue + "/" + celularValue+"/"+fechavalue+"/"+planvalue,
    method: "POST",
    contentType: "application/json",
    dataType: "json"
  }).done(function(result) {
    console.log(resut);
    var resultList = JSON.parse(result);
    alert("Enviado. Gracias por la preferencia");
  }).fail(function(textStatus) {
    alert("ocurrió un error");
    console.log(textStatus);
  });
}
