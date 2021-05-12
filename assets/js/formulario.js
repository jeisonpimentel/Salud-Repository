// - Constantes -
const prevision = [ 

    {idPrevision: "1", nombrePrevision: 'Particular'},
    {idPrevision: "2", nombrePrevision: 'Fonasa'},
    {idPrevision: "3", nombrePrevision: 'Banmédica'},
    {idPrevision: "4", nombrePrevision: 'IChuquicamata'},
    {idPrevision: "5", nombrePrevision: 'Colmena Golden Cross'},
    {idPrevision: "6", nombrePrevision: 'Consalud'},
    {idPrevision: "7", nombrePrevision: 'Cruz Blanca'},
    {idPrevision: "8", nombrePrevision: 'Cruz del Norte'},
    {idPrevision: "9", nombrePrevision: 'Nueva Masvida'},
    {idPrevision: "10", nombrePrevision: 'Fundación'},
    {idPrevision: "11", nombrePrevision: 'Fusat'},
    {idPrevision: "12", nombrePrevision: 'Río Blanco'},
    {idPrevision: "13", nombrePrevision: 'San Lorenzo'},
    {idPrevision: "14", nombrePrevision: 'Vida Tres'},
]

const clientes = [ 
    {idCliente: "1", rut: '26.051.938-9', nombreCliente: 'Jeison Luis', apellidos: 'Pimentel Alvis', correo: 'jeisonalvis10@gmail.com', telefono: '+56945354321'},
    {idCliente: "2", rut: '23.051.321-9', nombreCliente: 'Virginia Del Carmen', apellidos: 'Casique Casique', correo: 'virginia@gmail.com', telefono: '+5694535111'},
    {idCliente: "3", rut: '22.051.424-9', nombreCliente: 'Jennifer Josefina', apellidos: 'Herrera Angulo', correo: 'jennifer@gmail.com', telefono: '+56945354321'},
    {idCliente: "4", rut: '23.011.422-K', nombreCliente: 'Liah Cataleya', apellidos: 'Pimentel Casique', correo: 'Liah@gmail.com', telefono: '+56943354321'},
    {idCliente: "5", rut: '23.222.334-3', nombreCliente: 'Miriam Josefina', apellidos: 'Diaz Angulo', correo: 'Miriam@gmail.com', telefono: '+56945354321'},
    {idCliente: "6", rut: '24.541.753-9', nombreCliente: 'Jessica Josefina', apellidos: 'Perez Angulo', correo: 'Jessica@gmail.com', telefono: '+56945354321'},
    {idCliente: "7", rut: '26.031.325-9', nombreCliente: 'Mayira', apellidos: 'Herrera Angulo', correo: 'Mayira@gmail.com', telefono: '+56945354321'},
    {idCliente: "8", rut: '24.051.424-9', nombreCliente: 'Cindy', apellidos: 'Marrero Angulo', correo: 'Cindy@gmail.com', telefono: '+56945354321'},
    {idCliente: "9", rut: '24.228.424-9', nombreCliente: 'Isolina', apellidos: 'Rios Angulo', correo: 'Isolina@gmail.com', telefono: '+56945354321'},
    {idCliente: "10", rut: '23.998.345-9', nombreCliente: 'Maite', apellidos: 'Alvis Angulo', correo: 'Maite@gmail.com', telefono: '+56945354321'},
    {idCliente: "11", rut: '21.213.111-9', nombreCliente: 'Daniela', apellidos: 'Rodriguez Angulo', correo: 'Daniela@gmail.com', telefono: '+56945354321'},
    {idCliente: "12", rut: '19.357.222-9', nombreCliente: 'Ana', apellidos: 'Rojas Angulo', correo: 'Ana@gmail.com', telefono: '+56945354321'},
];

const especialidades = [
    {idEspecialidad: "1", nombreEspecialidad: 'Medicina General', precio: 30000},
    {idEspecialidad: "2", nombreEspecialidad: 'Pediatria', precio: 22000},
    {idEspecialidad: "3", nombreEspecialidad: 'Kinesiologia', precio: 35000},
    {idEspecialidad: "4", nombreEspecialidad: 'Cardiología', precio: 40000},
    {idEspecialidad: "5", nombreEspecialidad: 'Ginecologia', precio: 30000},
    {idEspecialidad: "6", nombreEspecialidad: 'Odontologia', precio: 23000},
    {idEspecialidad: "7", nombreEspecialidad: 'Gastroenterologia', precio: 35000},
    {idEspecialidad: "8", nombreEspecialidad: 'Endocrinologia', precio: 28000},
    {idEspecialidad: "9", nombreEspecialidad: 'Dermatologia', precio: 21000},
    {idEspecialidad: "10", nombreEspecialidad: 'Psicologia', precio: 40000},
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

const tipoMoneda = [ 
    {id: "1", moneda: "Dolar"},
    {id: "2", moneda: "Euro"},
    {id: "3", moneda: "UF"},
    {id: "4", moneda: "UTM"},
]

let parametro     = '';
let valorMoneda   = 0;
let montoConsulta = 0
// - Fin de constantes -

// - Inicio de (document).ready() -
$(document).ready(function() {
    esconderComponenentesHTML();
    inicializarSelectMoneda();

    $('#datepicker').change(function(){
        mostrarFormaDePago();

    });
    
    $('#formaPago').change(function(){
        parametro   = parametroParaApiRest();
        apiIndicadorValorMonedas(parametro);
        montoPagarPorDivisa();
    });

    $('#reservaMedicaKinesiolgia').click(function () {
        crearSelect2();
    });

    $('#clienteDatos').on("change", function() {
        cargarDatosCliente();
    });

    $('#btnLimpiarFormulario').click(function(){
        limpiarFormulario();
    });

    $('#btnReservarHora').click(function(){
        reservaHora();
    });

    // - Select2 -
    inicializarSelect2Clientes();
    inicializarSelect2Prevision();
    inicializarSelect2Especilidades();
    inicializarSelect2Regiones();
    inicializarSelect2Comunas();
    inicializarSelect2CentrosMedicos();
    //inicializarSelect2Moneda();
    // - Fin de Select2 -

});
// - Fin de (document).ready() -

// - [Aquí realizaremos todos los metodos para crear los select2]
const inicializarSelect2Prevision = () => {
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

const inicializarSelect2Clientes = () => {
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

const inicializarSelect2Especilidades = () => {
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

const inicializarSelect2Regiones = () => {
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

const inicializarSelect2Comunas = () =>{
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

const inicializarSelect2CentrosMedicos = () =>{
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

const inicializarSelectMoneda = () =>{

 	let newOption;
	
     tipoMoneda.forEach(data => {
		newOption = new Option( `${data.moneda}`, parseInt(data.id), false,  false);
        
		$('#formaPago').append(newOption);   
	});
};

const esconderComponenentesHTML = () =>{
    $('#divNombrePaciente').hide();
    $('#divApellidosPaciente').hide();
    $('#divEmailPaciente').hide() 
    $('#divTelefonoCelular').hide()
    $('#divTipoMoneda').hide();
    $('#montoTotalPagar').hide();
    $('#divPrecioConsultaDivisa').hide();
    $('#divMontoCancelar').hide();
}

const mostrarDatosCliente = () =>{
    $('#divNombrePaciente').show(500);
    $('#divApellidosPaciente').show(500);
    $('#divEmailPaciente').show(500);
    $('#divTelefonoCelular').show(500);
}

const cargarDatosCliente = () =>{
    let valor         = $('#clienteDatos').val();
    if(valor > 0){
        let cargaClientes = clientes.find(cliente => cliente.idCliente == valor);

        $('#nombrePaciente').val(cargaClientes.nombreCliente);
        $('#apellidosPaciente').val(cargaClientes.apellidos);
        $('#emailPaciente').val(cargaClientes.correo);
        $('#telefonoCelular').val(cargaClientes.telefono);
        
        mostrarDatosCliente();
    }
}

const iniciarMap = () =>{
    var coord = {lat: -33.448405, lng: -70.641088 };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

const limpiarFormulario = () => {
    esconderComponenentesHTML();
    $('#clienteDatos').select2("val", "-1");
    $('#tipoPrevision').select2("val", "-1");
    $('#especialidades').select2("val", "-1");
    $('#region').select2("val", "-1");
    $('#comuna').select2("val", "-1");
    $('#centroMedico').select2("val", "-1");
    $('#datepicker').val("");
    $('#precioConsulta').val("");
    $('#formaPago').val("-1");
    Swal.fire('Alerta', 'Formulario limpiado correctamente', 'warning');
}

const reservaHora = () => {
    Swal.fire('Reserva realizada', 'Se ha realizado la reserva satisfactoriamente', 'success');
}

const apiIndicadorValorMonedas = ( parametro ) => {
    $.ajax({
        type:"GET",
        url: `https://mindicador.cl/api/${parametro}`,
        success:function(response) {
            //console.log(response.serie[0].valor);
            valorMoneda = Math.round(response.serie[0].valor);
            console.log('Valor moneda: ', valorMoneda);	
        }
    });
}

const mostrarFormaDePago = () => {
    $('#divTipoMoneda').show(500);
    $('#montoTotalPagar').show(500);

    montoConsulta = precioConsulta();
    $('#precioConsulta').val('$' + montoConsulta);
}

const montoPagarPorDivisa = () => {
    let montoPagar = montoConsulta / valorMoneda;
    $('#precioConsultaDivisa').val('$' + montoPagar);
}

const parametroParaApiRest = () => {
    let valor     = $('#formaPago').val();
    let parametro = '';

    if(valor == 1){
        parametro = 'dolar';
    } else if(valor == 2 ){
        parametro = 'euro';
    } else if(valor == 3 ){
        parametro = 'uf';
    } else if(valor == 4 ){
        parametro = 'utm';
    }

    if(valor != -1){
        $('#divPrecioConsultaDivisa').show(500);
        $('#divMontoCancelar').show(500);
    }

    return parametro;
}

const precioConsulta = () => {

    let valorEspecialidad = $('#especialidades').val();
    let valorPrevision    = $('#tipoPrevision').val();
    let precioConsulta    = '';

    if(valorEspecialidad > 0 && valorPrevision > 0){
        let obtenerObjetoEspecialidad = especialidades.find(especialidad => especialidad.id == valorEspecialidad);

        if(valorPrevision == 1){
            precioConsulta = obtenerObjetoEspecialidad.precio;
        } else if(valorPrevision == 2){
            precioConsulta = obtenerObjetoEspecialidad.precio * 0.80;
        } else{
            precioConsulta = obtenerObjetoEspecialidad.precio * 0.55;
        }
    }

    return precioConsulta;
}