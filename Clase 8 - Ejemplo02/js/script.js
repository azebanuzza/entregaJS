$(document).ready(function () {
  $window = $(window);
  $("#intro").height($window.height());
  $window.scroll(function () {
    $("div.background").each(function (index, item) {
      var $scroll = $(item);
      var yPos = -($window.scrollTop() / $scroll.data("speed"));
      var coords = "50% " + yPos + "px";
      $scroll.css({ backgroundPosition: coords });
    });
  });
});

// $(document), $(window), $('intro') > es como jQuery selecciona los elementos
// height(), scrollTop() > funciones predeterminadas en jQuery
// each > sirve para recorrer cada uno de los items
// -($window.scrollTop() / $scroll.data("speed")); > va el menos para que suba los elementos y se muevan dependiendo de la velocidad de la data 4 o 6 como pusimos en el html
// $scroll.css > a esta variable se le da propiedades de css
