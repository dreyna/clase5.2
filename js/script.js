/*
var sum = (a,b)=>a+b;
alert(sum(2,6))
var lista=[2,3,4,5]

lista.forEach(
    value=>{
        console.log('n: ' +value)
    }
)

sessionStorage.setItem('curso','LP1');

var c = sessionStorage.getItem('curso');

console.log(c);
*/
var num = document.getElementById("numero");
var resp = document.getElementById("res");
var suma = 0;
var sc = 0;
var p = 0;
var lista = [];

function add(){
    lista.push(parseInt(num.value));  
    num.value="";
    num.focus();     
}
function calcular(){
    lista.forEach(value=>{
        suma = suma + value;
        sc = sc + value*value;
    });
    p = suma/lista.length;
    resp.innerHTML= ""
    +"<ul><li> La suma :"+suma+"</li></ul>"
    +"<ul><li> La suma cuadrados :"+sc+"</li></ul>"
    +"<ul><li> El promedio :"+p+"</li></ul>";
}
var nombres = document.getElementById("nombres");
var escuela = document.getElementById("escuela");
var ciclo = document.getElementById("ciclo");
var correo = document.getElementById("correo");

function agregar(){
    resp.innerHTML= ""
    +"<ul><li> Nombres :"+nombres.value+"</li></ul>"
    +"<ul><li> Escuela :"+escuela.value+"</li></ul>"
    +"<ul><li> Ciclo :"+ciclo.value+"</li></ul>"
    +"<ul><li> Correo :"+correo.value+"</li></ul>";
}
