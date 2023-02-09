$(document).ready(function () {
    //Función del botón agregar representante
    $("#btnRegistrar").click(function () {
        $("#modalRegistrarLiga").modal("show");
    });

});


    function muestra_ActCir(id) {
        if (document.getElementById) { //se obtiene el id
            var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
        }
    }
    window.onload = function () {/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
        muestra_ActCir('contenidoAC');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

function cerrarac() {
    document.getElementById("contenidoAC").style.display = "none";
}


    function muestra_PasCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasCir('contenidoPC');
}

function cerrarpc() {
    document.getElementById("contenidoPC").style.display = "none";
}



    function muestra_ActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_ActNoCir('contenidoANC');
    }

function cerraranc() {
    document.getElementById("contenidoANC").style.display = "none";
}




    function muestra_PasNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasNoCir('contenidoPNC');
}


function cerrarpnc() {
    document.getElementById("contenidoPNC").style.display = "none";
}


    function muestra_oActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_oActNoCir('contenidoOANC');
}


function cerraroanc() {
    document.getElementById("contenidoOANC").style.display = "none";
}


        function muestra_P(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_P('contenidoP');
}

function cerrarp() {
    document.getElementById("contenidoP").style.display = "none";
}





