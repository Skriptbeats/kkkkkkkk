// ============================================
// 🎵 CONTROLE DE MÚSICA
// ============================================
let currentSong = null;

function toggleSong(audioId, btn) {
    const audio = document.getElementById(audioId);
    
    // Se houver outra música tocando, para ela
    if (currentSong && currentSong !== audio) {
        currentSong.pause();
        currentSong.currentTime = 0;
        // Resetar todos os botões
        document.querySelectorAll('.play-btn').forEach(button => {
            button.textContent = '▶️ Tocar';
        });
    }
    
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸️ Pausar';
        currentSong = audio;
    } else {
        audio.pause();
        btn.textContent = '▶️ Tocar';
        currentSong = null;
    }
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const controlBtn = document.getElementById('musicControl');
    
    if (music.paused) {
        music.play();
        controlBtn.textContent = '🔊';
    } else {
        music.pause();
        controlBtn.textContent = '🎵';
    }
}

// ============================================
// ⏰ CONTAGEM REGRESSIVA
// ============================================
function startCountdown() {
    // Data do evento: Sexta-feira, 6 de fevereiro de 2026 às 18:00
    const eventDate = new Date('2026-02-06T18:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // Elementos do DOM
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (distance < 0) {
            // Se a data já passou, mostrar conteúdo principal
            showMainContent();
            return;
        }
        
        // Calcular tempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Atualizar DOM com formatação
        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
        
        // Adicionar animation class para efeito visual
        [daysEl, hoursEl, minutesEl, secondsEl].forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = 'pulse 0.5s ease';
        });
    }
    
    // Atualizar a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Mostrar conteúdo principal após a contagem ou imediatamente
function showMainContent() {
    const overlay = document.getElementById('countdownOverlay');
    const mainContent = document.getElementById('mainContent');
    
    if (overlay && mainContent) {
        // Fade out do overlay
        overlay.style.transition = 'opacity 1s ease';
        overlay.style.opacity = '0';
        
        // Após a transição, mostrar o conteúdo principal
        setTimeout(() => {
            overlay.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Ativar animações de scroll
            setupScrollAnimations();
            
            // Criar corações flutuantes
            createFloatingHearts();
        }, 1000);
    }
}

// ============================================
// 💕 CRIAR Corações Flutuantes
// ============================================
function createFloatingHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '❤️'];
    
    // Cria 30 corações
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Posição aleatória
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        
        heartsContainer.appendChild(heart);
    }
}

// Rolagem suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mostrar resposta positiva
function showYesResponse() {
    const response = document.getElementById('yesResponse');
    const btnYes = document.querySelector('.btn-yes');
    
    // Ocultar o botão
    btnYes.style.display = 'none';
    
    // Mostrar resposta com animação
    response.style.display = 'block';
    
    // Criar mais corações para celebração
    celebrateWithHearts();
}

// Mostrar resposta "talvez"
function showMaybeResponse() {
    const response = document.getElementById('maybeResponse');
    const btnMaybe = document.querySelector('.btn-maybe');
    
    // Ocultar o botão
    btnMaybe.style.display = 'none';
    
    // Mostrar resposta com animação
    response.style.display = 'block';
}

// Celebração com corações
function celebrateWithHearts() {
    const celebrationContainer = document.createElement('div');
    celebrationContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
        overflow: hidden;
    `;
    document.body.appendChild(celebrationContainer);
    
    const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '❤️', '🎉', '✨'];
    
    // Cria 100 corações para celebração
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: 100%;
                font-size: ${Math.random() * 30 + 20}px;
                animation: celebrateFloat 3s ease-out forwards;
                pointer-events: none;
            `;
            celebrationContainer.appendChild(heart);
        }, i * 50);
    }
    
    // Remove o container após a animação
    setTimeout(() => {
        celebrationContainer.remove();
    }, 6000);
}

// Adiciona animação CSS para a celebração
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrateFloat {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(${Math.random() * 360}deg) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Efeito de máquina de escrever para a carta
function typewriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Intersection Observer para animações ao rolar
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa todos os cards de memória
    document.querySelectorAll('.memory-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
    
    // Observa a carta
    const letter = document.querySelector('.letter');
    if (letter) {
        letter.style.opacity = '0';
        letter.style.transform = 'scale(0.9)';
        letter.style.transition = 'all 0.8s ease-out';
        observer.observe(letter);
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar contagem regressiva
    startCountdown();
    
    // Criar corações flutuantes (após mostrar conteúdo)
    // Os corações serão criados pela função showMainContent() quando a contagem terminar
    
    // Configurar animações de scroll
    setupScrollAnimations();
    
    // Adicionar efeito hover nas fotos
    document.querySelectorAll('.photo-placeholder').forEach(photo => {
        photo.addEventListener('click', () => {
            alert('📸 Clique aqui para adicionar sua foto!\n\nEdite o arquivo HTML e substitua "Sua Foto 1/2/3" pela sua imagem.');
        });
    });
    
    console.log('💕 Site carregado com sucesso!');
    console.log('📝 Para personalizar:');
    console.log('1. Substitua os textos na carta com suas palavras');
    console.log('2. Adicione suas fotos no lugar dos placeholders');
    console.log('3. Altere as datas e memórias conforme necessário');
});

