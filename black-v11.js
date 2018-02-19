 var v1 = Math.abs(11);
 var v2 = Math.abs(1);
function cartaAs (){
	for( i = 0; i<cartasAleatorias; i++){ 
        if (v1 !== v2) {
	       v1  = v1 - 10;
          document.write("Absolute values are the same." + v2);
        }else {
          document.write("Absolute values are different.");
         }
	}
}
cartaAs();