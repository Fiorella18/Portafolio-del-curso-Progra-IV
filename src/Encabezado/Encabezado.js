import React from "react";
import './Encabezado.css'
function Encabezado({completadas, total}){
    return(
        <h1 className="Encabezado">
            Tareas completadas {completadas}
        </h1>
    )
}
export { Encabezado }