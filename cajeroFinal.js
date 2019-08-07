aviso.innerHTML = "Nota del Autor: Recuerda retirar el dinero cuando se te haya entregado ¡Gracias!";
var cantidadImagen = 0;
var valorImagen = 0;

class Billete{
  constructor(v, c){
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero(){
  entregado = [];
  cantidadImagen = 0;
  valorImagen = 0;
  var t = document.getElementById("dineroTecleado");
  dinero = parseInt(t.value);

  for(var bi of caja){

    if(dinero > 0){
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad){
        papeles = bi.cantidad;
      }
      else{
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }

  }

  if(dinero > 0 || billetesDisponibles["stock"] <= 0){
    resultado.innerHTML = "Imposible completar la operación";
  }
  else{
    for(var e of entregado){
      if(e.cantidad > 0){
      cantidadImagen = e.cantidad;
      valorImagen = e.valor;
      imagenesDeBilletes(cantidadImagen, valorImagen);
      billetesDisponibles["stock"] = billetesDisponibles["stock"] - (cantidadImagen * valorImagen);
      console.log(billetesDisponibles["stock"]);
      }

    }
  }

}

var caja = [];
var entregado;
caja.push( new Billete(1000, 5) );
caja.push( new Billete(500, 5) );
caja.push( new Billete(200, 5) );
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 5) );
var billetesDisponibles = []
billetesDisponibles["stock"] = 9250;
console.log(billetesDisponibles["stock"]);

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var botn = document.getElementById("extraer");
botn.addEventListener("click", entregarDinero);

var botn2 = document.getElementById("retirar");
botn2.addEventListener("click", retirarDinero);

var rB = document.getElementById("resultadoBilletes");
var papel = rB.getContext("2d");
////////////////////////////////////////////////////////////////////////////////
function imagenesDeBilletes(){
  var x = -65;
  var y = 28;
  if(valorImagen == 1000){
    var billeteDeMil = {
      url: "1000 pesos.png",
      cargarOk: false
    };

    billeteDeMil.objeto = new Image();
    billeteDeMil.objeto.src = billeteDeMil.url;
    billeteDeMil.objeto.addEventListener("load", cargarbilleteDeMil);
    var cantidadDeMil = cantidadImagen;

    function cargarbilleteDeMil(){
      billeteDeMil.cargarOk = true;
      entregarBilleteEnFisico();
    }

    function entregarBilleteEnFisico(){
      if(billeteDeMil.cargarOk){
        for(var p = 0; p<cantidadDeMil; p++){
          x = x + 65;
          papel.drawImage(billeteDeMil.objeto, x, 0);
        }
      }
    }
  }
  else if(valorImagen == 500){
    var billeteDeQuinientos = {
      url: "500 pesos.png",
      cargarOk: false
    };
    billeteDeQuinientos.objeto = new Image();
    billeteDeQuinientos.objeto.src = billeteDeQuinientos.url;
    billeteDeQuinientos.objeto.addEventListener("load", cargarbilleteDeQuinientos);
    var cantidadDeQuinientos = cantidadImagen;

    function cargarbilleteDeQuinientos(){
      billeteDeQuinientos.cargarOk = true;
      entregarBilleteEnFisico();
    }

    function entregarBilleteEnFisico(){
      if(billeteDeQuinientos.cargarOk){
        for(var p = 0; p<cantidadDeQuinientos; p++){
          x = x + 65;
          papel.drawImage(billeteDeQuinientos.objeto, x, y);
        }
      }
    }
  }
  else if(valorImagen == 200){
    var billeteDeDoscientos = {
      url: "200 pesos.png",
      cargarOk: false
    };

    billeteDeDoscientos.objeto = new Image();
    billeteDeDoscientos.objeto.src = billeteDeDoscientos.url;
    billeteDeDoscientos.objeto.addEventListener("load", cargarBilleteDeDoscientos);
    var cantidadDeDoscientos = cantidadImagen;

    function cargarBilleteDeDoscientos(){
        billeteDeDoscientos.cargarOk = true;
        entregarBilleteEnFisico();
    }

    function entregarBilleteEnFisico(){
      if(billeteDeDoscientos.cargarOk){
        y = y + 28;
        for(var p = 0; p<cantidadDeDoscientos; p++){
          x = x + 65;
          papel.drawImage(billeteDeDoscientos.objeto, x, y);
        }
      }
    }
  }
  else if(valorImagen == 100){
    var billeteDeCien = {
      url: "100 pesos.png",
      cargarOk: false
    };

    billeteDeCien.objeto = new Image();
    billeteDeCien.objeto.src = billeteDeCien.url;
    billeteDeCien.objeto.addEventListener("load", cargarBilleteDeCien);
    var cantidadDeCien = cantidadImagen;

    function cargarBilleteDeCien(){
        billeteDeCien.cargarOk = true;
        entregarBilleteEnFisico();
    }

    function entregarBilleteEnFisico(){
      if(billeteDeCien.cargarOk){
        y = y + 56;
        for(var p = 0; p<cantidadDeCien; p++){
          x = x + 65;
          papel.drawImage(billeteDeCien.objeto, x, y);
        }
      }
    }
  }
  else if(valorImagen == 50){
    var billeteDeCincuenta = {
      url: "50 pesos.png",
      cargarOk: false
    };

    billeteDeCincuenta.objeto = new Image();
    billeteDeCincuenta.objeto.src = billeteDeCincuenta.url;
    billeteDeCincuenta.objeto.addEventListener("load", cargarBilleteDeCincuenta);
    var cantidadDeCincuenta = cantidadImagen;

    function cargarBilleteDeCincuenta(){
        billeteDeCincuenta.cargarOk = true;
        entregarBilleteEnFisico();
    }

    function entregarBilleteEnFisico(){
      if(billeteDeCincuenta.cargarOk){
        y = y + 84;
        for(var p = 0; p<cantidadDeCincuenta; p++){
          x = x + 65;
          papel.drawImage(billeteDeCincuenta.objeto, x, y);
        }
      }
    }
  }
}
function retirarDinero(){
  papel.clearRect( 0, 0, 325, 256);
}
