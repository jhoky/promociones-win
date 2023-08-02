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
  $(".paquetes").on("click", function() { 
    var plan = $(this).val();
    var url = "https://api.whatsapp.com/send?phone=+51933944120&text=Hola, quiero solicitar el plan de "+plan;
    window.open(url, "_blank");
  });

});