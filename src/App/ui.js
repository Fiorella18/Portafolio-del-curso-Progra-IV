import './App.css'
import react from react
import{ Encabezado } from '../Encabezado/'
import{ BarraBusqueda } from '../BarraBusqueda/'
import {ListaTareas } from '../ListaTareas'
import {Tarea } from  '../Tarea'
import React from 'react'

function ui(){
  tareascompletadas,
  totalTareas,
  valorBuscado,
  BuscarTarea,
  tareasBuscadas,
  completar,
  borrar,
  nombreAutor

  )
}return

<react.Fragment>
       <Encabezado
        tareascompletadas={tareascompletadas}
        total={totalTareas}
    />
    <BarraBusqueda
        valorBuscado={valorBuscado}
        funcionBuscar={BuscarTarea}       
    />
    <ListaTareas>
        {TareasDefault.map(tarea =>(
          <tarea
            llave={tarea.texto}
            texto={tarea.texto}
            completada={tarea.completada}
          />
        ))}
    </ListaTareas>
  
        <ListaTareas>  
           {tareasBuscadas.map(tarea =>(    
               <tarea
               texto={tarea.texto}
               completada={tarea.completada}
               onComplete={()=>completar(tarea.texto)}
             />
           ))}
        </ListaTareas>
        <ListaTareas>  
           {tareasBuscadas.map(tarea =>(    
               <tarea
               texto={tarea.texto}
               completada={tarea.completada}
               onComplete={()=>completar(tarea.texto)}
               onDelete={()=>borrar(tarea.texto)}
             />
           ))}
        </ListaTareas>


  </react.Fragment>

export { ui}