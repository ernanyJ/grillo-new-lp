import { withBase } from "@/config/base";

/**
 * Configuração global do site. Nome, domínio, contatos, WhatsApp, números da
 * Workana e o formulário ficam aqui — nunca escritos à mão em componente.
 */
const whatsappNumero = "5571982508742";
const whatsappMensagem =
  "Olá, Grillo. Vim pelo site e gostaria de conversar sobre uma solução para meu projeto.";

export const site = {
  name: "Grillo",
  descritor: "Hub Criativo Estratégico",
  descritorCompleto: "Hub Criativo Estratégico em Marcas, IA e Sistemas",
  founder: "Valter Moura Neto",

  domain: "https://hubgrillo.com",
  title: "Grillo | Hub Criativo Estratégico em Marcas, IA e Sistemas",
  description:
    "A Grillo integra estratégia, branding, marketing, vendas, inteligência artificial, automação e sistemas digitais para criar estruturas criativas, inteligentes e escaláveis para negócios.",
  locale: "pt-BR",
  ogImage: withBase("/images/og.jpg"),

  contact: {
    email: "contato@hubgrillo.com",
  },

  /** O CTA principal da página é a conversa no WhatsApp. */
  whatsapp: {
    numero: whatsappNumero,
    href: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensagem)}`,
  },

  /**
   * Formulário de contato: mesmo endpoint e chave pública do site atual
   * (Web3Forms). A chave é pública por desenho — ela só autoriza o envio
   * para o e-mail cadastrado na conta.
   */
  formulario: {
    endpoint: "https://api.web3forms.com/submit",
    chave: "a4e41f86-1fcd-44ea-b135-b83b0593f001",
    assunto: "Novo contato pelo site da Grillo",
    remetente: "Site Grillo",
  },

  /** Números públicos da Workana, como estão no site atual. */
  workana: {
    mesesHero: 5,
    topPrimeiroAno: 100,
    topBrasil: 10,
    avaliacoes: 40,
    recorrentes: 10,
  },

  social: [
    { label: "LinkedIn", rede: "linkedin", href: "https://www.linkedin.com/company/hubgrillo/" },
    { label: "Instagram", rede: "instagram", href: "https://www.instagram.com/grillo.ia/" },
    {
      label: "Facebook",
      rede: "facebook",
      href: "https://www.facebook.com/profile.php?id=61571375054712&locale=pt_BR",
    },
    { label: "YouTube", rede: "youtube", href: "https://www.youtube.com/@grillo-ia" },
    { label: "TikTok", rede: "tiktok", href: "https://www.tiktok.com/@grilloia" },
  ],

  analytics: {
    gtmId: "",
  },
} as const;

export type Rede = (typeof site.social)[number]["rede"];

/** Posição de cada CTA, enviada no `dataLayer` em `cta_click`. */
export type PosicaoCta =
  | "header"
  | "hero"
  | "manifesto"
  | "sobre"
  | "solucoes"
  | "metodo"
  | "entregas"
  | "diferenciais"
  | "provas"
  | "depoimentos"
  | "projetos"
  | "para_quem"
  | "fundador"
  | "faq"
  | "contato"
  | "flutuante"
  | "barra_mobile";
