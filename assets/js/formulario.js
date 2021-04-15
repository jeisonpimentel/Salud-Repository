// - Constantes -
const prevision = [ 
    {idPrevision: "1", nombrePrevision: 'Fonasa'},
    {idPrevision: "2", nombrePrevision: 'Isapre Cruz Blanca'},
    {idPrevision: "3", nombrePrevision: 'Isapre Consalud'},
]

const clientes = [ 
    {idCliente: "1", rut: '26.051.938-9', nombreCliente: 'Jeison Luis', apellidos: 'Pimentel Alvis', correo: 'jeisonalvis10@gmail.com', telefono: '+56945354321'},
    {idCliente: "2", rut: '23.051.321-9', nombreCliente: 'Virginia Del Carmen', apellidos: 'Casique Casique', correo: 'virginia@gmail.com', telefono: '+5694535111'},
    {idCliente: "3", rut: '22.051.424-9', nombreCliente: 'Jennifer Josefina', apellidos: 'Herrera Angulo', correo: 'jennifer@gmail.com', telefono: '+56945354321'},
];

const especialidades = [
    {idEspecialidad: "1", nombreEspecialidad: 'Medicina General'},
    {idEspecialidad: "2", nombreEspecialidad: 'Pediatria'},
    {idEspecialidad: "3", nombreEspecialidad: 'Kinesiologia'},
    {idEspecialidad: "4", nombreEspecialidad: 'Cardiología'},
    {idEspecialidad: "5", nombreEspecialidad: 'Ginecologia'},
];

const regiones = [
    {idRegion: "1", nombreRegion: "Arica y Parinacota"},
    {idRegion: "2", nombreRegion: "Tarapacá"},
    {idRegion: "3", nombreRegion: "Antofagasta"},
    {idRegion: "4", nombreRegion: "Atacama"},
    {idRegion: "5", nombreRegion: "Coquimbo"},
    {idRegion: "6", nombreRegion: "Valparaíso"},
    {idRegion: "7", nombreRegion: "Región del Libertador Gral. Bernardo O’Higgins"},
    {idRegion: "8", nombreRegion: "Región del Maule"},
    {idRegion: "9", nombreRegion: "Región de Ñuble"},
    {idRegion: "10", nombreRegion: "Región del Biobío"},
    {idRegion: "11", nombreRegion: "Región de la Araucanía"},
    {idRegion: "12", nombreRegion: "Región de Los Ríos"},
    {idRegion: "13", nombreRegion: "Región de Los Lagos"},
    {idRegion: "14", nombreRegion: "Región Aisén del Gral. Carlos Ibáñez del Campo"},
    {idRegion: "15", nombreRegion: "Región de Magallanes y de la Antártica Chilena"},
    {idRegion: "16", nombreRegion: "Región Metropolitana de Santiago"},
];

const comuna = [
    {idComuna: "1", nombreComuna: "Arica"},
    {idComuna: "2", nombreComuna: "Camarones"},
    {idComuna: "3", nombreComuna: "Iquique"},
    {idComuna: "4", nombreComuna: "Camiña"},
    {idComuna: "5", nombreComuna: "Cerrillos"},
    {idComuna: "6", nombreComuna: "Cerro Navia"},
    {idComuna: "7", nombreComuna: "Conchalí"},
    {idComuna: "8", nombreComuna: "El Bosque"},
    {idComuna: "9", nombreComuna: "Estación Central"},
    {idComuna: "10", nombreComuna: "Huechuraba"},
    {idComuna: "11", nombreComuna: "Peñalolén"},
    {idComuna: "12", nombreComuna: "Providencia"},
    {idComuna: "13", nombreComuna: "Macul"},
    {idComuna: "14", nombreComuna: "Maipú"},
    {idComuna: "15", nombreComuna: "Ñuñoa"},
    {idComuna: "16", nombreComuna: "Santiago"},
    {idComuna: "17", nombreComuna: "Puente Alto"},
    {idComuna: "18", nombreComuna: "Pirque"},
    {idComuna: "19", nombreComuna: "Colina"},
    {idComuna: "20", nombreComuna: "Renca"},
];

const centroMedicos = [
    {idCentroMedico: "1", nombreCentroMedico: "Centro Médico y Dental InMed Alameda"},
    {idCentroMedico: "2", nombreCentroMedico: "Centro Médico y Dental InMed Alto las Condes"},
    {idCentroMedico: "3", nombreCentroMedico: "Laboratorio InMed Apoquindo"},
    {idCentroMedico: "4", nombreCentroMedico: "Centro Médico y Dental InMed Bandera"},
    {idCentroMedico: "5", nombreCentroMedico: "Centro Médico y Dental InMed Barcelona"},
    {idCentroMedico: "6", nombreCentroMedico: "Centro Médico y Dental InMed Estación Central"},
    {idCentroMedico: "7", nombreCentroMedico: "Centro Médico y Dental InMed Norte"},
    {idCentroMedico: "8", nombreCentroMedico: "Centro Médico y Dental InMed Plaza Sur"},
    {idCentroMedico: "9", nombreCentroMedico: "Centro Médico y Dental InMed San Miguel"},
    {idCentroMedico: "10", nombreCentroMedico: "Centro Médico y Dental InMed Viña del Mar"},

];
// - Fin de constantes -

// - Inicio de (document).ready() -
$(document).ready(function() {
    esconderComponenentesHTML();

    $('#reservaMedicaKinesiolgia').click(function () {
        crearSelect2();
    });

    $('#clienteDatos').on("change", function() {
        cargarDatosCliente();
    });

    // - Select2 -
    inicializarSelect2Clientes();
    inicializarSelect2Prevision();
    inicializarSelect2Especilidades();
    inicializarSelect2Regiones();
    inicializarSelect2Comunas();
    inicializarSelect2CentrosMedicos();
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

function inicializarSelect2Clientes(){
    // Iteramos el objeto global de servicio para agregar el campo id que requiere el control
    var datos = $.map(clientes, function (obj) {
        obj.id = obj.idCliente;
        obj.text = obj.rut + ' - ' + obj.nombreCliente + ' ' + obj.apellidos ;
        return obj;
    });

    $('#clienteDatos').select2(
        {
            placeholder: {id: "-1", text: "Ingrese nombre o rut del paciente"},
            data: datos,
            allowClear: true
        }
    );
};

function inicializarSelect2Especilidades(){
    // Iteramos el objeto global de servicio para agregar el campo id que requiere el control
    var datos = $.map(especialidades, function (obj) {
        obj.id = obj.idEspecialidad;
        obj.text = obj.nombreEspecialidad;
        return obj;
    });

    $('#especialidades').select2(
        {
            placeholder: {id: "-1", text: "Seleccione una opción"},
            data: datos,
            allowClear: true
        }
    );
};

function inicializarSelect2Regiones(){
    // Iteramos el objeto global de servicio para agregar el campo id que requiere el control
    var datos = $.map(regiones, function (obj) {
        obj.id = obj.idRegion;
        obj.text = obj.idRegion + ' - ' + obj.nombreRegion;
        return obj;
    });

    $('#region').select2(
        {
            placeholder: {id: "-1", text: "Seleccione una opción"},
            data: datos,
            allowClear: true
        }
    );
};

function inicializarSelect2Comunas(){
    // Iteramos el objeto global de servicio para agregar el campo id que requiere el control
    var datos = $.map(comuna, function (obj) {
        obj.id = obj.idComuna;
        obj.text = obj.nombreComuna;
        return obj;
    });

    $('#comuna').select2(
        {
            placeholder: {id: "-1", text: "Seleccione una opción"},
            data: datos,
            allowClear: true
        }
    );
};

function inicializarSelect2CentrosMedicos(){
    // Iteramos el objeto global de servicio para agregar el campo id que requiere el control
    var datos = $.map(centroMedicos, function (obj) {
        obj.id = obj.idCentroMedico;
        obj.text = obj.nombreCentroMedico;
        return obj;
    });

    $('#centroMedico').select2(
        {
            placeholder: {id: "-1", text: "Seleccione una opción"},
            data: datos,
            allowClear: true
        }
    );
};
function esconderComponenentesHTML(){
    $('#divNombrePaciente').hide();
    $('#divApellidosPaciente').hide();
    $('#divEmailPaciente').hide() 
    $('#divTelefonoCelular').hide()
}

function mostrarDatosCliente(){
    $('#divNombrePaciente').show(500);
    $('#divApellidosPaciente').show(500);
    $('#divEmailPaciente').show(500);
    $('#divTelefonoCelular').show(500);
}

// function crearSelect2(){
//     let valor = $("#reservaMedicaKinesiolgia").text();
//     if(valor = "Más información"){
//         $('#contenidoFormulario').show(500);
//         $("#crearPrevision").empty();

//         $("#crearPrevision").append(
//             '<label>Previsión</label><select class="form-control" id="tipoPrevision"><option value="-1" style="weight: 100px;"></option></select>'
//         );
//         inicializarSelect2Prevision();
//     } 
// }

function cargarDatosCliente(){
    let valor = $('#clienteDatos').val();

    if(valor === "1"){
        $('#nombrePaciente').val(clientes[0].nombreCliente);
        $('#apellidosPaciente').val(clientes[0].apellidos);
        $('#emailPaciente').val(clientes[0].correo);
        $('#telefonoCelular').val(clientes[0].telefono);
    } else if(valor === "2"){
        $('#nombrePaciente').val(clientes[1].nombreCliente);
        $('#apellidosPaciente').val(clientes[1].apellidos);
        $('#emailPaciente').val(clientes[1].correo);
        $('#telefonoCelular').val(clientes[1].telefono);
    }  else if(valor === "2"){
        $('#nombrePaciente').val(clientes[2].nombreCliente);
        $('#apellidosPaciente').val(clientes[2].apellidos);
        $('#emailPaciente').val(clientes[2].correo);
        $('#telefonoCelular').val(clientes[2].telefono);
    }
    
    mostrarDatosCliente();
}

// function iniciaMap(){
//     var coord = {lat:,lng:};
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 10,
//         center: coord
//     });
// }

function initMap(){

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -33.4479619,
            lng: -70.6413371
        },
        zoom: 8
    });
}
// - Funciones estaticas -
// - [Espacio Reservado]
// - Fin de funciones estaticas -