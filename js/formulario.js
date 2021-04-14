// - Constantes -
const prevision = [ 
    {idPrevision: "1", nombrePrevision: 'Fonasa'},
    {idPrevision: "2", nombrePrevision: 'Isapre Cruz Blanca'},
    {idPrevision: "3", nombrePrevision: 'Isapre Consalud'},
]
// - Fin de constantes -

// - Inicio de (document).ready() -
$(document).ready(function() {

    // - Select2 -
    inicializarSelect2Prevision();
    // - Fin de Select2 -

});
// - Fin de (document).ready() -

// - [Aquí realizaremos todos los metodos para crear los select2]
function inicializarSelect2Prevision(){
    // Iteramos el objeto global de servicio para agregar el campo id que requiere el control
    var datos = $.map(prevision, function (obj) {
        obj.id = obj.idPrevision;
        obj.text =  obj.nombrePrevision;
        return obj;
    });

    $('#tipoPrevision').select2(
        {
            placeholder: {id: "-1", text: "Seleccione una opción"},
            data: datos,
            allowClear: true
        }
    );
};

// - Funciones estaticas -
// - [Espacio Reservado]
// - Fin de funciones estaticas -