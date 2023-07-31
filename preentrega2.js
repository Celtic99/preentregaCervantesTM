let mensaje =  localStorage.getItem('bienvenida');
console.log(mensaje);



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
        error("ERROR! Por favor escribir una tarea")
        return
    }   
    
    const objetotareas = {
        id : Date.now(),
        tarea
    }

    tareas = [... tareas, objetotareas]
    console.log(tareas)
    mostrartareasHTML() 
    formulario.reset()
}

function error(error){
    const errormensaje = document.createElement("p")
    errormensaje.textContent= error

    const contenedor= document.querySelector("#contenedor")
    contenedor.appendChild(errormensaje)

    setTimeout(() => {
        errormensaje.remove()
    }, 2000);
}


function mostrartareashtml(){
    limpiarhtml()
    tareas.forEach(tarea =>{
        const btnborrar = document.createElement("button")
        btnborrar.textContent = "BORRAR" 
        btnborrar.onclick = () => borrartarea(tarea.id)
        const li = document.createElement("li")
        li.innerText= tarea.tarea
        li.appendChild(btnborrar)
        listadetareas.appendChild(li)
    })
}

function borrartarea(id){   
    tareas = tareas.filter(tarea => tarea.id != id) 
    mostrartareashtml() 
}

function limpiarhtml(){
    while(listadetareas.firstChild){
        listadetareas.removeChild(listadetareas.firstChild)
    }

}


