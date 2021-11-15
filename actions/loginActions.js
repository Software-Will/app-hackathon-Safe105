import { 
    TRAER_AUTH,
    OBTENER_AUTENTICACION,
} from "../types";



// FUNCION QUE TRAE LA AUTENTICACION 
export  function obtenerAutenticacion () {
    return  async(dispatch) => {

      const user = [];
         dispatch(descargaAutenticacion(user));
           
    }
}


const descargaAutenticacion = user => ({
     type:OBTENER_AUTENTICACION,
     payload:user
})


