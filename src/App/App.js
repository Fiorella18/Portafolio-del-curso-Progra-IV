import './App.css'
import react from react
import{ Encabezado } from '../Encabezado/'
import{ BarraBusqueda } from '../BarraBusqueda/'
import {ListaTareas } from '../ListaTareas'
import {Tarea } from  '../Tarea'

function App () {
const TareasDefault = [
    {texto: "Tarea 1", completada: false},
    {texto: "Tarea 2", completada: false},
    {texto: "Tarea 3", completada: true}

]
const tareascompletadas= TareasDefault.filter(tareascompletadas)
const totalTareas= TareasDefault.length

const[valorBuscado, BuscarTarea]= React.useState('')

let tareasBuscadas= []
if(valorBuscado.length<0){
    tareasBuscadas=TareasDefault
}else{
    tareasBuscadas=TareasDefault.filter(
        tarea=> {
          const textoTarea = tarea.texto.toLowerCase()
          const textoBuscado = valorBuscado.toLowerCase()
          return textoTarea.includes(textoBuscado)

        }
    )

}

return(
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

)
}