/**
 * obtenerMedicos()
 * Carga data de los médicos que vienen de medicos.json
 */
function obtenerMedicos() {
    console.log("[reservas][obtenerMedicos]-- Cargando los datos de los médicos...");

    // ES6 fetch para importar
    fetch('./src/js/medicos.json')
        .then(response => {
            //debugger;
            if (!response.ok) {
                throw new Error(`[reservas][obtenerMedicos]--Error al cargar el archivo JSON: ${response.statusText}`);
            }
            return response.json();
        })
        .then(doctores => {
            console.log("[reservas][obtenerMedicos]--Datos de médicos cargados exitosamente:", doctores);
            mostrarMedicos(doctores);
        })
        .catch(error => {
            //debugger;
            console.error("[reservas][obtenerMedicos]--Error al cargar los doctores:", error);
        });
}

function mostrarMedicos(doctores) {
    const listaDoctores = document.getElementById("listaDoctores");
    listaDoctores.innerHTML = ''; //Limpia

    // Mock paginacion
    const itemsPorPagina = 3; 
    let paginaActual = 1; 

    function mostrarPagina(pagina) {
        listaDoctores.innerHTML = '';

        const inicio = (pagina - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;

        doctores
            .filter(doctor => (doctor.anoEspecialidad - doctor.anoEgreso) > 5) 
            .slice(inicio, fin) 
            .forEach(doctor => {
                const li = document.createElement("li");
                li.classList.add("list-group-item", "col-12", "col-md-12", "d-flex", "flex-column", "align-items-start"); // Columna de tamaño col-3 y alineación vertical
                li.innerHTML = `
                    <h5>${doctor.nombre}</h5>
                    <p>Especialidad: ${doctor.especialidad}</p>
                    <p>Años de experiencia: ${doctor.anoEspecialidad - doctor.anoEgreso}</p>
                `;
                listaDoctores.appendChild(li);
            });
    }

    mostrarPagina(paginaActual);

    const controlPaginacion = document.getElementById("paginacion");
    const totalPaginas = Math.ceil(doctores.length / itemsPorPagina);

    controlPaginacion.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement("button");
        boton.classList.add("btn", "btn-primary", "mx-1");
        boton.innerText = i;
        boton.addEventListener('click', () => {
            paginaActual = i;
            mostrarPagina(paginaActual);
        });
        controlPaginacion.appendChild(boton);
    }
}


/**
 * 
 * @param {*} nombre 
 * @param {*} email 
 * @param {*} telefono 
 * @returns bool
 */
function validarDatosUsuario(nombre, email, telefono) {
    //debugger;
    if (!nombre || !email || !telefono) {
        alert(`Ingrese datos`);
        return false;
    }

    if (typeof email === 'string' && email.includes('@')) {
        console.log(`[reservas][validarDatosUsuario]-- Email ${email} válido`);
    } else {
        alert(`Email ${email} inválido`);
        return false;
    }

    if (typeof telefono === 'string' && telefono.length <= 10) {
        console.log(`[reservas][validarDatosUsuario]-- Telefono ${telefono} válido`);
    } else {
        alert(`Telefono ${telefono} inválido`);
        return false;
    }

    return true;
}

/**
 * solicitarDatosUsuario()
 * sinparams
 * 
 */
function solicitarDatosUsuario() {
    try {
        let nombre = prompt("¿Cuál es tu nombre?");
        let email = prompt("¿Cuál es tu email?");
        let telefono = prompt("¿Cuál es tu teléfono?");
        let medico = prompt("¿Con qué médico deseas agendar tu cita?");  // Nuevo prompt para el nombre del médico
        
        if (validarDatosUsuario(nombre, email, telefono)) {
            console.log(`[reservas][solicitarDatosUsuario]-- Nueva reserva: ${nombre}, ${email}, ${telefono}, Médico: ${medico}`);
        } else {
            throw new Error("Los datos ingresados no son válidos.");
        }
    } catch (error) {
        
        console.error("[reservas][solicitarDatosUsuario][error]", error.message);

        alert("Ocurrió un error al procesar los datos. Por favor, intenta de nuevo.");
    } finally {
        console.log("[reservas][solicitarDatosUsuario]-- Proceso de solicitud de datos finalizado.");
    }
}


/**
 * manejarErrores() sin uso
 */

function manejarErrores() {
    try {
        console.log(noExistenteVariable); // Esto generará un error
    } catch (error) {
        console.error("Error detectado:", error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    obtenerMedicos(); 
    const btnReservar = document.getElementById('btnReservar');
    if (btnReservar) {
        btnReservar.addEventListener('click', solicitarDatosUsuario);
    }
});
