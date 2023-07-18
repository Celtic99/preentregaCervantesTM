function Bienvenido(nombre){
    console.log(`Bienvenido ${nombre}.`)
}

(Bienvenido('Usuario'));   


const bienvenida ="BIENVENID@ A LA LISTA DE TAREAS DEL DIA A DIA"   // aparece una sola vez
alert(bienvenida);

let usuario= prompt("Ingresa tu nombre");
let inicio= confirm("¡Hola " + usuario + " ingresa tu primer tarea a la lista!");

const formulario = document.querySelector("#formulario")
const listadetareas = document.querySelector("#listadetareas")

let tareas = []

eventos()
function eventos(){
    formulario.addeventlistener("submit",agregartarea)
}

function agregartarea(e){
    e.preventdefault()
    const tarea = document.querySelector("#tarea").value

    if(tarea == ""){
        error("ERROR! Por favor escribir una tarea");
        return;
    }   
    
    mostrartareasHTML()

    formulario.reset()
}

function error(errorr){
    const errormensaje = document.createElement("p")
    errormensaje.textContent= errorr

    const contenedor= document.querySelector("#contenedor")
    contenedor.appendChild(errormensaje)

    setTimeout(() => {
        errormensaje.remove()
    }, 2000);
}


function mostrartarea(){
    tareas.forEach(tarea =>{
        const li = document.createElement("li")
        li.innerText= tarea
        listadetareas.appendChild(li)
    })
}