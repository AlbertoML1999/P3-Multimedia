
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postal-form');
    const resultado = document.getElementById('resultado-postal');
    const vistaPrevia = document.getElementById('vista-previa-postal');
    const imagenPostal = document.getElementById('imagen-postal');
    const textoPostal = document.getElementById('texto-postal');

    if (!form || !resultado || !vistaPrevia || !imagenPostal || !textoPostal) {
        return;
    }

    const postales = {
        duomo: {
            src: 'img/templo_voltiano.jpg',
            alt: 'Monumento histórico de Como seleccionado como postal',
            texto: 'Postal seleccionada: Templo Voltiano'
        },
        lago: {
            src: 'img/lago_di_como.jpg',
            alt: 'Vista del Lago de Como rodeado de montañas',
            texto: 'Postal seleccionada: Lago de Como'
        },
        estadio:{
            src: 'img/estadio_como.jpeg',
            alt: 'Estadio Giuseppe Sinigaglia, hogar del equipo de fútbol local',
            texto: 'Postal seleccionada: Estadio Giuseppe Sinigaglia'
        },
        villa: {
            src: 'img/villa_olmo.jpg',
            alt: 'Villa Olmo con jardines frente al Lago de Como',
            texto: 'Postal seleccionada: Villa Olmo'
        }
    };

    form.querySelectorAll('input[name="postal"]').forEach(function(opcion) {
        opcion.addEventListener('change', function() {
            const postal = postales[opcion.value];

            imagenPostal.src = postal.src;
            imagenPostal.alt = postal.alt;
            imagenPostal.hidden = false;
            textoPostal.textContent = postal.texto;
            vistaPrevia.hidden = false;
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.classList.add('form-validado');

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        resultado.className = 'form-message success';
        resultado.textContent = document.getElementById('nombre').value + ' ha enviado una postal a ' + document.getElementById('email').value + ', a fecha ' + document.getElementById('fecha').value + ' con la ' + textoPostal.textContent + ' y el siguiente mensaje: ' + document.getElementById('mensaje').value + '.';
        form.reset();
        form.classList.remove('form-validado');
        vistaPrevia.hidden = true;
        imagenPostal.hidden = true;
        imagenPostal.src = 'img/lago_di_como.jpg';
        imagenPostal.alt = 'Imagen previa de la postal';
        textoPostal.textContent = '';
    });
});
