/**
 * Save the Date - Yulia & Marcus
 * Countdown Timer Script
 */

(function() {
    'use strict';

    // Fecha de la boda: 4 de septiembre de 2027
    const weddingDate = new Date('2027-09-04T00:00:00').getTime();

    // Elementos del DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Formatear números con ceros iniciales
    function formatNumber(num, digits = 2) {
        return num.toString().padStart(digits, '0');
    }

    // Añadir animación de actualización
    function animateUpdate(element) {
        element.classList.add('updating');
        setTimeout(() => {
            element.classList.remove('updating');
        }, 300);
    }

    // Actualizar el countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Si la cuenta regresiva ha terminado
        if (distance < 0) {
            daysEl.textContent = '000';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            
            const countdownSection = document.querySelector('.countdown-section');
            const label = countdownSection.querySelector('.countdown-label');
            label.textContent = '¡Es el gran día! 💍';
            
            return;
        }

        // Calcular tiempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar valores con animación
        const newDays = formatNumber(days, 3);
        const newHours = formatNumber(hours);
        const newMinutes = formatNumber(minutes);
        const newSeconds = formatNumber(seconds);

        if (daysEl.textContent !== newDays) {
            daysEl.textContent = newDays;
            animateUpdate(daysEl);
        }
        if (hoursEl.textContent !== newHours) {
            hoursEl.textContent = newHours;
            animateUpdate(hoursEl);
        }
        if (minutesEl.textContent !== newMinutes) {
            minutesEl.textContent = newMinutes;
            animateUpdate(minutesEl);
        }
        if (secondsEl.textContent !== newSeconds) {
            secondsEl.textContent = newSeconds;
            animateUpdate(secondsEl);
        }
    }

    // Inicializar el countdown
    function init() {
        // Actualización inmediata
        updateCountdown();
        
        // Actualizar cada segundo
        setInterval(updateCountdown, 1000);
    }

    // Iniciar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
