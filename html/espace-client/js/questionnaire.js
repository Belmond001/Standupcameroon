document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons "-" et "+"
    const minusButtons = document.querySelectorAll('.points button:first-child');
    const plusButtons = document.querySelectorAll('.points button:last-child');

    // Fonction pour incrémenter ou décrémenter la valeur
    function updateValue(input, increment) {
        let currentValue = parseInt(input.value, 10);

        // Vérifier si l'entrée est un nombre
        if (isNaN(currentValue)) {
            currentValue = 0;
        }

        currentValue += increment;

        // Empêcher la valeur de descendre en dessous de 0
        if (currentValue < 0) {
            currentValue = 0;
        }

        input.value = currentValue;

        // Mettre à jour le total max
        updateMaxPoints();
    }

    // Attacher les événements aux boutons "-"
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            updateValue(input, -1);
        });
    });

    // Attacher les événements aux boutons "+"
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            updateValue(input, 1);
        });
    });

    // Fonction pour mettre à jour le total max de points
    function updateMaxPoints() {
        const inputs = document.querySelectorAll('.points input');
        let total = 0;

        inputs.forEach(input => {
            total += parseInt(input.value, 10);
        });

        document.querySelector('.max-points').textContent = `Max: ${total}`;
    }

    // Initialiser le total max de points
    updateMaxPoints();
});
