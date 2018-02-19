


var cartasJugador = [];
var cartasBanco = [];
var jugador = true;
var cond = false;
var i , cartasAleatorias;
var deshabilitarJ = false;
var deshabilitarB = false;

while (cond != true) {
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
						console.log(cartasAleatorias + ' con 11')
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
				console.log(cartasAleatorias + ' con 11')
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
		break;
	}
}

    console.log(sumaJugador() + ' sumaJugador ' + sumaBanco() + ' sumaBanco ')
	if (sumaJugador() > sumaBanco() && sumaJugador() < 21 ) {
		console.log(sumaJugador() + ' ganador Jugador');
	}else if (sumaBanco() > sumaJugador() && sumaBanco() < 21){
			console.log(sumaBanco() + ' ganador Banco');
	}else {
		console.log('Empate, se repite la partida')
	}


// var finalizar = deshabilitarJ === true && sumaBanco >= 17 && sumBanco >= sumaJugador;



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


// while( exit != 'exit'){
//  var exit = prompt('Escribe exit');

// }




 

