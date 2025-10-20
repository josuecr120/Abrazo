const mensajes = [
  "yo creo en usted. Usted Puede con todo mi pequeña.",
  "Sofita estoy muy orgulloso de lo que ha logrado .",
  "lo está haciendo muy bien, aunque piense que no mi pequeña.",
  "confíe en usted. Yo confío el doble.",
  "Sofita, respire y levante la carita. Aquí estare a su lado siempre.",
  "gracias por existir mi pequeña. Usted me ilumina la vida.",
  "Sofita, si se siente mal, tómeme la mano. No estará sola mi pequeña.",
  "La amo mucho y siempre podra contar conmigo siempre💜"
];

let indiceActual = 0;

function mostrarNuevoMensaje() {
    const elementoMensaje = document.getElementById('message');
    
    // Efecto de desvanecimiento
    elementoMensaje.style.opacity = '0';
    
    setTimeout(() => {
        elementoMensaje.textContent = mensajes[indiceActual];
        elementoMensaje.style.opacity = '1';
        indiceActual = (indiceActual + 1) % mensajes.length;
    }, 300);
}

// Mostrar el primer mensaje al cargar
window.addEventListener('load', () => {
    mostrarNuevoMensaje();
    crearEstrellasAdicionales();
});

// Crear estrellas adicionales dinámicamente
function crearEstrellasAdicionales() {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Agregar confeti al hacer clic en el corazón
document.querySelector('.heart').addEventListener('click', function() {
    confetti();
});

// Función simple de confeti (opcional)
function confetti() {
    const heart = document.querySelector('.heart');
    heart.style.transform = 'scale(1.2)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 200);
    
    // Crear emoji flotante
    const emoji = document.createElement('div');
    emoji.textContent = '💜';
    emoji.style.position = 'fixed';
    emoji.style.fontSize = '30px';
    emoji.style.top = '50%';
    emoji.style.left = '50%';
    emoji.style.animation = 'floatUp 2s ease-out';
    emoji.style.pointerEvents = 'none';
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 2000);
}

// Añadir animación CSS para el emoji flotante
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(-50%);
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) translateX(-50%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
// corazones flotantes 💕
window.addEventListener("load", () => {
  const floatingContainer = document.querySelector(".floating-hearts");
  for (let i = 0; i < 25; i++) {
    const h = document.createElement("div");
    h.classList.add("small-heart");
    h.style.left = Math.random() * 100 + "%";
    h.style.animationDuration = 5 + Math.random() * 5 + "s";
    h.style.animationDelay = Math.random() * 5 + "s";
    h.style.opacity = Math.random();
    floatingContainer.appendChild(h);
  }
});