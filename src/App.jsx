import './App.css'
import { useState } from 'react'

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Portefólio', href: '#portfolio' },
    { label: 'Contactos', href: '#contactos' },
  ]

  const services = [
    {
      title: 'Ar Condicionado',
      eyebrow: 'Conforto térmico',
      text: 'Instalação, manutenção e assistência técnica para equipamentos residenciais e empresariais.',
      image:
        'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
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

  const portfolioItems = [
    {
      title: 'Instalação Multi-split em moradia',
      category: 'Ar Condicionado',
      location: 'Vila Nova de Gaia',
      image:
        'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
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

  const filters = ['Todos', 'Ar Condicionado', 'Painéis Solares', 'Caldeiras e Esquentadores', 'Fugas de Água']
  const filteredPortfolio =
    activeFilter === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Portclima homepage" onClick={closeMenu}>
          <img src="/portclima-logo.png" alt="Portclima soluções de energia" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          Menu
        </button>

        <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <div className="nav-dropdown">
            <span>Soluções técnicas</span>
            <div className="dropdown-panel">
              {services.map((service) => (
                <a key={service.title} href={`#${service.title.toLowerCase().replaceAll(' ', '-')}`} onClick={closeMenu}>
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <a className="nav-call" href="tel:+351914383288" onClick={closeMenu}>
            Ligar 914 383 288
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Engenharia, climatização e assistência técnica desde 1999</p>
            <h1>Apoio técnico para clima, energia e manutenção em todo o país.</h1>
            <p className="hero-lead">
              A Portclima combina técnicos certificados, diagnóstico rigoroso e resposta rápida para
              resolver instalações, avarias e intervenções urgentes com confiança.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="tel:+351914383288">
                Ligar 914 383 288
              </a>
              <a className="button secondary" href="#contactos">
                Pedir orçamento
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Técnico de climatização em intervenção">
            <img
              src="https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1100&q=80"
              alt="Técnico a verificar equipamento de climatização"
            />
            <div className="hero-card">
              <strong>Resposta técnica</strong>
              <span>Norte, Lisboa e assistência nacional</span>
            </div>
          </div>
        </section>

        <section id="solucoes" className="section service-cards">
          <div className="section-heading">
            <p className="eyebrow">Soluções</p>
            <h2>Serviços principais da Portclima</h2>
            <p>Da instalação à manutenção, cada intervenção é orientada por diagnóstico técnico e eficiência.</p>
          </div>

          <div className="cards-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title} id={service.title.toLowerCase().replaceAll(' ', '-')}>
                <img src={service.image} alt="" />
                <div>
                  <p className="card-eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="section split-section">
          <div>
            <p className="eyebrow">Porquê a Portclima</p>
            <h2>Uma empresa técnica, não apenas uma equipa de reparações.</h2>
          </div>
          <div className="why-grid">
            {[
              ['Desde 1999', 'Experiência acumulada em climatização, energia e manutenção técnica.'],
              ['Técnicos certificados', 'Intervenções acompanhadas por conhecimento técnico e boas práticas.'],
              ['Cobertura nacional', 'Apoio no Norte, Lisboa e em zonas de assistência alargadas.'],
              ['Eficiência energética', 'Soluções pensadas para reduzir consumo, desperdício e avarias recorrentes.'],
            ].map(([title, text]) => (
              <article key={title} className="why-item">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section highlights">
          <div className="section-heading narrow">
            <p className="eyebrow">Intervenções</p>
            <h2>Diagnóstico profissional, intervenção rápida e menos desperdício.</h2>
          </div>

          <div className="highlight-grid">
            {services.map((service) => (
              <article key={service.title} className="highlight-card">
                <span>{service.eyebrow}</span>
                <h3>{service.title}</h3>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href="#contactos">
                  {service.title === 'Deteção de Fugas de Água' ? 'Pedir deteção de fuga' : 'Pedir orçamento'}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="process-copy">
            <p className="eyebrow">Processo</p>
            <h2>Como funciona o apoio técnico</h2>
          </div>
          <div className="process-steps">
            {[
              ['01', 'Contacto', 'Explique o problema, localidade e grau de urgência.'],
              ['02', 'Diagnóstico', 'A equipa avalia o cenário e recomenda a intervenção adequada.'],
              ['03', 'Intervenção', 'Técnicos especializados executam o serviço com acompanhamento claro.'],
              ['04', 'Prevenção', 'Recebe recomendações para reduzir avarias, consumo e desperdício.'],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section">
          <div className="section-heading">
            <p className="eyebrow">Portefólio</p>
            <h2>Trabalhos Realizados</h2>
            <p>Conheça algumas instalações, manutenções e intervenções realizadas pela Portclima.</p>
          </div>

          <div className="filter-row" aria-label="Filtros do portefólio">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'is-active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredPortfolio.map((item) => (
              <article className="portfolio-item" key={`${item.title}-${item.location}`}>
                <img src={item.image} alt="" />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="portfolio-cta" href="#contactos">
            Tem um projeto semelhante? Peça orçamento.
          </a>
        </section>

        <section className="section service-areas">
          <div>
            <p className="eyebrow">Zonas de assistência</p>
            <h2>Equipa presente no Norte e em Lisboa, com cobertura técnica nacional.</h2>
          </div>
          <a href="#contactos">Ver zonas de assistência</a>
        </section>

        <section id="contactos" className="section contact-section">
          <div className="contact-intro">
            <p className="eyebrow">Contactos</p>
            <h2>Fale com a Portclima</h2>
            <p>Envie o pedido, ligue diretamente ou indique a localidade para encaminharmos a assistência.</p>
          </div>

          <div className="contact-layout">
            <div className="contact-blocks">
              {[
                ['Telefone', '914 383 288', 'tel:+351914383288'],
                ['Email', 'geral@portclima.com', 'mailto:geral@portclima.com'],
                ['Escritórios Norte', 'Vila Nova de Gaia', '#mapa'],
                ['Escritório Lisboa', 'Área de Lisboa', '#mapa'],
              ].map(([label, value, href]) => (
                <a key={label} href={href} className="contact-block">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </a>
              ))}

              <div id="mapa" className="map-card">
                <span>Mapa de assistência</span>
                <strong>Gaia / Porto</strong>
                <strong>Lisboa</strong>
                <p>Atendimento técnico por marcação nas principais zonas urbanas e arredores.</p>
              </div>
            </div>

            <form
              className="contact-form"
              name="contacto-portclima"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contacto-portclima" />
              <label className="honeypot" aria-hidden="true">
                Não preencher
                <input name="bot-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              </label>
              <label>
                Nome
                <input type="text" name="nome" placeholder="O seu nome" />
              </label>
              <label>
                Telefone
                <input type="tel" name="telefone" placeholder="Contacto telefónico" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="email@exemplo.pt" />
              </label>
              <label>
                Localidade
                <input type="text" name="localidade" placeholder="Ex.: Vila Nova de Gaia" />
              </label>
              <label className="full">
                Serviço pretendido
                <select name="servico" defaultValue="">
                  <option value="" disabled>
                    Selecione o serviço
                  </option>
                  <option>Ar condicionado</option>
                  <option>Caldeiras e esquentadores</option>
                  <option>Painéis solares</option>
                  <option>Fugas de água</option>
                  <option>Outro</option>
                </select>
              </label>
              <label className="full">
                Mensagem
                <textarea name="mensagem" rows="5" placeholder="Descreva o pedido ou a avaria"></textarea>
              </label>
              <button type="submit" className="button primary">
                Enviar pedido
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <img src="/portclima-logo.png" alt="Portclima" />
          <p>Soluções de engenharia, climatização, eficiência energética e assistência técnica desde 1999.</p>
        </div>
        <div>
          <h3>Soluções</h3>
          <a href="#solucoes">Ar Condicionado</a>
          <a href="#solucoes">Caldeiras e Esquentadores</a>
          <a href="#solucoes">Painéis Solares</a>
          <a href="#solucoes">Deteção de Fugas de Água</a>
        </div>
        <div>
          <h3>Contactos</h3>
          <a href="tel:+351914383288">914 383 288</a>
          <a href="mailto:geral@portclima.com">geral@portclima.com</a>
          <span>Vila Nova de Gaia</span>
          <span>Lisboa</span>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noreferrer">
            Livro de Reclamações Eletrónico
          </a>
          <a href="#home">Termos e Condições</a>
          <a href="#home">Política de Privacidade</a>
        </div>
      </footer>

      <div className="mobile-sticky-cta" aria-label="Ações rápidas">
        <a href="tel:+351914383288">Ligar</a>
        <a href="#contactos">Orçamento</a>
      </div>
    </div>
  )
}

export default App
