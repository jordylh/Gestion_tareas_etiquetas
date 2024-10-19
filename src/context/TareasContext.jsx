import { createContext, useContext } from "react"
import useTareas from "../hooks/useTareas"

const TareasContext=createContext()

export const TareasProvider=({children})=>{
    const {tareas,filter,filterByLabel,addTarea,removeTarea}=useTareas()
    return(
        <TareasContext.Provider
            value={{tareas,filter,filterByLabel,addTarea,removeTarea}}
        >
            {children}
        </TareasContext.Provider>
    )
}

export const useTareasContext=()=>{
    const context=useContext(TareasContext)
    if(!context){
        throw new Error('useTareasContext debe ser usado dentro del TareasProvider')
    }
    return context
}