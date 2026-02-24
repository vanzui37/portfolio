# IA & Mobile Systems Portfolio | Cristian Vanzuita

Este repositório contém o código-fonte do meu portfólio profissional, focado em soluções de **Inteligência Artificial** e **Desenvolvimento de Sistemas Mobile**. O projeto foi concebido para demonstrar habilidades em arquitetura modular, interfaces dinâmicas e integração de modelos preditivos.

---

## Stack Tecnológica

O projeto foi construído utilizando uma abordagem "Clean & Vanilla", priorizando performance e controle total sobre o DOM:

- **Linguagens:** HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (ES6+).
- **IA/Data Science (Contexto):** Python, Pandas, Scikit-learn, NLTK.
- **Back-end (Contexto):** .NET Core, C#, SQL Server.
- **Bibliotecas Visuais:** [Particles.js](https://vincentgarreau.com/particles.js/) para visualização de fundo inspirada em redes neurais.
- **Ícones:** FontAwesome 6.

---

## Arquitetura e Padrões de Projeto

A estrutura do código segue princípios de **Modularização** e **Separação de Preocupações (SoC)**, facilitando a manutenção e escalabilidade:

### 1. Objeto Global de Configuração (`CONFIG`)
Centralização de todos os dados do site (projetos, habilidades e frases do hero) em um único objeto literal. Isso permite que novas entradas sejam adicionadas sem a necessidade de alterar a lógica de manipulação do DOM.

### 2. Módulo de Interface (`UI`)
Um namespace dedicado para gerenciar todas as interações com o usuário:
- **Renderização Dinâmica:** Funções que mapeiam o objeto `CONFIG` para elementos HTML semânticos.
- **TypeEffect:** Algoritmo customizado para simulação de digitação assíncrona.
- **Navigation Control:** Gerenciamento de estado do menu mobile e acessibilidade.

### 3. Design System (UI/UX)
- **Glassmorphism:** Uso de `backdrop-filter: blur()` e cores semi-transparentes para uma estética moderna.
- **Mobile First:** Folha de estilo totalmente responsiva adaptada para Notebooks, Tablets e Smartphones.
- **Acessibilidade (A11y):** Implementação de `skip-links`, atributos `aria-label` e contraste de cores otimizado para legibilidade.

---

## Projetos em Destaque

A seção de portfólio destaca três implementações principais:

1. **Preditor de Demanda (IA):** Implementação de regressão para otimização de estoque.
2. **Portal .NET Core (Mobile):** Arquitetura escalável voltada para alta disponibilidade e acesso remoto.
3. **NLP Analisador (IA):** Pipeline de processamento de linguagem natural para classificação de sentimentos em larga escala.



---

## Como Executar Localmente

Como o projeto utiliza uma Stack Vanilla (sem dependências externas), o processo de execução é imediato e não requer instalação de pacotes:

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
