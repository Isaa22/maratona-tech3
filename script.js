document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const searchInput = document.getElementById('search-input');
    const generateBtn = document.getElementById('generate-btn');
    const loadingSection = document.querySelector('.loading-section');
    const resultSection = document.querySelector('.result-section');
    const slideshowContainer = document.querySelector('.slideshow-container');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');
    const slideCounter = document.getElementById('slide-counter');
    const topicButtons = document.querySelectorAll('.topic-btn');
    const saveLessonBtn = document.getElementById('save-lesson');
    const exportPdfBtn = document.getElementById('export-pdf');

    // Variáveis de estado
    let currentSlide = 0;
    let slides = [];
    let currentTopic = '';

    // Event Listeners
    generateBtn.addEventListener('click', generateLesson);
    prevSlideBtn.addEventListener('click', showPreviousSlide);
    nextSlideBtn.addEventListener('click', showNextSlide);
    saveLessonBtn.addEventListener('click', saveLesson);
    exportPdfBtn.addEventListener('click', exportToPDF);
    
    // Adiciona eventos para os botões de tópicos populares
    topicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            searchInput.value = topic;
            generateLesson();
        });
    });

    // Função para gerar a aula
    function generateLesson() {
        const topic = searchInput.value.trim();
        
        if (!topic) {
            alert('Por favor, digite um tema para a aula.');
            return;
        }
        
        currentTopic = topic;
        
        // Mostra a seção de carregamento
        loadingSection.classList.remove('hidden');
        resultSection.classList.add('hidden');
        
        // Simula o tempo de carregamento (em um caso real, seria uma chamada API)
        setTimeout(() => {
            createSlides(topic);
            loadingSection.classList.add('hidden');
            resultSection.classList.remove('hidden');
            showSlide(0);
        }, 2000);
    }

    // Função para criar os slides da aula (simulado)
    function createSlides(topic) {
        slides = [];
        
        // Slide 1 - Introdução
        slides.push({
            title: `Introdução: ${topic}`,
            content: `
                <p>Nesta aula, vamos explorar o tema <strong>${topic}</strong>, um assunto fundamental para compreender diversos aspectos importantes.</p>
                <p>Os objetivos desta aula são:</p>
                <ul>
                    <li>Compreender os conceitos básicos sobre ${topic}</li>
                    <li>Analisar as causas e consequências</li>
                    <li>Identificar os principais eventos e personagens envolvidos</li>
                    <li>Relacionar com o contexto atual</li>
                </ul>
            `,
            image: 'https://source.unsplash.com/random/800x400/?education,learning'
        });
        
        // Slide 2 - Definição/Conceito
        slides.push({
            title: `O que é ${topic}?`,
            content: `
                <p><strong>${topic}</strong> pode ser definido como...</p>
                <p>Segundo especialistas, trata-se de um fenômeno/processo/conceito que...</p>
                <p>As características principais incluem:</p>
                <ol>
                    <li>Característica 1</li>
                    <li>Característica 2</li>
                    <li>Característica 3</li>
                </ol>
                <p>É importante diferenciar de conceitos similares como X e Y.</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?concept,definition'
        });
        
        // Slide 3 - Contexto Histórico
        slides.push({
            title: `Contexto Histórico de ${topic}`,
            content: `
                <p>Para entender ${topic}, precisamos voltar ao período...</p>
                <p>As condições que levaram ao surgimento/desenvolvimento foram:</p>
                <ul>
                    <li>Fator histórico 1</li>
                    <li>Fator histórico 2</li>
                    <li>Fator histórico 3</li>
                </ul>
                <p>O ano marcante foi [ANO], quando ocorreu [EVENTO IMPORTANTE].</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?history,old'
        });
        
        // Slide 4 - Causas
        slides.push({
            title: `Causas de ${topic}`,
            content: `
                <p>As principais causas que levaram a ${topic} incluem:</p>
                <ol>
                    <li><strong>Causa política:</strong> [Explicação]</li>
                    <li><strong>Causa econômica:</strong> [Explicação]</li>
                    <li><strong>Causa social:</strong> [Explicação]</li>
                    <li><strong>Causa cultural:</strong> [Explicação]</li>
                </ol>
                <p>Esses fatores se combinaram de forma a...</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?cause,reason'
        });
        
        // Slide 5 - Desenvolvimento/Eventos
        slides.push({
            title: `Desenvolvimento de ${topic}`,
            content: `
                <p>O desenvolvimento de ${topic} pode ser dividido em fases:</p>
                <ul>
                    <li><strong>Fase 1 (anos):</strong> [Descrição]</li>
                    <li><strong>Fase 2 (anos):</strong> [Descrição]</li>
                    <li><strong>Fase 3 (anos):</strong> [Descrição]</li>
                </ul>
                <p>Os eventos marcantes foram:</p>
                <p>1. [Evento 1] - [Ano]</p>
                <p>2. [Evento 2] - [Ano]</p>
                <p>3. [Evento 3] - [Ano]</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?development,progress'
        });
        
        // Slide 6 - Personagens/Figuras Importantes
        slides.push({
            title: `Personagens Importantes em ${topic}`,
            content: `
                <p>As figuras mais relevantes em ${topic} foram:</p>
                <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
                    <div style="flex: 1; min-width: 200px;">
                        <p><strong>[Nome do Personagem 1]</strong></p>
                        <p>[Papel/Contribuição]</p>
                    </div>
                    <div style="flex: 1; min-width: 200px;">
                        <p><strong>[Nome do Personagem 2]</strong></p>
                        <p>[Papel/Contribuição]</p>
                    </div>
                    <div style="flex: 1; min-width: 200px;">
                        <p><strong>[Nome do Personagem 3]</strong></p>
                        <p>[Papel/Contribuição]</p>
                    </div>
                </div>
            `,
            image: 'https://source.unsplash.com/random/800x400/?portrait,person'
        });
        
        // Slide 7 - Consequências/Impactos
        slides.push({
            title: `Consequências de ${topic}`,
            content: `
                <p>${topic} teve impactos profundos em diversas áreas:</p>
                <ul>
                    <li><strong>Política:</strong> [Impacto]</li>
                    <li><strong>Economia:</strong> [Impacto]</li>
                    <li><strong>Sociedade:</strong> [Impacto]</li>
                    <li><strong>Cultura:</strong> [Impacto]</li>
                </ul>
                <p>A longo prazo, essas consequências levaram a...</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?impact,effect'
        });
        
        // Slide 8 - Curiosidades
        slides.push({
            title: `Curiosidades sobre ${topic}`,
            content: `
                <p>Alguns fatos interessantes que você talvez não saiba:</p>
                <ol>
                    <li>[Curiosidade 1]</li>
                    <li>[Curiosidade 2]</li>
                    <li>[Curiosidade 3]</li>
                    <li>[Curiosidade 4]</li>
                </ol>
                <p>Uma história pouco conhecida é que...</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?interesting,fun'
        });
        
        // Slide 9 - Relação com o Presente
        slides.push({
            title: `${topic} e o Mundo Atual`,
            content: `
                <p>Como ${topic} se relaciona com questões atuais?</p>
                <p>Podemos identificar várias conexões:</p>
                <ul>
                    <li>[Conexão 1]</li>
                    <li>[Conexão 2]</li>
                    <li>[Conexão 3]</li>
                </ul>
                <p>As lições que podemos aprender são...</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?modern,present'
        });
        
        // Slide 10 - Conclusão e Exercícios
        slides.push({
            title: `Conclusão e Atividades sobre ${topic}`,
            content: `
                <p>Nesta aula, vimos que ${topic} é...</p>
                <p>Para fixar o conteúdo, responda:</p>
                <ol>
                    <li>[Pergunta 1]</li>
                    <li>[Pergunta 2]</li>
                    <li>[Pergunta 3]</li>
                </ol>
                <p>Sugestão de atividade: [Descrição da atividade prática]</p>
                <p>Para saber mais, consulte: [Livros, sites, filmes recomendados]</p>
            `,
            image: 'https://source.unsplash.com/random/800x400/?conclusion,finish'
        });
        
        // Renderiza os slides no container
        renderSlides();
    }

    // Função para renderizar os slides no container
    function renderSlides() {
        slideshowContainer.innerHTML = '';
        
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
            slideElement.innerHTML = `
                <h3>${slide.title}</h3>
                <div class="slide-content">
                    ${slide.content}
                </div>
                ${slide.image ? `<img src="${slide.image}" alt="${slide.title}" class="slide-image">` : ''}
            `;
            slideshowContainer.appendChild(slideElement);
        });
    }

    // Função para mostrar um slide específico
    function showSlide(index) {
        const allSlides = document.querySelectorAll('.slide');
        
        if (index < 0) index = 0;
        if (index >= allSlides.length) index = allSlides.length - 1;
        
        allSlides.forEach(slide => slide.classList.remove('active'));
        allSlides[index].classList.add('active');
        
        currentSlide = index;
        updateSlideCounter();
        updateNavButtons();
    }

    // Função para atualizar o contador de slides
    function updateSlideCounter() {
        slideCounter.textContent = `Slide ${currentSlide + 1} de ${slides.length}`;
    }

    // Função para atualizar o estado dos botões de navegação
    function updateNavButtons() {
        prevSlideBtn.disabled = currentSlide === 0;
        nextSlideBtn.disabled = currentSlide === slides.length - 1;
    }

    // Função para mostrar o slide anterior
    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Função para mostrar o próximo slide
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    // Função para salvar a aula (simulado)
    function saveLesson() {
        alert(`Aula sobre "${currentTopic}" salva com sucesso!`);
        // Em uma implementação real, seria salvo no localStorage ou em um banco de dados
    }

    // Função para exportar como PDF (simulado)
    function exportToPDF() {
        alert(`Gerando PDF da aula sobre "${currentTopic}"...`);
        // Em uma implementação real, usaria uma biblioteca como jsPDF ou uma chamada API
    }

    // Permite gerar a aula pressionando Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateLesson();
        }
    });
});
