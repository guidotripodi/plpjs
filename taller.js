//Escriban acá su código.
//Ejercicio 1
let anilloCero = {dato: 0};
anilloCero.siguiente = anilloCero;

anilloCero.agregar =  function (d) {
  nodoAgregado =  Object.create(this)  
  nodoAgregado.dato = d
  nodoAgregado.siguiente = this.siguiente
  this.siguiente = nodoAgregado
  return this
}

//Ejercicio 2
anilloCero.toString = function(){
    var res = "";
    res = res.concat(this.dato.toString());
    var elem = this.siguiente;
  while(!(this ===  elem)){
      res = res.concat(" ↝" + elem.dato.toString());
      elem = elem.siguiente;
  }
  res = res.concat("<br />");
  return res;
}

//TEST EJERCICIO 1 Y 2
anilloUno = anilloCero.agregar(1)
console.log("Ej2:"+ anilloUno.toString())


//Ejercicio 3
function Anillo(d){
  this.dato = d;
  this.siguiente = this;
  agregar = anilloCero.agregar;
  toString = anilloCero.toString;
}

//Anillo.prototype.agrega = function(s){

//}

//Anillo.prototype.toString = function(){

//}

//Ejercicio 4
//no entiendo cual es el objeto anillo aca asumo que es this
Anillo.prototype.map = function(f) {
  anilloNuevo =  Object.create(this);
  while(!(anilloNuevo.siguiente === anilloNuevo)){
    anilloNuevo.dato =  f anilloNuevo.dato;
    anilloNuevo.siguiente = anilloNuevo;
  }
  return anilloNuevo;
}

Anillo.prototype.copiar = function(n){
  anilloCopiado =  Object.create(anilloCero); //hay que cambiar esto por el de la funcion del 3
  var elem;
  while(!(n.siguiente === n)){
    anilloCopiado.dato = n.dato;
    anilloCopiado.siguiente = n.siguiente;
    n = n.siguiente;
  }
  return anilloCopiado;
}

Anillo.prototype.cantidad = function(anillo) {
  var cant = 0
  while(!(anillo.siguiente === anillo)){
    cant = cant +1;
    anillo = anillo.siguiente;
  }
  return cant;
}


//Ejercicio 5

Anillo.prototype.ponerAnteriores = function(anillo) {
  var elemento = anillo.siguiente;
  anillo = anillo.siguiente;
  anillo.anterior = anillo;
  while(!(anillo.siguiente === anillo)){
    anillo.anterior = elemento;
    elemento = anillo;
    anillo = anillo.siguiente;
  }
  return anillo;

function calcularResultado(){
//Editen esta función para que devuelva lo que quieran ver. Pueden escribir acá sus tests, y descomentar las líneas que siguen para correr los tests predefinidos.
  let res = "";
  let anilloUno = {dato: 1};
  anilloUno.siguiente = anilloUno;
  Object.setPrototypeOf(anilloUno,anilloCero);
  res += anilloUno.agregar(3).agregar(2)+"<br />"+anilloUno.siguiente; //1 ↝ 2 ↝ 3<br />2 ↝ 3 ↝ 1
  //res +="<br />"+(new Anillo(0)).agregar(2).agregar(1)+"<br />"+anilloCero.siguiente; //0 ↝ 1 ↝ 2<br />0
  //res +="<br />"+(new Anillo(0)).agregar(2).agregar(1).map(e => e+1);//1 ↝ 2 ↝ 3
  //res +="<br />"+(new Anillo(0)).agregar(1).map(e => e+4);//4 ↝ 5
  //res +="<br />"+(new Anillo(1)).map(e => e*2);//2
  //let anilloDos = new Anillo(2).agregar(2);
  //let anilloCopia = anilloDos.copiar();
  //anilloDos.agregar(2);
  //anilloCopia.agregar(1);
  //res +="<br />"+anilloDos;//2 ↝ 2 ↝ 2
  //res +="<br />"+anilloCopia;//2 ↝ 1 ↝ 2
  //res +="<br />"+anilloCopia;//2 ↝ 1 ↝ 2
  //res +="<br />"+anilloDos.cantidad();//3
  //res +="<br />"+new Anillo(0).agregar(3).agregar(2).ponerAnteriores().agregar(1).siguiente.anterior;//0 ↝ 1 ↝ 2 ↝ 3
  //let anilloLetras = (new Anillo("a")).agregar("d").agregar("c");
  //anilloLetras.siguiente.ponerAnteriores();
  //anilloLetras.agregar("b");
  //res +="<br />"+anilloLetras.siguiente.anterior.dato;//a 
  //anilloLetras.anterior.agregar("e");
  //res +="<br />"+anilloLetras;//a ↝ b ↝ c ↝ d ↝ e
  //res +="<br />"+anilloDos.agregar(2).siguiente.anterior;//undefined
  //res +="<br />"+(new Anillo(1)).agregar(2).siguiente.anterior;//undefined
  return res;
}
