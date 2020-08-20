/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)

a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  var respuesta;
  var marca;
  var precio;
  var peso;
  var tipo;//(solido o líquido)
  var acumuladorDePesoTotal = 0;
  var masCaroDeLiquidos;
  var marcaMasCaraLiquidos;
  var primeraVezLiquidos = true;
  var contadorSolidos = 0;
  var acumuladorDePesoSolido = 0;
  var primeraVezSolidos = true;
  var masBaratoDeLosSolidos;
  var marcaMasBarataDeSolidos;

  do{

    do{
        marca = prompt("Ingrese una marca");
    }while(marca == null);

    do{
        precio = prompt("Ingrese precio");
        precio = parseInt(precio);
    }while(isNaN(precio) || precio < 1);

    do{
        peso = prompt("Ingrese peso");
        peso = parseInt(peso);
    }while(isNaN(peso) || peso < 1);

    do{
      tipo = prompt("Ingrese tipo");
    }while(tipo != "s" && tipo != "l");

    //Punto A
    acumuladorDePesoTotal += peso;

    //Punto B
    if(tipo == "l"){
      if(primeraVezLiquidos){
        primeraVezLiquidos = false;
        masCaroDeLiquidos = precio;
        marcaMasCaraLiquidos = marca;
      }else{
        if(precio > masCaroDeLiquidos){
          masCaroDeLiquidos = precio;
          marcaMasCaraLiquidos = marca;
        }
      }
    }else{//Punto C
      contadorSolidos++;
      acumuladorDePesoSolido += peso;
      
      if(primeraVezSolidos){
        primeraVezSolidos = false;
        masBaratoDeLosSolidos = precio;
        marcaMasBarataDeSolidos =marca;
      }else{
        if(precio < masBaratoDeLosSolidos){
          masBaratoDeLosSolidos = precio;
          marcaMasBarataDeSolidos =marca
        }
      }
    }

    respuesta = confirm("Desea continuar?");
  }while(respuesta)
}
