/**
 * Save the Date - Yulia & Marcus
 * Countdown Timer Script + Traducciones
 */

// ===== TRADUCCIONES =====
const translations = {
    es: {
        "pretitle": "Tenemos el honor de invitarte a",
        "subtitle": "Nuestro día más especial",
        "countdown": "Cuenta regresiva",
        "days": "Días",
        "hours": "Horas",
        "minutes": "Minutos",
        "seconds": "Segundos",
        "date": "4 de Septiembre de 2027",
        "ceremony.title": "CEREMONIA",
        "celebration.title": "CELEBRACIÓN",
        "address": "Dirección:",
        "info": "ℹ️ Más información vendrá en la invitación formal",
        "love": "Con amor desde Alicante y Galicia 🌊🌿",
        "bigday": "¡Es el gran día! 💍",
        "page.title": "¡Save the Date! | Yulia & Marcus"
    },
    en: {
        "pretitle": "We have the honor of inviting you to",
        "subtitle": "Our most special day",
        "countdown": "Countdown",
        "days": "Days",
        "hours": "Hours",
        "minutes": "Minutes",
        "seconds": "Seconds",
        "date": "September 4th, 2027",
        "ceremony.title": "CEREMONY",
        "celebration.title": "CELEBRATION",
        "address": "Address:",
        "info": "ℹ️ More information will follow with the formal invitation",
        "love": "With love from Alicante and Galicia 🌊🌿",
        "bigday": "It's the big day! 💍",
        "page.title": "Save the Date! | Yulia & Marcus"
    },
    de: {
        "pretitle": "Wir haben die Ehre, dich einzuladen zur Hochzeit von",
        "subtitle": "Unser ganz besonderer Tag",
        "countdown": "Countdown",
        "days": "Tage",
        "hours": "Stunden",
        "minutes": "Minuten",
        "seconds": "Sekunden",
        "date": "4. September 2027",
        "ceremony.title": "TRAUUNG",
        "celebration.title": "FEIER",
        "address": "Adresse:",
        "info": "ℹ️ Weitere Informationen folgen mit der offiziellen Einladung",
        "love": "Mit Liebe aus Alicante und Galicien 🌊🌿",
        "bigday": "Es ist der große Tag! 💍",
        "page.title": "Save the Date! | Yulia & Marcus"
    }
};

// Idioma actual (accesible desde el countdown)
let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;

    // Cambiar todos los textos marcados
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Cambiar idioma del documento y título de la pestaña
    document.documentElement.lang = lang;
    document.title = translations[lang]["page.title"];

    // Guardar la elección
    localStorage.setItem('lang', lang);

    // Marcar el botón activo
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function initLanguage() {
    // Eventos de los botones
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Usar idioma guardado, o detectar el del navegador
    const savedLang = localStorage.getItem('lang');
    const browserLang = navigator.language.slice(0, 2);
    const initialLang = savedLang || (['es', 'en', 'de'].includes(browserLang) ? browserLang : 'es');
    setLanguage(initialLang);
}

// ===== COUNTDOWN =====
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
            label.removeAttribute('data-i18n'); // evita que la traducción lo pise
            label.textContent = translations[currentLang]["bigday"];

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
        initLanguage();
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Iniciar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
