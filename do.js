
var cartasJugador = [];
var cartasBanco = [];
var i , cartasAleatorias;
var partidosJ = 0;
var partidosB = 0;
var empate = 0;
var respuesta = '';
var j = 1;

// for (var j = 1; j < 5; j++) {
// 	tiradaCartas();
// 	console.log('--------------------------------------------')
// 	console.log('partidos tot:'+ j + ' jugador:' + partidosJ + ' banco:' + partidosB + ' empates:' + empate )
// 	console.log('--------------------------------------------')
// }

do {
	tiradaCartas();
	console.log('--------------------------------------------')
	console.log('partidos tot:'+ j + ' jugador:' + partidosJ + ' banco:' + partidosB + ' empates:' + empate )
	console.log('--------------------------------------------')
	respuesta = prompt('Quieres jugar mas ?  si/no');
	j++;
}
while( respuesta != 'no')






function tiradaCartas(){ 
	cartasJugador = [];
	cartasBanco = [];
	var jugador = true;
	var cond = false;
	var deshabilitarJ = false;
	var deshabilitarB = false;
do {
	var cartasAleatorias = Math.floor(Math.random() * 10+2);
	if (jugador == true) {
		console.log('es turno del jugador ' + cartasAleatorias)
	} else {
		console.log('es turno del banco ' + cartasAleatorias)
	}

	if (jugador == true) {

		if (deshabilitarJ == false) {
			var respuesta = prompt("quieres cartas ? si o no");
			if (respuesta != null) {
				if (respuesta == 'si') {

					if (cartasAleatorias == 11 && sumaJugador()  >= 10) {
						cartasAleatorias = 1;
						console.log('carta 11 cuenta como ' +cartasAleatorias)
					}
					cartasJugador.push(cartasAleatorias);
				} else if (respuesta == 'no') {
					deshabilitarJ = true;
					console.log('jugador no quiere mas cartas')
				}
			}
		}
		respuesta = null;
		jugador = false;
	} else {
		if (deshabilitarB == false) {
			if (cartasAleatorias == 11 && sumaBanco()  >=  10) {
				cartasAleatorias = 1;
				console.log('carta 11 cuenta como ' +cartasAleatorias)
			}
		    cartasBanco.push(cartasAleatorias);
		    if (sumaBanco() >= 17 && sumaBanco() >= sumaJugador()){
		    	deshabilitarB = true;
		    	console.log('banco no quiere mas cartas')
		    }
		}
		jugador = true;
	}
	if ((sumaJugador() > 21 || sumaBanco() > 21) || (deshabilitarJ == true && sumaBanco() >= 17 && sumaBanco() >= sumaJugador())) {
		cond = true;
	}
}
while (cond != true)


    console.log(sumaJugador() + ' sumaJugador ' + sumaBanco() + ' sumaBanco ')
	if (sumaJugador() > sumaBanco() && sumaJugador() <= 21 || sumaBanco() > 21) {
		partidosJ++;
		console.log(sumaJugador() + ' ganador Jugador');
	}else if (sumaBanco() > sumaJugador() && sumaBanco() <= 21 || sumaJugador() >21){
		partidosB++;
			console.log(sumaBanco() + ' ganador Banco');
	}else {
		empate++;
		console.log('Empate, se repite la partida')
	}

 }





function sumaJugador() {
	var sumJugador = 0;
	for ( var i = 0; i < cartasJugador.length; i++) {
		sumJugador = sumJugador + cartasJugador[i];
	}
	return sumJugador;
}

function sumaBanco() {
	var sumBanco = 0;
	for ( var i = 0; i < cartasBanco.length; i++) {
		sumBanco = sumBanco + cartasBanco[i]
	}
	return sumBanco;
}







 

