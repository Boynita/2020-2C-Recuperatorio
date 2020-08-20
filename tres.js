/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta;
	var sexo;
	var lugar;//Bariloche, cataratas o salta
	var temporada;//otoño, invierno, verano, primavera
	var contadorDePersonas = 0;
	var primeraVezLugar = true;
	var maximoDeLugarMasElegido;
	var temporadaMasElegida;
	var contadorDeSexo = 0;
	var primeraVezSexo = true;
	var titularQueMasPasajerosLleva;
	var promedioDePersonasPorViaje;
	var personasQueViajanEnInvierno;
	var acumuladorDePersonasPorViaje = 0;
	
	do{
		do{
			sexo = prompt("Ingrese sexo (f-m)");	
		}while(sexo != "f" && sexo != "m");

		do{
			lugar = prompt("Ingrese Lugar");
		}while(lugar != "bariloche" && lugar != "cataratas" || lugar != "salta");

		do{
			temporada = prompt("Ingrese Temporada");
		}while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera");

		do{
			contadorDePersonas++;
		}while(contadorDePersonas < 0);

		//Punto A
		if(primeraVezLugar){
			primeraVezLugar = false;
			maximoDeLugarMasElegido = lugar;
			temporadaMasElegida = temporada;
		}else{
			if(lugar > maximoDeLugarMasElegido){
			maximoDeLugarMasElegido = lugar;
			temporadaMasElegida = temporada;		
			}
		}
		//Punto B

		if(sexo == "f" || sexo == "m"){
			contadorDeSexo++;
			if(primeraVezSexo){
				primeraVezSexo = false;
				titularQueMasPasajerosLleva = sexo;
			}
		}
		
		//Punto C
		acumuladorDePersonasPorViaje += personasQueViajanEnInvierno;


		respuesta = confirm("Desea Continuar?");
	}while(respuesta);

	//Punto C

	promedioDePersonasPorViaje = acumuladorDePersonasPorViaje / contadorDePersonas;
	if(personasQueViajanEnInvierno == undefined){
	}else{
		console.log("Promedio de personas que viajan en Invierno:" + personasQueViajanEnInvierno);
	}

}
