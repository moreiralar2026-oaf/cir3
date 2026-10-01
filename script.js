// ==========================================================================
// DADOS DO CONTEÚDO
// ==========================================================================

const topics = [
    // Capítulo 3: Princípios da Cirurgia
    {
        id: 'ch3-desenvolvimento-diagnostico',
        title: 'Desenvolvimento do Diagnóstico Cirúrgico',
        category: 'Princípios de Cirurgia',
        summary: 'Processo de coleta de dados, exames e raciocínio clínico para decidir sobre a cirurgia.',
        explanation: 'A decisão cirúrgica deve ser tomada antes da anestesia. O diagnóstico baseia-se na coleta de dados precisos (entrevista, exames físico, laboratorial, imagem), organizados para testar hipóteses e eliminar doenças incompatíveis. O profissional deve ser um observador atento, refletindo sobre os resultados para melhorar continuamente.',
        mnemonic: 'DADOS: Dados precisos, Anamnese, Diagnóstico diferencial, Organização, Seleção do procedimento.',
        commonMistakes: [
            'Aceitar dados incompletos ou radiografias de baixa qualidade.',
            'Realizar a cirurgia sem um plano diagnóstico bem estabelecido.'
        ],
        flashcards: [
            {
                category: 'definição',
                question: 'Qual é o primeiro passo na avaliação pré-cirúrgica?',
                answer: 'A coleta de dados pertinentes e precisos por meio de entrevistas e exames.',
                explanation: 'O diagnóstico é a base de todo o planejamento cirúrgico, conforme o Capítulo 3.'
            }
        ],
        questions: [
            {
                type: 'multiple-choice',
                question: 'De acordo com o material, quando as decisões importantes sobre o procedimento cirúrgico devem ser tomadas?',
                options: [
                    'Durante a administração da anestesia.',
                    'Bem antes do início da administração da anestesia.',
                    'Após a incisão inicial.',
                    'No período pós-operatório.'
                ],
                correctAnswer: 1,
                explanation: 'O texto afirma explicitamente que as decisões devem ser tomadas bem antes do início da anestesia.'
            }
        ],
        cases: [
            {
                level: 1,
                patient: 'Paciente de 45 anos chega para extração do dente 38. Ele traz uma radiografia panorâmica de 2 anos atrás.',
                data: 'Radiografia antiga, sem outras queixas.',
                question: 'Qual é o primeiro passo para um diagnóstico cirúrgico adequado?',
                options: [
                    'Agendar a cirurgia imediatamente.',
                    'Solicitar uma nova radiografia periapical e realizar uma anamnese completa.',
                    'Prescrever antibiótico profilático.',
                    'Extrair o dente com base na radiografia antiga.'
                ],
                correctAnswer: 1,
                explanation: 'Radiografias antigas (mais de 1 ano) devem ser refeitas. A anamnese completa é essencial para um diagnóstico preciso.'
            }
        ]
    },
    {
        id: 'ch3-tecnica-asséptica',
        title: 'Técnica Asséptica',
        category: 'Princípios de Cirurgia',
        summary: 'Métodos para minimizar a contaminação da ferida por micróbios patogênicos.',
        explanation: 'A técnica asséptica é um princípio cirúrgico fundamental para prevenir infecções. Envolve a esterilização de instrumentais, uso de barreiras e preparo do campo cirúrgico. O material remete ao Capítulo 5 para detalhes.',
        mnemonic: 'ASSEPSIA: Ambiente estéril, Superfícies limpas, Sem contato, Esterilização, Proteção, Isolamento, Antissepsia.',
        commonMistakes: [
            'Negligenciar a esterilização de instrumentais.',
            'Tocar em superfícies não estéreis durante o procedimento.'
        ],
        flashcards: [
            {
                category: 'definição',
                question: 'Qual é o objetivo principal da técnica asséptica?',
                answer: 'Minimizar a contaminação da ferida por micróbios patogênicos.',
                explanation: 'É um princípio fundamental para prevenir infecções pós-operatórias.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch3-incisoes',
        title: 'Incisões',
        category: 'Princípios de Cirurgia',
        summary: 'Princípios básicos para realizar incisões precisas e que favoreçam a cicatrização.',
        explanation: 'Princípios: 1) Lâmina afiada e adequada. 2) Incisão firme e contínua. 3) Preservar estruturas importantes. 4) Lâmina perpendicular para bordas quadradas (melhor sutura e menos necrose). 5) Bom posicionamento (evitar gengiva não inserida, osso doente, proeminências).',
        mnemonic: 'C.L.A.P.: Cortante afiada, Linha contínua, Atenção às estruturas, Perpendicular à superfície.',
        commonMistakes: [
            'Usar lâmina cega ou fazer movimentos repetitivos.',
            'Incisar em ângulo, criando bordas oblíquas difíceis de suturar.'
        ],
        flashcards: [
            {
                category: 'técnica',
                question: 'Por que a lâmina do bisturi deve ser mantida perpendicular à superfície epitelial?',
                answer: 'Para criar bordas quadradas no corte, que são mais fáceis de reaproximar na sutura e menos suscetíveis à necrose por isquemia.',
                explanation: 'Bordas oblíquas dificultam a sutura e comprometem o suprimento sanguíneo.'
            }
        ],
        questions: [
            {
                type: 'true-false',
                question: 'Incisões curtas e intermitentes são preferíveis a incisões longas e contínuas.',
                correctAnswer: false,
                explanation: 'O material afirma que incisões longas e contínuas são preferíveis, pois repetições e tentativas aumentam o dano tecidual e o sangramento.'
            }
        ],
        cases: []
    },
    {
        id: 'ch3-planejamento-retalho',
        title: 'Planejamento do Retalho',
        category: 'Princípios de Cirurgia',
        summary: 'Princípios para desenhar retalhos que evitem necrose, deiscência e dilaceração.',
        explanation: 'Para prevenir necrose: ápice não maior que a base, altura não mais que 2x a largura da base, incluir suprimento sanguíneo axial e evitar torção/pressão na base. Para prevenir deiscência: aproximar bordas sobre osso saudável, sem tensão. Para prevenir dilaceração: criar retalho amplo o suficiente desde o início.',
        mnemonic: 'NÃO NECROSE: Não ultrapassar proporções, Artéria na base, Oxigenação, Sem torção, Sutura sem tensão, Estabilidade.',
        commonMistakes: [
            'Criar um retalho em envelope pequeno que não oferece acesso suficiente, levando à dilaceração.',
            'Posicionar a incisão relaxante muito próxima à área de remoção óssea.'
        ],
        flashcards: [
            {
                category: 'classificação',
                question: 'Quais são as três complicações primárias do retalho cirúrgico que o planejamento deve prevenir?',
                answer: 'Necrose, deiscência e dilaceração.',
                explanation: 'O material lista essas três complicações como as principais a serem evitadas.'
            },
            {
                category: 'definição',
                question: 'O que é deiscência do retalho?',
                answer: 'É a separação que leva à abertura de uma incisão suturada.',
                explanation: 'A deiscência expõe o osso subjacente, causando dor, perda óssea e aumento da cicatriz.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch3-manipulacao-tecido',
        title: 'Manipulação de Tecido',
        category: 'Princípios de Cirurgia',
        summary: 'Técnicas delicadas para minimizar o trauma aos tecidos durante a cirurgia.',
        explanation: 'Puxar ou apertar excessivamente, temperaturas extremas, dissecção ou produtos químicos não fisiológicos danificam o tecido. Usar pinças denteadas ou ganchos, não apertar com força, irrigar abundantemente ao cortar osso, manter tecidos úmidos e usar apenas substâncias fisiológicas.',
        mnemonic: 'DELICADO: Destreza, Evitar força, Lubrificação (irrigação), Instrumentos adequados, Cuidado, Atenção, Delicadeza, Oxigenação.',
        commonMistakes: [
            'Afastar excessivamente as bochechas ou a língua.',
            'Deixar os tecidos desidratarem durante o procedimento.'
        ],
        flashcards: [
            {
                category: 'aplicação clínica',
                question: 'Qual é a finalidade da irrigação abundante ao se cortar osso com broca?',
                answer: 'Diminuir a quantidade de osso danificado devido ao calor da fricção.',
                explanation: 'A irrigação também melhora a eficiência da broca e remove fragmentos.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch3-hemostasia',
        title: 'Hemostasia',
        category: 'Princípios de Cirurgia',
        summary: 'Métodos para controlar o sangramento durante a cirurgia.',
        explanation: 'A hemostasia é crucial para manter a visibilidade e prevenir hematomas. Quatro meios: 1) Auxiliar mecanismos naturais (pressão com gaze). 2) Ligadura por sutura. 3) Colocar substâncias vasoconstritoras (epinefrina) ou pró-coagulantes (trombina, colágeno). 4) Eletrocoagulação (implícito).',
        mnemonic: 'P.L.E.C.: Pressão, Ligadura, Epinefrina, Coagulação.',
        commonMistakes: [
            'Esfregar a ferida em vez de comprimir, reabrindo vasos coagulados.',
            'Administrar epinefrina após o início do sangramento (é ineficaz).'
        ],
        flashcards: [
            {
                category: 'mecanismo',
                question: 'Qual é o efeito da epinefrina na hemostasia local?',
                answer: 'Vasoconstrição. É mais eficaz quando colocada no local 7 minutos antes da cirurgia começar.',
                explanation: 'A epinefrina é ineficaz se administrada após o início do sangramento.'
            }
        ],
        questions: [
            {
                type: 'multiple-choice',
                question: 'Qual método de hemostasia envolve amarrar suturas ao redor de um vaso sanguíneo?',
                options: [
                    'Pressão com gaze',
                    'Ligadura por sutura',
                    'Aplicação de trombina',
                    'Vasoconstrição'
                ],
                correctAnswer: 1,
                explanation: 'A ligadura por sutura é o terceiro meio de hemostasia descrito no material.'
            }
        ],
        cases: []
    },
    {
        id: 'ch3-espaco-morto',
        title: 'Manejo do Espaço Morto',
        category: 'Princípios de Cirurgia',
        summary: 'Prevenção de acúmulo de sangue em áreas desprovidas de tecido após o fechamento da ferida.',
        explanation: 'Espaço morto é qualquer área desprovida de tecido após o fechamento. É preenchido por sangue, formando hematoma com grande potencial de infecção. O manejo inclui eliminar o espaço morto com suturas em camadas ou usar drenos.',
        mnemonic: 'ESPAÇO: Eliminar, Suturar, Preencher, Aspirar, Comprimir, Ocluir.',
        commonMistakes: [
            'Não reaproximar todos os planos teciduais durante o fechamento.',
            'Deixar de usar drenos quando indicado.'
        ],
        flashcards: [
            {
                category: 'definição',
                question: 'O que é espaço morto em uma ferida?',
                answer: 'Qualquer área que permaneça desprovida de tecido após o fechamento da ferida.',
                explanation: 'O espaço morto é preenchido com sangue, criando um hematoma com grande potencial para infecção.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch3-descontaminacao',
        title: 'Descontaminação e Desbridamento',
        category: 'Princípios de Cirurgia',
        summary: 'Redução de bactérias na ferida e remoção de tecido necrosado.',
        explanation: 'A irrigação repetida, sobretudo sob pressão, afasta bactérias e materiais externos. O desbridamento é a remoção cuidadosa de tecido gravemente isquêmico e necrosado e de material externo que impediria o reparo da ferida.',
        mnemonic: 'L.I.M.P.A.: Lavar, Irrigar, Manter limpo, Preservar tecido sadio, Aspirar detritos.',
        commonMistakes: [
            'Não irrigar a ferida durante a cirurgia.',
            'Realizar desbridamento agressivo em tecido saudável.'
        ],
        flashcards: [
            {
                category: 'definição',
                question: 'O que é desbridamento da ferida?',
                answer: 'É a remoção cuidadosa de tecido gravemente isquêmico e necrosado e de material externo do tecido lesionado que impediria o reparo da ferida.',
                explanation: 'Geralmente é adotado apenas durante o tratamento de feridas traumáticas ou em caso de dano grave no tecido por condição patológica.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch3-controle-inflamacao',
        title: 'Controle da Inflamação (Edema)',
        category: 'Princípios de Cirurgia',
        summary: 'Estratégias para minimizar o edema pós-cirúrgico.',
        explanation: 'O edema é acúmulo de fluido no espaço intersticial. Duas variáveis: quantidade de lesão tecidual e frouxidão do tecido conjuntivo. O controle é feito minimizando lesão, aplicando gelo (eficácia não comprovada), elevando a cabeça e usando corticosteroides sistêmicos (úteis se administrados antes da lesão).',
        mnemonic: 'EDEMA: Elevação, Descanso, Estimulação mínima, Medicamentos (corticoides), Avaliação.',
        commonMistakes: [
            'Iniciar corticosteroides após a lesão tecidual (perdem a eficácia).',
            'Realizar procedimento traumático desnecessariamente.'
        ],
        flashcards: [
            {
                category: 'aplicação clínica',
                question: 'Quando os corticosteroides sistêmicos são úteis para controlar o edema?',
                answer: 'Apenas se a administração for iniciada antes de o tecido ser lesionado.',
                explanation: 'Eles têm um impressionante poder de diminuir a inflamação e a transudação, mas perdem a eficácia se iniciados tardiamente.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch3-saude-geral',
        title: 'Saúde Geral do Paciente e Cicatrização',
        category: 'Princípios de Cirurgia',
        summary: 'Condições que prejudicam a cicatrização e como otimizar o paciente antes da cirurgia.',
        explanation: 'Condições catabólicas (diabetes tipo 1 mal controlado, doença hepática/renal em estágio final, malignidades), que interferem na entrega de O2/nutrientes (DPOC grave, ICC descompensada, alcoolismo) ou que requerem medicamentos que interferem nas defesas (corticosteroides, citotóxicos, irradiação). O profissional deve avaliar e melhorar o estado geral antes da cirurgia eletiva.',
        mnemonic: 'SAÚDE: Sistema imunológico, Alimentação, Oxigenação, Uso de medicamentos, Doenças de base, Equilíbrio metabólico.',
        commonMistakes: [
            'Realizar cirurgia eletiva em paciente com estado geral debilitado.',
            'Ignorar o uso de medicamentos que interferem na cicatrização.'
        ],
        flashcards: [
            {
                category: 'classificação',
                question: 'Cite três exemplos de enfermidades que induzem um estado metabólico catabólico.',
                answer: 'Diabetes melito tipo 1 mal controlado, doença hepática ou renal em estágio final e doenças malignas.',
                explanation: 'Essas condições impedem a entrega de oxigênio ou nutrientes aos tecidos.'
            }
        ],
        questions: [],
        cases: []
    },

    // Capítulo 7: Instrumentais
    {
        id: 'ch7-bisturi',
        title: 'Bisturi e Lâminas',
        category: 'Instrumentais',
        summary: 'Instrumento básico para incisões, composto por cabo e lâmina.',
        explanation: 'Cabo nº 3 é o mais comum. Lâminas: nº 15 (intrabucal, pequena), nº 10 (pele), nº 11 (pontiaguda para abscesso), nº 12 (gancho para áreas mucogengivais). Deve ser segurado como caneta. A lâmina deve ser colocada e removida com porta-agulha, sempre longe do corpo.',
        mnemonic: 'LÂMINAS: Lâmina 15 (intrabucal), 10 (pele), 11 (abscesso), 12 (gancho).',
        commonMistakes: [
            'Usar a lâmina errada para o procedimento.',
            'Colocar a lâmina com os dedos, aumentando o risco de lesão.',
            'Não descartar a lâmina em recipiente rígido para objetos afiados.'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual lâmina de bisturi é mais frequentemente usada para cirurgia intrabucal?',
                answer: 'Lâmina nº 15.',
                explanation: 'É pequena e usada para incisões em torno dos dentes e nos tecidos moles.'
            },
            {
                category: 'função → instrumento',
                question: 'Qual lâmina de bisturi é pontiaguda e utilizada para incisar e drenar um abscesso?',
                answer: 'Lâmina nº 11.',
                explanation: 'A lâmina nº 11 é pontiaguda e usada para pequenas incisões.'
            }
        ],
        questions: [
            {
                type: 'association',
                question: 'Associe a lâmina de bisturi à sua principal indicação:',
                pairs: [
                    { left: 'Lâmina nº 15', right: 'Incisões intrabucais em tecidos moles' },
                    { left: 'Lâmina nº 11', right: 'Incisão e drenagem de abscesso' },
                    { left: 'Lâmina nº 12', right: 'Incisões em áreas mucogengivais posteriores' }
                ],
                explanation: 'Cada lâmina tem um design específico para diferentes finalidades cirúrgicas.'
            }
        ],
        cases: []
    },
    {
        id: 'ch7-elevador-periosteal',
        title: 'Elevador Periosteal (Molt nº 9)',
        category: 'Instrumentais',
        summary: 'Instrumento para rebater o periósteo do osso.',
        explanation: 'O elevador Molt nº 9 tem extremidade pontiaguda (para iniciar elevação e rebater papilas) e extremidade larga e arredondada (para continuar a elevação do periósteo). Usado com movimento de torção ou impulso.',
        mnemonic: 'MOLT 9: Movimento de torção e impulso, Osteotomia, Levantamento de periósteo, Tecidos moles.',
        commonMistakes: [
            'Usar a extremidade errada para a finalidade.',
            'Não rebater o periósteo de forma adequada, dificultando o acesso.'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual é a função do elevador periosteal Molt nº 9?',
                answer: 'Rebater o periósteo do osso cortical subjacente.',
                explanation: 'Ele possui uma extremidade pontiaguda e uma larga para diferentes etapas da elevação.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-afastadores',
        title: 'Afastadores (Austin, Minnesota, Seldin, Weider)',
        category: 'Instrumentais',
        summary: 'Instrumentos para afastar tecidos moles e proporcionar acesso e visibilidade.',
        explanation: 'Austin (ângulo reto) e Minnesota (compensado) são os mais populares para bochecha e retalho. Seldin e Henahan são mais amplos. Weider é para língua (formato de coração, serrilhado).',
        mnemonic: 'A.M.S.W.: Austin (Ângulo), Minnesota (Múltiplas dobras), Seldin (Superfície lisa), Weider (Língua).',
        commonMistakes: [
            'Usar o afastador de Seldin para elevar o periósteo (sua borda não é afiada).',
            'Posicionar o afastador de Weider muito posteriormente, provocando náusea.'
        ],
        flashcards: [
            {
                category: 'função → instrumento',
                question: 'Qual afastador é especificamente projetado para retrair a língua?',
                answer: 'Afastador de Weider.',
                explanation: 'É um afastador largo, em formato de coração, serrilhado de um lado para segurar a língua.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-pincas',
        title: 'Pinças (Adson, Stillies, Allis, Hemostática)',
        category: 'Instrumentais',
        summary: 'Instrumentos para preensão de tecidos e materiais.',
        explanation: 'Adson (pick-up): delicada, para tecido mole. Stillies: mais longa (7-9 polegadas), para regiões posteriores. Allis: com travas, para tecido que será excisado (nunca em tecido que ficará). Hemostática: para prender vasos, não para sutura (sulcos paralelos não seguram agulha).',
        mnemonic: 'A.S.A.H.: Adson (delicada), Stillies (longa), Allis (trava), Hemostática (vasos).',
        commonMistakes: [
            'Usar pinça hemostática para sutura (não tem ranhuras cruzadas para segurar a agulha).',
            'Usar pinça de Allis em tecido que permanecerá no paciente (causa esmagamento).'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual pinça é utilizada para apreender e sustentar o tecido que será excisado, como em uma biopsia?',
                answer: 'Pinça de Allis.',
                explanation: 'Possui travas nos cabos e dentes que apreendem firmemente o tecido. Nunca deve ser usada no tecido que ficará na boca.'
            },
            {
                category: 'comparação',
                question: 'Qual é a diferença entre a pinça de Adson e a pinça de Stillies?',
                answer: 'A Adson é mais curta e delicada, para tecidos moles; a Stillies é mais longa (18-22 cm), para alcançar a parte posterior da boca.',
                explanation: 'Ambas têm forma semelhante, mas a Stillies é projetada para acesso posterior.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-pinça-goiva',
        title: 'Pinça-Goiva (Blumenthal)',
        category: 'Instrumentais',
        summary: 'Fórceps de corte ósseo com molas nos cabos.',
        explanation: 'Usada para remover osso. Modelos: corte lateral e corte lateral e terminal (Blumenthal). Deve ser usada para pequenas quantidades de osso por vez. Nunca para remover dentes (perde o fio e pode perder o dente na orofaringe).',
        mnemonic: 'GOIVA: Grande remoção, Osteotomia, Instrumento delicado, Várias apreensões, Afiada.',
        commonMistakes: [
            'Usar a pinça-goiva para remover dentes.',
            'Tentar remover grandes quantidades de osso de uma só vez.'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual é a função da pinça-goiva?',
                answer: 'Remover osso.',
                explanation: 'É um fórceps de corte ósseo. Deve ser usada para pequenas quantidades de osso por vez.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-brocas',
        title: 'Peça de Mão e Brocas',
        category: 'Instrumentais',
        summary: 'Instrumentos para remoção óssea e corte de dentes.',
        explanation: 'Peça de mão de alto torque e moderada velocidade com pontas de carboneto. Brocas: fissurada nº 557 ou 703, esférica nº 8. Deve ter irrigação constante. Não usar peça de mão com exaustão de ar (risco de enfisema).',
        mnemonic: 'BROCA: Alta rotação, Refrigeração, Osteotomia, Cuidado, Afiada.',
        commonMistakes: [
            'Usar peça de mão sem irrigação (necrose óssea por calor).',
            'Usar peça de mão com exaustão de ar no campo operatório (risco de enfisema).'
        ],
        flashcards: [
            {
                category: 'aplicação clínica',
                question: 'Por que a peça de mão cirúrgica não deve ter exaustão de ar no campo operatório?',
                answer: 'Porque o ar expelido pode ser forçado para dentro de planos teciduais mais profundos e produzir enfisema do tecido, uma complicação perigosa.',
                explanation: 'A irrigação é essencial para resfriar a broca e evitar dano ósseo.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-cureta',
        title: 'Cureta Periapical',
        category: 'Instrumentais',
        summary: 'Instrumento com duas pontas anguladas para remover tecido mole de defeitos ósseos.',
        explanation: 'Uso principal: remoção de granulomas ou pequenos cistos de lesões periapicais. Também usada para remover restos de tecido de granulação e detritos do alvéolo. Diferente da cureta periodontal.',
        mnemonic: 'CURETA: Curetacão, Remoção de tecido mole, Útil em alvéolos, Específica para periapical, Tamanho variado.',
        commonMistakes: [
            'Confundir a cureta periapical com a periodontal.',
            'Curetar vigorosamente um alvéolo sem necessidade, atrasando a cicatrização.'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual é o uso principal da cureta periapical?',
                answer: 'Remover granulomas ou pequenos cistos de lesões periapicais.',
                explanation: 'Também pode ser usada para remover restos de tecido de granulação e detritos do alvéolo dentário.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-porta-agulha',
        title: 'Porta-Agulha e Suturas',
        category: 'Instrumentais',
        summary: 'Instrumento para suturar e materiais de sutura.',
        explanation: 'Porta-agulha: cabo com travamento, pontas curtas e arredondadas, com ranhuras cruzadas. Segurar com polegar e dedo anelar nos anéis. Agulhas: curvas, de corte ou cônicas. Suturas: classificadas por diâmetro (3-0 é o mais comum), reabsorção (reabsorvível vs não reabsorvível) e filamentos (mono vs polifilamentar).',
        mnemonic: 'SUTURA: Segurar com porta-agulha, Usar agulha de corte, Tamanho 3-0, Reabsorvível ou não, Ancorar bem.',
        commonMistakes: [
            'Usar pinça hemostática em vez de porta-agulha para suturar.',
            'Segurar o porta-agulha com o dedo indicador no anel, perdendo controle.',
            'Usar sutura não reabsorvível na mucosa bucal (a seda é a mais comum).'
        ],
        flashcards: [
            {
                category: 'comparação',
                question: 'Qual é a diferença entre suturas monofilamentares e polifilamentares?',
                answer: 'Monofilamentares (náilon, aço) não absorvem fluidos, mas são mais difíceis de amarrar. Polifilamentares (seda, ácido poliglicólico) são mais fáceis de manusear, mas tendem a absorver fluidos bucais, podendo transportar bactérias.',
                explanation: 'A seda é um exemplo de sutura polifilamentar não reabsorvível, muito usada na cavidade bucal.'
            },
            {
                category: 'instrumento → função',
                question: 'Qual é o tamanho de fio de sutura mais utilizado na sutura de mucosa bucal?',
                answer: '3-0 (000).',
                explanation: 'É grande o suficiente para suportar a tensão intrabucal e forte o bastante para amarrar o nó.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-alavancas',
        title: 'Alavancas Dentárias (Retas, Cryer, Crane)',
        category: 'Instrumentais',
        summary: 'Instrumentos para luxar dentes e raízes do osso.',
        explanation: 'Componentes: cabo, haste e lâmina. Tipos: reta (mais comum, para luxar dentes), triangular ou Cryer (para raízes mesial/distal), apical ou Crane (para raízes fraturadas, requer ponto de apoio).',
        mnemonic: 'ALAVANCA: Aplicar força controlada, Luxar, Alavanca de 1ª classe, Ver direção, Ancorar, Não forçar demais, Cuidado com dentes adjacentes.',
        commonMistakes: [
            'Usar força excessiva com alavancas de cabo em "T".',
            'Usar a alavanca Crane sem preparar um ponto de apoio.',
            'Não apoiar a alavanca em osso saudável.'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual é a função da alavanca de Crane (apical)?',
                answer: 'Remover raízes fraturadas do alvéolo, geralmente após preparar um ponto de apoio com broca.',
                explanation: 'É um instrumento robusto usado como alavanca de primeira classe.'
            },
            {
                category: 'comparação',
                question: 'Qual a diferença entre a alavanca reta e a alavanca Cryer?',
                answer: 'A reta é usada para luxar dentes e descolar raízes. A Cryer (triangular) é usada em pares para remover raízes mesial ou distal.',
                explanation: 'A Cryer atua como roda e eixo, enquanto a reta atua como alavanca e cunha.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-periotomo',
        title: 'Periótomo',
        category: 'Instrumentais',
        summary: 'Instrumento para cortar ligamentos periodontais e facilitar a extração.',
        explanation: 'Possui lâmina fina que é inserida no espaço do ligamento periodontal e avançada apicalmente. Usado para separar o dente do alvéolo, preservando a anatomia óssea.',
        mnemonic: 'PERIÓTOMO: Preservar osso, Extração atraumática, Romper ligamento, Inserir apicalmente, Cuidado com a lâmina.',
        commonMistakes: [
            'Usar força excessiva, fraturando a raiz ou o osso.',
            'Não avançar o periótomo apicalmente o suficiente.'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual é o princípio de utilização do periótomo?',
                answer: 'Cortar alguns dos ligamentos periodontais do dente para facilitar sua remoção, preservando a anatomia do alvéolo.',
                explanation: 'A lâmina é inserida no espaço do ligamento periodontal e avançada apicalmente.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-forceps',
        title: 'Fórceps de Extração',
        category: 'Instrumentais',
        summary: 'Instrumentos para remover o dente do osso alveolar.',
        explanation: 'Componentes: cabos, dobradiça e ponta. Tipos: maxilares (nº 150, 150A, 1, 53, 88, 210S, 65) e mandibulares (nº 151, 151A, 17, 87, 23, 222). Fórceps nº 150 é universal para superiores. Nº 151 para inferiores. Nº 17 para molares inferiores. Nº 23 (chifre de vaca) para molares inferiores com raízes bifurcadas.',
        mnemonic: 'FÓRCEPS: Força controlada, Adaptação à raiz, Oclusão, Remoção, Cuidado com adjacentes, Pontas, Sutura.',
        commonMistakes: [
            'Usar fórceps maxilar em dentes mandibulares e vice-versa.',
            'Usar fórceps nº 150 em incisivos inferiores (pontas muito largas).',
            'Usar chifre de vaca sem cautela (pode fraturar osso ou dentes superiores).'
        ],
        flashcards: [
            {
                category: 'instrumento → função',
                question: 'Qual fórceps é o universal para dentes superiores?',
                answer: 'Fórceps nº 150.',
                explanation: 'É usado para incisivos, caninos e pré-molares superiores.'
            },
            {
                category: 'instrumento → função',
                question: 'Qual fórceps é usado para molares inferiores com raízes bifurcadas?',
                answer: 'Fórceps nº 17 ou nº 23 (chifre de vaca).',
                explanation: 'O nº 17 tem pontas que se adaptam à bifurcação. O nº 23 é projetado para ser fechado à força na bifurcação.'
            },
            {
                category: 'comparação',
                question: 'Qual a diferença entre o fórceps nº 150 e o nº 150A?',
                answer: 'O nº 150A tem pontas ativas paralelas que não se tocam, sendo útil para pré-molares superiores. O nº 150 é mais versátil para incisivos e caninos.',
                explanation: 'O nº 150A não deve ser usado para incisivos devido à má adaptação às raízes.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch7-bandejas',
        title: 'Bandejas Cirúrgicas',
        category: 'Instrumentais',
        summary: 'Conjuntos de instrumentais para procedimentos específicos.',
        explanation: 'Bandeja básica de extração: seringa de anestesia, elevador de periósteo, cureta periapical, alavancas, pinças, afastador, aspiração, gaze. Bandeja de extração cirúrgica: adiciona porta-agulha, sutura, tesoura, bisturi, pinça de Adson, lima para osso, afastador de língua, alavancas Cryer, pinça goiva, peça de mão e broca. Bandeja de biopsia: básica menos alavancas, mais bisturi, porta-agulha, tesoura de tecido, pinça de Allis. Bandeja de pós-operatório: tesouras, pinça de algodão, seringa de irrigação, gaze.',
        mnemonic: 'BANDEJA: Básica (extração), Avançada (cirúrgica), Necessidades específicas, Dentre elas biopsia, Esterilização, Juntar instrumentais, Acondicionar.',
        commonMistakes: [
            'Não esterilizar a bandeja corretamente.',
            'Usar a bandeja básica para procedimentos cirúrgicos complexos.'
        ],
        flashcards: [
            {
                category: 'classificação',
                question: 'Qual a diferença entre a bandeja básica de extração e a bandeja de extração cirúrgica?',
                answer: 'A bandeja cirúrgica inclui itens para incisão e sutura (bisturi, porta-agulha, fio de sutura, tesoura, pinça de Adson, lima para osso, afastador de língua, alavancas Cryer, pinça goiva, peça de mão e broca), além dos itens da bandeja básica.',
                explanation: 'A bandeja cirúrgica é para procedimentos mais complexos que exigem retalho e osteotomia.'
            }
        ],
        questions: [],
        cases: []
    },

    // Capítulo 8: Extração Dentária
    {
        id: 'ch8-principios-mecanicos',
        title: 'Princípios Mecânicos da Exodontia',
        category: 'Extração Dentária',
        summary: 'Alavanca, cunha, roda e eixo aplicados à extração dentária.',
        explanation: 'Alavanca: transmite força modesta com vantagem mecânica (ex: elevador de Crane). Cunha: expande osso (ex: pontas do fórceps, elevador reto). Roda e eixo: gira a raiz (ex: elevador triangular Cryer).',
        mnemonic: 'MECÂNICA: Movimento, Expansão, Cunha, Alavanca, Rotação, Eixo.',
        commonMistakes: [
            'Usar força excessiva sem entender o princípio mecânico.',
            'Não usar a cunha para expandir o osso antes de aplicar força de tração.'
        ],
        flashcards: [
            {
                category: 'mecanismo',
                question: 'Qual princípio mecânico é usado quando as pontas do fórceps são forçadas apicalmente no espaço do ligamento periodontal?',
                answer: 'Cunha.',
                explanation: 'As pontas do fórceps agem como cunhas para expandir a crista óssea nas faces lingual e vestibular.'
            },
            {
                category: 'mecanismo',
                question: 'Qual princípio mecânico é usado pela alavanca de Crane?',
                answer: 'Alavanca de primeira classe.',
                explanation: 'A alavanca transmite uma força modesta em um pequeno movimento contra uma grande resistência.'
            }
        ],
        questions: [
            {
                type: 'multiple-choice',
                question: 'Qual instrumento é mais identificado com o princípio mecânico de "roda e eixo"?',
                options: [
                    'Elevador reto',
                    'Alavanca de Crane',
                    'Elevador triangular (Cryer)',
                    'Fórceps nº 150'
                ],
                correctAnswer: 2,
                explanation: 'O elevador triangular (Cryer) é posicionado e girado no alvéolo, com o cabo servindo como eixo e a ponta como roda.'
            }
        ],
        cases: []
    },
    {
        id: 'ch8-luxacao',
        title: 'Luxação e Movimentos do Fórceps',
        category: 'Extração Dentária',
        summary: 'Movimentos para expandir o alvéolo e romper ligamentos periodontais.',
        explanation: 'Movimentos: 1) Pressão apical (expande osso, desloca centro de rotação). 2) Pressão vestibular (expande cortical vestibular). 3) Pressão lingual/palatina (expande cortical lingual). 4) Pressão rotacional (para raízes cônicas). 5) Forças de tração (remoção final, devem ser delicadas).',
        mnemonic: 'LUXAÇÃO: Lentidão, Usar pressão apical, eXpansão óssea, Aplicar forças vestibulolinguais, Rotação, Tração final.',
        commonMistakes: [
            'Aplicar força excessiva e rápida, causando fratura.',
            'Não forçar o fórceps apicalmente o suficiente, resultando em fratura do ápice radicular.',
            'Puxar o dente em vez de removê-lo delicadamente.'
        ],
        flashcards: [
            {
                category: 'mecanismo',
                question: 'Qual é o objetivo da pressão apical ao adaptar o fórceps?',
                answer: 'Expandir a crista óssea e deslocar o centro de rotação o mais apicalmente possível, diminuindo a chance de fratura do ápice radicular.',
                explanation: 'As pontas do fórceps agem como cunhas para dilatar o osso.'
            },
            {
                category: 'aplicação clínica',
                question: 'Para quais dentes as forças rotacionais são mais úteis?',
                answer: 'Dentes unirradiculares com raízes cônicas e sem curvaturas, como incisivos superiores e pré-molares inferiores.',
                explanation: 'A rotação causa expansão interna do alvéolo e rompimento dos ligamentos periodontais.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch8-fatores-dificuldade',
        title: 'Fatores que Dificultam a Extração',
        category: 'Extração Dentária',
        summary: 'Avaliação pré-operatória de fatores que tornam a extração mais difícil.',
        explanation: 'Fatores: abertura de boca limitada, dentes apinhados ou mal posicionados, mobilidade (anquilose, hipercementose), coroa comprometida (cárie, restauração), tártaro, condição dos dentes adjacentes, radiografias inadequadas ou antigas, proximidade com seio maxilar e canal alveolar inferior, número e curvatura das raízes, reabsorção radicular, tratamento endodôntico prévio, densidade óssea.',
        mnemonic: 'DIFICULDADE: Dentes apinhados, Imagem inadequada, Fatores sistêmicos, Curvatura radicular, Úlceras, Lesões periapicais, Densidade óssea, Anquilose, Dor, Experiência do cirurgião.',
        commonMistakes: [
            'Subestimar a dificuldade da extração.',
            'Não solicitar radiografias atualizadas.',
            'Ignorar a proximidade com estruturas anatômicas importantes.'
        ],
        flashcards: [
            {
                category: 'aplicação clínica',
                question: 'O que a anquilose dentária causa na extração?',
                answer: 'Aumenta a dificuldade, pois o dente está fusionado ao osso. A extração cirúrgica é frequentemente indicada.',
                explanation: 'A anquilose é comum em dentes retidos e submersos, e em dentes não vitais com tratamento endodôntico antigo.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch8-posicionamento',
        title: 'Posicionamento do Paciente e do Cirurgião',
        category: 'Extração Dentária',
        summary: 'Posições ideais para acesso e controle durante a extração.',
        explanation: 'Para dentes superiores: paciente semirreclinado (plano oclusal perpendicular ao chão se em pé). Para dentes inferiores: paciente mais ereto (plano oclusal paralelo ao chão se em pé). O cirurgião deve manter os pulsos retos, usar força do braço e ombro, e apoiar a mandíbula com a mão oposta.',
        mnemonic: 'POSIÇÃO: Paciente confortável, Oclusal paralelo ao chão (inferiores), Suporte mandibular, Instrumental adequado, Cirurgião estável, Apoio, Observação.',
        commonMistakes: [
            'Cadeira muito alta, forçando o cirurgião a operar com os ombros elevados.',
            'Não apoiar a mandíbula durante extrações inferiores, causando estresse na ATM.'
        ],
        flashcards: [
            {
                category: 'aplicação clínica',
                question: 'Como deve ser posicionado o paciente para extração de dentes inferiores?',
                answer: 'O paciente deve estar mais para cima (ereto) para que o plano oclusal mandibular da boca aberta esteja paralelo ao chão. A altura da cadeira é mais baixa.',
                explanation: 'Isso permite que o braço do cirurgião fique mais reto e exerça força controlada.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch8-tecnica-especifica',
        title: 'Técnicas de Extração por Dente',
        category: 'Extração Dentária',
        summary: 'Técnicas específicas para incisivos, caninos, pré-molares e molares.',
        explanation: 'Incisivos superiores: fórceps nº 150, movimentos labiais e rotação lenta. Canino superior: fórceps nº 150, risco de fratura da tábua óssea vestibular. Pré-molares superiores: fórceps nº 150, risco de fratura radicular, evitar rotação. Molares superiores: fórceps nº 53 (direito/esquerdo), pressão vestibular forte, palatina fraca. Incisivos e caninos inferiores: fórceps nº 151, movimentos vestibulolinguais iguais. Pré-molares inferiores: fórceps nº 151, rotação controlada. Molares inferiores: fórceps nº 17 ou 23, pressão lingual mais forte para o segundo molar.',
        mnemonic: 'TÉCNICA: Testar mobilidade, Escolher fórceps, Colocar apicalmente, Força controlada, Remover delicadamente.',
        commonMistakes: [
            'Usar fórceps inadequado para o dente.',
            'Aplicar força excessiva em pré-molares superiores, fraturando a raiz.',
            'Não adaptar o fórceps apicalmente o suficiente.'
        ],
        flashcards: [
            {
                category: 'aplicação clínica',
                question: 'Qual é o fórceps de escolha para extrair um canino superior?',
                answer: 'Fórceps universal superior (nº 150).',
                explanation: 'Apesar do osso vestibular fino, a raiz longa pode tornar a extração difícil. O fórceps nº 150 é o preferido.'
            }
        ],
        questions: [],
        cases: []
    },
    {
        id: 'ch8-pos-operatorio',
        title: 'Cuidados Pós-Operatórios Imediatos',
        category: 'Extração Dentária',
        summary: 'Manejo do alvéolo após a extração.',
        explanation: 'Desbridar apenas se necessário (lesão periapical, resíduos). Comprimir corticais ósseas expandidas. Remover tecido de granulação em casos de doença periodontal. Orientar o paciente a morder uma gaze por 30-45 minutos. Não curetar vigorosamente um alvéolo limpo.',
        mnemonic: 'PÓS-OP: Pressão com gaze, Observar sangramento, Sintomas (orientar), Analgesia, Repouso.',
        commonMistakes: [
            'Curetar vigorosamente o alvéolo, causando lesão adicional e atrasando a cicatrização.',
            'Não comprimir as corticais ósseas expandidas, deixando espículas ósseas.'
        ],
        flashcards: [
            {
                category: 'aplicação clínica',
                question: 'Quando o alvéolo deve ser curetado após a extração?',
                answer: 'Apenas se houver lesão periapical visível na radiografia ou resíduos evidentes (cálculo, amálgama, fragmento de dente).',
                explanation: 'Se não houver lesão ou debris, o alvéolo não deve ser curetado, pois os remanescentes do ligamento periodontal são importantes para a cicatrização.'
            }
        ],
        questions: [],
        cases: []
    }
];

const instruments = [
    { id: 'bisturi', name: 'Bisturi', category: 'Corte', function: 'Fazer incisões.', characteristics: 'Cabo nº 3, lâminas nº 15, 11, 12. Segurar como caneta.', whenToUse: 'Incisões em tecidos moles.', confusedWith: 'Tesoura cirúrgica.' },
    { id: 'elevador-periosteal', name: 'Elevador Periosteal (Molt nº 9)', category: 'Elevação', function: 'Rebater o periósteo do osso.', characteristics: 'Extremidade pontiaguda e extremidade larga e arredondada.', whenToUse: 'Início da elevação do periósteo e rebater papilas.', confusedWith: 'Afastador de Seldin.' },
    { id: 'afastador-austin', name: 'Afastador de Austin', category: 'Afastamento', function: 'Afastar bochecha, língua ou retalhos.', characteristics: 'Ângulo reto.', whenToUse: 'Cirurgias em que é necessário afastar tecidos moles.', confusedWith: 'Afastador de Minnesota.' },
    { id: 'pinça-adson', name: 'Pinça de Adson', category: 'Preensão', function: 'Preender tecido mole delicadamente.', characteristics: 'Delicada, com ou sem dentes.', whenToUse: 'Estabilizar tecido para sutura ou dissecção.', confusedWith: 'Pinça de Stillies.' },
    { id: 'pinça-allis', name: 'Pinça de Allis', category: 'Preensão', function: 'Apreender e sustentar tecido que será excisado.', characteristics: 'Com travas nos cabos e dentes.', whenToUse: 'Biópsias e remoção de grandes quantidades de tecido.', confusedWith: 'Pinça de campo.' },
    { id: 'pinça-hemostatica', name: 'Pinça Hemostática', category: 'Preensão', function: 'Prender vasos sanguíneos.', characteristics: 'Sulcos paralelos nas pontas.', whenToUse: 'Hemostasia.', confusedWith: 'Porta-agulha.' },
    { id: 'porta-agulha', name: 'Porta-Agulha', category: 'Sutura', function: 'Suturar tecidos.', characteristics: 'Cabo com travamento, pontas curtas e arredondadas com ranhuras cruzadas.', whenToUse: 'Fechamento de feridas.', confusedWith: 'Pinça hemostática.' },
    { id: 'pinça-goiva', name: 'Pinça-Goiva', category: 'Corte Ósseo', function: 'Remover osso.', characteristics: 'Fórceps de corte ósseo com molas nos cabos.', whenToUse: 'Remoção de osso em pequenas quantidades.', confusedWith: 'Fórceps de extração.' },
    { id: 'cureta-periapical', name: 'Cureta Periapical', category: 'Curetagem', function: 'Remover tecido mole de defeitos ósseos.', characteristics: 'Duas pontas anguladas em formato de colher.', whenToUse: 'Remoção de granulomas e cistos periapicais.', confusedWith: 'Cureta periodontal.' },
    { id: 'alavanca-reta', name: 'Alavanca Reta', category: 'Elevação', function: 'Luxar dentes do osso circundante.', characteristics: 'Lâmina côncava de um lado.', whenToUse: 'Iniciar a luxação de dentes.', confusedWith: 'Alavanca Cryer.' },
    { id: 'alavanca-cryer', name: 'Alavanca Cryer', category: 'Elevação', function: 'Remover raízes mesial ou distal.', characteristics: 'Triangular, usada em pares.', whenToUse: 'Remoção de raízes.', confusedWith: 'Alavanca reta.' },
    { id: 'alavanca-crane', name: 'Alavanca de Crane', category: 'Elevação', function: 'Remover raízes fraturadas.', characteristics: 'Robusta, apical.', whenToUse: 'Após preparar ponto de apoio com broca.', confusedWith: 'Elevador apical.' },
    { id: 'forceps-150', name: 'Fórceps nº 150', category: 'Extração', function: 'Remover dentes superiores.', characteristics: 'Universal para superiores.', whenToUse: 'Incisivos, caninos e pré-molares superiores.', confusedWith: 'Fórceps nº 151.' },
    { id: 'forceps-151', name: 'Fórceps nº 151', category: 'Extração', function: 'Remover dentes inferiores.', characteristics: 'Universal para inferiores.', whenToUse: 'Incisivos, caninos e pré-molares inferiores.', confusedWith: 'Fórceps nº 150.' },
    { id: 'forceps-17', name: 'Fórceps nº 17', category: 'Extração', function: 'Remover molares inferiores.', characteristics: 'Pontas com extremidades pontiagudas no centro para encaixar na bifurcação.', whenToUse: 'Molares inferiores com raízes bifurcadas.', confusedWith: 'Fórceps nº 23 (chifre de vaca).' },
    { id: 'forceps-23', name: 'Fórceps nº 23 (Chifre de Vaca)', category: 'Extração', function: 'Remover molares inferiores.', characteristics: 'Pontas longas e pontiagudas que entram na bifurcação.', whenToUse: 'Molares inferiores com raízes bifurcadas.', confusedWith: 'Fórceps nº 17.' },
    { id: 'periotomo', name: 'Periótomo', category: 'Extração', function: 'Cortar ligamentos periodontais.', characteristics: 'Lâmina fina.', whenToUse: 'Extração atraumática, preservando o osso.', confusedWith: 'Cureta.' }
];

const mnemonics = [
    { id: 'm1', title: 'Mnemônico: DADOS', phrase: 'Dados precisos, Anamnese, Diagnóstico diferencial, Organização, Seleção do procedimento.', explanation: 'Para lembrar as etapas do desenvolvimento do diagnóstico cirúrgico.' },
    { id: 'm2', title: 'Mnemônico: C.L.A.P.', phrase: 'Cortante afiada, Linha contínua, Atenção às estruturas, Perpendicular à superfície.', explanation: 'Para lembrar os princípios básicos das incisões.' },
    { id: 'm3', title: 'Mnemônico: P.L.E.C.', phrase: 'Pressão, Ligadura, Epinefrina, Coagulação.', explanation: 'Para lembrar os meios de promover hemostasia.' },
    { id: 'm4', title: 'Mnemônico: LÂMINAS', phrase: 'Lâmina 15 (intrabucal), 10 (pele), 11 (abscesso), 12 (gancho).', explanation: 'Para lembrar as lâminas de bisturi mais usadas.' },
    { id: 'm5', title: 'Mnemônico: A.M.S.W.', phrase: 'Austin (Ângulo), Minnesota (Múltiplas dobras), Seldin (Superfície lisa), Weider (Língua).', explanation: 'Para lembrar os tipos de afastadores.' },
    { id: 'm6', title: 'Mnemônico: SUTURA', phrase: 'Segurar com porta-agulha, Usar agulha de corte, Tamanho 3-0, Reabsorvível ou não, Ancorar bem.', explanation: 'Para lembrar os princípios de sutura.' },
    { id: 'm7', title: 'Mnemônico: LUXAÇÃO', phrase: 'Lentidão, Usar pressão apical, eXpansão óssea, Aplicar forças vestibulolinguais, Rotação, Tração final.', explanation: 'Para lembrar os movimentos de luxação com fórceps.' }
];

const commonMistakes = [
    {
        id: 'cm1',
        title: 'Não confunda: Fórceps nº 150 vs. nº 151',
        comparison: [
            { name: 'Fórceps nº 150', features: 'Universal para dentes superiores. Pontas paralelas aos cabos.' },
            { name: 'Fórceps nº 151', features: 'Universal para dentes inferiores. Pontas perpendiculares aos cabos, direcionadas para baixo.' }
        ],
        howToDifferentiate: 'O nº 150 é usado com a palma da mão sob o fórceps. O nº 151 é usado com a palma da mão sobre o fórceps.'
    },
    {
        id: 'cm2',
        title: 'Não confunda: Pinça Hemostática vs. Porta-Agulha',
        comparison: [
            { name: 'Pinça Hemostática', features: 'Sulcos paralelos nas pontas. Usada para prender vasos.' },
            { name: 'Porta-Agulha', features: 'Ranhuras cruzadas nas pontas. Usado para suturar.' }
        ],
        howToDifferentiate: 'A pinça hemostática não segura a agulha de sutura adequadamente, pois seus sulcos são paralelos.'
    },
    {
        id: 'cm3',
        title: 'Não confunda: Alavanca Reta vs. Cryer',
        comparison: [
            { name: 'Alavanca Reta', features: 'Lâmina côncava de um lado. Usada para luxar dentes.' },
            { name: 'Alavanca Cryer', features: 'Triangular, usada em pares. Usada para remover raízes mesial/distal.' }
        ],
        howToDifferentiate: 'A Cryer atua como roda e eixo, a reta como alavanca e cunha.'
    }
];

const clinicalCases = [
    {
        id: 'case1',
        level: 1,
        title: 'Extração do dente 38',
        patient: 'Paciente de 25 anos, sem comorbidades, chega para extração do dente 38 (terceiro molar inferior).',
        data: 'Radiografia panorâmica mostra dente 38 incluso, com raízes fusionadas e cônicas, próximo ao canal alveolar inferior.',
        question: 'Qual fórceps é o mais indicado para a extração?',
        options: ['Fórceps nº 150', 'Fórceps nº 151', 'Fórceps nº 17', 'Fórceps nº 23 (chifre de vaca)'],
        correctAnswer: 2,
        explanation: 'O fórceps nº 17 é o mais utilizado para molares inferiores. Como as raízes são fusionadas e cônicas, o fórceps nº 151 também poderia ser usado, mas o nº 17 é o mais específico. O chifre de vaca (nº 23) é para raízes bifurcadas.'
    },
    {
        id: 'case2',
        level: 2,
        title: 'Extração de pré-molar superior',
        patient: 'Paciente de 60 anos, com histórico de doença periodontal, chega para extração do dente 24 (primeiro pré-molar superior).',
        data: 'Radiografia periapical mostra raiz bifurcada no terço apical, com pequena curvatura. Osso alveolar com densidade aumentada.',
        question: 'Qual movimento deve ser evitado durante a extração?',
        options: ['Pressão apical', 'Pressão vestibular', 'Pressão rotacional', 'Força de tração'],
        correctAnswer: 2,
        explanation: 'O primeiro pré-molar superior frequentemente tem raiz bifurcada. Forças rotacionais podem fraturar a raiz. O material alerta para evitar rotação nesses dentes.'
    },
    {
        id: 'case3',
        level: 3,
        title: 'Extração de canino superior com fratura óssea',
        patient: 'Paciente de 45 anos, durante extração do dente 13 (canino superior), o cirurgião sente uma fratura da tábua óssea vestibular.',
        data: 'A palpação digital indica que uma porção maior do rebordo alveolar vestibular foi fraturada e está presa ao dente.',
        question: 'Qual deve ser a conduta do cirurgião?',
        options: [
            'Continuar a extração normalmente.',
            'Parar o procedimento, divulsionar a mucosa e tentar liberar o osso fraturado do dente com elevador de periósteo, mantendo-o no lugar.',
            'Remover o osso fraturado imediatamente.',
            'Suturar e agendar uma nova cirurgia.'
        ],
        correctAnswer: 1,
        explanation: 'O material orienta que, se uma porção maior do rebordo alveolar for fraturada, o cirurgião deve parar. O osso geralmente ainda está preso ao periósteo e é viável. Deve-se tentar liberá-lo do dente e deixá-lo no local. Se ele se soltar do periósteo, deve ser removido.'
    }
];

// ==========================================================================
// LÓGICA DA APLICAÇÃO
// ==========================================================================

const App = {
    state: {
        currentSection: 'home',
        currentTopic: null,
        currentInstrument: null,
        flashcards: [],
        currentFlashcardIndex: 0,
        quizQuestions: [],
        currentQuizIndex: 0,
        quizAnswers: [],
        examQuestions: [],
        currentExamIndex: 0,
        examAnswers: [],
        examTimer: null,
        examStartTime: null,
        studyStartTime: Date.now(),
        sessionStartTime: Date.now()
    },

    // Dados persistentes no localStorage
    data: {
        progress: {},
        favorites: [],
        flashcards: {},
        errors: [],
        performance: {
            questionsAnswered: 0,
            questionsCorrect: 0,
            flashcardsReviewed: 0,
            masteredConcepts: 0,
            weakConcepts: 0,
            studyStreak: 0,
            lastStudyDate: null,
            totalStudyTime: 0,
            retentionRate: 0
        }
    },

    init() {
        this.loadData();
        this.cacheElements();
        this.bindEvents();
        this.renderHome();
        this.renderContentList();
        this.renderFlashcards();
        this.renderQuiz();
        this.renderClinicalCases();
        this.renderInstruments();
        this.renderMnemonics();
        this.renderQuickReview();
        this.renderCommonMistakes();
        this.renderProgress();
        this.renderConceptMap();
        this.checkStudyStreak();
        this.startStudyTimer();
    },

    loadData() {
        const savedData = localStorage.getItem('huppCirurgiaData');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                this.data = { ...this.data, ...parsed };
                // Garantir que performance exista
                if (!this.data.performance) {
                    this.data.performance = { questionsAnswered: 0, questionsCorrect: 0, flashcardsReviewed: 0, masteredConcepts: 0, weakConcepts: 0, studyStreak: 0, lastStudyDate: null, totalStudyTime: 0, retentionRate: 0 };
                }
            } catch (e) {
                console.error('Erro ao carregar dados:', e);
            }
        }
        // Inicializar flashcards
        if (!this.data.flashcards) this.data.flashcards = {};
        if (!this.data.errors) this.data.errors = [];
        if (!this.data.favorites) this.data.favorites = [];
    },

    saveData() {
        localStorage.setItem('huppCirurgiaData', JSON.stringify(this.data));
    },

    cacheElements() {
        // Navegação
        this.sidebar = document.getElementById('sidebar');
        this.menuToggle = document.getElementById('menu-toggle');
        this.navItems = document.querySelectorAll('.nav-item');
        this.sections = document.querySelectorAll('.content-section');
        this.currentSectionTitle = document.getElementById('current-section-title');
        this.globalProgressBar = document.getElementById('global-progress-bar');
        this.performanceValue = document.getElementById('performance-value');

        // Home
        this.continueStudyingText = document.getElementById('continue-studying-text');
        this.reviewTodayCount = document.getElementById('review-today-count');
        this.pendingFlashcardsCount = document.getElementById('pending-flashcards-count');
        this.pendingQuestionsCount = document.getElementById('pending-questions-count');
        this.homePerformanceText = document.getElementById('home-performance-text');
        this.homeMistakesList = document.getElementById('home-mistakes-list');
        this.homeStudyTime = document.getElementById('home-study-time');

        // Content
        this.contentList = document.getElementById('content-list');
        this.contentDetail = document.getElementById('content-detail');

        // Flashcards
        this.flashcardArea = document.getElementById('flashcard-area');
        this.flashcardFilter = document.getElementById('flashcard-filter');
        this.btnShuffleCards = document.getElementById('btn-shuffle-cards');
        this.btnReviewErrorsCards = document.getElementById('btn-review-errors-cards');
        this.btnReviewDifficultCards = document.getElementById('btn-review-difficult-cards');

        // Quiz
        this.quizArea = document.getElementById('quiz-area');
        this.quizFilter = document.getElementById('quiz-filter');
        this.btnStartQuiz = document.getElementById('btn-start-quiz');

        // Clinical Cases
        this.clinicalCasesArea = document.getElementById('clinical-cases-area');

        // Instruments
        this.instrumentList = document.getElementById('instrument-list');
        this.instrumentDetail = document.getElementById('instrument-detail');
        this.instrumentGameArea = document.getElementById('instrument-game-area');

        // Mnemonics
        this.mnemonicsList = document.getElementById('mnemonics-list');

        // Quick Review
        this.quickReviewContent = document.getElementById('quick-review-content');

        // Common Mistakes
        this.commonMistakesList = document.getElementById('common-mistakes-list');

        // Exam
        this.examSetup = document.querySelector('.exam-setup');
        this.examArea = document.getElementById('exam-area');

        // Progress
        this.statQuestionsAnswered = document.getElementById('stat-questions-answered');
        this.statAccuracy = document.getElementById('stat-accuracy');
        this.statFlashcardsReviewed = document.getElementById('stat-flashcards-reviewed');
        this.statMasteredConcepts = document.getElementById('stat-mastered-concepts');
        this.statWeakConcepts = document.getElementById('stat-weak-concepts');
        this.statStudyStreak = document.getElementById('stat-study-streak');
        this.statStudyTime = document.getElementById('stat-study-time');
        this.statRetentionRate = document.getElementById('stat-retention-rate');
        this.performanceByTopic = document.getElementById('performance-by-topic');
        this.studyRecommendations = document.getElementById('study-recommendations');
        this.favoritesList = document.getElementById('favorites-list');
        this.errorsList = document.getElementById('errors-list');
        this.btnReviewAllErrors = document.getElementById('btn-review-all-errors');

        // Theme
        this.themeToggle = document.getElementById('theme-toggle');

        // Search
        this.globalSearch = document.getElementById('global-search');
        this.searchResults = document.getElementById('search-results');

        // Concept Map
        this.conceptMapContainer = document.getElementById('concept-map-container');
    },

    bindEvents() {
        // Navegação
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.navigateTo(section);
            });
        });

        this.menuToggle.addEventListener('click', () => {
            this.sidebar.classList.toggle('open');
        });

        // Tema
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Flashcards
        this.flashcardFilter.addEventListener('change', () => this.renderFlashcards());
        this.btnShuffleCards.addEventListener('click', () => this.shuffleFlashcards());
        this.btnReviewErrorsCards.addEventListener('click', () => this.reviewErrorFlashcards());
        this.btnReviewDifficultCards.addEventListener('click', () => this.reviewDifficultFlashcards());

        // Quiz
        this.quizFilter.addEventListener('change', () => this.renderQuiz());
        this.btnStartQuiz.addEventListener('click', () => this.startQuiz());

        // Exam
        document.querySelectorAll('.exam-options .btn').forEach(btn => {
            btn.addEventListener('click', () => this.startExam(parseInt(btn.dataset.questions)));
        });

        // Progress
        this.btnReviewAllErrors.addEventListener('click', () => this.reviewAllErrors());

        // Search
        this.globalSearch.addEventListener('input', (e) => this.handleSearch(e.target.value));
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.searchResults.classList.remove('active');
            }
        });

        // Home buttons
        document.getElementById('btn-continue').addEventListener('click', () => this.continueStudying());
        document.getElementById('btn-review-today').addEventListener('click', () => this.reviewToday());

        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.searchResults.classList.remove('active');
                this.sidebar.classList.remove('open');
            }
        });
    },

    navigateTo(section) {
        // Atualizar nav
        this.navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === section);
        });

        // Atualizar seções
        this.sections.forEach(sec => {
            sec.classList.toggle('active', sec.id === `section-${section}`);
        });

        // Atualizar título
        const titles = {
            home: 'Início',
            content: 'Conteúdo',
            'concept-map': 'Mapa de Conceitos',
            flashcards: 'Flashcards',
            quiz: 'Quiz',
            'clinical-cases': 'Casos Clínicos',
            instruments: 'Instrumentais',
            mnemonics: 'Mnemônicos',
            'quick-review': 'Revisão Rápida',
            'common-mistakes': 'Erros Comuns',
            exam: 'Simulado',
            progress: 'Meu Progresso'
        };
        this.currentSectionTitle.textContent = titles[section] || section;
        this.state.currentSection = section;

        // Fechar sidebar no mobile
        if (window.innerWidth <= 1024) {
            this.sidebar.classList.remove('open');
        }

        // Renderizar seção específica
        if (section === 'progress') {
            this.renderProgress();
        }
        if (section === 'concept-map') {
            this.renderConceptMap();
        }
    },

    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        this.themeToggle.innerHTML = isDark ? '<span class="theme-icon">☀️</span> Modo Claro' : '<span class="theme-icon">🌙</span> Modo Escuro';
        localStorage.setItem('darkMode', isDark);
    },

    // ==========================================================================
    // HOME
    // ==========================================================================

    renderHome() {
        // Continuar estudando
        const lastTopic = localStorage.getItem('lastTopic');
        if (lastTopic) {
            const topic = topics.find(t => t.id === lastTopic);
            if (topic) {
                this.continueStudyingText.textContent = `Continuar estudando: ${topic.title}`;
            }
        }

        // Revisão de hoje
        const today = new Date().toDateString();
        const cardsToReview = this.getCardsForReview();
        this.reviewTodayCount.textContent = `${cardsToReview.length} flashcards para revisar.`;

        // Flashcards pendentes
        const totalFlashcards = topics.reduce((acc, t) => acc + t.flashcards.length, 0);
        const reviewedFlashcards = Object.keys(this.data.flashcards).length;
        this.pendingFlashcardsCount.textContent = `${totalFlashcards - reviewedFlashcards} pendentes`;

        // Questões
        const totalQuestions = topics.reduce((acc, t) => acc + t.questions.length, 0);
        this.pendingQuestionsCount.textContent = `${totalQuestions} questões no banco`;

        // Desempenho
        const perf = this.data.performance;
        if (perf.questionsAnswered > 0) {
            const accuracy = Math.round((perf.questionsCorrect / perf.questionsAnswered) * 100);
            this.homePerformanceText.textContent = `Você acertou ${accuracy}% das questões.`;
        }

        // Erros
        this.homeMistakesList.innerHTML = '';
        if (this.data.errors.length > 0) {
            const recentErrors = this.data.errors.slice(-3).reverse();
            recentErrors.forEach(error => {
                const li = document.createElement('li');
                li.textContent = error.question.substring(0, 60) + '...';
                this.homeMistakesList.appendChild(li);
            });
        } else {
            this.homeMistakesList.innerHTML = '<li>Nenhum erro registrado ainda.</li>';
        }

        // Tempo de estudo
        this.homeStudyTime.textContent = `${Math.round(perf.totalStudyTime / 60)} minutos`;

        // Progresso global
        this.updateGlobalProgress();
    },

    continueStudying() {
        const lastTopic = localStorage.getItem('lastTopic');
        if (lastTopic) {
            this.navigateTo('content');
            this.showTopic(lastTopic);
        } else {
            this.navigateTo('content');
        }
    },

    reviewToday() {
        this.navigateTo('flashcards');
        // Filtrar para mostrar apenas os cards para revisão
        this.filterFlashcardsForReview();
    },

    // ==========================================================================
    // CONTENT
    // ==========================================================================

    renderContentList() {
        this.contentList.innerHTML = '';
        const categories = [...new Set(topics.map(t => t.category))];

        categories.forEach(category => {
            const categoryTopics = topics.filter(t => t.category === category);

            const categoryHeader = document.createElement('h3');
            categoryHeader.textContent = category;
            categoryHeader.style.marginTop = '20px';
            categoryHeader.style.marginBottom = '10px';
            categoryHeader.style.color = 'var(--primary-color)';
            this.contentList.appendChild(categoryHeader);

            categoryTopics.forEach(topic => {
                const item = document.createElement('div');
                item.className = 'topic-item';
                item.dataset.topicId = topic.id;

                const title = document.createElement('h4');
                title.textContent = topic.title;

                const summary = document.createElement('p');
                summary.textContent = topic.summary;

                item.appendChild(title);
                item.appendChild(summary);

                item.addEventListener('click', () => this.showTopic(topic.id));

                this.contentList.appendChild(item);
            });
        });
    },

    showTopic(topicId) {
        const topic = topics.find(t => t.id === topicId);
        if (!topic) return;

        this.state.currentTopic = topicId;
        localStorage.setItem('lastTopic', topicId);

        // Atualizar lista
        document.querySelectorAll('.topic-item').forEach(item => {
            item.classList.toggle('active', item.dataset.topicId === topicId);
        });

        // Renderizar detalhe
        this.renderTopicDetail(topic);
        this.navigateTo('content');
    },

    renderTopicDetail(topic) {
        let html = `
            <h2>${topic.title}</h2>
            <p><strong>Categoria:</strong> ${topic.category}</p>
            <h3>O que é?</h3>
            <p>${topic.summary}</p>
            <h3>Entenda</h3>
            <p>${topic.explanation}</p>
        `;

        if (topic.mnemonic) {
            html += `
                <div class="mnemonic-box">
                    <strong>🧠 Mnemônico:</strong> ${topic.mnemonic}
                </div>
            `;
        }

        if (topic.commonMistakes && topic.commonMistakes.length > 0) {
            html += '<h3>Cuidado com a confusão</h3><ul>';
            topic.commonMistakes.forEach(mistake => {
                html += `<li>${mistake}</li>`;
            });
            html += '</ul>';
        }

        // Adicionar flashcards relacionados
        if (topic.flashcards && topic.flashcards.length > 0) {
            html += '<h3>Flashcards Relacionados</h3>';
            topic.flashcards.forEach((fc, index) => {
                html += `
                    <div class="info-box">
                        <strong>Pergunta:</strong> ${fc.question}<br>
                        <strong>Resposta:</strong> ${fc.answer}
                    </div>
                `;
            });
        }

        // Adicionar questões relacionadas
        if (topic.questions && topic.questions.length > 0) {
            html += '<h3>Teste Rápido</h3>';
            topic.questions.forEach((q, index) => {
                if (q.type === 'multiple-choice') {
                    html += `
                        <div class="info-box">
                            <strong>${q.question}</strong><br>
                            ${q.options.map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt}`).join('<br>')}
                            <br><br><em>Resposta: ${String.fromCharCode(65 + q.correctAnswer)}</em>
                        </div>
                    `;
                }
            });
        }

        // Adicionar caso clínico relacionado
        if (topic.cases && topic.cases.length > 0) {
            const c = topic.cases[0];
            html += `
                <h3>Questão Clínica</h3>
                <div class="info-box">
                    <strong>Caso:</strong> ${c.patient}<br>
                    <strong>Dados:</strong> ${c.data}<br>
                    <strong>Pergunta:</strong> ${c.question}
                </div>
            `;
        }

        this.contentDetail.innerHTML = html;
    },

    // ==========================================================================
    // FLASHCARDS
    // ==========================================================================

    getAllFlashcards() {
        const allCards = [];
        topics.forEach(topic => {
            topic.flashcards.forEach((fc, index) => {
                allCards.push({
                    ...fc,
                    id: `${topic.id}-fc-${index}`,
                    topicId: topic.id,
                    topicTitle: topic.title,
                    category: fc.category || 'geral'
                });
            });
        });
        return allCards;
    },

    renderFlashcards() {
        const filter = this.flashcardFilter.value;
        let cards = this.getAllFlashcards();

        if (filter !== 'all') {
            cards = cards.filter(c => c.topicId === filter);
        }

        // Ordenar por repetição espaçada
        cards = this.sortCardsBySpacedRepetition(cards);

        this.state.flashcards = cards;
        this.state.currentFlashcardIndex = 0;

        if (cards.length === 0) {
            this.flashcardArea.innerHTML = '<p class="placeholder-message">Nenhum flashcard disponível para este filtro.</p>';
            return;
        }

        this.showFlashcard(0);
    },

    sortCardsBySpacedRepetition(cards) {
        const now = Date.now();
        return cards.sort((a, b) => {
            const aData = this.data.flashcards[a.id];
            const bData = this.data.flashcards[b.id];

            // Cards nunca vistos primeiro
            if (!aData && !bData) return 0;
            if (!aData) return -1;
            if (!bData) return 1;

            // Cards com próxima revisão mais antiga primeiro
            const aNext = aData.nextReview || 0;
            const bNext = bData.nextReview || 0;
            return aNext - bNext;
        });
    },

    showFlashcard(index) {
        const cards = this.state.flashcards;
        if (index >= cards.length) {
            this.flashcardArea.innerHTML = `
                <div class="placeholder-message">
                    <h3>🎉 Parabéns! Você revisou todos os flashcards!</h3>
                    <p>Volte mais tarde para revisar novamente.</p>
                    <button class="btn btn-primary" onclick="App.renderFlashcards()">Reiniciar</button>
                </div>
            `;
            return;
        }

        this.state.currentFlashcardIndex = index;
        const card = cards[index];
        const cardData = this.data.flashcards[card.id] || {};

        this.flashcardArea.innerHTML = `
            <div class="flashcard" id="current-flashcard">
                <div class="flashcard-front">
                    <h3>${card.question}</h3>
                    <p>Clique para ver a resposta</p>
                    <div class="flashcard-actions" style="margin-top: 20px;">
                        <button class="btn btn-secondary" onclick="App.toggleFavorite('${card.id}')">
                            ${this.data.favorites.includes(card.id) ? '⭐ Favorito' : '☆ Favoritar'}
                        </button>
                    </div>
                </div>
                <div class="flashcard-back">
                    <h4>Resposta</h4>
                    <p>${card.answer}</p>
                    <p class="explanation">${card.explanation || ''}</p>
                    <div class="flashcard-actions">
                        <button class="btn btn-error" onclick="App.answerFlashcard('${card.id}', 'errei')">Errei</button>
                        <button class="btn btn-hard" onclick="App.answerFlashcard('${card.id}', 'quase')">Quase</button>
                        <button class="btn btn-good" onclick="App.answerFlashcard('${card.id}', 'acertei')">Acertei</button>
                        <button class="btn btn-easy" onclick="App.answerFlashcard('${card.id}', 'facil')">Fácil</button>
                    </div>
                </div>
            </div>
        `;

        const flashcardEl = document.getElementById('current-flashcard');
        flashcardEl.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                flashcardEl.classList.toggle('flipped');
            }
        });

        // Registrar visualização
        if (!this.data.flashcards[card.id]) {
            this.data.flashcards[card.id] = {
                seen: 0,
                correct: 0,
                incorrect: 0,
                lastSeen: null,
                nextReview: 0,
                interval: 0
            };
        }
        this.data.flashcards[card.id].seen++;
        this.data.flashcards[card.id].lastSeen = Date.now();
        this.saveData();
    },

    answerFlashcard(cardId, answer) {
        const cardData = this.data.flashcards[cardId];
        if (!cardData) return;

        const now = Date.now();
        let interval = 0;

        switch (answer) {
            case 'errei':
                cardData.incorrect++;
                interval = 1 * 60 * 1000; // 1 minuto
                break;
            case 'quase':
                cardData.correct++;
                interval = 10 * 60 * 1000; // 10 minutos
                break;
            case 'acertei':
                cardData.correct++;
                interval = 24 * 60 * 60 * 1000; // 1 dia
                break;
            case 'facil':
                cardData.correct++;
                interval = 3 * 24 * 60 * 60 * 1000; // 3 dias
                break;
        }

        cardData.nextReview = now + interval;
        cardData.interval = interval;
        this.saveData();

        // Avançar para o próximo
        this.showFlashcard(this.state.currentFlashcardIndex + 1);
        this.updateGlobalProgress();
    },

    toggleFavorite(cardId) {
        const index = this.data.favorites.indexOf(cardId);
        if (index > -1) {
            this.data.favorites.splice(index, 1);
        } else {
            this.data.favorites.push(cardId);
        }
        this.saveData();
        this.showFlashcard(this.state.currentFlashcardIndex);
    },

    shuffleFlashcards() {
        const cards = this.state.flashcards;
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        this.state.flashcards = cards;
        this.showFlashcard(0);
    },

    reviewErrorFlashcards() {
        const errorCardIds = new Set();
        this.data.errors.forEach(error => {
            if (error.cardId) errorCardIds.add(error.cardId);
        });

        const allCards = this.getAllFlashcards();
        const errorCards = allCards.filter(c => errorCardIds.has(c.id));

        if (errorCards.length === 0) {
            alert('Nenhum flashcard com erro registrado. Continue praticando!');
            return;
        }

        this.state.flashcards = errorCards;
        this.showFlashcard(0);
    },

    reviewDifficultFlashcards() {
        const allCards = this.getAllFlashcards();
        const difficultCards = allCards.filter(c => {
            const data = this.data.flashcards[c.id];
            if (!data) return false;
            const total = data.correct + data.incorrect;
            if (total === 0) return false;
            return (data.incorrect / total) > 0.5;
        });

        if (difficultCards.length === 0) {
            alert('Nenhum flashcard difícil registrado. Continue praticando!');
            return;
        }

        this.state.flashcards = difficultCards;
        this.showFlashcard(0);
    },

    filterFlashcardsForReview() {
        const cardsToReview = this.getCardsForReview();
        this.state.flashcards = cardsToReview;
        this.showFlashcard(0);
    },

    getCardsForReview() {
        const now = Date.now();
        const allCards = this.getAllFlashcards();
        return allCards.filter(card => {
            const data = this.data.flashcards[card.id];
            if (!data) return true; // Nunca visto
            return (data.nextReview || 0) <= now;
        });
    },

    // ==========================================================================
    // QUIZ
    // ==========================================================================

    renderQuiz() {
        const filter = this.quizFilter.value;
        let questions = [];

        topics.forEach(topic => {
            if (filter !== 'all' && topic.id !== filter) return;
            topic.questions.forEach((q, index) => {
                questions.push({
                    ...q,
                    id: `${topic.id}-q-${index}`,
                    topicId: topic.id,
                    topicTitle: topic.title
                });
            });
        });

        this.state.quizQuestions = questions;

        if (questions.length === 0) {
            this.quizArea.innerHTML = '<p class="placeholder-message">Nenhuma questão disponível para este filtro.</p>';
            return;
        }

        this.quizArea.innerHTML = `
            <div class="quiz-question">
                <p>${questions.length} questões disponíveis.</p>
                <button class="btn btn-primary" onclick="App.startQuiz()">Iniciar Quiz</button>
            </div>
        `;
    },

    startQuiz() {
        const questions = this.state.quizQuestions;
        if (questions.length === 0) {
            alert('Nenhuma questão disponível. Selecione um filtro válido.');
            return;
        }

        this.state.currentQuizIndex = 0;
        this.state.quizAnswers = [];
        this.showQuizQuestion(0);
    },

    showQuizQuestion(index) {
        const questions = this.state.quizQuestions;
        if (index >= questions.length) {
            this.showQuizResults();
            return;
        }

        this.state.currentQuizIndex = index;
        const q = questions[index];

        let optionsHtml = '';
        if (q.type === 'multiple-choice') {
            optionsHtml = q.options.map((opt, i) => `
                <button class="quiz-option" data-index="${i}" onclick="App.selectQuizOption(${i})">
                    ${String.fromCharCode(65 + i)}) ${opt}
                </button>
            `).join('');
        } else if (q.type === 'true-false') {
            optionsHtml = `
                <button class="quiz-option" data-index="0" onclick="App.selectQuizOption(0)">Verdadeiro</button>
                <button class="quiz-option" data-index="1" onclick="App.selectQuizOption(1)">Falso</button>
            `;
        } else if (q.type === 'association') {
            // Para associação, vamos simplificar e mostrar como múltipla escolha
            // em uma implementação completa, seria um jogo de arrastar/soltar
            optionsHtml = '<p>Questão de associação. Selecione a alternativa correta abaixo:</p>';
            // Fallback para múltipla escolha
            if (q.pairs) {
                const correctPair = q.pairs[0];
                const otherPairs = q.pairs.slice(1).map(p => p.right);
                const allOptions = [correctPair.right, ...otherPairs].sort(() => Math.random() - 0.5);
                optionsHtml += allOptions.map((opt, i) => `
                    <button class="quiz-option" data-index="${i}" onclick="App.selectQuizOption(${i})">
                        ${opt}
                    </button>
                `).join('');
                q._correctIndex = allOptions.indexOf(correctPair.right);
                q._options = allOptions;
            }
        }

        this.quizArea.innerHTML = `
            <div class="quiz-question">
                <p><strong>Questão ${index + 1} de ${questions.length}</strong></p>
                <p><em>${q.topicTitle}</em></p>
                <h3>${q.question}</h3>
                <div class="quiz-options">
                    ${optionsHtml}
                </div>
                <div class="quiz-feedback" id="quiz-feedback"></div>
                <div class="quiz-navigation">
                    <button class="btn btn-secondary" onclick="App.prevQuizQuestion()" ${index === 0 ? 'disabled' : ''}>Anterior</button>
                    <button class="btn btn-primary" onclick="App.nextQuizQuestion()" id="btn-next-quiz" disabled>Próxima</button>
                </div>
            </div>
        `;
    },

    selectQuizOption(optionIndex) {
        const q = this.state.quizQuestions[this.state.currentQuizIndex];
        let correctIndex;

        if (q.type === 'multiple-choice') {
            correctIndex = q.correctAnswer;
        } else if (q.type === 'true-false') {
            correctIndex = q.correctAnswer ? 0 : 1;
        } else if (q.type === 'association') {
            correctIndex = q._correctIndex;
        }

        const isCorrect = optionIndex === correctIndex;

        // Marcar visualmente
        document.querySelectorAll('.quiz-option').forEach((btn, i) => {
            btn.classList.remove('selected', 'correct', 'incorrect');
            if (i === optionIndex) {
                btn.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            if (i === correctIndex && !isCorrect) {
                btn.classList.add('correct');
            }
        });

        // Mostrar feedback
        const feedback = document.getElementById('quiz-feedback');
        feedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `
            <h4>${isCorrect ? '✅ Correto!' : '❌ Incorreto'}</h4>
            <p><strong>Explicação:</strong> ${q.explanation}</p>
            ${!isCorrect ? `<p><strong>Resposta correta:</strong> ${q.type === 'multiple-choice' ? q.options[correctIndex] : (q.type === 'true-false' ? (correctIndex === 0 ? 'Verdadeiro' : 'Falso') : q._options[correctIndex])}</p>` : ''}
        `;

        // Registrar resposta
        this.state.quizAnswers[this.state.currentQuizIndex] = {
            questionId: q.id,
            selected: optionIndex,
            correct: correctIndex,
            isCorrect
        };

        // Atualizar performance
        this.data.performance.questionsAnswered++;
        if (isCorrect) {
            this.data.performance.questionsCorrect++;
        } else {
            // Registrar erro
            this.data.errors.push({
                questionId: q.id,
                question: q.question,
                selected: optionIndex,
                correct: correctIndex,
                topicId: q.topicId,
                topicTitle: q.topicTitle,
                date: new Date().toISOString(),
                count: (this.data.errors.find(e => e.questionId === q.id)?.count || 0) + 1
            });
        }
        this.saveData();

        // Habilitar próximo
        document.getElementById('btn-next-quiz').disabled = false;
        this.updateGlobalProgress();
    },

    nextQuizQuestion() {
        this.showQuizQuestion(this.state.currentQuizIndex + 1);
    },

    prevQuizQuestion() {
        this.showQuizQuestion(this.state.currentQuizIndex - 1);
    },

    showQuizResults() {
        const answers = this.state.quizAnswers.filter(a => a);
        const total = answers.length;
        const correct = answers.filter(a => a.isCorrect).length;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

        this.quizArea.innerHTML = `
            <div class="exam-results">
                <h2>Resultado do Quiz</h2>
                <div class="exam-score">${percentage}%</div>
                <p>Você acertou ${correct} de ${total} questões.</p>
                <button class="btn btn-primary" onclick="App.startQuiz()">Tentar Novamente</button>
            </div>
        `;
    },

    // ==========================================================================
    // CLINICAL CASES
    // ==========================================================================

    renderClinicalCases() {
        this.clinicalCasesArea.innerHTML = '';

        clinicalCases.forEach(c => {
            const caseEl = document.createElement('div');
            caseEl.className = 'case-item';
            caseEl.innerHTML = `
                <span class="case-level case-level-${c.level}">Nível ${c.level}</span>
                <h3>${c.title}</h3>
                <p><strong>Paciente:</strong> ${c.patient}</p>
                <div class="case-data">
                    <strong>Dados disponíveis:</strong> ${c.data}
                </div>
                <p class="case-question">${c.question}</p>
                <div class="case-options">
                    ${c.options.map((opt, i) => `
                        <button class="case-option" onclick="App.answerCase('${c.id}', ${i})">${opt}</button>
                    `).join('')}
                </div>
                <div class="case-explanation" id="case-explanation-${c.id}">
                    <p><strong>Explicação:</strong> ${c.explanation}</p>
                </div>
            `;
            this.clinicalCasesArea.appendChild(caseEl);
        });
    },

    answerCase(caseId, optionIndex) {
        const c = clinicalCases.find(x => x.id === caseId);
        if (!c) return;

        const caseEl = document.querySelector(`.case-item:has(#case-explanation-${caseId})`);
        const options = caseEl.querySelectorAll('.case-option');
        const explanation = document.getElementById(`case-explanation-${caseId}`);

        options.forEach((btn, i) => {
            btn.classList.remove('correct', 'incorrect');
            if (i === c.correctAnswer) {
                btn.classList.add('correct');
            } else if (i === optionIndex) {
                btn.classList.add('incorrect');
            }
        });

        explanation.classList.add('show');
    },

    // ==========================================================================
    // INSTRUMENTS
    // ==========================================================================

    renderInstruments() {
        this.instrumentList.innerHTML = '';
        instruments.forEach(inst => {
            const item = document.createElement('div');
            item.className = 'instrument-item';
            item.dataset.instrumentId = inst.id;
            item.innerHTML = `<strong>${inst.name}</strong><br><small>${inst.category}</small>`;
            item.addEventListener('click', () => this.showInstrument(inst.id));
            this.instrumentList.appendChild(item);
        });

        this.renderInstrumentGame();
    },

    showInstrument(instrumentId) {
        const inst = instruments.find(i => i.id === instrumentId);
        if (!inst) return;

        this.state.currentInstrument = instrumentId;

        document.querySelectorAll('.instrument-item').forEach(item => {
            item.classList.toggle('active', item.dataset.instrumentId === instrumentId);
        });

        this.instrumentDetail.innerHTML = `
            <h2>${inst.name}</h2>
            <div class="instrument-image-placeholder">🖼️ Imagem não disponível no material</div>
            <p><strong>Função:</strong> ${inst.function}</p>
            <p><strong>Características:</strong> ${inst.characteristics}</p>
            <p><strong>Quando utilizar:</strong> ${inst.whenToUse}</p>
            <p><strong>Pode ser confundido com:</strong> ${inst.confusedWith}</p>
            <div class="info-box">
                <strong>Teste rápido:</strong> Qual a principal diferença entre este instrumento e o ${inst.confusedWith}?
            </div>
        `;
    },

    renderInstrumentGame() {
        this.instrumentGameArea.innerHTML = `
            <p>Clique no botão para iniciar o jogo de reconhecimento.</p>
            <button class="btn btn-primary" onclick="App.startInstrumentGame()">Iniciar Jogo</button>
        `;
    },

    startInstrumentGame() {
        const randomInst = instruments[Math.floor(Math.random() * instruments.length)];
        const otherOptions = instruments
            .filter(i => i.id !== randomInst.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(i => i.name);

        const allOptions = [randomInst.name, ...otherOptions].sort(() => Math.random() - 0.5);

        this.instrumentGameArea.innerHTML = `
            <div class="game-image">🛠️</div>
            <p><strong>Que instrumento é este?</strong></p>
            <p><em>${randomInst.characteristics}</em></p>
            <div class="game-options">
                ${allOptions.map(opt => `
                    <button class="btn btn-secondary" onclick="App.checkInstrumentGame('${randomInst.id}', '${opt}')">${opt}</button>
                `).join('')}
            </div>
        `;
    },

    checkInstrumentGame(correctId, selectedName) {
        const correctInst = instruments.find(i => i.id === correctId);
        if (selectedName === correctInst.name) {
            alert(`✅ Correto! O instrumento é o ${correctInst.name}. Função: ${correctInst.function}`);
        } else {
            alert(`❌ Incorreto. A resposta correta é ${correctInst.name}. Função: ${correctInst.function}`);
        }
        this.renderInstrumentGame();
    },

    // ==========================================================================
    // MNEMONICS
    // ==========================================================================

    renderMnemonics() {
        this.mnemonicsList.innerHTML = '';
        mnemonics.forEach(m => {
            const card = document.createElement('div');
            card.className = 'mnemonic-card';
            card.innerHTML = `
                <h3>🧠 ${m.title}</h3>
                <div class="mnemonic-phrase">${m.phrase}</div>
                <div class="mnemonic-explanation">${m.explanation}</div>
            `;
            this.mnemonicsList.appendChild(card);
        });
    },

    // ==========================================================================
    // QUICK REVIEW
    // ==========================================================================

    renderQuickReview() {
        const quickReviewHtml = `
            <div class="quick-review-card">
                <h3>📌 Conceitos Fundamentais</h3>
                <ul>
                    <li><strong>Diagnóstico Cirúrgico:</strong> Coleta de dados precisos antes da anestesia.</li>
                    <li><strong>Técnica Asséptica:</strong> Minimizar contaminação da ferida.</li>
                    <li><strong>Incisões:</strong> Lâmina afiada, perpendicular, contínua.</li>
                    <li><strong>Retalho:</strong> Prevenir necrose, deiscência e dilaceração.</li>
                    <li><strong>Hemostasia:</strong> Pressão, ligadura, epinefrina, coagulação.</li>
                    <li><strong>Espaço Morto:</strong> Prevenir hematoma e infecção.</li>
                </ul>
            </div>
            <div class="quick-review-card">
                <h3>🧠 Mnemônicos</h3>
                <ul>
                    ${mnemonics.slice(0, 4).map(m => `<li><strong>${m.title}:</strong> ${m.phrase}</li>`).join('')}
                </ul>
            </div>
            <div class="quick-review-card">
                <h3>⚠️ Diferenças Críticas</h3>
                <ul>
                    <li><strong>Fórceps nº 150 vs. nº 151:</strong> Superior vs. Inferior.</li>
                    <li><strong>Pinça Hemostática vs. Porta-Agulha:</strong> Sulcos paralelos vs. Ranhuras cruzadas.</li>
                    <li><strong>Alavanca Reta vs. Cryer:</strong> Luxar dentes vs. Remover raízes.</li>
                    <li><strong>Sutura Reabsorvível vs. Não Reabsorvível:</strong> Categute vs. Seda.</li>
                </ul>
            </div>
            <div class="quick-review-card">
                <h3>❓ 5 Questões Rápidas</h3>
                <ol>
                    <li>Qual a lâmina de bisturi mais usada em cirurgia intrabucal?</li>
                    <li>Qual o objetivo da pressão apical com o fórceps?</li>
                    <li>Qual instrumento é usado para rebater o periósteo?</li>
                    <li>Qual sutura é a mais comum na cavidade bucal?</li>
                    <li>Qual o princípio mecânico da alavanca de Crane?</li>
                </ol>
                <details>
                    <summary>Ver Respostas</summary>
                    <p>1. Lâmina nº 15. 2. Expandir osso e deslocar centro de rotação. 3. Elevador periosteal Molt nº 9. 4. Seda (não reabsorvível). 5. Alavanca de primeira classe.</p>
                </details>
            </div>
        `;
        this.quickReviewContent.innerHTML = quickReviewHtml;
    },

    // ==========================================================================
    // COMMON MISTAKES
    // ==========================================================================

    renderCommonMistakes() {
        this.commonMistakesList.innerHTML = '';
        commonMistakes.forEach(m => {
            const card = document.createElement('div');
            card.className = 'mistake-card';
            card.innerHTML = `
                <h3>⚠️ ${m.title}</h3>
                <div class="comparison">
                    ${m.comparison.map(c => `
                        <div class="comparison-item">
                            <h4>${c.name}</h4>
                            <p>${c.features}</p>
                        </div>
                    `).join('')}
                </div>
                <p><strong>Como diferenciar:</strong> ${m.howToDifferentiate}</p>
            `;
            this.commonMistakesList.appendChild(card);
        });
    },

    // ==========================================================================
    // PROGRESS
    // ==========================================================================

    renderProgress() {
        const perf = this.data.performance;

        this.statQuestionsAnswered.textContent = perf.questionsAnswered;
        this.statAccuracy.textContent = perf.questionsAnswered > 0 ? Math.round((perf.questionsCorrect / perf.questionsAnswered) * 100) + '%' : '0%';
        this.statFlashcardsReviewed.textContent = perf.flashcardsReviewed;
        this.statMasteredConcepts.textContent = perf.masteredConcepts;
        this.statWeakConcepts.textContent = perf.weakConcepts;
        this.statStudyStreak.textContent = perf.studyStreak + ' dias';
        this.statStudyTime.textContent = Math.round(perf.totalStudyTime / 60) + ' min';
        this.statRetentionRate.textContent = perf.retentionRate + '%';

        // Desempenho por tema
        const topicsPerformance = {};
        topics.forEach(t => {
            const topicQuestions = this.state.quizAnswers.filter(a => a && a.questionId.startsWith(t.id));
            if (topicQuestions.length > 0) {
                const correct = topicQuestions.filter(a => a.isCorrect).length;
                topicsPerformance[t.title] = Math.round((correct / topicQuestions.length) * 100);
            }
        });

        this.performanceByTopic.innerHTML = '';
        if (Object.keys(topicsPerformance).length === 0) {
            this.performanceByTopic.innerHTML = '<p>Nenhum dado de desempenho ainda.</p>';
        } else {
            Object.entries(topicsPerformance).forEach(([topic, percentage]) => {
                this.performanceByTopic.innerHTML += `
                    <div class="topic-bar-container">
                        <div class="topic-bar-label">
                            <span>${topic}</span>
                            <span>${percentage}%</span>
                        </div>
                        <div class="topic-bar-bg">
                            <div class="topic-bar-fill" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                `;
            });
        }

        // Recomendações
        this.studyRecommendations.innerHTML = '';
        const weakTopics = Object.entries(topicsPerformance).filter(([_, p]) => p < 70);
        if (weakTopics.length > 0) {
            weakTopics.forEach(([topic, percentage]) => {
                this.studyRecommendations.innerHTML += `<li>📖 Revise o tópico "${topic}" (${percentage}% de acerto)</li>`;
            });
        } else if (perf.questionsAnswered > 0) {
            this.studyRecommendations.innerHTML = '<li>🎉 Bom trabalho! Continue revisando regularmente.</li>';
        } else {
            this.studyRecommendations.innerHTML = '<li>Pratique mais para obter recomendações.</li>';
        }

        // Favoritos
        this.favoritesList.innerHTML = '';
        if (this.data.favorites.length > 0) {
            const allCards = this.getAllFlashcards();
            this.data.favorites.forEach(cardId => {
                const card = allCards.find(c => c.id === cardId);
                if (card) {
                    this.favoritesList.innerHTML += `<li>⭐ ${card.question}</li>`;
                }
            });
        } else {
            this.favoritesList.innerHTML = '<li>Nenhum favorito ainda.</li>';
        }

        // Erros
        this.errorsList.innerHTML = '';
        if (this.data.errors.length > 0) {
            const uniqueErrors = {};
            this.data.errors.forEach(error => {
                if (!uniqueErrors[error.questionId]) {
                    uniqueErrors[error.questionId] = { ...error, count: 1 };
                } else {
                    uniqueErrors[error.questionId].count++;
                }
            });

            Object.values(uniqueErrors).sort((a, b) => b.count - a.count).slice(0, 10).forEach(error => {
                this.errorsList.innerHTML += `
                    <div class="error-item">
                        <div class="error-question">${error.question.substring(0, 80)}... <span class="error-count">${error.count}x</span></div>
                        <div class="error-details">Tópico: ${error.topicTitle}</div>
                    </div>
                `;
            });
        } else {
            this.errorsList.innerHTML = '<li>Nenhum erro registrado ainda.</li>';
        }
    },

    reviewAllErrors() {
        if (this.data.errors.length === 0) {
            alert('Nenhum erro registrado para revisar.');
            return;
        }
        // Implementar revisão de erros
        alert('Funcionalidade de revisão de erros em desenvolvimento.');
    },

    updateGlobalProgress() {
        const perf = this.data.performance;
        const totalQuestions = topics.reduce((acc, t) => acc + t.questions.length, 0);
        const totalFlashcards = topics.reduce((acc, t) => acc + t.flashcards.length, 0);
        const totalItems = totalQuestions + totalFlashcards;

        const answeredQuestions = perf.questionsAnswered;
        const reviewedFlashcards = Object.keys(this.data.flashcards).length;
        const totalDone = answeredQuestions + reviewedFlashcards;

        const progress = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;
        this.globalProgressBar.style.width = progress + '%';

        // Performance indicator
        const accuracy = perf.questionsAnswered > 0 ? Math.round((perf.questionsCorrect / perf.questionsAnswered) * 100) : 0;
        this.performanceValue.textContent = accuracy + '%';
    },

    checkStudyStreak() {
        const today = new Date().toDateString();
        const lastStudy = this.data.performance.lastStudyDate;

        if (lastStudy === today) {
            // Já estudou hoje
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastStudy === yesterday.toDateString()) {
            this.data.performance.studyStreak++;
        } else if (lastStudy !== today) {
            this.data.performance.studyStreak = 1;
        }

        this.data.performance.lastStudyDate = today;
        this.saveData();
    },

    startStudyTimer() {
        this.state.studyStartTime = Date.now();
        setInterval(() => {
            const now = Date.now();
            const elapsed = Math.floor((now - this.state.studyStartTime) / 1000 / 60); // minutos
            this.data.performance.totalStudyTime += 1; // Adiciona 1 minuto a cada minuto
            this.saveData();
            this.homeStudyTime.textContent = `${Math.round(this.data.performance.totalStudyTime / 60)} minutos`;
        }, 60000); // A cada minuto
    },

    // ==========================================================================
    // EXAM
    // ==========================================================================

    startExam(numQuestions) {
        let allQuestions = [];
        topics.forEach(topic => {
            topic.questions.forEach((q, index) => {
                allQuestions.push({
                    ...q,
                    id: `${topic.id}-q-${index}`,
                    topicId: topic.id,
                    topicTitle: topic.title
                });
            });
        });

        // Embaralhar
        allQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, numQuestions);

        if (allQuestions.length === 0) {
            alert('Nenhuma questão disponível para o simulado.');
            return;
        }

        this.state.examQuestions = allQuestions;
        this.state.currentExamIndex = 0;
        this.state.examAnswers = [];
        this.state.examStartTime = Date.now();

        this.examSetup.style.display = 'none';
        this.examArea.style.display = 'block';

        this.showExamQuestion(0);
        this.startExamTimer();
    },

    startExamTimer() {
        if (this.state.examTimer) clearInterval(this.state.examTimer);
        this.state.examTimer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.state.examStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            const timerEl = document.getElementById('exam-timer');
            if (timerEl) {
                timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);
    },

    showExamQuestion(index) {
        const questions = this.state.examQuestions;
        if (index >= questions.length) {
            this.finishExam();
            return;
        }

        this.state.currentExamIndex = index;
        const q = questions[index];

        let optionsHtml = '';
        if (q.type === 'multiple-choice') {
            optionsHtml = q.options.map((opt, i) => `
                <button class="quiz-option" data-index="${i}" onclick="App.selectExamOption(${i})">
                    ${String.fromCharCode(65 + i)}) ${opt}
                </button>
            `).join('');
        } else if (q.type === 'true-false') {
            optionsHtml = `
                <button class="quiz-option" data-index="0" onclick="App.selectExamOption(0)">Verdadeiro</button>
                <button class="quiz-option" data-index="1" onclick="App.selectExamOption(1)">Falso</button>
            `;
        }

        this.examArea.innerHTML = `
            <div class="exam-header">
                <span>Questão ${index + 1} de ${questions.length}</span>
                <span class="exam-timer" id="exam-timer">00:00</span>
            </div>
            <div class="quiz-question">
                <p><em>${q.topicTitle}</em></p>
                <h3>${q.question}</h3>
                <div class="quiz-options">
                    ${optionsHtml}
                </div>
                <div class="quiz-navigation">
                    <button class="btn btn-secondary" onclick="App.prevExamQuestion()" ${index === 0 ? 'disabled' : ''}>Anterior</button>
                    <button class="btn btn-primary" onclick="App.nextExamQuestion()" id="btn-next-exam" disabled>Próxima</button>
                </div>
            </div>
        `;

        this.startExamTimer();
    },

    selectExamOption(optionIndex) {
        const q = this.state.examQuestions[this.state.currentExamIndex];
        let correctIndex;

        if (q.type === 'multiple-choice') {
            correctIndex = q.correctAnswer;
        } else if (q.type === 'true-false') {
            correctIndex = q.correctAnswer ? 0 : 1;
        }

        this.state.examAnswers[this.state.currentExamIndex] = {
            questionId: q.id,
            selected: optionIndex,
            correct: correctIndex,
            isCorrect: optionIndex === correctIndex
        };

        document.querySelectorAll('.quiz-option').forEach((btn, i) => {
            btn.classList.remove('selected');
            if (i === optionIndex) {
                btn.classList.add('selected');
            }
        });

        document.getElementById('btn-next-exam').disabled = false;
    },

    nextExamQuestion() {
        this.showExamQuestion(this.state.currentExamIndex + 1);
    },

    prevExamQuestion() {
        this.showExamQuestion(this.state.currentExamIndex - 1);
    },

    finishExam() {
        clearInterval(this.state.examTimer);

        const answers = this.state.examAnswers.filter(a => a);
        const total = answers.length;
        const correct = answers.filter(a => a.isCorrect).length;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

        // Desempenho por tema
        const topicPerformance = {};
        answers.forEach(a => {
            const q = this.state.examQuestions.find(x => x.id === a.questionId);
            if (q) {
                if (!topicPerformance[q.topicTitle]) {
                    topicPerformance[q.topicTitle] = { total: 0, correct: 0 };
                }
                topicPerformance[q.topicTitle].total++;
                if (a.isCorrect) topicPerformance[q.topicTitle].correct++;
            }
        });

        let topicHtml = '';
        Object.entries(topicPerformance).forEach(([topic, data]) => {
            const pct = Math.round((data.correct / data.total) * 100);
            topicHtml += `
                <div class="topic-result-item">
                    <span>${topic}</span>
                    <span>${pct}%</span>
                </div>
            `;
        });

        // Recomendações
        const weakTopics = Object.entries(topicPerformance)
            .filter(([_, data]) => (data.correct / data.total) < 0.7)
            .map(([topic]) => topic);

        let recommendationsHtml = '';
        if (weakTopics.length > 0) {
            recommendationsHtml = '<ul>' + weakTopics.map(t => `<li>📖 Revise o tópico "${t}"</li>`).join('') + '</ul>';
        } else {
            recommendationsHtml = '<p>🎉 Excelente desempenho! Continue revisando regularmente.</p>';
        }

        this.examArea.innerHTML = `
            <div class="exam-results">
                <h2>Resultado do Simulado</h2>
                <div class="exam-score">${percentage}%</div>
                <p>Você acertou ${correct} de ${total} questões.</p>
                <div class="exam-topic-results">
                    <h3>Desempenho por Tema</h3>
                    ${topicHtml}
                </div>
                <div style="margin-top: 20px; text-align: left;">
                    <h3>Recomendações de Estudo</h3>
                    ${recommendationsHtml}
                </div>
                <button class="btn btn-primary" style="margin-top: 20px;" onclick="App.resetExam()">Novo Simulado</button>
            </div>
        `;

        // Registrar performance
        this.data.performance.questionsAnswered += total;
        this.data.performance.questionsCorrect += correct;
        this.saveData();
        this.updateGlobalProgress();
    },

    resetExam() {
        this.examSetup.style.display = 'block';
        this.examArea.style.display = 'none';
        this.examArea.innerHTML = '';
    },

    // ==========================================================================
    // SEARCH
    // ==========================================================================

    handleSearch(query) {
        if (!query || query.length < 2) {
            this.searchResults.classList.remove('active');
            return;
        }

        const results = [];
        const lowerQuery = query.toLowerCase();

        // Buscar em tópicos
        topics.forEach(topic => {
            if (topic.title.toLowerCase().includes(lowerQuery) ||
                topic.summary.toLowerCase().includes(lowerQuery) ||
                topic.explanation.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'Conceito',
                    title: topic.title,
                    id: topic.id,
                    action: () => this.showTopic(topic.id)
                });
            }
        });

        // Buscar em flashcards
        this.getAllFlashcards().forEach(card => {
            if (card.question.toLowerCase().includes(lowerQuery) ||
                card.answer.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'Flashcard',
                    title: card.question.substring(0, 60) + '...',
                    id: card.id,
                    action: () => {
                        this.navigateTo('flashcards');
                        this.state.flashcards = [card];
                        this.showFlashcard(0);
                    }
                });
            }
        });

        // Buscar em instrumentos
        instruments.forEach(inst => {
            if (inst.name.toLowerCase().includes(lowerQuery) ||
                inst.function.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'Instrumento',
                    title: inst.name,
                    id: inst.id,
                    action: () => {
                        this.navigateTo('instruments');
                        this.showInstrument(inst.id);
                    }
                });
            }
        });

        // Buscar em mnemônicos
        mnemonics.forEach(m => {
            if (m.title.toLowerCase().includes(lowerQuery) ||
                m.phrase.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'Mnemônico',
                    title: m.title,
                    id: m.id,
                    action: () => this.navigateTo('mnemonics')
                });
            }
        });

        // Renderizar resultados
        this.searchResults.innerHTML = '';
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="search-result-item">Nenhum resultado encontrado.</div>';
        } else {
            results.slice(0, 10).forEach(result => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <div class="result-type">${result.type}</div>
                    <div class="result-title">${result.title}</div>
                `;
                item.addEventListener('click', () => {
                    result.action();
                    this.searchResults.classList.remove('active');
                    this.globalSearch.value = '';
                });
                this.searchResults.appendChild(item);
            });
        }
        this.searchResults.classList.add('active');
    },

    // ==========================================================================
    // CONCEPT MAP
    // ==========================================================================

    renderConceptMap() {
        const width = this.conceptMapContainer.clientWidth || 800;
        const height = 600;

        // Definir nós e links
        const nodes = [
            { id: 'extracao', label: 'Extração Dentária', x: width / 2, y: 50 },
            { id: 'avaliacao', label: 'Avaliação Pré-Operatória', x: width / 2, y: 120 },
            { id: 'imagem', label: 'Exames de Imagem', x: width / 2 - 200, y: 190 },
            { id: 'planejamento', label: 'Planejamento', x: width / 2 + 200, y: 190 },
            { id: 'instrumental', label: 'Instrumentais', x: width / 2 - 200, y: 260 },
            { id: 'principios', label: 'Princípios Mecânicos', x: width / 2 + 200, y: 260 },
            { id: 'luxacao', label: 'Luxação', x: width / 2 - 200, y: 330 },
            { id: 'remocao', label: 'Remoção', x: width / 2 + 200, y: 330 },
            { id: 'hemostasia', label: 'Hemostasia', x: width / 2 - 200, y: 400 },
            { id: 'cicatrizacao', label: 'Cicatrização', x: width / 2 + 200, y: 400 },
            { id: 'posop', label: 'Pós-Operatório', x: width / 2, y: 470 }
        ];

        const links = [
            { from: 'extracao', to: 'avaliacao' },
            { from: 'avaliacao', to: 'imagem' },
            { from: 'avaliacao', to: 'planejamento' },
            { from: 'imagem', to: 'instrumental' },
            { from: 'planejamento', to: 'principios' },
            { from: 'instrumental', to: 'luxacao' },
            { from: 'principios', to: 'remocao' },
            { from: 'luxacao', to: 'hemostasia' },
            { from: 'remocao', to: 'cicatrizacao' },
            { from: 'hemostasia', to: 'posop' },
            { from: 'cicatrizacao', to: 'posop' }
        ];

        let svg = `<svg id="concept-map-svg" viewBox="0 0 ${width} ${height}">`;
        svg += `<defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="var(--border-color)" /></marker></defs>`;

        // Desenhar links
        links.forEach(link => {
            const from = nodes.find(n => n.id === link.from);
            const to = nodes.find(n => n.id === link.to);
            if (from && to) {
                svg += `<line class="concept-link" x1="${from.x}" y1="${from.y + 20}" x2="${to.x}" y2="${to.y - 20}" />`;
            }
        });

        // Desenhar nós
        nodes.forEach(node => {
            svg += `
                <g class="concept-node" onclick="App.navigateTo('content')" tabindex="0" role="button" aria-label="${node.label}">
                    <rect x="${node.x - 90}" y="${node.y - 20}" width="180" height="40" />
                    <text x="${node.x}" y="${node.y}">${node.label}</text>
                </g>
            `;
        });

        svg += '</svg>';
        this.conceptMapContainer.innerHTML = svg;
    }
};

// Inicializar a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    App.init();

    // Verificar modo escuro salvo
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        App.themeToggle.innerHTML = '<span class="theme-icon">☀️</span> Modo Claro';
    }

    // Popular filtros
    const topicFilter = document.getElementById('flashcard-filter');
    const quizFilter = document.getElementById('quiz-filter');

    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic.id;
        option.textContent = topic.title;
        topicFilter.appendChild(option.cloneNode(true));
        quizFilter.appendChild(option);
    });
});