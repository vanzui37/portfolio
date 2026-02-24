/**
 * CONFIGURAÇÕES E DADOS
 * Centralizado para fácil manutenção.
 */
const CONFIG = {
    phrases: ["Modelos de IA", "Sistemas Mobile", "Soluções Eficientes"],
    
    projects: [
        { 
            title: "Preditor de Demanda", 
            cat: "ia", 
            tech: "Python, Pandas, Scikit-learn", 
            desc: "IA para análise de estoque e tendências de mercado.",
            detalhes: {
                func: "Previsão de vendas para os próximos 90 dias com algoritmos de regressão.",
                desafio: "Tratamento de dados sazonais e flutuações de impostos de importação.",
                res: "Otimização de pedidos e redução de custos de armazenamento."
            }
        },
        { 
            title: "Portal .NET Core", 
            cat: "mobile", 
            tech: "C#, .NET Core, SQL Server", 
            desc: "Sistema de gestão escalável com interface mobile-first.",
            detalhes: {
                func: "Plataforma de gestão robusta com foco em performance e segurança.",
                desafio: "Implementação de Clean Architecture para garantir escalabilidade mobile.",
                res: "Interface responsiva com alta integridade de dados via SQL Server."
            }
        },
        { 
            title: "NLP Analisador", 
            cat: "ia", 
            tech: "NLTK, Python, NLP", 
            desc: "Processamento de linguagem natural para análise de sentimentos.",
            detalhes: {
                func: "Classificação automática de feedbacks em Positivo, Neutro ou Negativo.",
                desafio: "Tokenização e tratamento de stop words em língua portuguesa.",
                res: "Automação de relatórios de satisfação de clientes via API Python."
            }
        }
    ],

    techStack: [
        { 
            category: "IA & Data Science", 
            tools: "Python, Pandas, Scikit-Learn, NLP, Computer Vision", 
            icon: "fa-brain" 
        },
        { 
            category: "Back-end & DB", 
            tools: ".NET Core, C#, SQL Server (T-SQL), Clean Architecture", 
            icon: "fa-server" 
        },
        { 
            category: "Soft Skills & Comportamental", 
            tools: "Pensamento Analítico, Ética Pública, Resolução de Problemas, Aprendizado Contínuo", 
            icon: "fa-users-gear" 
        }
    ]
};

/**
 * MÓDULO DE INTERFACE (UI)
 */
const UI = {
    // Renderiza os Cards de Projetos com Detalhamento Técnico
    renderProjects: (filter = 'all') => {
        const container = document.getElementById('projects-grid');
        if (!container) return;

        const filtered = CONFIG.projects.filter(p => filter === 'all' || p.cat === filter);
        
        container.innerHTML = filtered.map(p => `
            <article class="card project-detailed" data-category="${p.cat}">
                <div class="card-header">
                    <span class="tag">${p.cat.toUpperCase()}</span>
                    <h3>${p.title}</h3>
                </div>
                
                <div class="card-body">
                    <p class="main-desc">${p.desc}</p>
                    
                    <div class="technical-details">
                        <div class="detail-item">
                            <strong><i class="fas fa-cog"></i> Funcionalidade:</strong>
                            <span>${p.detalhes.func}</span>
                        </div>
                        <div class="detail-item">
                            <strong><i class="fas fa-microchip"></i> Desafio:</strong>
                            <span>${p.detalhes.desafio}</span>
                        </div>
                        <div class="detail-item">
                            <strong><i class="fas fa-chart-line"></i> Resultado:</strong>
                            <span>${p.detalhes.res}</span>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <small class="tech-list">${p.tech}</small>
                </div>
            </article>
        `).join('');
    },

    renderSkills: () => {
        const container = document.getElementById('skills-grid');
        if (!container) return;

        container.innerHTML = CONFIG.techStack.map(s => `
            <div class="skill-card">
                <div class="skill-icon"><i class="fas ${s.icon}"></i></div>
                <h3>${s.category}</h3>
                <p>${s.tools}</p>
            </div>
        `).join('');
    },

    initTypeEffect: (element, words) => {
        let wordIdx = 0, charIdx = 0, isDeleting = false;
        const ticker = () => {
            const fullWord = words[wordIdx];
            element.textContent = isDeleting 
                ? fullWord.substring(0, charIdx--) 
                : fullWord.substring(0, charIdx++);

            let speed = isDeleting ? 50 : 150;
            if (!isDeleting && charIdx > fullWord.length) {
                isDeleting = true; speed = 2000;
            } else if (isDeleting && charIdx < 0) {
                isDeleting = false; wordIdx = (wordIdx + 1) % words.length; speed = 500;
            }
            setTimeout(ticker, speed);
        };
        ticker();
    },

    initNavigation: () => {
        const menuBtn = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
                menuBtn.setAttribute('aria-expanded', !expanded);
                navLinks.classList.toggle('active');
            });
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuBtn.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }
};

/**
 * CONFIGURAÇÃO DE PARTÍCULAS
 */
const initParticles = () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#58a6ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4 },
                "size": { "value": 2, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#58a6ff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1.5, "out_mode": "out" }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" } }
            },
            "retina_detect": true
        });
    }
};

/**
 * INICIALIZAÇÃO ÚNICA
 */
document.addEventListener('DOMContentLoaded', () => {
    UI.renderSkills();
    UI.renderProjects();
    UI.initNavigation();
    initParticles();
    const typingEl = document.getElementById('typing-text');
    if (typingEl) UI.initTypeEffect(typingEl, CONFIG.phrases);
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active')?.classList.remove('active');
            e.target.classList.add('active');
            UI.renderProjects(e.target.dataset.filter);
        });
    });
});