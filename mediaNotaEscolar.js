//essa função não 
dtem valor ela apenas imprime o alet
function somarSemRetorno(){
	var x = 2;
	var y = 3;
	alert(x+y);
}

//ela retorna um valor esperado //atribuir //implementação
function somarComRetorno(){
	var x = 2;
	var y = 3;
	return x+y;
}

function multiplicarSemParemetros(){
	alert(3*7);
}

function multiplicarComParemetros(y,x){
	alert(y*x);
}

function calcularMediaFinal(nota1,nota2,nota3,nota4){
	var media = (nota1 + nota2 + nota3 + nota4) / 4;
	return media;
}

//função ultilizando função

function verificarSePassouDeAno(){
	var media = calcularMediaFinal(5,5,5,5);
	if (media>6) {
		alert("você passou de ano");
	}else{
		alert("você não passou de ano");
	}
}