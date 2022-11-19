import mongoose from 'mongoose';

//definiendo nuestro esquema de datos
const Schema = mongoose.Schema;

const EsquemaReserva=new Schema({
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numeroNinos:{
        required:true,
        type:Number
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    idHabitacion:{
        required:true,
        type:String
    },
    costoReserva:{
        required:true,
        type:Number
    }
});

export const modeloReserva=mongoose.model('reserva',EsquemaReserva)