# IA & Mobile Systems Portfolio | Cristian Vanzuita

Este repositório contém o código-fonte do meu portfólio profissional, focado em soluções de **Inteligência Artificial** e **Desenvolvimento de Sistemas Mobile**. O projeto foi concebido para demonstrar habilidades em arquitetura modular, interfaces dinâmicas e integração de modelos preditivos.

---

## 👨‍💻 Perfil Profissional
Meu nome é **Cristian Vanzuita**, graduado em **Ciências da Computação** e **Gestão Pública**. Com sólida base em **Estatística**, possuo um histórico de alto desempenho em concursos públicos, com aprovações na **Polícia Federal**, **1º lugar no IGP-SC**, duas vezes **1º lugar na CASAN** e **4º lugar no CREA-SC**, onde atuo como Agente Fiscal.

Atualmente, foco no desenvolvimento de soluções de **IA e Engenharia de Software**, preparando-me para desafios de grande escala no setor público e tecnológico.

---

## Stack Tecnológica & Skills

O projeto utiliza uma abordagem "Clean & Vanilla", priorizando performance e controle total sobre o DOM:

- **Linguagens:** HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (ES6+).
- **IA & Data Science:** Python, Pandas, Scikit-learn, NLTK.
- **Back-end:** .NET Core, C#, SQL Server.
- **Habilidades Comportamentais (Soft Skills):** Pensamento Analítico, Ética Pública, Resolução de Problemas e Aprendizado Contínuo.
- **Bibliotecas Visuais:** [Particles.js](https://vincentgarreau.com/particles.js/) e FontAwesome 6.



---

## Arquitetura e Padrões de Projeto

A estrutura segue princípios de **Modularização** e **SoC (Separação de Preocupações)**:

### 1. Objeto Global de Configuração (`CONFIG`)
Centralização de todos os dados do site em um único objeto literal, permitindo escalabilidade sem alteração da lógica funcional.

### 2. Módulo de Interface (`UI`)
Namespace dedicado para gerenciamento de DOM, incluindo renderização dinâmica de cards, efeito de digitação assíncrona e controle de navegação mobile.

### 3. Design System (UI/UX)
- **Glassmorphism:** Estética moderna com desfoque de fundo e transparências.
- **Mobile First:** Totalmente responsivo e otimizado para múltiplos dispositivos.
- **Acessibilidade:** Implementação de `skip-links` e atributos `ARIA`.

---

## Projetos em Destaque

1. **Preditor de Demanda (IA):** Modelo de regressão para otimização de estoque.
2. **Portal .NET Core (Mobile):** Arquitetura escalável para alta disponibilidade.
3. **NLP Analisador (IA):** Pipeline de análise de sentimentos em larga escala.



---

## Como Executar Localmente

Como o projeto utiliza uma Stack Vanilla (sem dependências externas), o processo de execução é imediato:

```bash
# 1. Clone o repositório
git clone [https://github.com/vanzui37/portfolio.git](https://github.com/vanzui37/portfolio.git)

# 2. Navegue até o diretório do projeto
cd portfolio

# 3. Abra o arquivo index.html no navegador
# No Windows:
start index.html

# No Mac:
open index.html

# No Linux:
xdg-open index.html
