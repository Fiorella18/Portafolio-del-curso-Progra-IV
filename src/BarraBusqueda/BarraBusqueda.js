import React from 'React'
import './BarraBusqueda.css'
function BarraBusqueda({valorBuscado,funcionBuscar}){
    const buscar = (event)=>{
        funcionBuscar(event.target.value)
    }
    return (
        <input 
            className="BarraBusqueda"
            placeholder="Tarea a buscar"
            onchange={buscar}
            value={valorBuscado}
            />
    )
}
export {BarraBusqueda}