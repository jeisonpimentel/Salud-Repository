$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$("#btnlogin").click(function () {
    rut = $("#txt_rut").val();
    contrasena = $("#txt_contrasena").val();
    validador = true;


    if (rut == "") {
        validador = false;
        $("#mensaje1").append('<small> Formato de RUT inválido </small>')
    } else{
        $('#mensaje1').addClass('is-valid');
    }

    if (contrasena == "") {
        validador = false;
        $("#mensaje2").append('<small> Contraseña inválida </small>');
    } else{
        $("#mensajes").addClass('is-valid');
    }

    if (validador) {
        alert('Iniciaste Sesion Correctamente');
        /*$("#lbl_SigIn").append("<small>  </small>"));*/

    } else {
        alert('Intentelo nuevamente');
    }


});