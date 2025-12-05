/**
 * Módulo Header - Gerencia interatividade do menu responsivo
 * Exporta função para inicializar o header
 */

export function initHeader() {
    const menuToggle = document.getElementById('menu-toggle');
    const hamburger = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelectorAll('#secondary a');
    
    console.log('Header module loaded. Menu toggle:', menuToggle);

    // Debug: Verificar se checkbox existe
    if (!menuToggle) {
        console.error('Menu toggle element not found!');
        return;
    }

    // 1. Fechar menu ao clicar em qualquer link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Link clicked, closing menu');
            menuToggle.checked = false;
        });
    });

    // 2. Fechar menu ao redimensionar a janela (voltar para desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            console.log('Window resized > 768px, closing menu');
            menuToggle.checked = false;
        }
    });

    // 3. Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const header = document.querySelector('header');
        const isClickInsideHeader = header.contains(event.target);
        
        if (!isClickInsideHeader && menuToggle.checked) {
            console.log('Click outside header, closing menu');
            menuToggle.checked = false;
        }
    });
}
