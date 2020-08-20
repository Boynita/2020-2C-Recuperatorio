/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.

nombre ,peso, sexo y edad.

a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contador = 0;
	var nombre;
	var peso;
	var sexo;
	var edad;
	var contadorDeMujeres = 0;
	var contadorDeHombres = 0;
	var acumuladorDeEdad = 0;
	var edadPromedio;
	var primeraVezHombreMasPesado = true;
	var maximoDeHombreMasPsado;
	var nombreMaximoDeHombreMasPesado;

	while (contador < 5){
		contador++;

		do{
			nombre = prompt("Ingrese su nombre");
		}while(nombre == null);

		do{
			peso = prompt("Ingrese peso");
			peso = parseInt(peso);
		}while(isNaN(peso));
		
		do{
			sexo = prompt("Ingrese sexo (f-m)");
		}while(sexo != "f" && sexo != "m");

		do{
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad < 0);
	//********************************************* */END validacion
	
		//Punto A
		if (sexo == "f"){
			contadorDeMujeres++;
			//Punto C
			if(primeraVezHombreMasPesado){
				primeraVezHombreMasPesado = false;
				maximoDeHombreMasPsado = peso;
				nombreMaximoDeHombreMasPesado = nombre;
			}else{
				if(peso > maximoDeHombreMasPsado){
				maximoDeHombreMasPsado = peso;
				nombreMaximoDeHombreMasPesado = nombre;
				}
			}
		}else{
			contadorDeHombres++;
		}

		//Punto B

		acumuladorDeEdad += edad;
	}// END WHILE

	//Punto A
	console.log("Cantidad de mujeres" + contadorDeMujeres);
	//Punto B
	edadPromedio = acumuladorDeEdad / contador;
	console.log("Edad promedio:" + edadPromedio);
	if(nombreMaximoDeHombreMasPesado == undefined){
		console.log("Error, no se asignaron Hombres");
	}else{
		console.log("Hombre con mayor peso: " + nombreMaximoDeHombreMasPesado);
	}



}//END Function

