
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postal-form');
    const resultado = document.getElementById('resultado-postal');

    if (!form || !resultado) {
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        resultado.className = 'form-message success';
        resultado.textContent = 'Postal enviada correctamente.';
        form.reset();
    });
});
