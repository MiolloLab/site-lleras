/**
 * Arquivo principal de scripts - index.js
 * Importa e inicializa todos os módulos do projeto
 */

import { initHeader } from './header.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Main index.js loaded - initializing modules...');
    
    // Inicializar módulo do header
    initHeader();
    
    console.log('All modules initialized successfully');
});
