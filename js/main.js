//Precios de las Tartas
let tartaMujer = 36;
let tartaHombre = 36;
let tartaPerzonalizada = 39;
let tartaChocolate = 40;

let producto;

//Funcion para saludar
function Saludar(){
    alert("Hola" + "," + nombre + "." +
        " Bienvenido a Noa's Cake" + "." + " " + "A continuación podras escoger alguna de nuestras tartas.");
}

let nombre = prompt("ingrese su nombre");
Saludar()

let opcion = prompt(
    "ingrese una opcion: \n 1: Comprar tarta \n 2: Finalizar compra  \n 3: Terminar  "
  );

//Funcion para seleccionar producto
function CompraProducto(){
    producto = prompt("Elija una de nuestras tartas destacadas \n 1: Tarta Para Mujer  \n 2: Tarta Para Hombre  \n 3: Tarta Personalizada  \n 4:Tarta Chocolate");

    if (producto === "1") {
        alert("Elegiste Tarta Para Mujer");
    } else if (producto === "2") {
        alert("Elegiste Tarta Para Hombre");
    }else if (producto === "3") {
        alert("Elegiste Tarta Personalizada");
    }else if (producto === "4") {
        alert("Elegiste Tarta Chocolate");
    }
    opcion = prompt(
        "Vuelva a ingresar una opcion \n 2: Mostrar precios finales  \n 3: Terminar la compra"
      );
}


/* CompraProducto() */

function finalizarCompra() {
    if (producto === "1") {
      alert(
        "Usted eligio Tarta Para Mujer por un monto  final de " +
          tartaMujer * 1.21
      );
    } else if (producto === "2") {
      alert(
        "Usted eligio Tarta Para Hombre  por un monto  final de " +
        tartaHombre * 1.21
      );
    } else if (producto == "3") {
      alert(
        "Usted eligio Tarta Personalizada por un monto  final de " + 
        tartaPerzonalizada * 1.21
      );
    }else if (producto == "4") {
        alert(
          "Usted eligio Tarta Chocolate por un monto  final de " +
          tartaChocolate * 1.21
        );
  }
}


//agrego bucle while, mientras la opcion no sea 3
while (opcion !== "3") {
    if (opcion === "1") {
        CompraProducto();
    }
    if (opcion === "2") {
      finalizarCompra();
      opcion = "3";
    }
  }



alert("gracias por su compra");