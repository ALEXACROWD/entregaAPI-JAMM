import * as dotenv from 'dotenv';
dotenv.config();
//console.log(process.env.PORT); // remove this after you've confirmed it is working
import { API } from "./API/API.js";

//Creamos un objeto de la clase API para utilizarla
let apiHotel = new API();

//Encender el servidor para ejecutar correctamente el api
apiHotel.levantarServidor();

