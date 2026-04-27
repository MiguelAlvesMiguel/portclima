export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <img src="/portclima-logo.png" alt="Portclima" />
        <p>
          Soluções de engenharia, climatização, eficiência energética e assistência técnica desde 1999.
        </p>
      </div>
      <div>
        <h3>Soluções</h3>
        <a href="/#solucoes">Ar Condicionado</a>
        <a href="/#solucoes">Caldeiras e Esquentadores</a>
        <a href="/#solucoes">Painéis Solares</a>
        <a href="/#solucoes">Deteção de Fugas de Água</a>
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
        <a href="/#home">Termos e Condições</a>
        <a href="/#home">Política de Privacidade</a>
      </div>
    </footer>
  )
}
