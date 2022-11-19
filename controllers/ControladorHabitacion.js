//Una clase controlador establece los métodos (Acciones) que vamos a realizar en Bd y está alineado con el archivo de rutas.
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

    constructor(){}

    async agregarHabitacion(request, response){
        let datosARegistrar = request.body
        let objetoServicio = new ServicioHabitacion()
        try{
            await objetoServicio.agregarHabitacion(datosARegistrar)
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }

    async consultarHabitaciones(request, response){
        let objetoServicio = new ServicioHabitacion()     
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":await objetoServicio.buscarTodasHabitaciones()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }

    async consultarHabitacion(request, response){ 
        let id = request.params.id
        let objetoServicio = new ServicioHabitacion()   
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":await objetoServicio.buscarHabitacionPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }

    async editarHabitacion(request, response){
        let id = request.parfams.id
        let datosAEditar = request.body
        let objetoServicio = new ServicioHabitacion()        
        try{
            await objetoServicio.editarHabitacion(id, datosAEditar)
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }
}