import React from 'react'
import'./Tarea.css'
function Tarea(props){
    return (
        <li className="Tarea">
            <span
                className="Icon Icon-check"
                onClick={props.on}
            >COMPLETAR</span>
            <p className={`Tarea - p $ {...props.completada && 'Tarea-p--completada'}`}>
                {props.texto}
        </p>
        <span className="Icon Icon-delete"
            onClick={props.onDelete}>BORRAR</span>
        </li>
    )
}
export { Tarea }

const [tareas, setTareas]=React.useState(tareasDefault)
const [valorBuscado, BuscarTarea] = React.useState('')

let tareasBuscadas = []
if(valorBuscado.length<=0){
  tareasBuscadas = tareas
}else{
  tareasBuscadas = tareas.filter(
    tarea =>{
        const textoTarea = tarea.texto.toLowerCase()
        const textoBuscado = valorBuscado.toLowerCase()
        return textoTarea.includes(textoBuscando)
    }
  )  
}
const guardar = (tareas)=>{
if(tareas.length <=0){
    localStorage.removeItem(miListaTareas)
}else{
    const nuevasTareas= JSON.stringify(tareas)
    localStorage.setItem(miListaTareas, nuevasTareas)
}
    

}

const completar = (texto) =>{
  const indice = tareas.findIndex(tarea => tarea.texto == texto)
  const nuevaLista = [...tareas]
  nuevaLista[indice].completada = !nuevaLista[indice].completada
  setTareas(nuevaLista)
}
const borrar =(texto) =>{
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista.slice[indice,1]
    setTareas(nuevaLista)
}

