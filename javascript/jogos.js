var url_jogo1 = "https://compute-it.toxicode.fr/";
var url_jogo2 = "https://lightbot.com/";
var url_jogo3 = "https://codecombat.com/";
var url_jogo4 = "https://www.codemonkey.com/";
var url_jogo5 = "https://scratch.mit.edu/";
var url_jogo6 = "https://blockly.games/";

var jogo1 = document.getElementById("card1");
var jogo2 = document.getElementById("card2");
var jogo3 = document.getElementById("card3");
var jogo4 = document.getElementById("card4");
var jogo5 = document.getElementById("card5");
var jogo6 = document.getElementById("card6");

jogo1.addEventListener('click', function() {
    
    openInNewTab(url_jogo1);
  
});

jogo2.addEventListener('click', function() {
    
    openInNewTab(url_jogo2);
  
});

jogo3.addEventListener('click', function() {
    
    openInNewTab(url_jogo3);
  
});

jogo4.addEventListener('click', function() {
    
    openInNewTab(url_jogo4);
  
});

jogo5.addEventListener('click', function() {
    
    openInNewTab(url_jogo5);
  
});

jogo6.addEventListener('click', function() {
    
    openInNewTab(url_jogo6);
  
});


function openInNewTab(url) {
    var janela = window.open(url, '_blank');
    janela.focus();
}

function openNextPage(url) {
    var janela = window.open(url, '_parent');
    janela.focus();
}





