//Zona de variables y arrays

var fila1 = [2,6,5,4,5,5];
var color1 = ["blue","yellow","purple","red","yellow","blue"];
var fila2 = [4,6,6,3,2,6];
var color2 = ["blue","white","purple","red","yellow","blue"];
var fila3 = [3,4,1,2,6,3];
var color3 = ["blue","yellow","blue","red","red","purple"];
var fila4 = [1,4,2,5,6,1];
var color4 = ["purple","white","purple","red","green","red"];
var fila5 = [5,5,3,2,2,1];
var color5 = ["green","white","green","green","white","yellow"];
var fila6 = [4,1,4,3,1,3];
var color6 = ["green","white","purple","white","green","yellow"];

var long1 = fila1.length;
var long2 = fila2.length;
var long3 = fila3.length;
var long4 = fila4.length;
var long5 = fila5.length;
var long6 = fila6.length;


//Zona de funciones

var i = 0;

function iniciaTablero() {
    for (var i = 0; i < long1; i++) {
        console.log(fila1[i]+" " +color1[i]);
    }
    for (var i = 0; i < long2; i++) {
        console.log(fila2[i]+" " +color2[i]);
    }
    for (var i = 0; i < long3; i++) {
        console.log(fila3[i]+" " +color3[i]);
    }
    for (var i = 0; i < long4; i++) {
        console.log(fila4[i]+" " +color4[i]);
    }
    for (var i = 0; i < long5; i++) {
        console.log(fila5[i]+" " +color5[i]);
    }
    for (var i = 0; i < long6; i++) {
        console.log(fila6[i]+" " +color6[i]);
    }
}

var inicia = iniciaTablero()
console.log(inicia);