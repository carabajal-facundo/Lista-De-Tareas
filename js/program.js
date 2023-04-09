let tareas = [];
let noMostrar = true;

function agregarTarea(){
    let tarea = document.getElementById('tarea').value;
    if(noMostrar){
        if(tarea!=''){
            tareas.push(tarea);
            let seccion = document.querySelector('section');
    
            let articuloBorrar = document.createElement('article');
            articuloBorrar.className = 'mt-5';
    
            seccion.appendChild(articuloBorrar);
    
            articuloBorrar.innerHTML = `<input id="borrarTarea" class="h-25 w-75" type="text" placeholder="Tarea a eliminar">
            <button class="btn bg-white mt-2 border-3 border-secondary w-25" id="iniciarJuego" onclick="eliminarTarea()">
                Eliminar Tarea
            </button>
        <div class="mt-5">
            <button class=" btn bg-white w-25" onclick="mostrarTareas()">Mostrar tareas</button>
        </div>`;
            document.getElementById('tarea').value = '';
            noMostrar = false;
        }
    }
    else if(tarea!=''){
        tareas.push(tarea);
        document.getElementById('tarea').value = '';
    }
}

function eliminarTarea(){
    let tarea = document.getElementById('borrarTarea').value;
    if(tarea != ''){
        if(tareas.find(elemento => elemento == tarea)){
            for(let i = 0; i<tareas.length;i++){
                if(tareas[i]==tarea) tareas.splice(i,1);
            }
            document.getElementById('borrarTarea').value = '';
            alert("Se elimino la tarea: " + tarea);
        }
        else alert("La tarea no fue encontrada");
    }
}

function mostrarTareas(){
    tareass = '||-- ';
    for(let i = 0; i < tareas.length; i++){
        tareass += tareas[i] + ' -- ';
    }
    tareass += '||';
    alert(`Listado de tareas
    ${tareass}`);
}