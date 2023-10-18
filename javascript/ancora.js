var url_programiz = "https://www.programiz.com/python-programming/online-compiler/";
var url_aula1 = "https://colab.research.google.com/drive/1iXwiC_NSjX8aWgnP6AKKca0xyEtK2n5b?authuser=3#scrollTo=_C74RhohyFln";
var url_aula2 = "https://colab.research.google.com/drive/1yN10qHovel4Hb0H672sauD9Rm4UQA6wr?authuser=3";
var url_aula3 = "https://colab.research.google.com/drive/1JjlnMA_YQ35gpyuec_yGXuwjLLzlXtS1?authuser=3";
var url_aula4 = "https://colab.research.google.com/drive/1oRpjlPbSlS04UYLaeudH6zRGt7DY1vmu?authuser=3";
var url_aula5 = "";
var url_jogos = "";

var programiz = document.getElementById("card-programiz");
var aula1 = document.getElementById("card-aula1");
var aula2 = document.getElementById("card-aula2");
var aula3 = document.getElementById("card-aula3");
var aula4 = document.getElementById("card-aula4");
var aula5 = document.getElementById("card-aula5");
var jogos = document.getElementById("card-jogos")

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





