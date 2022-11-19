
import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReserva{

    constructor(){}

    async agregarReserva(request, response){
        let datosARegistrar=request.body
        let objetoServicio = new ServicioReserva()        
        try{
            await objetoServicio.agregarReserva(datosARegistrar)
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

    async consultarReservas(request, response){   
        let objetoServicio = new ServicioReserva()     
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":await objetoServicio.buscartodasReservas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }

    async consultarReserva(request, response){    
        let id = request.params.id
        let objetoServicio = new ServicioReserva()  
        try{
            response.status(200).json({
                "mensaje":"Operación exitosa",
                "datos":await objetoServicio.buscarReservaPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Operación fallida "+error,
                "datos":null
            })
        }
    }

    async editarReserva(request, response){  
        let id = reques.params.id
        let datosAEditar = request.body
        let objetoServicio = new ServicioReserva()      
        try{
            await objetoServicio.editarReserva(id, datosAEditar)
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