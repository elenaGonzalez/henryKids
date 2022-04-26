let menoresDeDoce = 0
let mayoresDeDoce = 0
function listar() {
    
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

   
    if (nombre && edad !== "") {

        document.getElementById('nombre').value = '';
        document.getElementById("nombre").focus();
        document.getElementById('edad').value = '';
        
        Swal.fire({
            title: '<i>Bienvenid@</i>',
            html: `Hola <b>${nombre}</b>. Tu edad es ${edad} años`,
            confirmButtonText: ' <u>cerrar</u>',
        });
    

        var elemento = document.createElement('li');
        var texto = document.createTextNode(`Nombre: ${nombre}. Edad: ${edad} años`);
        elemento.appendChild(texto);

        var lista = document.getElementById('ul');
        lista.appendChild(elemento);
    }
}

agregar.addEventListener("click", listar);

listar();
