import * as Yup from 'yup';

export default Yup.object().shape({
  nombre: Yup.string()
    .label('Nombre')
    .required('Este campo es requerido')
    .min(3, 'Ingrese un nombre correcto'),
    numero: Yup.string()
    .label('Celular')
    .required('Este campo es requerido')
    .min(8, 'Ingrese un número correcto'),
});