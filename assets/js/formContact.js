$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$("#btnlogin").click(function () {
    rut = $("#txt_rut").val();
    contrasena = $("#txt_contrasena").val();
    validador = true;


    if (rut == "" || typeof rut == 'String' || rut.length < 8) {
        validador = false;
        $("#mensaje1").append('<small> Formato de RUT inválido </small>')
    } else {
        $('#mensaje1').addClass('is-valid');
    }

    if (contrasena == "") {
        validador = false;
        $("#mensaje2").append('<small> Contraseña inválida </small>');
    } else {
        $("#mensaje2").addClass('is-valid');
    }

    if (validador) {
        alert('INICIASTE SESIÓN');

    } else {
        alert('INTENTELO NUEVAMENTE');
    }

});
$('#btn-Registro').click(function () {
    rut = $("#txt_rut").val();
    nombre = $("#nombrePaciente").val();
    apellidos = $("#apellidosPaciente").val();
    contrasena = $("#txt_contrasena").val();
    confCon = $("#txt_conf_contra").val();
    email = $("#emailPaciente").val();
    fono = $("#telefonoCelular").val();
    prevision = $("#tipoPrevision").val();
    validador = true;

    if (rut == "" || typeof rut == 'String' || rut.length < 8) {
        validador = false;
        $("#msj1").append('<small> Formato de RUT inválido </small>')
    } else {
        $('#msj1').addClass('is-valid');
    }

    if (nombre == "" || typeof nombre == ('num')) {
        validador = false;
        $("#msj2").append('<small> Ingrese un Nombre válido </small>')
    } else {
        $('#msj2').addClass('is-valid');
    }

    if (apellidos == "" || typeof apellidos == ('num')) {
        validador = false;
        $("#msj3").append('<small> Ingrese un Apellido válido </small>')
    } else {
        $('#msj3').addClass('is-valid');
    }

    if (contrasena == "") {
        validador = false;
        $("#msj4").append('<small> Ingrese una Contraseña </small>')

    } else if (contrasena.length < 8) {
        validador = false;
        $("#msj4").append('<small> La contraseña debe tener al menos 8 caracteres </small>')
    } else {
        $('#msj4').addClass('is-valid');
    }

    if (contrasena != confCon || confCon == "") {
        validador = false;
        $("#msj5").append('<small> Las contraseñas no coinciden </small>');
    } else {
        $('#msj5').addClass('is-valid');
    }

    if (email == "") {
        validador = false;
        $("#msj6").append('<small> Ingresa un Correo eletronico </small>');
    } else {
        $('#msj6').addClass('is-valid');
    }

    if (fono == "" || typeof fono == 'string') {
        validador = false;
        $("#msj7").append('<small> Ingresa un Numero de Telefono </small>');
    } else {
        $('#msj7').addClass('is-valid');
    }

    if (validador) {
        alert('USUARIO REGISTRADO CORRECTAMENTE');

        $("#tipoPrevision").text($("#tipoPrevision option:selected").text());

        // OBTENEMOS EL RADIO BUTTON SELECCIONADO DE LAS OPCIONES
        previsiones = $('input[name="radioPrevision"]:checked').val();
        $("#msj8").text(previsiones);

        $("#infoPaciente").addClass('text-success');
        $("#infoPaciente").css("visibility", "visible");
        
    }else{
        alert('INTENTE REGISTRARSE NUEVAMENTE');
    }
});