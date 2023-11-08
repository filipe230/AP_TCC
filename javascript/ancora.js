var url_programiz = "https://www.programiz.com/python-programming/online-compiler/";
var aula1 = "https://colab.research.google.com/drive/1-Y10IX2b3dzhgVH13sgOzFGwkLHyPequ";
var url_aula2 = "https://colab.research.google.com/drive/1QvDmoMqLO47687HAi1SjnpNsGiRMytuB";
var url_aula3 = "https://colab.research.google.com/drive/13pRGOsjbTs_4M6GRTHRbCbmMl7o7fOzj";
var url_aula4 = "https://colab.research.google.com/drive/1NsJlDbv13CNC-8u3YZaUd2QZo25ORYqP";
var url_aula5 = "";
var url_jogos = "";

/*var plano_aula1 = "";
var plano_aula2 = "";
var plano_aula3 = "";
var plano_aula4 = "";
var plano_aula5 = "";
var plano_aula6 = "";
var plano_aula7 = "";*/

var programiz = document.getElementById("card-programiz");
var aula1 = document.getElementById("card-aula1");
var aula2 = document.getElementById("card-aula2");
var aula3 = document.getElementById("card-aula3");
var aula4 = document.getElementById("card-aula4");
var aula5 = document.getElementById("card-aula5");
var jogos = document.getElementById("card-jogos");

/*var plano_1 = document.getElementById("card-aula1");
var plano_2 = document.getElementById("card-aula2");
var plano_3 = document.getElementById("card-aula3");
var plano_4 = document.getElementById("card-aula4");
var plano_5 = document.getElementById("card-aula5");
var plano_6 = document.getElementById("card-jogos");
var plano_7 = document.getElementById("card-jogos");*/



programiz.addEventListener('click', function() {
    
    openInNewTab(url_programiz);
  
});

jogos.addEventListener('click', function() {
    
    openInNewTab(url_jogos);
  
});

aula1.addEventListener('click', function() {
    
    openNextPage(url_aula1);
  
});

aula2.addEventListener('click', function() {
    
    openNextPage(url_aula2);
  
});

aula3.addEventListener('click', function() {
    
    openNextPage(url_aula3);
  
});

aula4.addEventListener('click', function() {
    
    openNextPage(url_aula4);
  
});

aula5.addEventListener('click', function() {
    
    openNextPage(url_aula5);
  
});



function openInNewTab(url) {
    var janela = window.open(url, '_blank');
    janela.focus();
}

function openNextPage(url) {
    var janela = window.open(url, '_parent');
    janela.focus();
}





