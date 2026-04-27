import { Link } from 'react-router-dom'
import { AC_REPAIR_IMAGE } from '../data/content'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Técnico a instalar equipamento de ar condicionado',
  },
  {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    alt: 'Manutenção a sistema de climatização',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sistema e tubagem em instalação técnica',
  },
]

export default function ProjectInstalacaoMultisplitPage() {
  return (
    <main className="project-detail">
      <div className="project-detail__top">
        <Link className="project-detail__back" to="/#portfolio">
          ← Voltar ao portefólio
        </Link>
        <p className="eyebrow">Ar condicionado · Vila Nova de Gaia</p>
        <h1>Instalação multi-split em moradia</h1>
        <p className="project-detail__lead">
          Projeto de climatização residencial com várias unidades interiores, dimensionamento de
          tubagens e ponto único de condensação. Execução com foco em eficiência, ruído reduzido e
          acessos técnicos claros para manutenção futura.
        </p>
        <div className="project-detail__ctas">
          <a className="button primary" href="tel:+351914383288">
            Ligar 914 383 288
          </a>
          <a className="button secondary" href="#pedido-orcamento">
            Pedir orçamento para projeto semelhante
          </a>
        </div>
      </div>

      <figure className="project-detail__hero-figure">
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=80"
          alt="Intervenção técnica em instalação de ar condicionado"
        />
      </figure>

      <section className="section project-detail__section">
        <h2>Desafio e solução</h2>
        <div className="project-detail__columns">
          <p>
            A moradia necessitava de conforto térmico em divisões distintas, sem comprometer
            fachadas e com caminho de tubos minimamente invasivo. Foi proposta arquitetura
            multi-split, com análise de cargas e posicionamento das unidades exteriores para
            otimizar distância e perdas de carga.
          </p>
          <p>
            Durante a execução foi garantida a estanqueidade do circuito frigorífico, ensaios de
            vácuo e arranque com comissionamento, deixando ao cliente a documentação de apoio e
            janela de manutenção preventiva anual.
          </p>
        </div>
      </section>

      <section className="section project-detail__gallery" aria-label="Galeria do projeto">
        <h2>Em campanha</h2>
        <div className="project-detail__grid">
          {galleryImages.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
          ))}
          <img src={AC_REPAIR_IMAGE} alt="Assistência a equipamento de ar condicionado" loading="lazy" />
        </div>
      </section>

      <section className="section project-detail__section">
        <h2>Resultado</h2>
        <p>
          Instalação concluída com divisões independentes, controlo de humidade e ruído contido. O
          cliente fica com plano de manutenção sugerido e ponto de contacto único com a Portclima
          para assistência e futuras extensões.
        </p>
        <ul className="project-detail__bullets">
          <li>Dimensionamento e execução certificada</li>
          <li>Comissionamento e teste de desempenho</li>
          <li>Recomendações de manutenção preventiva</li>
        </ul>
      </section>

      <section id="pedido-orcamento" className="section project-detail__quote">
        <h2>Orçamento para um projeto deste tipo</h2>
        <p>
          Indique a localidade, tipo de imóvel e a sua urgência. A equipa responde com vista a
          agendar visita técnica ou orçamento por telefone.
        </p>
        <form
          className="contact-form project-detail__form"
          name="orcamento-trabalho"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="orcamento-trabalho" />
          <input type="hidden" name="projeto" value="Instalação multi-split Gaia" />
          <label className="honeypot" aria-hidden="true">
            Não preencher
            <input name="bot-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          </label>
          <label>
            Nome
            <input type="text" name="nome" required placeholder="O seu nome" />
          </label>
          <label>
            Telefone
            <input type="tel" name="telefone" required placeholder="Contacto" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="email@exemplo.pt" />
          </label>
          <label>
            Localidade
            <input type="text" name="localidade" placeholder="Ex.: Vila Nova de Gaia" />
          </label>
          <label className="full">
            Mensagem
            <textarea
              name="mensagem"
              rows="4"
              placeholder="Tipo de imóvel, n.º de divisões a climatizar, urgência…"
            ></textarea>
          </label>
          <button type="submit" className="button primary">
            Enviar pedido de orçamento
          </button>
        </form>
      </section>

      <div className="project-detail__bottom-cta">
        <p>Precisa de apoio urgente ou esclarecimentos técnicos?</p>
        <a className="button primary" href="tel:+351914383288">
          Ligar 914 383 288
        </a>
        <Link className="button secondary" to="/#contactos">
          Contacto geral
        </Link>
      </div>
    </main>
  )
}
