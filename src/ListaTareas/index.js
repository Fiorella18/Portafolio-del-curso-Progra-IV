import React from 'react'
import './ListaTareas.css'
function ListaTareas(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}
export { ListaTareas    }

const miListaTareas = 'MI_LISTA_TAREAS'
const almacenamientoLocal = localStorage.getItem(miListaTareas)
let tareasGuardadas
if(!almacenamientoLocal){
    const tareasSerializadas = JSON.stringify(tareasDefault)
    localStorage.setItem(miListaTareas, tareasSerializadas)
    tareasGuardadas = tareasDefault
}else{
    tareasGuardadas = JSON.parse(almacenamientoLocal)
}
const [tareas, setTareas] = React.useState(tareasGuardadas)
