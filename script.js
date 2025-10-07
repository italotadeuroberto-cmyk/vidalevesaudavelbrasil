// Dados do quiz
const quizData = {
    currentQuestion: 0,
    questions: [{
            question: "Quantos quilos você deseja perder?",
            subtitle: "O Protocolo Mounjaro dos Pobres te ajuda a eliminar gordura de forma acelerada.",
            options: [
                "Até 5 kg",
                "De 6 a 10 kg",
                "De 11 a 15 kg",
                "De 16 a 20 kg",
                "Mais de 20 kg"
            ]
        },
        {
            question: "Como você descreveria seu físico?",
            subtitle: "Escolha uma opção para continuar.",
            type: "image-grid",
            options: [{
                    text: "Magra",
                    image: "img/img2.webp"
                },
                {
                    text: "Média",
                    image: "img/img3.webp"
                },
                {
                    text: "Com Barriguinha",
                    image: "img/img4.webp"
                },
                {
                    text: "Com Sobrepeso",
                    image: "img/img5.webp"
                }
            ]
        },
        {
            question: "Em qual área do seu corpo você gostaria de reduzir mais gordura?",
            type: "icon-list",
            requiresContinue: true,
            options: [{
                    text: "Região dos culotes.",
                    image: "img/img6.png"
                },
                {
                    text: "Região das coxas.",
                    image: "img/img7.png"
                },
                {
                    text: "Região do abdômen (barriga).",
                    image: "img/img8.png"
                },
                {
                    text: "Região dos glúteos.",
                    image: "img/img9.png"
                },
                {
                    text: "Região dos braços.",
                    image: "img/img10.png"
                }
            ]
        },
        {
            question: "Qual é o seu nome?",
            type: "name-input",
            subtitle: "Para criar seu plano personalizado e entregar sua receita, precisamos do seu nome. Fique tranquila, seus dados estão protegidos. 🔒",
            requiresContinue: true
        },
        {
            question: "Como o seu peso impacta a sua vida?",
            type: "emoji-options",
            options: [{
                    emoji: "📷",
                    text: "Evito tirar fotos porque sinto vergonha."
                },
                {
                    emoji: "💔",
                    text: "Meu parceiro já não me olha com o mesmo desejo de antes."
                },
                {
                    emoji: "😞",
                    text: "Evito reuniões sociais porque não me sinto bem comigo mesma."
                },
                {
                    emoji: "🤚",
                    text: "Nenhuma das opções."
                }
            ]
        },
        {
            question: "Você está realmente feliz com a sua aparência?",
            type: "emoji-options",
            questionHighlight: {
                word: "realmente feliz",
                color: "red"
            },
            questionHighlight2: {
                word: "aparência",
                color: "green"
            },
            options: [{
                    emoji: "😞",
                    text: "Não, porque me sinto acima do peso."
                },
                {
                    emoji: "💔",
                    text: "Sim, mas sei que posso melhorar minha saúde."
                },
                {
                    emoji: "😞",
                    text: "Não, gostaria de perder peso para me sentir melhor comigo mesma."
                }
            ]
        },
        {
            question: "O que mais te impede de perder peso?",
            type: "icon-simple",
            options: [{
                    icon: "⏰",
                    title: "Falta de Tempo",
                    subtitle: "Rotina agitada."
                },
                {
                    icon: "😊",
                    title: "Falta de autocontrole",
                    subtitle: "Dificuldade para resistir às tentações alimentares."
                },
                {
                    icon: "💎",
                    title: "Questões Financeiras",
                    subtitle: "Senti que as opções saudáveis são mais caras do que os alimentos processados."
                }
            ]
        },
        {
            question: "",
            type: "info-screen",
            title: "Nosso protocolo",
            subtitle: "resolve isso para você!",
            mainTitle: "",
            image: "img/img11.png",
            description: "O Mounjaro dos Pobres age enquanto você dorme, queimando gordura de forma acelerada.",
            highlightWords: [{
                    word: "Mounjaro dos Pobres",
                    color: "green"
                },
                {
                    word: "você dorme",
                    color: "blue"
                },
                {
                    word: "queimando gordura",
                    color: "red"
                }
            ],
            requiresContinue: true
        },
        {
            question: "Qual desses benefícios você gostaria de ter?",
            subtitle: "👉 Vamos personalizar sua fórmula para maximizar os resultados.",
            type: "emoji-options",
            requiresContinue: true,
            options: [{
                    emoji: "🔥",
                    text: "Perder peso sem esforço e sem efeito sanfona."
                },
                {
                    emoji: "😴",
                    text: "Sono mais profundo."
                },
                {
                    emoji: "⚡",
                    text: "Mais energia e vitalidade durante o dia."
                },
                {
                    emoji: "💪",
                    text: "Aumento da autoestima e da confiança."
                },
                {
                    emoji: "😌",
                    text: "Redução do estresse e da ansiedade."
                }
            ]
        },
        {
            question: "",
            type: "testimonial",
            title: "Histórias Reais de Transformação!",
            titleIcon: "✅",
            image: "img/img12.jpg",
            stars: 5,
            authorName: "Lorena dos Santos",
            authorHandle: "@lore.dosantos21",
            testimonialText: "Eu já tinha tentado de tudo para perder peso, mas nada funcionava. Depois de incluir a fórmula do Mounjaro dos Pobres na minha rotina, perdi 11 kg sem mudar nada na minha alimentação! O mais incrível é que minha fome e minha ansiedade diminuíram de forma natural.",
            requiresContinue: true
        },
        {
            question: "Qual é o seu peso atual?",
            subtitle: "Já estamos quase terminando! Vamos ajustar seu plano de acordo com o seu corpo.",
            type: "weight-input",
            placeholder: "Peso Atual",
            description: "Com base nisso, vamos ajustar a dose ideal para que você obtenha os melhores resultados.",
            requiresContinue: true
        },
        {
            question: "Qual é a sua altura?",
            subtitle: "Isso vai nos ajudar a calcular a quantidade exata do Mounjaro dos Pobres para o seu corpo.",
            type: "height-input",
            placeholder: "Digite sua altura (cm) *",
            requiresContinue: true
        },
        {
            question: "Qual é o seu objetivo de peso (desejado)?",
            subtitle: "Isso vai nos ajudar a personalizar um plano especificamente para você.",
            type: "goal-weight-input",
            placeholder: "Digite aqui...",
            description: "Com base nisso, vamos ajustar a dose ideal para que você obtenha os melhores resultados.",
            requiresContinue: true
        },
        {
            question: "Como é o seu dia a dia?",
            subtitle: "Sua rotina diária também influencia!",
            type: "emoji-options",
            questionHighlight: {
                word: "dia a dia",
                color: "green"
            },
            options: [{
                    emoji: "😤",
                    text: "Trabalho fora de casa e tenho uma rotina agitada."
                },
                {
                    emoji: "😊",
                    text: "Trabalho em casa e tenho uma rotina flexível."
                },
                {
                    emoji: "😊",
                    text: "Estou em casa cuidando da família."
                },
                {
                    emoji: "😮",
                    text: "Outros."
                }
            ]
        },
        {
            question: "Quantas horas você dorme por noite?",
            subtitle: "A qualidade do seu sono impacta diretamente na sua perda de peso!",
            type: "emoji-options",
            options: [{
                    emoji: "🌙",
                    text: "Menos de 5 horas"
                },
                {
                    emoji: "😴",
                    text: "Entre 5 a 7 horas"
                },
                {
                    emoji: "💤",
                    text: "Entre 7 a 9 horas"
                },
                {
                    emoji: "🛏️",
                    text: "Mais de 9 horas"
                }
            ]
        },
        {
            question: "Quantos copos de água você bebe por dia?",
            subtitle: "O seu nível de hidratação também influencia na sua perda de peso.",
            type: "emoji-options",
            options: [{
                    emoji: "💧",
                    text: "1-2 copos por dia."
                },
                {
                    emoji: "💧",
                    text: "2-6 copos por dia."
                },
                {
                    emoji: "💧",
                    text: "Mais de 6 copos por dia."
                }
            ]
        },
        {
            question: "",
            type: "loading-screen",
            title: "Aguarde enquanto preparamos o seu Mounjaro dos Pobres...",
            subtitle: "Analisando as suas respostas...",
            progressText: "28%",
            images: [
                "img/img12.jpg",
                "img/img13.webp",
                "img/img14.jpg",
                "img/img15.jpg"
            ],
            duration: 5000
        },
        {
            question: "",
            type: "imc-analysis",
            title: "Olá, aqui está a análise do seu perfil:",
            imcTitle: "Índice de Massa Corporal (IMC)",
            imcValue: "21.60",
            imcStatus: "Zona de Alerta",
            imcCategories: ["Abaixo do peso", "Normal", "Sobrepeso", "Obesidade"],
            imcPosition: 1.8, // posição na escala (0-3) - ajustado para IMC 21.60
            alerts: [{
                    type: "danger",
                    icon: " ⚠️",
                    title: "SEU METABOLISMO PODE ESTAR TE SABOTANDO SEM QUE VOCÊ PERCEBA!",
                    description: "Mesmo estando em um peso normal, seu corpo pode estar retendo toxinas e funcionando mais lentamente, dificultando a queima de gordura e te deixando com menos energia."
                },
                {
                    type: "warning",
                    icon: " ⚠️",
                    title: "Alguns sinais de alerta:",
                    symptoms: [
                        "Metabolismo lento e dificuldade para emagrecer, mesmo comendo pouco",
                        "Cansaço constante e sensação de inchaço",
                        "Acúmulo de gordura em áreas específicas do corpo, especialmente no abdômen"
                    ]
                },
                {
                    type: "success",
                    icon: "✅",
                    title: "Com o Mounjaro dos Pobres, seu corpo acelera a queima de gordura de forma natural.",
                    description: "A combinação ideal de ingredientes pode ativar seu metabolismo, reduzir a retenção de líquidos e aumentar sua energia."
                }
            ],
            testimonialTitle: "Veja a transformação da Silvia!",
            testimonialImages: ["img/img16.jpg"],
            testimonialDescription: "A partir dos dados coletados e do resultado do seu IMC, nós elaboramos um programa de acompanhamento individual para que você alcance seus resultados no menor tempo possível, com a melhor qualidade de vida projetada de acordo com seus objetivos — em apenas 4 semanas.",
            successRate: "93%",
            successTitle: "Nível de Sucesso com o Mounjaro dos Pobres",
            successDescription: "Baseado nos dados de clientes do Mounjaro dos Pobres que registraram seu progresso no aplicativo.",
            requiresContinue: true
        },
        {
            question: "Qual é o corpo dos seus sonhos?",
            subtitle: "Escolha uma opção abaixo:",
            type: "image-grid",
            options: [{
                    image: "img/img17.webp",
                    text: "Magra"
                },
                {
                    image: "img/img18.webp",
                    text: "Tonificada"
                },
                {
                    image: "img/img19.webp",
                    text: "Com Curvas"
                },
                {
                    image: "img/img20.webp",
                    text: "Média"
                }
            ]
        },
        {
            question: "",
            type: "loading-screen",
            title: "Analisando seus dados e finalizando o seu plano...",
            subtitle: "Carregando...",
            progressText: "36%",
            images: [],
            duration: 4000
        },
        {
            question: "",
            type: "plan-comparison",
            title: "Olá, seu Plano Exclusivo de Emagrecimento com o Mounjaro dos Pobres está pronto.",
            beforeLabel: "Esta é você antes do Mounjaro",
            afterLabel: "Esta é você depois do Mounjaro",
            beforeImages: [
                "img/img3.webp",
                "img/img4.webp",
                "img/img5.webp"
            ],
            afterImages: [
                "img/img18.webp",
                "img/img20.webp",
                "img/img18.webp"
            ],
            comparisons: [{
                    before: "Metabolismo lento",
                    after: "Metabolismo acelerado"
                },
                {
                    before: "Corpo constantemente inchado.",
                    after: "Corpo leve e desinchado."
                },
                {
                    before: "Ansiedade que leva a comer sem controle.",
                    after: "Sensação de saciedade e autocontrole."
                },
                {
                    before: "Desequilíbrio hormonal",
                    after: "Equilíbrio hormonal natural"
                }
            ],
            howItWorks: {
                title: "Como funciona o Plano?",
                description: `
                    <div class="plan-header">
                        <div class="plan-badge">Seu plano inclui:</div>
                    </div>
                    
                    <div class="plan-content">
                        <ul class="plan-list">
                            <li><strong>Como usar o Mounjaro do Jeito Certo:</strong> Baseado nas descobertas mais recentes de universidades renomadas como <strong>Harvard</strong>, este protocolo revela o que a <strong>Indústria Farmacêutica</strong> prefere manter em segredo. O <strong>Protocolo Monjauro de Pobre</strong> é a maneira mais rápida, segura e acessível de <strong>perder peso</strong> sem sacrificar sua massa muscular e sem sofrer com a fome típica das dietas restritivas. Aqui, você encontra um <strong>método</strong> direto, eficaz e inteligente - <strong>Desenvolvido</strong> para quem busca transformação real em poucas semanas, mesmo com orçamento limitado.</li>
                            
                            <li><strong>Definição de metas diárias:</strong> para você se manter no caminho certo</li>
                            
                            <li><strong>Planilha de acompanhamento:</strong> Saiba exatamente quanto você está evoluindo.</li>
                            
                            <li class="bonus-item"><strong>+ 4 Bônus Exclusivos</strong></li>
                        </ul>
                        
                        <div class="testimonial-title-section">
                            <h3>Quem Usa <span class="highlight-green">Tem Resultado</span> <span class="emoji">😊 👇</span></h3>
                        </div>
                        
                        <div class="results-images">
                            <img src="img/img20.png" alt="Resultado antes e depois" class="result-image">
                            <img src="img/img21.jpg" alt="Resultado antes e depois" class="result-image">
                            <img src="img/img22.webp" alt="Resultado antes e depois" class="result-image">
                        </div>
                    </div>
                `
            },
            requiresContinue: true
        },
        {
            question: "Qual é sua idade?",
            options: [
                "18-25 anos",
                "26-35 anos",
                "36-45 anos",
                "46+ anos"
            ]
        },
        {
            question: "Como está sua rotina de exercícios?",
            options: [
                "Não pratico exercícios",
                "1-2 vezes por semana",
                "3-4 vezes por semana",
                "5+ vezes por semana"
            ]
        },
        {
            question: "Qual é seu maior desafio para perder peso?",
            options: [
                "Falta de tempo",
                "Falta de motivação",
                "Não sei por onde começar",
                "Já tentei várias vezes"
            ]
        }
    ],
    answers: []
};

// Função para iniciar o quiz
function startQuiz() {
    // Animação de saída da tela inicial
    const container = document.querySelector('.container');
    container.style.transform = 'scale(0.95)';
    container.style.opacity = '0.8';

    setTimeout(() => {
        showQuestion();
    }, 300);
}

// Função para mostrar uma pergunta
function showQuestion() {
    const currentQ = quizData.questions[quizData.currentQuestion];
    const progressWidth = ((quizData.currentQuestion + 1) / quizData.questions.length) * 100;

    const container = document.querySelector('.container');

    container.innerHTML = `
        <!-- Header com seta de voltar e logo -->
        <div class="question-header">
            ${quizData.currentQuestion > 0 ? '<button class="back-btn" onclick="goBack()">←</button>' : '<div class="back-placeholder"></div>'}
            <img src="img/logo.png" alt="Mounjaro dos Pobres Logo" class="logo-small">
            <div class="header-spacer"></div>
        </div>
        
        <!-- Barra de progresso -->
        <div class="progress-container">
            <div class="progress-bar">
                <div class="progress-fill" id="mainProgressFill" style="width: ${progressWidth}%;"></div>
            </div>
        </div>
        
        <!-- Pergunta -->
        ${currentQ.type === 'info-screen' ? `
            <div class="info-screen-content">
                ${currentQ.title || currentQ.subtitle ? `
                    <div class="info-header">
                        ${currentQ.title ? `<p class="info-title">${currentQ.title}</p>` : ''}
                        ${currentQ.subtitle ? `<p class="info-subtitle">${currentQ.subtitle}</p>` : ''}
                    </div>
                ` : ''}
                ${currentQ.mainTitle ? `<h1 class="info-main-title">${currentQ.mainTitle}</h1>` : ''}
                <div class="info-image-container">
                    <img src="${currentQ.image}" alt="Como funciona" class="info-image">
                </div>
                <p class="info-description">${formatInfoDescription(currentQ)}</p>
                ${currentQ.requiresContinue ? `
                    <div class="continue-section">
                        <button class="continue-quiz-btn" onclick="continueQuiz()" disabled>Continuar</button>
                    </div>
                ` : ''}
            </div>
        ` : currentQ.type === 'testimonial' ? `
            <div class="testimonial-content">
                <div class="testimonial-header">
                    <h2 class="testimonial-title">${currentQ.title} ${currentQ.titleIcon}</h2>
                </div>
                <div class="testimonial-image-container">
                    <img src="${currentQ.image}" alt="Transformação" class="testimonial-image">
                </div>
                <div class="testimonial-rating">
                    ${'⭐'.repeat(currentQ.stars)}
                </div>
                <div class="testimonial-author">
                    <p class="author-name">${currentQ.authorName}</p>
                    <p class="author-handle">${currentQ.authorHandle}</p>
                </div>
                <div class="testimonial-text">
                    <p>${currentQ.testimonialText}</p>
                </div>
                ${currentQ.requiresContinue ? `
                    <div class="continue-section">
                        <button class="continue-quiz-btn" onclick="continueQuiz()" disabled>Continuar</button>
                    </div>
                ` : ''}
            </div>
        ` : currentQ.type === 'loading-screen' ? `
            <div class="loading-screen-content">
                <div class="loading-header">
                    <h2 class="loading-title">${currentQ.title}</h2>
                    <p class="loading-subtitle">${currentQ.subtitle} <span class="loading-progress">${currentQ.progressText}</span></p>
                </div>


            </div>
        ` : currentQ.type === 'imc-analysis' ? `
            <div class="imc-analysis-content">
                <p class="imc-intro">${currentQ.title}</p>
                
                <div class="imc-section">
                    <h2 class="imc-title">${currentQ.imcTitle}</h2>
                    <div class="imc-display">
                        <div class="imc-value-container">
                            <span class="imc-label">Seu IMC:</span>
                            <span class="imc-value">${currentQ.imcValue}</span>
                            <div class="imc-status-badge">
                                <span class="status-indicator">⚠️</span>
                                <span class="status-text">${currentQ.imcStatus}</span>
                            </div>
                        </div>
                        <div class="imc-scale-container">
                            <div class="imc-scale-bar">
                                <div class="pointer-indicator" style="left: ${(currentQ.imcPosition / (currentQ.imcCategories.length - 1)) * 100}%">
                                    <div class="pointer-badge">
                                        <span class="pointer-text">Você</span>
                                    </div>
                                    <div class="pointer-circle"></div>
                                </div>
                            </div>
                            <div class="imc-categories">
                                ${currentQ.imcCategories.map((category, index) => `
                                    <div class="imc-category-label">
                                        ${category}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="alerts-section">
                    ${currentQ.alerts.map(alert => `
                        <div class="alert-box alert-${alert.type}">
                            <div class="alert-header">
                                <span class="alert-icon">${alert.icon}</span>
                                <span class="alert-title">${alert.title}</span>
                            </div>
                            ${alert.description ? `<p class="alert-description">${alert.description}</p>` : ''}
                            ${alert.symptoms ? `
                                <div class="alert-symptoms">
                                    ${alert.symptoms.map(symptom => `
                                        <div class="symptom-item">❌ ${symptom}</div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
                
                <div class="testimonial-section">
                    <h3 class="testimonial-section-title">${currentQ.testimonialTitle}</h3>
                    <div class="testimonial-images-grid">
                        ${currentQ.testimonialImages.map(image => `
                            <img src="${image}" alt="Transformação" class="testimonial-grid-image">
                        `).join('')}
                    </div>
                    <p class="testimonial-section-description">${currentQ.testimonialDescription}</p>
                </div>
                
                <div class="success-rate-section">
                    <h4 class="success-rate-title">${currentQ.successTitle}</h4>
                    <p class="success-rate-description">${currentQ.successDescription}</p>
                    <div class="success-rate-bar">
                        <div class="success-rate-fill" style="width: ${currentQ.successRate}"></div>
                        <span class="success-rate-text">${currentQ.successRate}</span>
                    </div>
                </div>
                
                ${currentQ.requiresContinue ? `
                    <div class="continue-section">
                        <button class="continue-quiz-btn" onclick="continueQuiz()" disabled>Continuar</button>
                    </div>
                ` : ''}
            </div>
        ` : currentQ.type === 'plan-comparison' ? `
            <div class="plan-comparison-content">
                <h2 class="plan-title">${currentQ.title}</h2>
                
                <div class="comparison-labels">
                    <div class="before-label">
                        <span class="warning-icon">⚠️</span>
                        <span class="label-text">${currentQ.beforeLabel}</span>
                    </div>
                    <div class="after-label">
                        <span class="success-icon">✅</span>
                        <span class="label-text">${currentQ.afterLabel}</span>
                    </div>
                </div>
                
                <div class="images-comparison">
                    <div class="before-images">
                        ${currentQ.beforeImages.map(image => `
                            <img src="${image}" alt="Antes" class="comparison-image before-image">
                        `).join('')}
                    </div>
                    <div class="after-images">
                        ${currentQ.afterImages.map(image => `
                            <img src="${image}" alt="Depois" class="comparison-image after-image">
                        `).join('')}
                    </div>
                </div>
                
                <div class="comparison-bars">
                    ${currentQ.comparisons.map((comparison, index) => {
                        const redWidths = ['25%', '30%', '35%', '20%'];
                        const greenWidths = ['85%', '90%', '95%', '88%'];
                        return `
                        <div class="comparison-row">
                            <div class="before-comparison">
                                <p class="comparison-text">${comparison.before}</p>
                                <div class="progress-bar before-bar">
                                    <div class="progress-fill red-fill" style="width: ${redWidths[index]}">
                                        <div class="progress-indicator"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="after-comparison">
                                <p class="comparison-text">${comparison.after}</p>
                                <div class="progress-bar after-bar">
                                    <div class="progress-fill green-fill" style="width: ${greenWidths[index]}">
                                        <div class="progress-indicator"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="how-it-works">
                    <h3 class="how-it-works-title">${currentQ.howItWorks.title}</h3>
                    <p class="how-it-works-description">${currentQ.howItWorks.description}</p>
                </div>
                
                ${currentQ.requiresContinue ? `
                    <div class="continue-section">
                        <button class="continue-quiz-btn" onclick="continueQuiz()" disabled>QUERO COMEÇAR HOJE 🥰</button>
                        <p class="bonus-guarantee-text">Ao garantir o seu Mounjaro dos Pobres hoje, você recebe todos os bônus de presente!</p>
                        <div class="bonus-images">
                            <img src="img/img23.png" alt="Bônus" class="bonus-image">
                            <img src="img/img24.jpg" alt="Bônus" class="bonus-image">
                            <img src="img/img25.webp" alt="Bônus" class="bonus-image">
                            <img src="img/img26.webp" alt="Bônus" class="bonus-image">
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px;">
                            <button class="start-today-btn" onclick="startToday()">QUERO COMEÇAR HOJE 🥰</button>
                            <div style="margin-top: 20px; text-align: center;">
                                <img src="img/img27.png" alt="Garantia" style="max-width: 400px; width: 100%; height: auto; display: block; margin: 0 auto;">
                            </div>
                            <div style="margin-top: 15px; text-align: center;">
                                <img src="img/img28.png" alt="Segurança" style="max-width: 400px; width: 100%; height: auto; display: block; margin: 0 auto;">
                            </div>
                            <div style="margin-top: 15px; text-align: center; padding: 0 20px;">
                                <p style="font-size: 11px; color: #666; line-height: 1.4; margin: 0;">
                                    A compra deste material é totalmente sem risco para você.<br><br>
                                    Se ele não atender às suas expectativas nos primeiros 30 dias após a compra, nós reembolsaremos todo o valor que você pagou, sem fazer perguntas.<br><br>
                                    Basta enviar um e-mail para o suporte em mounjarodepobre@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>
        ` : `
            <div class="question-content">
                ${currentQ.question ? `<h2 class="question-title">${formatQuestionTitle(currentQ)}</h2>` : ''}
                ${currentQ.type !== 'info-screen' && currentQ.subtitle ? `<p class="question-subtitle">${currentQ.subtitle}</p>` : ''}
                
                ${currentQ.type === 'name-input' ? `
                    <div class="name-input-container">
                        <input type="text" id="nameInput" placeholder="Escreva seu nome..." class="name-input" oninput="validateNameInput()">
                    </div>
                ` : currentQ.type === 'weight-input' || currentQ.type === 'height-input' || currentQ.type === 'goal-weight-input' ? `
                    <div class="input-container">
                        <input type="number" id="dataInput" placeholder="${currentQ.placeholder}" class="data-input" oninput="validateDataInput()">
                        ${currentQ.description ? `<p class="input-description">${currentQ.description}</p>` : ''}
                    </div>
                ` : `
                    <div class="options-container ${currentQ.type === 'image-grid' ? 'image-grid' : currentQ.type === 'icon-list' ? 'icon-list' : currentQ.type === 'emoji-options' ? 'emoji-options' : currentQ.type === 'icon-simple' ? 'icon-simple' : ''}">
                        ${currentQ.type === 'image-grid' ? 
                            currentQ.options.map((option, index) => `
                                <button class="image-option-btn" onclick="selectAnswer(${index}, '${option.text}')">
                                    <div class="image-container">
                                        <img src="${option.image}" alt="${option.text}" class="body-image">
                                    </div>
                                    <div class="image-option-label">
                                        <span class="option-label-text">${option.text}</span>
                                        <span class="option-arrow">→</span>
                                    </div>
                                </button>
                            `).join('') :
                            currentQ.type === 'icon-list' ?
                            currentQ.options.map((option, index) => `
                                <button class="icon-option-btn" onclick="selectIconOption(${index}, '${option.text}')">
                                    <div class="icon-content">
                                        <img src="${option.image}" alt="${option.text}" class="option-icon">
                                        <span class="option-text-icon">${option.text}</span>
                                    </div>
                                    <span class="option-circle-icon"></span>
                                </button>
                            `).join('') :
                            currentQ.type === 'emoji-options' ?
                            currentQ.options.map((option, index) => `
                                <button class="emoji-option-btn" onclick="selectAnswer(${index}, '${option.text}')">
                                    <div class="emoji-content">
                                        <span class="option-emoji">${option.emoji}</span>
                                        <span class="option-text-emoji">${option.text}</span>
                                    </div>
                                    <span class="option-arrow-emoji">→</span>
                                </button>
                            `).join('') :
                            currentQ.type === 'icon-simple' ?
                            currentQ.options.map((option, index) => `
                                <button class="simple-option-btn" onclick="selectAnswer(${index}, '${option.title}')">
                                    <div class="simple-option-content">
                                        <span class="simple-option-icon">${option.icon}</span>
                                        <div class="simple-option-text">
                                            <span class="simple-option-title">${option.title}</span>
                                            <span class="simple-option-subtitle">${option.subtitle}</span>
                                        </div>
                                    </div>
                                    <span class="simple-option-arrow">→</span>
                                </button>
                            `).join('') :
                            currentQ.options.map((option, index) => `
                                <button class="option-btn-new" onclick="selectAnswer(${index}, '${option}')">
                                    <span class="option-text">${option}</span>
                                    <span class="option-circle"></span>
                                </button>
                            `).join('')
                        }
                    </div>
                `}
                
                ${currentQ.requiresContinue ? `
                    <div class="continue-section">
                        <button class="continue-quiz-btn" onclick="continueQuiz()" disabled>Continuar</button>
                    </div>
                ` : ''}
            </div>
        `}
    `;

    // Animação de entrada
    container.style.transform = 'scale(1)';
    container.style.opacity = '1';

    // Adicionar estilos para a tela de pergunta
    addQuestionStyles();

    // Para tela informativa, depoimento, análise de IMC ou comparação de plano, habilitar botão automaticamente
    if ((currentQ.type === 'info-screen' || currentQ.type === 'testimonial' || currentQ.type === 'imc-analysis' || currentQ.type === 'plan-comparison') && currentQ.requiresContinue) {
        setTimeout(() => {
            const continueBtn = document.querySelector('.continue-quiz-btn');
            if (continueBtn) {
                continueBtn.disabled = false;
                continueBtn.classList.add('enabled');
            }
        }, 100);
    }

    // Para tela de loading, inicializar carousel e avançar automaticamente
    if (currentQ.type === 'loading-screen') {
        carouselImages = currentQ.images;
        currentImageIndex = 0;

        // Animar barra de progresso e percentual
        let currentProgress = 0;
        const duration = currentQ.duration || 4000;
        const interval = 50; // Atualizar a cada 50ms
        const increment = 100 / (duration / interval);

        const progressInterval = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(progressInterval);
            }

            // Atualizar contador de progresso da tela de loading
            const progressText = document.querySelector('.loading-progress');

            if (progressText) {
                progressText.textContent = Math.round(currentProgress) + '%';
            }

            // Atualizar também a barra de progresso principal do quiz
            const mainProgressFill = document.getElementById('mainProgressFill');
            if (mainProgressFill) {
                // Calcular progresso baseado na etapa atual + progresso da animação
                const baseProgress = (quizData.currentQuestion / quizData.questions.length) * 100;
                const stepProgress = (currentProgress / 100) * (100 / quizData.questions.length);
                const totalProgress = Math.min(baseProgress + stepProgress, 100);
                mainProgressFill.style.width = totalProgress + '%';
            }
        }, interval);

        // Iniciar carousel automático se houver múltiplas imagens
        if (carouselImages.length > 1) {
            const autoCarouselInterval = setInterval(() => {
                nextImage();
            }, 2000); // Trocar imagem a cada 2 segundos

            // Parar o carousel automático quando a tela mudar
            setTimeout(() => {
                clearInterval(autoCarouselInterval);
            }, duration);
        }

        // Avançar automaticamente após a duração especificada
        setTimeout(() => {
            quizData.currentQuestion++;
            if (quizData.currentQuestion < quizData.questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }, duration);
    }
}

// Função para voltar
function goBack() {
    if (quizData.currentQuestion > 0) {
        quizData.currentQuestion--;
        quizData.answers.pop(); // Remove a última resposta
        showQuestion();
    }
}

// Variáveis globais
let selectedIconIndex = null;
let userName = '';

// Função para formatar título da pergunta com destaques
function formatQuestionTitle(question) {
    let title = question.question;

    if (question.questionHighlight) {
        title = title.replace(
            question.questionHighlight.word,
            `<span style="color: ${question.questionHighlight.color === 'red' ? '#ff0000' : '#00a396'}">${question.questionHighlight.word}</span>`
        );
    }

    if (question.questionHighlight2) {
        title = title.replace(
            question.questionHighlight2.word,
            `<span style="color: ${question.questionHighlight2.color === 'red' ? '#ff0000' : '#00a396'}">${question.questionHighlight2.word}</span>`
        );
    }

    return title;
}

// Função para validar input do nome
function validateNameInput() {
    const nameInput = document.getElementById('nameInput');
    const continueBtn = document.querySelector('.continue-quiz-btn');

    if (nameInput && continueBtn) {
        userName = nameInput.value.trim();

        if (userName.length >= 2) {
            continueBtn.disabled = false;
            continueBtn.classList.add('enabled');
        } else {
            continueBtn.disabled = true;
            continueBtn.classList.remove('enabled');
        }
    }
}

// Função para validar inputs de dados (peso, altura, etc.)
function validateDataInput() {
    const dataInput = document.getElementById('dataInput');
    const continueBtn = document.querySelector('.continue-quiz-btn');

    if (dataInput && continueBtn) {
        const value = dataInput.value.trim();

        if (value.length >= 2 && !isNaN(value) && parseFloat(value) > 0) {
            continueBtn.disabled = false;
            continueBtn.classList.add('enabled');
        } else {
            continueBtn.disabled = true;
            continueBtn.classList.remove('enabled');
        }
    }
}

// Função para formatar texto da tela informativa com destaques
function formatInfoDescription(question) {
    let description = question.description;

    if (question.highlightWords) {
        question.highlightWords.forEach(highlight => {
            const colorMap = {
                'green': '#00a396',
                'blue': '#00a396',
                'red': '#ff0000'
            };

            description = description.replace(
                highlight.word,
                `<span style="color: ${colorMap[highlight.color] || highlight.color}; font-weight: bold;">${highlight.word}</span>`
            );
        });
    }

    return description;
}

// Variáveis globais para carousel
let currentImageIndex = 0;
let carouselImages = [];

// Funções para carousel da tela de loading
function prevImage() {
    if (carouselImages.length > 1) {
        currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarouselImage();
    }
}

function nextImage() {
    if (carouselImages.length > 1) {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        updateCarouselImage();
    }
}

function updateCarouselImage() {
    const imageElement = document.getElementById('carouselImage');
    if (imageElement) {
        imageElement.src = carouselImages[currentImageIndex];
    }

    // Atualizar indicadores
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Função para selecionar opção de ícone (não avança automaticamente)
function selectIconOption(index, answer) {
    selectedIconIndex = index;

    // Destacar a opção selecionada
    const buttons = document.querySelectorAll('.icon-option-btn');
    buttons.forEach((btn, idx) => {
        btn.classList.remove('selected');
        const circle = btn.querySelector('.option-circle-icon');
        circle.innerHTML = '';

        if (idx === index) {
            btn.classList.add('selected');
            circle.innerHTML = '✓';
        }
    });

    // Ativar botão continuar
    const continueBtn = document.querySelector('.continue-quiz-btn');
    if (continueBtn) {
        continueBtn.disabled = false;
        continueBtn.classList.add('enabled');
    }
}

// Função para continuar o quiz
function continueQuiz() {
    const currentQ = quizData.questions[quizData.currentQuestion];

    if (currentQ.type === 'name-input') {
        // Para pergunta de nome
        if (userName.length >= 2) {
            quizData.answers.push({
                question: quizData.currentQuestion,
                answer: userName,
                index: 0
            });

            quizData.currentQuestion++;

            if (quizData.currentQuestion < quizData.questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }
    } else if (currentQ.type === 'weight-input' || currentQ.type === 'height-input' || currentQ.type === 'goal-weight-input') {
        // Para inputs de dados (peso, altura, objetivo)
        const dataInput = document.getElementById('dataInput');
        if (dataInput) {
            const value = dataInput.value.trim();
            if (value.length >= 2 && !isNaN(value) && parseFloat(value) > 0) {
                quizData.answers.push({
                    question: quizData.currentQuestion,
                    answer: value,
                    index: 0
                });

                quizData.currentQuestion++;

                if (quizData.currentQuestion < quizData.questions.length) {
                    showQuestion();
                } else {
                    showResults();
                }
            }
        }
    } else if (currentQ.type === 'info-screen' || currentQ.type === 'testimonial' || currentQ.type === 'imc-analysis') {
        // Para tela informativa, depoimento ou análise de IMC - apenas avança
        quizData.currentQuestion++;

        if (quizData.currentQuestion < quizData.questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    } else if (currentQ.type === 'plan-comparison') {
        // Para comparação de plano - redirecionar para checkout
        window.location.href = 'https://pix-flow-ready.vercel.app/';
    } else if (selectedIconIndex !== null) {
        // Para pergunta de ícones ou emoji options
        const selectedOption = currentQ.options[selectedIconIndex];

        quizData.answers.push({
            question: quizData.currentQuestion,
            answer: selectedOption.text || selectedOption.title,
            index: selectedIconIndex
        });

        selectedIconIndex = null;
        quizData.currentQuestion++;

        if (quizData.currentQuestion < quizData.questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }
}

// Função para selecionar resposta
function selectAnswer(index, answer) {
    const currentQ = quizData.questions[quizData.currentQuestion];

    // Se a pergunta precisa do botão continuar, não adiciona a resposta ainda
    if (currentQ.requiresContinue && currentQ.type !== 'name-input') {
        selectedIconIndex = index;

        // Destacar a opção selecionada baseado no tipo
        if (currentQ.type === 'emoji-options') {
            const buttons = document.querySelectorAll('.emoji-option-btn');
            buttons.forEach((btn, idx) => {
                btn.classList.remove('selected');
                if (idx === index) {
                    btn.classList.add('selected');
                }
            });
        } else if (currentQ.type === 'image-grid') {
            const buttons = document.querySelectorAll('.image-option-btn');
            buttons.forEach((btn, idx) => {
                if (idx === index) {
                    btn.classList.add('selected');
                } else {
                    btn.style.opacity = '0.6';
                }
            });
        }

        // Ativar botão continuar
        const continueBtn = document.querySelector('.continue-quiz-btn');
        if (continueBtn) {
            continueBtn.disabled = false;
            continueBtn.classList.add('enabled');
        }

        return; // Não avança automaticamente
    }

    // Para perguntas que avançam automaticamente
    quizData.answers.push({
        question: quizData.currentQuestion,
        answer: answer,
        index: index
    });

    if (currentQ.type === 'image-grid') {
        // Destacar a opção selecionada para grid de imagens
        const buttons = document.querySelectorAll('.image-option-btn');
        buttons.forEach((btn, idx) => {
            if (idx === index) {
                btn.classList.add('selected');
            } else {
                btn.style.opacity = '0.6';
            }
        });
    } else if (currentQ.type === 'emoji-options') {
        // Destacar a opção selecionada para emoji options
        const buttons = document.querySelectorAll('.emoji-option-btn');
        buttons.forEach((btn, idx) => {
            if (idx === index) {
                btn.classList.add('selected');
            } else {
                btn.style.opacity = '0.5';
            }
        });
    } else {
        // Destacar a opção selecionada para opções normais
        const buttons = document.querySelectorAll('.option-btn-new');
        buttons.forEach((btn, idx) => {
            if (idx === index) {
                btn.classList.add('selected');
                const circle = btn.querySelector('.option-circle');
                circle.innerHTML = '✓';
            } else {
                btn.style.opacity = '0.5';
            }
        });
    }

    setTimeout(() => {
        quizData.currentQuestion++;

        if (quizData.currentQuestion < quizData.questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 800);
}

// Função para mostrar resultados
function showResults() {
    const container = document.querySelector('.container');

    container.innerHTML = `
        <!-- Logo no topo -->
        <div class="logo-container">
            <img src="img/logo.png" alt="Mounjaro dos Pobres Logo" class="logo">
        </div>
        
        <!-- Barra de progresso completa -->
        <div class="progress-container">
            <div class="progress-bar">
                <div class="progress-fill" style="width: 100%;"></div>
            </div>
        </div>
        
        <!-- Resultados -->
        <div class="results-content">
            <div class="results-card">
                <h2 class="results-title">🎉 Parabéns!</h2>
                <p class="results-subtitle">Baseado nas suas respostas, você está qualificado(a) para receber nossa receita exclusiva!</p>
                
                <div class="results-info">
                    <div class="info-item">
                        <span class="info-icon">⚡</span>
                        <span class="info-text">Resultado personalizado pronto</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🎯</span>
                        <span class="info-text">Plano adaptado ao seu perfil</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">📱</span>
                        <span class="info-text">Acesso imediato garantido</span>
                    </div>
                </div>
                
                <div class="final-cta">
                    <p class="cta-text"><strong>ATENÇÃO:</strong> Esta oportunidade é limitada e exclusiva para você!</p>
                    <button class="results-btn" onclick="showFinalOffer()">
                        QUERO MINHA RECEITA AGORA!
                    </button>
                </div>
            </div>
        </div>
    `;

    // Adicionar estilos para a tela de resultados
    addResultsStyles();
}

// Função para mostrar oferta final
function showFinalOffer() {
    alert('Redirecionando para a página de oferta...\n\nEm breve você receberá sua receita personalizada!');
}

// Adicionar estilos CSS dinamicamente para as perguntas
function addQuestionStyles() {
    if (!document.getElementById('question-styles')) {
        const style = document.createElement('style');
        style.id = 'question-styles';
        style.textContent = `
            .question-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 20px;
                background: white;
            }
            
            .back-btn {
                background: none;
                border: none;
                font-size: 24px;
                color: #666;
                cursor: pointer;
                padding: 5px;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .back-btn:hover {
                background: #f0f0f0;
            }
            
            .back-placeholder {
                width: 40px;
                height: 40px;
            }
            
            .logo-small {
                width: 100px;
                height: 50px;
                border-radius: 8px;
                object-fit: contain;
            }
            
            .header-spacer {
                width: 40px;
            }
            
            .question-content {
                padding: 30px 20px;
                background: white;
            }
            
            .question-title {
                font-size: 20px;
                font-weight: bold;
                color: #333;
                margin-bottom: 15px;
                text-align: center;
                line-height: 1.3;
            }
            
            .question-subtitle {
                font-size: 14px;
                color: #666;
                text-align: center;
                margin-bottom: 30px;
                line-height: 1.4;
            }
            
            .options-container {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .option-btn-new {
                background: white;
                border: 2px solid #E0E0E0;
                padding: 18px 20px;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 500;
                color: #333;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .option-btn-new:hover {
                border-color: #00a396;
                background: #F8F9FA;
            }
            
            .option-btn-new.selected {
                background: #00a396 !important;
                border-color: #00a396 !important;
                color: white !important;
                opacity: 1 !important;
            }
            
            .option-text {
                flex: 1;
                text-align: left;
            }
            
            .option-circle {
                width: 24px;
                height: 24px;
                border: 2px solid #E0E0E0;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-weight: bold;
                background: white;
                color: #00a396;
            }
            
            .option-btn-new.selected .option-circle {
                background: white;
                border-color: white;
                color: #00a396;
            }
            
            /* Estilos para grid de imagens */
            .options-container.image-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin-top: 20px;
            }
            
            .image-option-btn {
                background: white;
                border: 2px solid #E0E0E0;
                border-radius: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
                overflow: hidden;
                padding: 0;
                display: flex;
                flex-direction: column;
                height: 200px;
            }
            
            .image-option-btn:hover {
                border-color: #00a396;
                transform: scale(1.02);
                box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
            }
            
            .image-option-btn.selected {
                border-color: #00a396 !important;
                transform: scale(1.02);
                box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
            }
            
            .image-container {
                flex: 1;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f8f9fa;
            }
            
            .body-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
            
            .image-option-label {
                background: #00a396;
                color: white;
                padding: 12px 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 600;
                font-size: 16px;
            }
            
            .option-label-text {
                flex: 1;
            }
            
            .option-arrow {
                font-size: 18px;
                font-weight: bold;
            }
            
            .image-option-btn.selected .image-option-label {
                background: #00a396;
            }
            
            /* Responsividade para grid de imagens */
            @media (max-width: 480px) {
                .options-container.image-grid {
                    gap: 10px;
                }
                
                .image-option-btn {
                    height: 180px;
                }
                
                .image-option-label {
                    padding: 10px 12px;
                    font-size: 14px;
                }
            }
            
            /* Estilos para lista de ícones */
            .options-container.icon-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-top: 20px;
            }
            
            .icon-option-btn {
                background: white;
                border: 2px solid #E0E0E0;
                border-radius: 12px;
                padding: 16px 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
            }
            
            .icon-option-btn:hover {
                border-color: #00a396;
                background: #F8F9FA;
            }
            
            .icon-option-btn.selected {
                border-color: #00a396 !important;
                background: #F1F8E9 !important;
            }
            
            .icon-content {
                display: flex;
                align-items: center;
                gap: 15px;
                flex: 1;
            }
            
            .option-icon {
                width: 48px;
                height: 48px;
                object-fit: contain;
                border-radius: 8px;
            }
            
            .option-text-icon {
                font-size: 16px;
                font-weight: 500;
                color: #333;
                text-align: left;
            }
            
            .option-circle-icon {
                width: 24px;
                height: 24px;
                border: 2px solid #E0E0E0;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-weight: bold;
                background: white;
                color: #00a396;
                flex-shrink: 0;
            }
            
            .icon-option-btn.selected .option-circle-icon {
                background: #00a396;
                border-color: #00a396;
                color: white;
            }
            
            /* Seção do botão continuar */
            .continue-section {
                margin-top: 30px;
                padding-top: 20px;
            }
            
            .continue-quiz-btn {
                background: #CCCCCC;
                color: white;
                border: none;
                padding: 15px 40px;
                font-size: 18px;
                font-weight: bold;
                border-radius: 25px;
                cursor: not-allowed;
                transition: all 0.3s ease;
                width: 100%;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .continue-quiz-btn.enabled {
                background: linear-gradient(135deg, #00a396, #00a396);
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
            }
            
            .continue-quiz-btn.enabled:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
            }
            
            .continue-quiz-btn:disabled {
                opacity: 0.6;
            }
            
            /* Estilos para input de nome */
            .name-input-container {
                margin: 30px 0;
            }
            
            .name-input {
                width: 100%;
                padding: 18px 20px;
                border: 2px solid #E0E0E0;
                border-radius: 12px;
                font-size: 16px;
                background: #F5F5F5;
                color: #333;
                outline: none;
                transition: all 0.3s ease;
            }
            
            .name-input:focus {
                border-color: #00a396;
                background: white;
            }
            
            .name-input::placeholder {
                color: #999;
            }
            
            /* Estilos para inputs de dados (peso, altura, etc.) */
            .input-container {
                margin: 30px 0;
            }
            
            .data-input {
                width: 100%;
                padding: 18px 20px;
                border: 2px solid #E0E0E0;
                border-radius: 12px;
                font-size: 16px;
                background: #F5F5F5;
                color: #333;
                outline: none;
                transition: all 0.3s ease;
                text-align: center;
            }
            
            .data-input:focus {
                border-color: #00a396;
                background: white;
            }
            
            .data-input::placeholder {
                color: #999;
            }
            
            .input-description {
                font-size: 14px;
                color: #666;
                text-align: center;
                margin: 15px 0 0 0;
                line-height: 1.4;
                padding: 0 10px;
            }
            
            /* Estilos para opções com emoji */
            .options-container.emoji-options {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-top: 20px;
            }
            
            .emoji-option-btn {
                background: white;
                border: 2px solid #E0E0E0;
                border-radius: 12px;
                padding: 18px 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                text-align: left;
            }
            
            .emoji-option-btn:hover {
                border-color: #00a396;
                background: #F8F9FA;
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .emoji-option-btn.selected {
                border-color: #00a396 !important;
                background: #F1F8E9 !important;
                transform: translateY(-1px);
                box-shadow: 0 2px 12px rgba(76, 175, 80, 0.2);
            }
            
            .emoji-content {
                display: flex;
                align-items: center;
                gap: 15px;
                flex: 1;
            }
            
            .option-emoji {
                font-size: 28px;
                flex-shrink: 0;
            }
            
            .option-text-emoji {
                font-size: 16px;
                font-weight: 500;
                color: #333;
                line-height: 1.4;
            }
            
            .option-arrow-emoji {
                font-size: 18px;
                font-weight: bold;
                color: #666;
                flex-shrink: 0;
            }
            
            .emoji-option-btn.selected .option-arrow-emoji {
                color: #00a396;
            }
            
            /* Estilos para opções simples com ícone */
            .options-container.icon-simple {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-top: 20px;
            }
            
            .simple-option-btn {
                background: white;
                border: 2px solid #E0E0E0;
                border-radius: 12px;
                padding: 18px 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                text-align: left;
            }
            
            .simple-option-btn:hover {
                border-color: #00a396;
                background: #F8F9FA;
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .simple-option-btn.selected {
                border-color: #00a396 !important;
                background: #F1F8E9 !important;
                transform: translateY(-1px);
                box-shadow: 0 2px 12px rgba(76, 175, 80, 0.2);
            }
            
            .simple-option-content {
                display: flex;
                align-items: center;
                gap: 15px;
                flex: 1;
            }
            
            .simple-option-icon {
                font-size: 24px;
                flex-shrink: 0;
            }
            
            .simple-option-text {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            
            .simple-option-title {
                font-size: 16px;
                font-weight: 600;
                color: #333;
            }
            
            .simple-option-subtitle {
                font-size: 14px;
                color: #666;
                line-height: 1.3;
            }
            
            .simple-option-arrow {
                font-size: 18px;
                font-weight: bold;
                color: #666;
                flex-shrink: 0;
            }
            
            .simple-option-btn.selected .simple-option-arrow {
                color: #00a396;
            }
            
            /* Estilos para tela informativa */
            .info-screen-content {
                text-align: center;
                padding: 20px 0;
            }
            
            .info-header {
                margin-bottom: 20px;
            }
            
            .info-title {
                font-size: 18px;
                color: #333;
                margin-bottom: 5px;
                font-weight: 500;
            }
            
            .info-subtitle {
                font-size: 16px;
                color: #00a396;
                font-weight: 600;
            }
            
            .info-main-title {
                font-size: 20px;
                font-weight: 900;
                color: #e74c3c;
                margin: 20px 0;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
                line-height: 1.2;
            }
            
            .info-image-container {
                margin: 30px 0;
                display: flex;
                justify-content: center;
            }
            
            .info-image {
                max-width: 100%;
                height: auto;
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            
            .info-description {
                font-size: 16px;
                color: #333;
                line-height: 1.4;
                margin: 20px 0;
                padding: 0 10px;
            }
            
            /* Estilos para tela de depoimento */
            .testimonial-content {
                text-align: center;
                padding: 20px;
                background: white;
            }
            
            .testimonial-header {
                margin-bottom: 20px;
            }
            
            .testimonial-title {
                font-size: 20px;
                font-weight: bold;
                color: #333;
                margin: 0;
                line-height: 1.3;
            }
            
            .testimonial-image-container {
                margin: 20px 0;
                display: flex;
                justify-content: center;
            }
            
            .testimonial-image {
                max-width: 100%;
                height: auto;
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            
            .testimonial-rating {
                font-size: 20px;
                margin: 15px 0 10px 0;
            }
            
            .testimonial-author {
                margin-bottom: 20px;
            }
            
            .author-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                margin: 0 0 5px 0;
            }
            
            .author-handle {
                font-size: 14px;
                color: #999;
                margin: 0;
            }
            
            .testimonial-text {
                background: #F8F9FA;
                border-radius: 12px;
                padding: 20px;
                margin: 20px 0;
                border-left: 4px solid #00a396;
            }
            
            .testimonial-text p {
                font-size: 15px;
                color: #555;
                line-height: 1.5;
                margin: 0;
                text-align: left;
            }
            
            /* Estilos para tela de loading */
            .loading-screen-content {
                text-align: center;
                padding: 30px 20px;
                background: white;
            }
            
            .loading-header {
                margin-bottom: 30px;
            }
            
            .loading-title {
                font-size: 20px;
                font-weight: bold;
                color: #333;
                margin: 0 0 15px 0;
                line-height: 1.3;
            }
            
            .loading-subtitle {
                font-size: 16px;
                color: #666;
                margin: 0;
            }
            
            .loading-progress {
                font-weight: bold;
                color: #00a396;
            }
            

            
            .loading-carousel {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                margin: 30px 0;
            }
            
            .carousel-btn {
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 18px;
                transition: all 0.3s ease;
            }
            
            .carousel-btn:hover {
                background: rgba(0, 0, 0, 0.7);
                transform: scale(1.1);
            }
            
            .carousel-container {
                flex: 1;
                max-width: 400px;
                display: flex;
                justify-content: center;
            }
            
            .carousel-image {
                max-width: 100%;
                height: auto;
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                transition: opacity 0.5s ease-in-out;
            }
            
            .carousel-indicators {
                display: flex;
                justify-content: center;
                gap: 8px;
                margin-top: 20px;
            }
            
            .carousel-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.3);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .carousel-dot.active {
                background: #00a396;
                transform: scale(1.2);
            }
            
            /* Estilos para análise de IMC */
            .imc-analysis-content {
                padding: 20px;
                background: white;
            }
            
            .imc-intro {
                font-size: 16px;
                color: #666;
                text-align: center;
                margin: 0 0 20px 0;
            }
            
            .imc-section {
                margin-bottom: 25px;
            }
            
            .imc-title {
                font-size: 20px;
                font-weight: bold;
                color: #333;
                text-align: center;
                margin: 0 0 20px 0;
            }
            
            .imc-display {
                background: #f8f9fa;
                border-radius: 15px;
                padding: 20px;
                position: relative;
            }
            
            .imc-value-container {
                text-align: center;
                margin-bottom: 20px;
            }
            
            .imc-label {
                font-size: 14px;
                color: #666;
                display: block;
                margin-bottom: 5px;
            }
            
            .imc-value {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                display: block;
                margin-bottom: 10px;
            }
            
            .imc-status-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: #ff9800;
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
            }
            
            .imc-scale-container {
                margin-bottom: 15px;
            }
            
            .imc-scale-bar {
                position: relative;
                height: 12px;
                background: linear-gradient(to right, #00a396 0%, #8BC34A 25%, #FFC107 50%, #FF9800 75%, #F44336 100%);
                border-radius: 20px;
                margin-bottom: 25px;
            }
            
            .pointer-indicator {
                position: absolute;
                top: -30px;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 10;
            }
            
            .pointer-badge {
                background: #333;
                color: white;
                padding: 4px 8px;
                border-radius: 12px;
                font-size: 10px;
                font-weight: bold;
                margin-bottom: 8px;
                white-space: nowrap;
            }
            
            .pointer-circle {
                width: 14px;
                height: 14px;
                background: white;
                border: 3px solid #333;
                border-radius: 50%;
                position: absolute;
                top: 30px;
                left: 50%;
                transform: translateX(-50%);
            }
            
            .imc-categories {
                display: flex;
                justify-content: space-between;
                padding: 0 10px;
            }
            
            .imc-category-label {
                font-size: 11px;
                font-weight: 500;
                color: #666;
                text-align: center;
                flex: 1;
            }
            
            /* Estilos para alertas */
            .alerts-section {
                margin: 25px 0;
            }
            
            .alert-box {
                border-radius: 12px;
                padding: 15px;
                margin-bottom: 15px;
                border-left: 4px solid;
            }
            
            .alert-danger {
                background: #ffebee;
                border-left-color: #f44336;
            }
            
            .alert-warning {
                background: #fff9c4;
                border-left-color: #ff9800;
            }
            
            .alert-success {
                background: #e8f5e8;
                border-left-color: #00a396;
            }
            
            .alert-header {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                margin-bottom: 10px;
            }
            
            .alert-icon {
                font-size: 14px;
                flex-shrink: 0;
            }
            
            .alert-title {
                font-size: 14px;
                font-weight: bold;
                color: #333;
                line-height: 1.3;
            }
            
            .alert-description {
                font-size: 13px;
                color: #555;
                line-height: 1.4;
                margin: 0;
            }
            
            .alert-symptoms {
                margin-top: 10px;
            }
            
            .symptom-item {
                font-size: 13px;
                color: #555;
                margin-bottom: 8px;
                line-height: 1.3;
            }
            
            /* Estilos para seção de depoimento */
            .testimonial-section {
                margin: 25px 0;
                text-align: center;
            }
            
            .testimonial-section-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                margin: 0 0 15px 0;
            }
            
            .testimonial-images-grid {
                display: flex;
                gap: 10px;
                justify-content: center;
                margin: 15px 0;
                overflow-x: auto;
            }
            
            .testimonial-grid-image {
                width: 320px;
                height: 240px;
                object-fit: contain;
                border-radius: 10px;
                flex-shrink: 0;
                max-width: 90vw;
            }
            
            .testimonial-section-description {
                font-size: 14px;
                color: #555;
                line-height: 1.5;
                margin: 15px 0 0 0;
                text-align: left;
            }
            
            /* Estilos para taxa de sucesso */
            .success-rate-section {
                margin: 25px 0;
            }
            
            .success-rate-title {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                margin: 0 0 8px 0;
            }
            
            .success-rate-description {
                font-size: 12px;
                color: #666;
                margin: 0 0 15px 0;
                line-height: 1.4;
            }
            
            .success-rate-bar {
                position: relative;
                background: #e0e0e0;
                border-radius: 10px;
                height: 20px;
                overflow: hidden;
            }
            
            .success-rate-fill {
                height: 100%;
                background: linear-gradient(90deg, #00a396, #00a396);
                border-radius: 10px;
                position: relative;
                transition: width 2s ease-in-out;
            }
            
            .success-rate-text {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
                font-weight: bold;
                color: #333;
            }
            
            /* Estilos para comparação de planos */
            .plan-comparison-content {
                padding: 20px;
                background: white;
            }
            
            .plan-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                text-align: center;
                margin: 0 0 20px 0;
                line-height: 1.3;
            }
            
            .comparison-labels {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin-bottom: 20px;
            }
            
            .before-label, .after-label {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px;
                border-radius: 10px;
                font-size: 13px;
                font-weight: 500;
            }
            
            .before-label {
                background: #ffebee;
                border: 1px solid #ffcdd2;
                color: #d32f2f;
            }
            
            .after-label {
                background: #e8f5e8;
                border: 1px solid #c8e6c9;
                color: #00a396;
            }
            
            .warning-icon, .success-icon {
                font-size: 14px;
                flex-shrink: 0;
            }
            
            .label-text {
                line-height: 1.2;
            }
            
            .images-comparison {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin-bottom: 25px;
            }
            
            .before-images, .after-images {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .comparison-image {
                width: 100%;
                height: 120px;
                object-fit: cover;
                border-radius: 10px;
            }
            
            .comparison-bars {
                margin-bottom: 25px;
            }
            
            .comparison-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin-bottom: 20px;
            }
            
            .before-comparison, .after-comparison {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .comparison-text {
                font-size: 13px;
                color: #555;
                margin: 0;
                line-height: 1.3;
                font-weight: 500;
            }
            
            .progress-bar {
                position: relative;
                height: 12px;
                background: #e0e0e0;
                border-radius: 15px;
                overflow: visible;
            }
            
            .progress-fill {
                height: 100%;
                border-radius: 15px;
                position: relative;
            }
            
            .red-fill {
                background: #f44336;
            }
            
            .green-fill {
                background: #00a396;
            }
            
            .progress-indicator {
                position: absolute;
                top: 50%;
                right: -7px;
                transform: translateY(-50%);
                width: 14px;
                height: 14px;
                background: white;
                border: 3px solid #ccc;
                border-radius: 50%;
                z-index: 2;
            }
            
            .before-bar .progress-indicator {
                border-color: #f44336;
            }
            
            .after-bar .progress-indicator {
                border-color: #00a396;
            }
            
            .how-it-works {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 15px;
                margin-bottom: 25px;
            }
            
            .how-it-works-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                margin: 0 0 15px 0;
                text-align: center;
            }
            
            .how-it-works-title::before {
                content: "Como funciona ";
                color: #00a396;
            }
            
            .how-it-works-title::after {
                content: " o Plano?";
                color: #333;
            }
            
            .how-it-works-description {
                font-size: 14px;
                color: #555;
                line-height: 1.5;
                margin: 0;
                text-align: left;
            }
            
            .plan-header {
                margin-bottom: 20px;
                text-align: center;
            }
            
            .plan-badge {
                background: #00a396;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: bold;
                display: inline-block;
                margin-bottom: 15px;
            }
            
            .plan-content {
                text-align: left;
            }
            
            .plan-list {
                list-style: none;
                padding: 0;
                margin: 0 0 25px 0;
            }
            
            .plan-list li {
                margin-bottom: 15px;
                font-size: 14px;
                line-height: 1.5;
                color: #555;
                position: relative;
                padding-left: 20px;
            }
            
            .plan-list li::before {
                content: "•";
                color: #00a396;
                font-weight: bold;
                position: absolute;
                left: 0;
                top: 0;
            }
            
            .plan-list li strong {
                color: #333;
                font-weight: 600;
            }
            
            .bonus-item {
                color: #00a396 !important;
                font-weight: 600 !important;
            }
            
            .bonus-item::before {
                content: "•";
                color: #00a396 !important;
            }
            
            .testimonial-title-section {
                text-align: center;
                margin: 25px 0 20px 0;
            }
            
            .testimonial-title-section h3 {
                font-size: 18px;
                color: #333;
                margin: 0;
                font-weight: bold;
            }
            
            .highlight-green {
                color: #00a396;
            }
            
            .emoji {
                font-size: 20px;
            }
            
            .results-images {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 20px;
            }
            
            .result-image {
                width: 100%;
                max-width: 400px;
                height: auto;
                border-radius: 10px;
                margin: 0 auto;
                display: block;
            }
            
            .bonus-guarantee-text {
                text-align: center;
                font-size: 16px;
                color: #00a396;
                font-weight: bold;
                margin: 20px 0 0 0;
                line-height: 1.4;
                padding: 15px;
                background: #f8fff8;
                border: 2px solid #00a396;
                border-radius: 10px;
            }
            
            .bonus-images {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 20px;
                align-items: center;
            }
            
            .bonus-image {
                width: 100%;
                max-width: 500px;
                height: auto;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .start-today-btn {
                background: linear-gradient(135deg, #00a396, #00a396);
                color: white;
                border: none;
                padding: 18px 40px;
                border-radius: 8px;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 6px 20px rgba(39, 174, 96, 0.3);
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .start-today-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(39, 174, 96, 0.4);
                background: linear-gradient(135deg, #00a396, #00a396);
            }
            
            .start-today-btn:active {
                transform: translateY(0);
            }
            
            /* Responsividade para novos elementos */
            @media (max-width: 480px) {
                .name-input {
                    padding: 15px 18px;
                    font-size: 16px;
                }
                
                .data-input {
                    padding: 15px 18px;
                    font-size: 16px;
                }
                
                .input-description {
                    font-size: 13px;
                    margin: 12px 0 0 0;
                }
                
                .emoji-option-btn {
                    padding: 15px 18px;
                }
                
                .option-emoji {
                    font-size: 24px;
                }
                
                .option-text-emoji {
                    font-size: 14px;
                }
                
                .simple-option-btn {
                    padding: 15px 16px;
                }
                
                .simple-option-icon {
                    font-size: 20px;
                }
                
                .simple-option-title {
                    font-size: 15px;
                }
                
                .simple-option-subtitle {
                    font-size: 13px;
                }
                
                .info-main-title {
                    font-size: 18px;
                }
                
                .info-description {
                    font-size: 15px;
                }
                
                .testimonial-title {
                    font-size: 18px;
                }
                
                .testimonial-text {
                    padding: 15px;
                    margin: 15px 0;
                }
                
                .testimonial-text p {
                    font-size: 14px;
                }
                
                .testimonial-rating {
                    font-size: 18px;
                }
                
                .loading-screen-content {
                    padding: 20px 15px;
                }
                
                .loading-title {
                    font-size: 18px;
                }
                
                .loading-subtitle {
                    font-size: 14px;
                }
                
                .loading-carousel {
                    gap: 15px;
                    margin: 20px 0;
                }
                
                .carousel-btn {
                    width: 35px;
                    height: 35px;
                    font-size: 16px;
                }
                
                .carousel-container {
                    max-width: 300px;
                }
                
                .imc-analysis-content {
                    padding: 15px;
                }
                
                .imc-title {
                    font-size: 18px;
                }
                
                .imc-display {
                    padding: 15px;
                }
                
                .imc-value {
                    font-size: 20px;
                }
                
                .imc-category-label {
                    font-size: 10px;
                }
                
                .pointer-badge {
                    font-size: 9px;
                    padding: 3px 6px;
                }
                
                .alert-box {
                    padding: 12px;
                }
                
                .alert-title {
                    font-size: 13px;
                }
                
                .alert-description, .symptom-item {
                    font-size: 12px;
                }
                
                .testimonial-section-title {
                    font-size: 16px;
                }
                
                .testimonial-grid-image {
                    width: 280px;
                    height: 200px;
                    max-width: 85vw;
                }
                
                .testimonial-section-description {
                    font-size: 13px;
                }
                
                .success-rate-title {
                    font-size: 15px;
                }
                
                .plan-comparison-content {
                    padding: 15px;
                }
                
                .plan-title {
                    font-size: 16px;
                }
                
                .comparison-labels {
                    gap: 10px;
                }
                
                .before-label, .after-label {
                    font-size: 12px;
                    padding: 8px;
                }
                
                .images-comparison {
                    gap: 10px;
                }
                
                .comparison-image {
                    height: 100px;
                }
                
                .comparison-row {
                    gap: 10px;
                    margin-bottom: 15px;
                }
                
                .comparison-text {
                    font-size: 12px;
                }
                
                .how-it-works {
                    padding: 15px;
                }
                
                .how-it-works-title {
                    font-size: 16px;
                }
                
                .how-it-works-description {
                    font-size: 13px;
                }
                
                .plan-badge {
                    font-size: 13px;
                    padding: 6px 12px;
                }
                
                .plan-list li {
                    font-size: 13px;
                    margin-bottom: 12px;
                }
                
                .testimonial-title-section h3 {
                    font-size: 16px;
                }
                
                .emoji {
                    font-size: 18px;
                }
                
                .result-image {
                    max-width: 300px;
                }
                
                .bonus-guarantee-text {
                    font-size: 14px;
                    padding: 12px;
                    margin: 15px 0 0 0;
                }
                
                .bonus-images {
                    gap: 12px;
                    margin-top: 15px;
                }
                
                .bonus-image {
                    max-width: 280px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Adicionar estilos CSS dinamicamente para os resultados
function addResultsStyles() {
    if (!document.getElementById('results-styles')) {
        const style = document.createElement('style');
        style.id = 'results-styles';
        style.textContent = `
            .results-content {
                padding: 20px;
                background: linear-gradient(135deg, #E8F5E8, #F1F8E9);
            }
            
            .results-card {
                background: white;
                border-radius: 15px;
                padding: 30px 20px;
                text-align: center;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            }
            
            .results-title {
                font-size: 28px;
                color: #00a396;
                margin-bottom: 15px;
                font-weight: bold;
            }
            
            .results-subtitle {
                font-size: 16px;
                color: #555;
                margin-bottom: 30px;
                line-height: 1.4;
            }
            
            .results-info {
                margin-bottom: 30px;
            }
            
            .info-item {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;
                font-size: 16px;
                color: #333;
            }
            
            .info-icon {
                font-size: 20px;
                margin-right: 12px;
            }
            
            .final-cta {
                background: linear-gradient(135deg, #FFEB3B, #FFF59D);
                padding: 20px;
                border-radius: 12px;
                margin-top: 20px;
            }
            
            .cta-text {
                font-size: 14px;
                color: #F57F17;
                margin-bottom: 15px;
                font-weight: 600;
            }
            
            .results-btn {
                background: linear-gradient(135deg, #FF5722, #FF7043);
                color: white;
                border: none;
                padding: 15px 30px;
                font-size: 16px;
                font-weight: bold;
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .results-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 87, 34, 0.4);
            }
            
            .results-btn:active {
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
}

// Função para o botão "Quero Começar Hoje"
function startToday() {
    // Redirecionar para o link de checkout
    window.location.href = 'https://pix-flow-ready.vercel.app/';
}
