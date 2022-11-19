import {modeloHabitacion} from '../models/modeloHabitacion.js'

export class ServicioHabitacion{
    async agregarHabitacion(habitacion){
        let nuevaHabitacion = new modeloHabitacion(habitacion)
        return await nuevaHabitacion.save()
    }
    async buscarTodasHabitaciones(){
        let habitacionesEncontradas = await modeloHabitacion.find()
        return habitacionesEncontradas
    }
    async buscarHabitacionPorId(id){
        let habitacionencontrada = await modeloHabitacion.findById(id)
        return habitacionencontrada
    }
    async editarHabitacion(id,datosNuevos){
        return await modeloHabitacion.findByIdAndUpdate(id, datosNuevos)
    }
}