var url_python = "https://www.python.org/";
var url_colab = "https://colab.google/";
var url_aula1 = "https://colab.research.google.com/drive/1-Y10IX2b3dzhgVH13sgOzFGwkLHyPequ";
var url_aula2 = "https://colab.research.google.com/drive/1QvDmoMqLO47687HAi1SjnpNsGiRMytuB";
var url_aula3 = "https://colab.research.google.com/drive/13pRGOsjbTs_4M6GRTHRbCbmMl7o7fOzj";
var url_aula4 = "https://colab.research.google.com/drive/1NsJlDbv13CNC-8u3YZaUd2QZo25ORYqP";
var url_aula5 = "https://colab.research.google.com/drive/1zygv_016ER1BbzPNLOZ7Ymaoy9Zb5PfX";
var url_aula6 = "https://colab.research.google.com/drive/1KEfBlFyvfh7CpDPub8-SSyEaoB1hLF8E";
var url_aula7 = "https://colab.research.google.com/drive/1U6aEv8zzr_yM20HITYk9FyPnK0BpiW64";

var python = document.getElementById("card-python");
var colab = document.getElementById("card-colab");
var aula1 = document.getElementById("card-aula1");
var aula2 = document.getElementById("card-aula2");
var aula3 = document.getElementById("card-aula3");
var aula4 = document.getElementById("card-aula4");
var aula5 = document.getElementById("card-aula5");
var aula6 = document.getElementById("card-aula6");
var aula7 = document.getElementById("card-aula7");


python.addEventListener('click', function() {
    
    openInNewTab(url_python);
  
});

colab.addEventListener('click', function() {
    
    openInNewTab(url_colab);
  
});

aula1.addEventListener('click', function() {
    
    openInNewTab(url_aula1);
  
});

aula2.addEventListener('click', function() {
    
    openInNewTab(url_aula2);
  
});

aula3.addEventListener('click', function() {
    
    openInNewTab(url_aula3);
  
});

aula4.addEventListener('click', function() {
    
    openInNewTab(url_aula4);
  
});

aula5.addEventListener('click', function() {
    
    openInNewTab(url_aula5);
  
});

aula6.addEventListener('click', function() {
    
    openInNewTab(url_aula6);
  
});

aula7.addEventListener('click', function() {
    
    openInNewTab(url_aula7);
  
});



function openInNewTab(url) {
    var janela = window.open(url, '_blank');
    janela.focus();
}

function openNextPage(url) {
    var janela = window.open(url, '_parent');
    janela.focus();
}





