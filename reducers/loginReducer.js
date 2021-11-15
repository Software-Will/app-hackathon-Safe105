import {
    OBTENER_AUTENTICACION
} from '../types';



const initialState = {
      user:[]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch (action.type) {
 
                case OBTENER_AUTENTICACION:
                    return {
                        ...state,
                        user: action.payload
                    }
            default: 
            return state;
    }
 }