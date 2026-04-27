import { Link } from 'react-router-dom'
import { AC_REPAIR_IMAGE } from '../data/content'

const airConditioningServices = [
  {
    title: 'Instalação nova',
    text: 'Escolha do equipamento, localização das unidades, passagem de tubagens e arranque certificado.',
  },
  {
    title: 'Manutenção preventiva',
    text: 'Limpeza, verificação de filtros, condensados, apertos, consumo e rendimento antes da época de maior uso.',
  },
  {
    title: 'Reparação e avarias',
    text: 'Diagnóstico de falhas, fugas, erros no comando, ruído anormal, baixa performance ou equipamento sem frio.',
  },
  {
    title: 'Multi-split e moradias',
    text: 'Soluções para várias divisões com uma unidade exterior, pensadas para conforto e estética da fachada.',
  },
  {
    title: 'Comércio e escritórios',
    text: 'Intervenções planeadas para reduzir paragens e manter salas, lojas e gabinetes confortáveis.',
  },
  {
    title: 'Eficiência energética',
    text: 'Recomendações sobre potência, uso correto, manutenção e substituição quando o consumo já não compensa.',
  },
]

const responseSteps = [
  'Descreva o espaço e a urgência.',
  'Recebe contacto técnico para validar detalhes.',
  'Agendamos visita ou enviamos estimativa inicial.',
]

export default function ProjectInstalacaoMultisplitPage() {
  return (
    <main className="project-detail">
      <section className="project-detail__hero">
        <div className="project-detail__top">
          <Link className="project-detail__back" to="/#portfolio">
            ← Voltar aos trabalhos
          </Link>
          <p className="eyebrow">Ar condicionado · Instalação, manutenção e reparação</p>
          <h1>Serviços de ar condicionado sem complicar.</h1>
          <p className="project-detail__lead">
            Apoio técnico para casas, lojas e escritórios: instalação nova, reparação de avarias,
            manutenção preventiva e soluções multi-split quando precisa de climatizar várias zonas.
          </p>
          <div className="project-detail__ctas">
            <a className="button primary" href="tel:+351914383288">
              Ligar 914 383 288
            </a>
            <a className="button secondary" href="#pedido-orcamento">
              Pedir preço
            </a>
          </div>
        </div>
        <aside className="project-detail__quick-card" aria-label="Resumo rápido">
          <img src={AC_REPAIR_IMAGE} alt="Reparação de ar condicionado" />
          <div>
            <strong>Resposta rápida</strong>
            <span>Instalação · Reparação · Manutenção</span>
          </div>
          <p>Envie fotos do equipamento e diga a localidade para acelerarmos o orçamento.</p>
        </aside>
      </section>

      <section className="project-detail__compact-section">
        <div className="project-detail__section-title">
          <p className="eyebrow">O que fazemos</p>
          <h2>Serviços mais pedidos</h2>
        </div>
        <div className="project-detail__service-grid">
          {airConditioningServices.map((service) => (
            <article key={service.title} className="project-detail__service-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-detail__band">
        <div>
          <p className="eyebrow">Como avançar</p>
          <h2>Do pedido ao orçamento</h2>
        </div>
        <ol className="project-detail__steps">
          {responseSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
        <a className="button primary" href="#pedido-orcamento">
          Quero ser contactado
        </a>
      </section>

      <section className="project-detail__compact-section">
        <div className="project-detail__section-title">
          <p className="eyebrow">Quando chamar a Portclima</p>
          <h2>Sinais de que o equipamento precisa de atenção</h2>
        </div>
        <div className="project-detail__checklist">
          <span>Ar pouco frio ou pouco quente</span>
          <span>Pingos, mau cheiro ou humidade</span>
          <span>Ruído diferente do habitual</span>
          <span>Consumo elétrico a subir</span>
          <span>Filtros ou unidade interior sujos</span>
          <span>Erro no comando ou no visor</span>
        </div>
      </section>

      <section id="pedido-orcamento" className="project-detail__quote">
        <div className="project-detail__quote-copy">
          <p className="eyebrow">Pedido de preço</p>
          <h2>Conte-nos o que precisa</h2>
          <p>
            Para resposta mais rápida, indique localidade, tipo de imóvel, marca/modelo se souber e
            se procura instalação, manutenção ou reparação.
          </p>
        </div>
        <div className="project-detail__quote-note">
          <strong>Também pode ligar diretamente</strong>
          <a href="tel:+351914383288">914 383 288</a>
        </div>
        <form
          className="contact-form project-detail__form"
          name="orcamento-trabalho"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="orcamento-trabalho" />
          <input type="hidden" name="projeto" value="Serviços de ar condicionado" />
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
              placeholder="Ex.: instalação numa sala, manutenção anual, equipamento sem frio..."
            ></textarea>
          </label>
          <button type="submit" className="button primary">
            Enviar pedido
          </button>
        </form>
      </section>

      <div className="project-detail__bottom-cta">
        <p>
          Prefere voltar à página principal e ver todos os serviços?
        </p>
        <Link className="button secondary" to="/#contactos">
          Ver contactos
        </Link>
        <Link className="button secondary" to="/#portfolio">
          Ver outros trabalhos
        </Link>
      </div>
    </main>
  )
}
