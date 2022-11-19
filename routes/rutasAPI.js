import express from 'express';
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js';
import { ControladorReserva } from '../controllers/ControladorReserva.js';

//En el archivo de rutas creo una variable encargada de definir todos los endpoints de mi API

//Por cada servicio que ofrece mi API debo tener un endpoint o ruta.

export let rutas = express.Router();

//Creo un objeto de la clase ControladorHabitacion
let controlHabitacion = new ControladorHabitacion()
//Creo un objeto de la clase ControladorReserva
let controlReserva = new ControladorReserva()

//Defino las rutas para cada servicio de mi API
rutas.post('/api/hotel/habitaciones', controlHabitacion.agregarHabitacion)
rutas.get('/api/hotel/habitaciones', controlHabitacion.consultarHabitaciones)
rutas.get('/api/hotel/habitaciones/:id',controlHabitacion.consultarHabitacion)
rutas.put('/api/hotel/habitaciones/:id',controlHabitacion.editarHabitacion)

//Rutas para servicio de reserva
rutas.post('/api/hotel/reservas', controlReserva.agregarreserva)
rutas.get('/api/hotel/reservas', controlReserva.consultarreservas)
rutas.get('/api/hotel/reservas/:id', controlReserva.consultarreserva)
rutas.put('/api/hotel/reservas/:id', controlReserva.editarreserva)