var lista = [];
const nombres = document.getElementById("nombres");
const escuela = document.getElementById("escuela");
const ciclo = document.getElementById("ciclo");
const correo = document.getElementById("correo");
const respuesta = document.getElementById("resp");
class Alumno{
    constructor(nombres, escuela, ciclo, correo){
        this.nombres = nombres;
        this.escuela = escuela;
        this.ciclo = ciclo;
        this.correo = correo;
    }
}

function add(){
    let alumn = new Alumno(nombres.value, escuela.value, ciclo.value, correo.value);
    lista.push(alumn);
    sessionStorage.setItem("nombre",nombres.value)
    nombres.value = "";
    escuela.value = 0;
    ciclo.value = 0;
    correo.value = "";
    nombres.focus();
    var nn = sessionStorage.getItem("nombre");
    console.log(nn);
    sessionStorage.removeItem("nombre");
    

}
function listar(){   
    lista.forEach((alum)=>{
        respuesta.append(alum.nombres);
    })
}