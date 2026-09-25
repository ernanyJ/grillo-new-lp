import { site } from "@/config/site";

/**
 * Copy da landing — a mesma aprovada em hubgrillo.com. A refatoração é de
 * apresentação: nada aqui foi reescrito, só reorganizado em peças menores
 * (título, destaque, listas) para a página poder mostrar em vez de explicar.
 *
 * `destaque` é sempre um trecho literal do próprio título.
 */

export const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Provas", href: "#provas" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const cta = {
  falar: "Falar com a Grillo",
  estruturar: "Quero estruturar meu projeto",
  conversar: "Conversar com a Grillo",
  diagnostico: "Começar pelo diagnóstico",
  tenhoProjeto: "Tenho um projeto para estruturar",
  projetoAssim: "Quero um projeto assim",
  improviso: "Quero sair do improviso",
  verSolucoes: "Ver soluções",
  whatsapp: "WhatsApp",
} as const;

export const hero = {
  rotulo: `${site.name} · ${site.descritor}`,
  title: "Sistemas criativos para marcas que precisam vender, operar e crescer com mais inteligência.",
  destaque: "vender, operar e crescer",
  paragrafo:
    "A Grillo une estratégia, branding, marketing, vendas, inteligência artificial, automação e sistemas digitais em uma estrutura viva para negócios que querem sair do improviso e construir crescimento com profundidade.",
  prova: {
    avaliacoes: `${site.workana.avaliacoes}+ avaliações reais`,
    recorrentes: "clientes recorrentes",
    ranking: `Top ${site.workana.topBrasil} Brasil`,
    plataforma: "Workana",
  },
  /** Texto do anel que gira em volta do símbolo. */
  anel: "Hub Criativo Estratégico · Marcas · IA · Sistemas · ",
};

export const manifesto = {
  rotulo: "Manifesto",
  title: "Menos barulho. Mais infraestrutura.",
  destaque: "Mais infraestrutura.",
  paragrafo:
    "O mercado está cheio de ferramentas, templates, promessas rápidas, automações genéricas e conteúdos produzidos em escala. Mas crescimento real não nasce do excesso. Nasce de clareza.",
  pares: [
    ["Alma", "método"],
    ["Propósito", "engenharia"],
    ["Sensibilidade", "dados"],
    ["IA", "humanidade"],
    ["Estética", "lógica"],
    ["Narrativa", "infraestrutura"],
  ],
  gargalos: {
    title: "Negócios não travam por falta de ferramentas. Travam por falta de infraestrutura.",
    destaque: "Travam por falta de infraestrutura.",
    paragrafo:
      "Muitas marcas já têm site, Instagram, tráfego, CRM, WhatsApp, equipe, conteúdo, automações e ferramentas de IA. Mesmo assim, continuam com gargalos.",
    /** Os canais que "já existem" — viram chips flutuando. */
    ferramentas: [
      "Site",
      "Instagram",
      "Tráfego",
      "CRM",
      "WhatsApp",
      "Equipe",
      "Conteúdo",
      "Automações",
      "IA",
    ],
    items: [
      "A marca não comunica valor.",
      "O marketing atrai, mas não posiciona.",
      "A venda depende demais do improviso.",
      "A proposta não traduz profundidade.",
      "A automação responde, mas não qualifica.",
      "O sistema existe, mas não conversa com a operação.",
      "Os dados estão espalhados.",
      "A equipe executa, mas sem uma direção única.",
    ],
  },
};

export const sobre = {
  rotulo: "O que é",
  title:
    "Consultoria, laboratório criativo, núcleo técnico e escola de pensamento, tudo ao mesmo tempo.",
  destaque: "tudo ao mesmo tempo.",
  papeis: ["Consultoria", "Laboratório criativo", "Núcleo técnico", "Escola de pensamento"],
  paragrafo:
    "A Grillo é um Hub Criativo Estratégico em Marcas, IA e Sistemas. Operamos na interseção entre estratégia, branding, marketing, vendas, automação, design, IA, dados e desenvolvimento digital.",
  naoSomos:
    "Não somos uma agência comum, uma software house tradicional ou uma consultoria distante da execução. Somos uma marca criativa e estratégica que combina sensibilidade, engenharia, narrativa, IA e infraestrutura de sistemas.",
  naoSomosLista: [
    "Agência comum",
    "Software house tradicional",
    "Consultoria distante da execução",
  ],
  sistema:
    "Não olhamos para um projeto como uma entrega isolada. Olhamos para o sistema inteiro: como a marca se posiciona, como a oferta é percebida, como o marketing gera demanda, como a venda é conduzida, como a operação responde, como a tecnologia sustenta, como a IA amplia, como os dados orientam.",
  cadeia: [
    "Marca",
    "Oferta",
    "Demanda",
    "Venda",
    "Operação",
    "Tecnologia",
    "IA",
    "Dados",
    "Evolução",
  ],
  fecho: "A Grillo não cria apenas peças. Cria estruturas criativas que duram, funcionam e transformam.",
  fechoDestaque: "Cria estruturas criativas que duram, funcionam e transformam.",
};

export type Solucao = {
  nome: string;
  curto: string;
  icone: IconeSolucao;
  title: string;
  paragrafo: string;
  aplicacoes: string[];
  problemas: string[];
};

export type IconeSolucao =
  | "marca"
  | "ia"
  | "sistema"
  | "interface"
  | "copy"
  | "vendas"
  | "dados"
  | "educacao";

export const solucoes = {
  rotulo: "Soluções",
  title: "Oito dimensões para transformar visão em sistema.",
  destaque: "visão em sistema.",
  subtitle:
    "A Grillo organiza seus projetos a partir de 8 dimensões estratégicas. Elas formam uma infraestrutura integrada para construir marcas, operações e produtos digitais com clareza, inteligência e escala.",
  items: [
    {
      nome: "Estratégia & Branding",
      curto: "Estratégia & Branding",
      icone: "marca",
      title: "Posicionamento, narrativa e diferenciação.",
      paragrafo:
        "Toda estrutura começa com clareza. Aqui a Grillo organiza a identidade estratégica do negócio: quem ele é, o que entrega, para quem existe, por que importa e como deve ser percebido.",
      aplicacoes: [
        "Posicionamento de marca",
        "Infraestrutura de marca",
        "Tom de voz e identidade verbal",
        "Narrativa institucional",
        "Proposta de valor",
        "Naming",
        "Diferenciais competitivos",
        "Direção criativa e reposicionamento",
      ],
      problemas: [
        "Ruído de comunicação",
        "Baixa diferenciação",
        "Marca genérica",
        "Oferta confusa",
        "Falta de clareza comercial",
        "Baixo valor percebido",
      ],
    },
    {
      nome: "IA, Agentes & Automações",
      curto: "IA & Automações",
      icone: "ia",
      title: "Inteligência artificial como motor, não como atalho.",
      paragrafo:
        "A Grillo aplica IA para ampliar capacidade operacional, comercial e criativa. Não usamos IA como espetáculo. Usamos como estrutura: qualificar leads, responder melhor, organizar informações, apoiar decisões.",
      aplicacoes: [
        "Agentes de IA",
        "Automações",
        "Integrações via API",
        "Bots inteligentes",
        "Bases de conhecimento",
        "Qualificação de leads",
        "Atendimento automatizado",
        "Fluxos de CRM e triagem comercial",
        "IA para conteúdo e suporte",
      ],
      problemas: [
        "Retrabalho",
        "Atendimento lento",
        "Perda de leads",
        "Processos manuais",
        "Operação desorganizada",
        "Baixa produtividade",
        "Dependência excessiva de pessoas",
      ],
    },
    {
      nome: "Desenvolvimento de Sistemas",
      curto: "Sistemas Digitais",
      icone: "sistema",
      title: "SaaS, CRM, WebApps e plataformas sob medida.",
      paragrafo:
        "Quando uma operação precisa ir além de ferramentas prontas, a Grillo estrutura sistemas digitais. Conectamos lógica de negócio, tecnologia e experiência do usuário.",
      aplicacoes: [
        "SaaS",
        "CRMs personalizados",
        "WebApps",
        "Portais e áreas administrativas",
        "Dashboards",
        "Integrações com APIs",
        "Infraestrutura técnica (back / front)",
        "Sistemas com IA integrada",
      ],
      problemas: [
        "Limitação de ferramentas prontas",
        "Processos manuais complexos",
        "Falta de controle operacional",
        "Dados descentralizados",
        "Produto digital sem infraestrutura",
        "Operação que precisa escalar",
      ],
    },
    {
      nome: "UX/UI Estratégico",
      curto: "UX / UI Estratégico",
      icone: "interface",
      title: "Experiência, interface e infraestrutura de informação.",
      paragrafo:
        "Design não é apenas aparência. É clareza, fluxo, hierarquia, decisão e experiência. A Grillo conecta estética, usabilidade, conversão e lógica operacional.",
      aplicacoes: [
        "Wireframes e protótipos",
        "Fluxos de navegação",
        "Infraestrutura de informação",
        "Interfaces web e mobile",
        "Design de dashboards",
        "Design de plataformas",
        "Experiência de landing pages",
        "Animações e vídeos de IA",
        "Edição de vídeos",
        "Sistemas visuais e jornada do usuário",
      ],
      problemas: [
        "Interfaces confusas",
        "Baixa conversão",
        "Jornada quebrada",
        "Produto difícil de usar",
        "Experiência desalinhada com a marca",
        "Design bonito, mas pouco funcional",
      ],
    },
    {
      nome: "Copywriting Estratégico",
      curto: "Copywriting",
      icone: "copy",
      title: "Narrativa, mensagem e sistemas de comunicação.",
      paragrafo:
        "A venda começa antes da proposta. Começa na forma como a marca fala, apresenta valor, educa, conduz e prova sua autoridade. Texto que não apenas informa, mas posiciona.",
      aplicacoes: [
        "Copy para sites e landing pages",
        "Páginas de vendas",
        "Propostas comerciais",
        "Roteiros de vídeo",
        "Scripts de abordagem e follow-up",
        "Conteúdo premium",
        "Newsletters e artigos",
        "Sistemas de mensagens",
        "Diagramação",
        "Projetos editoriais completos",
        "Suporte à publicação",
      ],
      problemas: [
        "Comunicação fraca",
        "Oferta mal explicada",
        "Baixo valor percebido",
        "Propostas genéricas",
        "Conteúdo sem direção",
        "Dificuldade de conduzir decisão",
      ],
    },
    {
      nome: "Sistemas de Vendas",
      curto: "Sistemas de Vendas",
      icone: "vendas",
      title: "Funis, conversão e ativação comercial.",
      paragrafo:
        "Marketing sem venda vira visibilidade vazia. Venda sem sistema vira esforço manual. A Grillo estrutura jornadas que transformam atenção em relacionamento e confiança em decisão.",
      aplicacoes: [
        "Funis de vendas",
        "Páginas de conversão",
        "Automações comerciais",
        "Pré-venda e qualificação",
        "Recuperação de leads",
        "Scripts de atendimento",
        "Propostas estratégicas",
        "Estrutura de oferta, bônus e garantias",
      ],
      problemas: [
        "Leads que não avançam",
        "Venda dependente de improviso",
        "Propostas sem força",
        "Falta de processo comercial",
        "Baixa conversão",
        "Funil desconectado da operação",
      ],
    },
    {
      nome: "Operações, Dados & Performance",
      curto: "Dados & Performance",
      icone: "dados",
      title: "Clareza operacional para decidir melhor.",
      paragrafo:
        "Negócios crescem melhor quando enxergam o que está acontecendo. A Grillo organiza dados, processos e indicadores para apoiar decisões e transformar operação em inteligência.",
      aplicacoes: [
        "Dashboards e relatórios",
        "Indicadores comerciais",
        "Tracking",
        "Mapeamento de processos",
        "Gestão de ativos digitais",
        "Documentação e rotinas operacionais",
        "Análise de funil",
        "BI aplicado",
      ],
      problemas: [
        "Achismo",
        "Dados espalhados",
        "Falta de indicadores",
        "Processos invisíveis",
        "Dificuldade de acompanhar resultados",
        "Operação sem previsibilidade",
      ],
    },
    {
      nome: "Educação & Método Grillo",
      curto: "Educação & Método",
      icone: "educacao",
      title: "Conhecimento transformado em estrutura.",
      paragrafo:
        "A Grillo também atua como escola de pensamento. Transformamos experiência, método e conhecimento em treinamentos, mentorias, produtos educacionais e sistemas de aprendizado.",
      aplicacoes: [
        "Método Grillo",
        "Mentorias estratégicas",
        "Treinamentos corporativos",
        "Produtos educacionais",
        "Aulas e materiais didáticos",
        "Estruturação de cursos",
        "Comunidades e ativos educacionais",
      ],
      problemas: [
        "Conhecimento desorganizado",
        "Método sem produto",
        "Equipe sem clareza",
        "Dificuldade de ensinar processos",
        "Falta de formação estratégica",
        "Dependência de execução externa",
      ],
    },
  ] satisfies Solucao[],
};

export const metodo = {
  rotulo: "Método",
  title: "Como pensamos projetos: sistemas vivos, nunca peças isoladas.",
  destaque: "sistemas vivos, nunca peças isoladas.",
  subtitle:
    "Nosso framework conecta leitura estratégica, imersão narrativa, infraestrutura técnica e execução por blocos. Reduz ruído, aumenta precisão e constrói soluções mais sustentáveis.",
  etapas: [
    {
      title: "Diagnóstico Profundo",
      text: "Entendemos contexto, problema, objetivo, operação, público, oferta, histórico, limitações e oportunidades.",
    },
    {
      title: "Leitura Estratégica",
      text: "Interpretamos o que realmente precisa ser resolvido e quais decisões precisam ser tomadas antes da execução.",
    },
    {
      title: "Imersão Narrativa",
      text: "Captamos linguagem, tom, história, diferenciais, visão, promessa e essência da marca ou do projeto.",
    },
    {
      title: "Infraestrutura de Marca",
      text: "Organizamos posicionamento, comunicação, proposta de valor, identidade verbal, percepção e narrativa.",
    },
    {
      title: "Infraestrutura Técnica",
      text: "Definimos estrutura, fluxos, integrações, sistemas, IA, automações, dados, requisitos e lógica operacional.",
    },
    {
      title: "UX / UI",
      text: "Desenhamos fluxos, jornadas, interfaces, hierarquia visual e experiências coerentes com a estratégia.",
    },
    {
      title: "Execução por Blocos",
      text: "Produzimos em etapas claras, com entregas progressivas e validações mais objetivas.",
    },
    {
      title: "Validação",
      text: "Testamos entendimento, aderência, experiência, consistência e alinhamento antes de avançar.",
    },
    {
      title: "Otimização",
      text: "Ajustamos, refinamos e evoluímos a solução com base em uso, feedback, dados e maturidade do projeto.",
    },
  ],
  experiencia: {
    rotulo: "Experiência Grillo",
    title: "Maturidade, clareza e previsibilidade.",
    destaque: "previsibilidade.",
    paragrafo:
      "A experiência Grillo foi desenhada para reduzir ruído. Trabalhamos com um fluxo claro de alinhamento, imersão, infraestrutura, execução, checkpoints, ajustes, entrega e suporte.",
    fluxo: [
      "Alinhamento",
      "Imersão",
      "Infraestrutura",
      "Execução",
      "Checkpoints",
      "Ajustes",
      "Entrega",
      "Suporte",
    ],
    zeros: ["Zero ruído", "Zero confusão", "Zero promessas vazias"],
  },
};

export const entregas = {
  rotulo: "O que entregamos",
  title: "Da estratégia à execução. Da ideia ao sistema.",
  destaque: "Da ideia ao sistema.",
  subtitle:
    "A Grillo pode atuar em projetos pontuais, fases estratégicas ou estruturas completas, dependendo da necessidade do negócio.",
  items: [
    "Diagnóstico estratégico",
    "Posicionamento de marca",
    "Identidade verbal e visual",
    "Sites institucionais",
    "Landing pages",
    "Páginas de venda",
    "Funis comerciais",
    "Propostas comerciais premium",
    "Automações",
    "Agentes inteligentes",
    "Integrações via API",
    "CRMs e sistemas internos",
    "SaaS e WebApps",
    "Dashboards e relatórios",
    "UX/UI para produtos digitais",
    "Animações e vídeos de IA",
    "Edição de vídeos",
    "Diagramação",
    "Projetos editoriais",
    "Copywriting estratégico",
    "Conteúdo premium",
    "Roteiros e apresentações",
    "Treinamentos e mentorias",
    "Produtos educacionais",
    "Otimização de processos",
  ],
};

export const diferenciais = {
  rotulo: "Diferenciais",
  title: "Por que contratar a Grillo em vez de peças soltas.",
  destaque: "em vez de peças soltas.",
  items: [
    {
      tag: "Profundidade",
      title: "Profundidade antes da velocidade.",
      text: "A Grillo não confunde pressa com eficiência. Crescemos com profundidade, não com atalhos.",
    },
    {
      tag: "Visão",
      title: "Visão antes de execução.",
      text: "Antes de produzir, entendemos a essência, o problema e a infraestrutura necessária.",
    },
    {
      tag: "Marca",
      title: "Marca como sistema.",
      text: "Marca não é apenas logo. É percepção, narrativa, posicionamento, experiência e consistência.",
    },
    {
      tag: "IA",
      title: "IA como inteligência aplicada.",
      text: "A IA amplia quem está preparado. Aplicamos com método, contexto e objetivo operacional.",
    },
    {
      tag: "Tecnologia",
      title: "Tecnologia como fundação.",
      text: "Sistemas, automações e dados não são acessórios. São estruturas que sustentam crescimento.",
    },
    {
      tag: "Marketing↔Vendas",
      title: "Marketing conectado a vendas.",
      text: "Conteúdo, tráfego, página, proposta, atendimento e follow-up trabalham juntos.",
    },
    {
      tag: "Criatividade",
      title: "Criatividade com engenharia.",
      text: "Unimos poética e técnica, sensibilidade e dados, estética e lógica.",
    },
    {
      tag: "Parceria",
      title: "Parceria estratégica real.",
      text: "Entramos como parceira para pensar, estruturar e construir com clareza, não apenas como fornecedora.",
    },
  ],
};

export const provas = {
  rotulo: "Provas e Conquistas",
  title: "Resultado real não nasce de promessa. Nasce de entrega consistente.",
  destaque: "Nasce de entrega consistente.",
  subtitle:
    "A Grillo construiu autoridade por meio de projetos reais, clientes recorrentes e crescimento acelerado em uma das maiores plataformas de trabalho independente.",
  numeros: [
    {
      prefixo: "",
      valor: site.workana.mesesHero,
      sufixo: " meses",
      label: "Para atingir o nível Hero na Workana.",
      tag: "Tempo recorde",
    },
    {
      prefixo: "Top ",
      valor: site.workana.topPrimeiroAno,
      sufixo: "",
      label: "Da plataforma no primeiro ano de operação.",
      tag: "Workana / 1º ano",
    },
    {
      prefixo: "Top ",
      valor: site.workana.topBrasil,
      sufixo: "",
      label: "Entre os melhores do Brasil, mantendo consistência.",
      tag: "Workana / Brasil",
    },
    {
      prefixo: "",
      valor: site.workana.avaliacoes,
      sufixo: "+",
      label: "Avaliações reais de clientes em projetos diversos.",
      tag: "Avaliações públicas",
    },
    {
      prefixo: "",
      valor: site.workana.recorrentes,
      sufixo: " clientes recorrentes",
      label: "Contrataram a Grillo mais de uma vez, prova de relação contínua e confiança.",
      tag: "Recorrência",
    },
  ],
  filosofia: {
    rotulo: "Filosofia",
    text: "Esses resultados reforçam nossa filosofia: crescer com profundidade, não com pressa; com solidez, não com atalhos.",
    destaque: "crescer com profundidade, não com pressa; com solidez, não com atalhos.",
  },
};

export const depoimentos = {
  rotulo: "Depoimentos",
  title: "O que clientes percebem na prática.",
  destaque: "na prática.",
  subtitle:
    "Comunicação, organização, capacidade técnica, agilidade, profissionalismo, atenção aos detalhes e clareza na condução de projetos complexos.",
  items: [
    {
      text: "Profissionalismo, organização, ótima comunicação e forte capacidade técnica. A equipe compreendeu rapidamente a visão do produto e conduziu o desenvolvimento de forma colaborativa e eficiente.",
      autor: "Cliente de app social · UI/UX e motion",
    },
    {
      text: "A equipe foi cordial, entregou antes do prazo e atendeu às correções solicitadas com muita qualidade.",
      autor: "Cliente de projeto técnico · Banco de dados",
    },
    {
      text: "Muito ágil, comunicativo e eficaz. Trabalho impecável.",
      autor: "Cliente de branding · Identidade visual",
    },
    {
      text: "Foi um projeto complexo, e a Grillo trouxe clareza, direção e comunicação durante o processo.",
      autor: "Cliente de sistema · IA aplicada",
    },
    {
      text: "Sempre atenciosos, rápidos nas respostas e tecnicamente excelentes.",
      autor: "Cliente de plataforma web · Melhorias contínuas",
    },
    {
      text: "A equipe desenvolveu um agente de IA com fluxos de atendimento integrado ao CRM, sempre atenta aos detalhes e ao que fazia mais sentido para a operação.",
      autor: "Cliente de automação · Atendimento com IA",
    },
    {
      text: "Comunicação clara, pontualidade, atenção aos detalhes e uma qualidade editorial e visual impressionante.",
      autor: "Cliente de projeto editorial · Premium",
    },
    {
      text: "O projeto superou expectativas pela organização, pesquisa, capricho, agilidade, criatividade e atenção aos detalhes.",
      autor: "Cliente de projeto institucional · Editorial",
    },
  ],
  chamada: "Quer entender melhor o tom dos nossos projetos?",
};

export const projetos = {
  rotulo: "Projetos",
  title: "Áreas onde a Grillo já estruturou soluções.",
  destaque: "já estruturou soluções.",
  subtitle:
    "Uma visão das categorias de projeto que conduzimos: do diagnóstico à entrega, com profundidade, método e resultado consistente.",
  verMais: "Ver todas as áreas",
  items: [
    {
      categoria: "IA · Atendimento",
      icone: "ia",
      title: "Agente de IA com fluxos integrados ao CRM",
      text: "Atendimento automatizado, qualificação de leads e integração contínua com CRM. Projeto recorrente.",
      tags: ["n8n", "OpenAI", "API CRM", "RAG"],
    },
    {
      categoria: "UX/UI · Motion",
      icone: "interface",
      title: "App social — UI/UX e motion design",
      text: "Visão de produto, fluxos, interface mobile e motion para experiência social. Desenvolvimento colaborativo.",
      tags: ["Figma", "Wireframes", "Motion", "iOS/Android"],
    },
    {
      categoria: "Branding · Identidade",
      icone: "marca",
      title: "Branding e identidade visual",
      text: "Posicionamento, naming, identidade verbal e visual. Marca construída como sistema, não apenas logo.",
      tags: ["Posicionamento", "Logo", "Sistema visual", "Tom de voz"],
    },
    {
      categoria: "Sistema · IA aplicada",
      icone: "sistema",
      title: "Sistema com IA — projeto complexo conduzido com clareza",
      text: "Arquitetura técnica, fluxos de IA, lógica operacional e comunicação de processo em projeto multidisciplinar.",
      tags: ["Arquitetura", "IA", "Back-end", "Front-end"],
    },
    {
      categoria: "Sistema · Dados",
      icone: "dados",
      title: "Projeto técnico em banco de dados",
      text: "Modelagem, otimização e estruturação de dados para operação. Entrega antes do prazo, com qualidade.",
      tags: ["SQL", "Modelagem", "Otimização", "Integrações"],
    },
    {
      categoria: "Sistema · Web",
      icone: "sistema",
      title: "Plataforma web com melhorias contínuas",
      text: "Manutenção, evolução e otimização de plataforma. Relacionamento contínuo com excelência técnica.",
      tags: ["Frontend", "Backend", "UX/UI", "Performance"],
    },
    {
      categoria: "Editorial · Premium",
      icone: "copy",
      title: "Projeto editorial premium",
      text: "Pesquisa, copy, direção visual e diagramação. Qualidade editorial e visual elogiada por clientes.",
      tags: ["Pesquisa", "Copy", "Direção visual", "Diagramação"],
    },
    {
      categoria: "Institucional · Editorial",
      icone: "copy",
      title: "Projeto institucional",
      text: "Apresentação, comunicação e narrativa institucional. Organização, capricho, agilidade e criatividade.",
      tags: ["Narrativa", "Apresentação", "Direção", "Conteúdo"],
    },
    {
      categoria: "Vendas · Funil",
      icone: "vendas",
      title: "Funil completo: páginas, qualificação e decisão",
      text: "Estrutura comercial conectada — tráfego, conteúdo, página, qualificação por IA e proposta estratégica.",
      tags: ["Landing", "Copy", "IA", "Proposta"],
    },
    {
      categoria: "Dados · BI",
      icone: "dados",
      title: "Dashboard de performance e indicadores",
      text: "Centralização de dados, tracking, KPIs comerciais e BI aplicado para apoiar decisão executiva.",
      tags: ["BI", "Tracking", "KPIs", "Dashboards"],
    },
    {
      categoria: "Marca · Identidade verbal",
      icone: "marca",
      title: "Identidade verbal e narrativa de marca",
      text: "Tom de voz, manifesto, vocabulário e narrativa institucional como base para todo conteúdo da marca.",
      tags: ["Tom de voz", "Manifesto", "Storytelling", "Guidelines"],
    },
    {
      categoria: "Educação · Método",
      icone: "educacao",
      title: "Estruturação de produto educacional",
      text: "Mentorias, materiais, módulos e ativos educacionais com curadoria e arquitetura de aprendizado.",
      tags: ["Currículo", "Materiais", "Estrutura", "Mentoria"],
    },
  ] satisfies {
    categoria: string;
    icone: IconeSolucao;
    title: string;
    text: string;
    tags: string[];
  }[],
};

export const paraQuem = {
  rotulo: "Para quem é",
  title: "Para negócios que querem crescer com alma, método e sistema.",
  destaque: "alma, método e sistema.",
  subtitle:
    "A Grillo é para empresas, especialistas, infoprodutores, startups, escolas, consultorias e operações digitais que precisam estruturar marca, comunicação, tecnologia ou sistema comercial.",
  publicos: [
    "Empresas",
    "Especialistas",
    "Infoprodutores",
    "Startups",
    "Escolas",
    "Consultorias",
    "Operações digitais",
  ],
  items: [
    "Tem uma marca boa, mas ainda pouco clara.",
    "Tem uma oferta forte, mas não comunica valor.",
    "Tem marketing, mas pouca conversão.",
    "Tem leads, mas perde oportunidades no processo.",
    "Tem operação manual demais.",
    "Tem uma ideia de sistema, SaaS ou plataforma.",
    "Quer aplicar IA com critério.",
    "Precisa organizar vendas, automação e atendimento.",
    "Quer transformar conhecimento em produto educacional.",
    "Precisa de uma parceira que pense antes de executar.",
  ],
};

export const fundador = {
  rotulo: `${site.founder} · Fundador`,
  tag: "Direção estratégica",
  title: "A Grillo nasce da união entre criatividade, engenharia, propósito e tecnologia.",
  destaque: "propósito e tecnologia.",
  paragrafos: [
    "A Grillo é liderada por Valter Moura Neto, fundador da marca e responsável pela direção estratégica, comunicação, posicionamento e gestão criativa dos projetos.",
    "Com formação em Engenharia de Produção, trajetória multidisciplinar e experiência em projetos de marca, conteúdo, IA, automação, sistemas e vendas, Valter conduz a Grillo a partir de uma visão clara:",
  ],
  citacao:
    "Negócios criativos precisam de profundidade para não virarem ruído. E precisam de estrutura para não dependerem apenas de esforço.",
  sintese: "A Grillo nasce dessa síntese:",
  pares: [
    ["sensibilidade", "engenharia"],
    ["poética", "técnica"],
    ["propósito", "infraestrutura"],
    ["humanidade", "IA"],
  ],
  alt: "Valter Moura Neto, Fundador da Grillo",
};

export const duvidas = {
  rotulo: "Perguntas frequentes",
  title: "As perguntas que mais recebemos.",
  destaque: "mais recebemos.",
  items: [
    {
      question: "O que é a Grillo?",
      answer:
        "A Grillo é um Hub Criativo Estratégico em Marcas, IA e Sistemas. Integra branding, marketing, vendas, automação, inteligência artificial, desenvolvimento digital, dados e estratégia para criar sistemas criativos escaláveis.",
    },
    {
      question: "A Grillo é uma agência?",
      answer:
        "A Grillo não atua como uma agência tradicional. Ela funciona como consultoria, laboratório criativo, núcleo técnico e escola de pensamento, conectando estratégia, execução e tecnologia.",
    },
    {
      question: "A Grillo trabalha com marketing?",
      answer:
        "Sim. Trabalhamos marketing como sistema, unindo posicionamento, conteúdo, páginas, funis, vendas, automação, dados e performance.",
    },
    {
      question: "A Grillo trabalha com vendas?",
      answer:
        "Sim. Estruturamos sistemas de vendas, propostas, páginas de conversão, scripts, follow-ups, funis comerciais, automações e jornadas de decisão.",
    },
    {
      question: "A Grillo trabalha com inteligência artificial?",
      answer:
        "Sim. Aplicamos IA em agentes inteligentes, automações, atendimento, qualificação de leads, bases de conhecimento, conteúdo, produtividade e processos operacionais.",
    },
    {
      question: "A Grillo desenvolve sistemas?",
      answer:
        "Sim. Desenvolvemos e estruturamos sistemas digitais, SaaS, CRMs, WebApps, dashboards, portais, plataformas, áreas administrativas e integrações via API.",
    },
    {
      question: "A Grillo faz branding e UX/UI?",
      answer:
        "Sim. Atuamos com estratégia de marca, posicionamento, tom de voz, narrativa, identidade, naming, proposta de valor e infraestrutura de marca. Em UX/UI, estruturamos wireframes, protótipos, fluxos, infraestrutura de informação e interfaces.",
    },
    {
      question: "A Grillo atende projetos pontuais?",
      answer:
        "Sim, quando existe clareza de escopo e valor estratégico. Porém, o maior diferencial da Grillo aparece em projetos que conectam marca, tecnologia, IA, vendas e operação.",
    },
    {
      question: "Como começa um projeto com a Grillo?",
      answer:
        "Um projeto começa com diagnóstico. A Grillo entende o contexto, os objetivos, o estágio atual, os gargalos e os ativos existentes para então estruturar escopo, etapas, prazo e investimento.",
    },
    {
      question: "Qual é o prazo médio de entrega?",
      answer:
        "Depende do escopo. Projetos simples podem ser concluídos em semanas. Projetos completos de sistema ou branding levam de 4 a 12 semanas, com etapas claras e checkpoints.",
    },
    {
      question: "A Grillo trabalha com contratos?",
      answer:
        "Sim. Todos os projetos são formalizados com proposta detalhada, escopo definido e condições claras de prazo, entrega e pagamento.",
    },
    {
      question: "É possível começar com um diagnóstico?",
      answer:
        "Sim, essa é a forma recomendada. O diagnóstico mapeia o contexto, identifica prioridades e gera clareza antes de qualquer execução.",
    },
    {
      question: "Qual é o diferencial da Grillo?",
      answer:
        "O diferencial da Grillo é unir profundidade estratégica, criatividade, IA, automação, sistemas digitais, marketing e vendas em uma única infraestrutura de crescimento.",
    },
  ],
};

export const contato = {
  rotulo: "Contato",
  title: "Vamos conversar sobre o seu projeto.",
  destaque: "o seu projeto.",
  subtitle:
    "Preencha o formulário e a Grillo entra em contato. Você também pode falar diretamente pelo WhatsApp.",
  campos: {
    nome: "Nome",
    email: "E-mail",
    telefone: "WhatsApp",
    empresa: "Empresa",
    tipo: "Tipo de projeto",
    tipoVazio: "Selecione uma área",
    mensagem: "Mensagem",
  },
  tipos: [
    "Branding e Posicionamento",
    "IA e Automação",
    "Sistema, App ou Plataforma",
    "Marketing e Vendas",
    "UX/UI e Design",
    "Copywriting e Conteúdo",
    "Estratégia completa",
    "Outro",
  ],
  enviar: "Enviar mensagem",
  enviando: "Enviando…",
  sucesso: "Mensagem enviada. A Grillo entra em contato em breve.",
  erro: "Não foi possível enviar agora. Tente de novo ou fale pelo WhatsApp.",
  ou: "ou",
};

export const rodape = {
  descricao:
    "Grillo é um Hub Criativo Estratégico em Marcas, IA e Sistemas. Integramos estratégia, branding, marketing, vendas, inteligência artificial, automação, dados e desenvolvimento digital para construir sistemas criativos que sustentam crescimento.",
  assinatura: `${site.name} · ${site.descritor}`,
  topo: "Topo",
};
