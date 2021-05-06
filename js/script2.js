//Variables globales

const num = document.getElementById("numero"); //el input donde se ingresa el número
const respuesta = document.getElementById("res");//div donde se van ha mostrar los resultados.
var suma = 0;
var cuadrados = 0;
var promedio = 0;
var lista = [];

//definir las funciones
function add(){
    lista.push(parseInt(num.value));
    num.value="";
    num.focus();
}
function calcular(){
    for(let i=0;i<lista.length;i++){
        suma = suma + lista[i];
        cuadrados = cuadrados + lista[i]*lista[i];
    }
    promedio = suma/lista.length;
    respuesta.innerHTML=""
    +"<ul><li>Suma es: "
    +suma+"</li><li>Suma Cuadrados: "
    +cuadrados+"</li><li>Promedio es: "
    +promedio+"</li></ul>"    
}