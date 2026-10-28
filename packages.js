// slow content · pacotes de serviços
// Único arquivo para editar preços, textos, itens e número do WhatsApp.

// Número do WhatsApp em formato internacional (sem "+"): Brasil = 55 + DDD + número.
window.WHATSAPP = "5511966530847";

window.PACKAGES = [
  {
    name: "Presença Inicial",
    price: "R$ 300",
    cycle: "pagamento único",
    highlight: false,
    highlightLabel: "",
    items: [
      "Google Meu Negócio configurado, com fotos",
      "Perfis criados e organizados: Instagram, TikTok e WhatsApp Business",
      "Kit de marca básico (foto de perfil, capa, paleta e fontes)",
      "2 rodadas de ajuste"
    ],
    conditions: "50% adiantado para começar.",
    notice: ""
  },
  {
    name: "Presença + 3 Meses de Conteúdo",
    price: "R$ 800",
    cycle: "pagamento único",
    highlight: false,
    highlightLabel: "",
    items: [
      "Tudo do pacote Presença Inicial",
      "24 peças prontas (2 posts por semana durante 3 meses), com legenda",
      "Calendário de publicações"
    ],
    conditions: "50% adiantado para começar.",
    notice: ""
  },
  {
    name: "Completo",
    price: "R$ 700",
    cycle: "por mês",
    highlight: true,
    highlightLabel: "Mais completo",
    items: [
      "Gestão das redes sociais",
      "6 posts + 3 reels por mês, com gravação feita por mim",
      "Relatório mensal de métricas"
    ],
    conditions: "Contrato mínimo de 3 meses. Pagamento via PIX no dia 5.",
    notice: ""
  },
  {
    name: "Gestão, Análise e Mídia Paga",
    price: "R$ 300",
    cycle: "por mês",
    highlight: false,
    highlightLabel: "",
    items: [
      "Resposta a comentários e monitoramento das redes",
      "Análise mensal de métricas",
      "Estratégia e configuração de anúncios (mídia paga)"
    ],
    conditions: "Contrato mínimo de 3 meses. Pagamento via PIX no dia 5.",
    notice: "A verba dos anúncios é paga pelo cliente direto na plataforma (Meta, Google, TikTok), separada do valor do pacote."
  }
];
