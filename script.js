//Variables

let formulario = document.getElementById('form-reserva');

let patronRut = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
let patronNombre = /^[a-z ,.'-]+$/gim;
let patronApellido = /^[a-z ,.'-]+$/gim;
let patronEdad = /^\d+/gim;
let patronEmail= /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
let patronFecha= /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/gim;

formulario.addEventListener('submit', validando);

function validando(event){
    /* event.preventDefault(); */
    if(validandoRut()=== true  && validandoNombre()=== true && validandoApellido()===true && validandoEdad()===true &&validarCorreo()===true && validarEspecialidad()==true && validarFecha()==true && validarHora()==true){
        alert(`Estimado(a) ${document.getElementById('nombres').value} ${document.getElementById('apellidos').value}, su hora para ${document.getElementById('especialidad').value} ha sido reservada para el día ${document.getElementById('fecha').value} a las ${document.getElementById('hora').value}. Además, se le envió un mensaje a su correo ${document.getElementById('email').value} con el detalle de su cita. Gracias por preferirnos.`)
    }else{
        console.log('Faltan datos');
    }
}
//Validando RUT

function validandoRut(){
    let rut = document.getElementById('rut').value;
    if(!patronRut.test(rut)){
        alert('ingrese un Rut valido')
        return false;
    }else {
        console.log(`Rut es: ${rut}`);
        return true;
    }
}

//Validando Nombre

function validandoNombre(){
    let nombre = document.getElementById('nombres').value;
    if(!patronNombre.test(nombre)){
        alert('Ingrese un nombre');
        return false;
    }else {
        console.log(`Nombre es: ${nombre}`);
        return true;
    }
}

//Validando Apellido

function validandoApellido(){
    let apellido = document.getElementById('apellidos').value;
    if(!patronApellido.test(apellido)){
        alert('Ingrese apellido');
        return false;
    }else {
        console.log(`Apellido es: ${apellido}`);
        return true;
    }
}

//Validando Edad

function validandoEdad(){
    let edad = document.getElementById('edad').value;
    edad = validarEntero(edad);
    document.getElementById.value=edad;
    if(edad==''){
        alert('Ingrese una edad valida');
        return false
    }else{
        console.log('Edad es: ' + edad);
        return true
    }
}

function validarEntero(valor){
    valor = parseInt(valor)
  
    if (isNaN(valor)) {
        return ''
    }else{
        return valor
    }
}

//Validando Correo

function validarCorreo(){
    let email = document.getElementById('email').value;
    if(!patronEmail.test(email)){
        alert('Ingrese un correo electrónico valido');
        return false;
    }else{
        console.log(`Correo es: ${email}`);
        return true;
    }
}

//Validando Especialidad

function validarEspecialidad(){
    let especialidad = document.getElementById('especialidad').value;
    if(especialidad === 'dental'||'ofatalmologia'||'medicina'||'dermatología'){
        console.log(`espescialidad es: ${especialidad}`);
        return true;
    }else{
        return false;
    }
}

//Validando Fecha 

function validarFecha(){
    let fecha = document.getElementById('fecha').value;
    if(!patronFecha.test(fecha)){
        alert('Ingrese un formato de fecha valido (dd-mm-aaaa)');
        return false;
    }else{
        console.log(`Fecha es: ${fecha}`);
        return true;
    }
}

function validarHora(){
    let hora = document.getElementById('hora').value;
    if(hora === '8:00' || '9:00' || '10:00' || '11:00' || '12:00'){
        console.log(`Hora es: ${hora}`);
        return true;
    }else{
        return false;
    }

}