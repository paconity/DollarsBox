class Billete{
  constructor(v, c){
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero(){
  var t = document.getElementById("dinero");
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

  if(dinero > 0){
    resultado.innerHTML = "Imposible completar la operación";
  }
  else{
    for(var e of entregado){

      if(e.cantidad > 0){
      resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }

    }
  }

}

var caja = [];
var entregado = [];
caja.push( new Billete(1000, 5) );
caja.push( new Billete(500, 5) );
caja.push( new Billete(200, 5) );
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 5) );

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var botn = document.getElementById("extraer");
botn.addEventListener("click", entregarDinero);
