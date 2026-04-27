/** Webflow AC repair image (user-provided) */
export const AC_REPAIR_IMAGE =
  'https://cdn.prod.website-files.com/643dd13153ce80ea0a9ceae9/68deab5a688ff2bb0b054e59_64ef56d466ae3e335a5172ff_AC%2520Repair%2520101.png'

export const navItems = [
  { label: 'Home', to: '/#home' },
  { label: 'Sobre Nós', to: '/#sobre' },
  { label: 'Soluções', to: '/#solucoes' },
  { label: 'Portefólio', to: '/#portfolio' },
  { label: 'Contactos', to: '/#contactos' },
]

export function buildServices() {
  return [
    {
      title: 'Ar Condicionado',
      eyebrow: 'Conforto térmico',
      text: 'Instalação, manutenção e assistência técnica para equipamentos residenciais e empresariais.',
      image: AC_REPAIR_IMAGE,
      bullets: ['Instalação certificada', 'Manutenção preventiva', 'Eficiência energética'],
    },
    {
      title: 'Caldeiras e Esquentadores',
      eyebrow: 'Água quente sanitária',
      text: 'Assistência, substituição e manutenção de equipamentos a gás com foco na segurança.',
      image:
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80',
      bullets: ['Diagnóstico técnico', 'Reparação rápida', 'Apoio ao domicílio'],
    },
    {
      title: 'Painéis Solares',
      eyebrow: 'Energia eficiente',
      text: 'Soluções solares térmicas e apoio técnico para reduzir consumos e melhorar rendimento.',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
      bullets: ['Instalação e manutenção', 'Acompanhamento técnico', 'Menos desperdício energético'],
    },
    {
      title: 'Deteção de Fugas de Água',
      eyebrow: 'Intervenção técnica',
      text: 'Diagnóstico profissional de infiltrações e fugas, com apoio técnico ao domicílio.',
      image:
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80',
      bullets: ['Redução de danos', 'Intervenção rápida', 'Menos desperdício de água'],
    },
  ]
}

export const MULTISPLIT_SLUG = 'instalacao-multisplit-gaia'

export function buildPortfolioItems() {
  return [
    {
      title: 'Instalação Multi-split em moradia',
      category: 'Ar Condicionado',
      location: 'Vila Nova de Gaia',
      image:
        'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
      detailSlug: MULTISPLIT_SLUG,
    },
    {
      title: 'Sistema solar térmico residencial',
      category: 'Painéis Solares',
      location: 'Porto',
      image:
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Substituição de esquentador',
      category: 'Caldeiras e Esquentadores',
      location: 'Lisboa',
      image:
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Diagnóstico de infiltração técnica',
      category: 'Fugas de Água',
      location: 'Matosinhos',
      image:
        'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Manutenção preventiva empresarial',
      category: 'Ar Condicionado',
      location: 'Maia',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Apoio técnico a caldeira mural',
      category: 'Caldeiras e Esquentadores',
      location: 'Oeiras',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    },
  ]
}
