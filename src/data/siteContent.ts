export type NavItem = {
  label: string;
  href: string;
};

export type Treatment = {
  slug: string;
  name: string;
  category: string;
  excerpt: string;
  idealFor: string;
  duration: string;
  recovery: string;
  benefits: string[];
  steps: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export type BeforeAfterCase = {
  title: string;
  focus: string;
  note: string;
  variant: "midface" | "lips" | "skin";
  beforeLabel: string;
  afterLabel: string;
};

export const clinic = {
  name: "Maison Aura",
  badge: "Estetica facial com atendimento personalizado",
  tagline:
    "Clinica de estetica facial em Sao Paulo com foco em naturalidade, seguranca tecnica e planos personalizados de rejuvenescimento.",
  location: "Jardins, Sao Paulo - SP",
  phone: "(11) 98765-4321",
  whatsapp:
    "https://wa.me/5511987654321?text=Ola%2C%20quero%20agendar%20uma%20avaliacao%20na%20Maison%20Aura.",
  instagram: "https://instagram.com/maisonaura.estetica",
  email: "contato@maisonaura.com.br",
  address: "Alameda Tiete, 415, Jardins, Sao Paulo - SP",
  hours: [
    "Segunda a sexta, das 09h as 19h",
    "Sabado, das 09h as 13h",
    "Atendimento com horario marcado",
  ],
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Tratamentos", href: "/tratamentos" },
    { label: "Antes e Depois", href: "/resultados" },
    { label: "Conteudo", href: "/conteudo" },
    { label: "Contato", href: "/contato" },
  ] satisfies NavItem[],
  media: {
    hero: "/media/hero.png",
    specialist: "/media/specialist.png",
    consultation: "/media/environment.png",
    environment: "/media/environment.png",
    editorial: "/media/editorial.png",
    results: {
      midface:
        "https://images.pexels.com/photos/6567969/pexels-photo-6567969.jpeg?cs=srgb&dl=pexels-cottonbro-6567969.jpg&fm=jpg",
      lips:
        "https://images.pexels.com/photos/7479590/pexels-photo-7479590.jpeg?cs=srgb&dl=pexels-angela-roma-7479590.jpg&fm=jpg",
      skin:
        "https://images.pexels.com/photos/7479594/pexels-photo-7479594.jpeg?cs=srgb&dl=pexels-angela-roma-7479594.jpg&fm=jpg",
    },
  },
  stats: [
    { value: "11 anos", label: "de atuacao em estetica facial avancada" },
    { value: "94%", label: "das pacientes chegam por indicacao e recorrencia" },
    { value: "1:1", label: "plano terapeutico desenhado de forma personalizada" },
  ],
  highlights: [
    "Protocolos minimamente invasivos com indicacao individualizada",
    "Diagnostico facial com criterio tecnico e leitura global da face",
    "Acompanhamento proximo do planejamento ao pos-procedimento",
  ],
  differentiators: [
    {
      title: "Naturalidade como assinatura",
      text: "Cada protocolo busca suavizar sinais e valorizar tracos com elegancia, sem descaracterizar a expressao.",
    },
    {
      title: "Ambiente boutique e acolhedor",
      text: "Luz suave, materiais nobres e uma jornada calma do primeiro contato ao pos-procedimento.",
    },
    {
      title: "Planejamento facial estrategico",
      text: "Indicacao tecnica, combinacao de procedimentos e cronograma coerente com rotina e objetivo estico.",
    },
    {
      title: "Seguranca e previsibilidade",
      text: "Protocolos padronizados, orientacoes claras e acompanhamento clinico para resultados refinados.",
    },
  ],
  evaluationSteps: [
    {
      title: "Escuta e leitura facial",
      text: "A consulta comeca entendendo a sua rotina, queixa principal e o resultado que voce quer preservar.",
    },
    {
      title: "Mapa de tratamento personalizado",
      text: "Fotografia clinica, analise de harmonias e indicacao de protocolos com prioridades, prazos e investimento.",
    },
    {
      title: "Execucao com leveza",
      text: "O plano e realizado em etapas, respeitando o tempo biologico da pele e o objetivo de um resultado sofisticado.",
    },
  ],
  certifications: [
    "Especializacao em Harmonizacao Orofacial e tecnologias faciais",
    "Formacao continuada em anatomia aplicada e rejuvenescimento injetavel",
    "Protocolos proprios para plano de tratamento natural e progressivo",
  ],
  testimonials: [
    {
      name: "Marina A.",
      role: "Empresaria, 39 anos",
      quote:
        "A Maison Aura entrega exatamente o que eu buscava: refinamento. O resultado ficou natural, elegante e me sinto melhor em todas as minhas reunioes.",
    },
    {
      name: "Renata P.",
      role: "Advogada, 44 anos",
      quote:
        "Nao parece que fiz um procedimento. Parece apenas que estou descansada, luminosa e mais segura. O atendimento e impecavel do inicio ao fim.",
    },
    {
      name: "Luciana M.",
      role: "Executiva, 36 anos",
      quote:
        "A consulta foi extremamente clara e sem pressao comercial. Sai com um plano coerente, bem explicado e com um acolhimento raro de encontrar.",
    },
  ],
  faqs: [
    {
      question: "Os resultados ficam naturais?",
      answer:
        "Sim. A proposta da clinica e construir um rejuvenescimento elegante, respeitando a anatomia, a idade e a personalidade de cada paciente.",
    },
    {
      question: "Como funciona a avaliacao inicial?",
      answer:
        "A avaliacao inclui escuta, analise facial, indicacao tecnica e um plano terapeutico personalizado com prioridades e orientacoes de manutencao.",
    },
    {
      question: "Os procedimentos doem?",
      answer:
        "Utilizamos protocolos de conforto, anestesicos topicos e tecnicas de aplicacao delicadas para tornar a experiencia leve e segura.",
    },
    {
      question: "Qual o tempo de recuperacao?",
      answer:
        "Depende do procedimento. Em geral, protocolos minimamente invasivos permitem retorno rapido a rotina, com orientacoes claras de pos.",
    },
    {
      question: "Quantas sessoes sao necessarias?",
      answer:
        "Isso varia conforme a indicacao. Alguns protocolos trazem resultado em uma unica sessao, enquanto tecnologias ou bioestimuladores podem exigir plano em etapas.",
    },
  ],
  beforeAfter: [
    {
      title: "Suavizacao do terco medio",
      focus: "Perda de suporte e cansaco facial tratados com leve reposicionamento e luminosidade melhor distribuida.",
      note: "Bioestimulador e skinbooster em plano progressivo.",
      variant: "midface",
      beforeLabel: "Sulco marcado e menor sustentacao",
      afterLabel: "Contorno suave e aparencia descansada",
    },
    {
      title: "Definicao labial sutil",
      focus: "Mais contorno, hidratacao e proporcao sem rigidez, mantendo mobilidade e leitura natural do sorriso.",
      note: "Preenchimento hidratante com desenho delicado.",
      variant: "lips",
      beforeLabel: "Contorno menos nitido e ressecamento",
      afterLabel: "Borda limpa e volume elegante",
    },
    {
      title: "Glow com textura refinada",
      focus: "Textura irregular, opacidade e poros aparentes tratados com estrategia para glow controlado e acabamento de pele cara.",
      note: "Peeling inteligente, skinbooster e protocolo de consultorio.",
      variant: "skin",
      beforeLabel: "Opacidade e relevo irregular",
      afterLabel: "Luminosidade fina e textura uniforme",
    },
  ] satisfies BeforeAfterCase[],
};

export const treatments: Treatment[] = [
  {
    slug: "toxina-botulinica",
    name: "Toxina botulinica estrategica",
    category: "Rejuvenescimento expressivo",
    excerpt:
      "Suaviza linhas dinamicas preservando leveza de expressao e um visual descansado.",
    idealFor: "Linhas de testa, glabela, periocular e prevencao sofisticada",
    duration: "30 a 40 minutos",
    recovery: "Retorno imediato a rotina com cuidados simples",
    benefits: [
      "Atenua rugas de expressao com efeito elegante",
      "Ajuda a prevenir marcacoes futuras",
      "Entrega aspecto descansado sem rigidez",
    ],
    steps: [
      "Mapeamento muscular e fotografia clinica",
      "Aplicacao precisa com tecnica de pontos estrategicos",
      "Revisao e acompanhamento da evolucao em consultorio",
    ],
  },
  {
    slug: "preenchimento-labial",
    name: "Preenchimento labial refinado",
    category: "Definicao e hidratacao",
    excerpt:
      "Volume sob medida, contorno delicado e acabamento sofisticado para labios mais harmoniosos.",
    idealFor: "Assimetrias, perda de contorno e hidratacao profunda",
    duration: "45 minutos",
    recovery: "Edema leve nos primeiros dias",
    benefits: [
      "Realca contorno e definicao de forma natural",
      "Melhora hidratacao e textura",
      "Equilibra proporcao com o restante da face",
    ],
    steps: [
      "Analise de proporcao e movimento labial",
      "Aplicacao em camadas finas para desenho preciso",
      "Orientacao de pos com acompanhamento proximo",
    ],
  },
  {
    slug: "bioestimulador-colageno",
    name: "Bioestimulador de colageno",
    category: "Firmeza e sustentacao",
    excerpt:
      "Estimula colageno para melhorar sustentacao, textura e definicao com resultado progressivo.",
    idealFor: "Flacidez inicial, perda de contorno e envelhecimento estrutural",
    duration: "50 minutos",
    recovery: "Pequena sensibilidade local por curto periodo",
    benefits: [
      "Melhora firmeza e qualidade da pele",
      "Resultado gradual e sofisticado",
      "Apoia o rejuvenescimento global da face",
    ],
    steps: [
      "Planejamento por vetores e anatomia da face",
      "Aplicacao com canula em pontos de tracao estrategicos",
      "Calendario de manutencao conforme resposta biologica",
    ],
  },
  {
    slug: "skinbooster",
    name: "Skinbooster iluminador",
    category: "Glow e vico controlado",
    excerpt:
      "Hidratacao injetavel para pele mais luminosa, macia e com textura mais uniforme.",
    idealFor: "Pele opaca, textura irregular e desidratacao fina",
    duration: "40 minutos",
    recovery: "Leve vermelhidao temporaria",
    benefits: [
      "Aumenta vico e hidratacao profunda",
      "Refina a textura e acabamento da pele",
      "Combina muito bem com protocolos de rejuvenescimento",
    ],
    steps: [
      "Analise de textura e necessidade de hidratacao",
      "Microdepositos estrategicos com foco em naturalidade",
      "Orientacoes de cuidado e periodicidade ideal",
    ],
  },
  {
    slug: "fios-sustentacao",
    name: "Fios de sustentacao",
    category: "Lifting suave",
    excerpt:
      "Reposiciona discretamente pontos de flacidez e melhora contorno com efeito elegante.",
    idealFor: "Terco inferior, contorno mandibular e perda de definicao",
    duration: "60 minutos",
    recovery: "Recuperacao curta com restricoes temporarias",
    benefits: [
      "Lifting sutil sem cirurgia",
      "Reforco de sustentacao com estimulo de colageno",
      "Melhora progressiva do contorno facial",
    ],
    steps: [
      "Desenho de vetores e planejamento anatomico",
      "Insercao delicada com foco em simetria",
      "Acompanhamento para acomodacao segura dos fios",
    ],
  },
  {
    slug: "rejuvenescimento-facial",
    name: "Rejuvenescimento facial autoral",
    category: "Plano completo",
    excerpt:
      "Combina protocolos injetaveis, tecnologias e rotina domiciliar para um plano de rejuvenescimento coerente.",
    idealFor: "Quem busca estrategia global, nao apenas um procedimento isolado",
    duration: "Plano em etapas",
    recovery: "Definida conforme a combinacao indicada",
    benefits: [
      "Resultado mais harmonico e previsivel",
      "Integra tratamento de qualidade de pele e contorno",
      "Permite manutencao inteligente ao longo do ano",
    ],
    steps: [
      "Diagnostico completo e leitura de prioridades",
      "Cronograma de tratamento por fases",
      "Reavaliacoes para ajuste fino de resultado",
    ],
  },
  {
    slug: "limpeza-premium",
    name: "Limpeza de pele premium",
    category: "Qualidade de pele",
    excerpt:
      "Experiencia de pele limpa, hidratada e luminosa com tecnologia, extracao delicada e acabamento sofisticado.",
    idealFor: "Poros obstruidos, textura irregular e preparo para eventos",
    duration: "75 minutos",
    recovery: "Sem interrupcao relevante da rotina",
    benefits: [
      "Purifica com delicadeza e conforto",
      "Entrega glow imediato e toque macio",
      "Prepara a pele para protocolos seguintes",
    ],
    steps: [
      "Higienizacao, esfoliacao e emoliencia",
      "Extracao delicada com recursos de conforto",
      "Mascara calmante e finalizacao com brilho controlado",
    ],
  },
  {
    slug: "ultraformer",
    name: "Ultraformer e tecnologias faciais",
    category: "Tecnologia de alto desempenho",
    excerpt:
      "Tecnologias para firmeza, contorno e textura com indicacao precisa e combinacao com protocolos injetaveis.",
    idealFor: "Flacidez leve a moderada e refinamento de textura",
    duration: "Conforme area tratada",
    recovery: "Retorno rapido",
    benefits: [
      "Trata firmeza sem cirurgia",
      "Apoia definicao do contorno facial",
      "Integra planos completos de rejuvenescimento",
    ],
    steps: [
      "Avaliacao de candidaturas e objetivos",
      "Protocolo tecnologico por area e profundidade",
      "Plano complementar com home care e revisao",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "botox-quando-comecar",
    category: "Toxina botulinica",
    title: "Botox: quando comecar e como manter um resultado elegante",
    excerpt:
      "Entenda o melhor momento para iniciar a toxina e como evitar exageros sem perder leveza.",
    readTime: "4 min",
  },
  {
    slug: "rejuvenescimento-natural",
    category: "Planejamento facial",
    title: "Como manter um rejuvenescimento natural ao longo dos anos",
    excerpt:
      "A logica por tras de protocolos progressivos, previsiveis e com assinatura sofisticada.",
    readTime: "5 min",
  },
  {
    slug: "bioestimulador-ou-preenchimento",
    category: "Estrutura facial",
    title: "Bioestimulador ou preenchimento: quando cada um faz sentido",
    excerpt:
      "Os dois nao competem. Eles se complementam quando ha criterio de indicacao.",
    readTime: "6 min",
  },
  {
    slug: "cuidados-pos-procedimento",
    category: "Pos-procedimento",
    title: "Cuidados essenciais apos procedimentos faciais",
    excerpt:
      "Orientacoes simples que protegem o resultado e aceleram uma recuperacao tranquila.",
    readTime: "3 min",
  },
  {
    slug: "tendencias-estetica-premium",
    category: "Mercado premium",
    title: "O que define a nova estetica premium em 2026",
    excerpt:
      "Menos exagero, mais leitura facial, experiencia boutique e planos sob medida.",
    readTime: "5 min",
  },
  {
    slug: "qualidade-de-pele",
    category: "Skin quality",
    title: "Por que qualidade de pele virou o novo luxo da harmonizacao",
    excerpt:
      "Glow controlado, textura refinada e resultado sofisticado com aparencia descansada.",
    readTime: "4 min",
  },
];
