//função apenas para receber numeros no campo
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}


//função para mundar de campo automaticamente apos digitar a quatidade maxima de cada 
function conta(obj){
    chr = obj.value.length;
    maxchr = obj.getAttribute("maxlength");
    document.getElementById("caracteres").value = chr;
    if (chr == maxchr){
        nextInput = parseInt(obj.id) + 1;	document.getElementById(nextInput).focus();
        }
}


//função deve ser execultada apos digitar os dois número e o focus no botão confirmar.
function exibicandidato() {
    //concatena os valores dos campos da urna
      
    var n1 = document.getElementById("1").value;//captura o valor do 1 campo
    var n2 = document.getElementById("2").value;//captura o valor do 2 campo
    var voto = n1 + n2;//concatena os valores dos dois campos

    var estadodiv = document.getElementById("can05").style.display;//captura o valor da div do atributo css display

    switch (voto) {
        case "09":
            //Exibir a div do candidato 04
            //ocultar as demais
            document.getElementById("can09").style.display = 'block';
            document.getElementById("info09").style.display = 'block';
            document.getElementById("can05").style.display = 'none';
            document.getElementById("info05").style.display = 'none';
            document.getElementById("cannulo").style.display = 'none';
            break;
        case "05":
            //Exibir a div do candidato 09
            //ocultar as demais
            document.getElementById("can09").style.display = 'none';
            document.getElementById("info09").style.display = 'none';
            document.getElementById("cannulo").style.display = 'none';
            document.getElementById("can05").style.display = 'block';
            document.getElementById("info05").style.display = 'block';
            break;
        default:
            document.getElementById("can09").style.display = 'none';
            document.getElementById("info09").style.display = 'none';
            document.getElementById("can05").style.display = 'none';
            document.getElementById("info05").style.display = 'none';
            document.getElementById("cannulo").style.display = 'block';
            break;
    }
       
}


//função som do campo ao votar
function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}