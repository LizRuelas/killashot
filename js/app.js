$(window).load(function() {
  $(".se-pre-con").fadeOut("slow");;
});
$(document).ready(function(){
var altura = $('.menu').offset().top;

$(window).on('scroll', function(){
  if ( $(window).scrollTop() > altura ){
    $('.menu').addClass('menu-fixed');
  } else {
    $('.menu').removeClass('menu-fixed');
  }
});

$('#maquinas').load(efectomaquina);	
});
function escribir(){
  console.log('HOLAAAAA')
  document.getElementById("maquinas").innerText= p.substr(0,num_c)+ "|";
  num_c++;
  if (num_c<=p.length){
  setTimeout("escribir()", 100);
  }
}
function efectomaquina() {
  p="La oportunidad de implementar Tecnologia en tu negocio";
  num_c=0;
  escribir();
}

setTimeout("efectomaquina()",1000);