import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-glow" />

      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Petta<span>Tech</span>
            </a>

            <p className="footer-description">
              Criando experiências digitais modernas,
              funcionais e pensadas para gerar resultados.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h3>Navegação</h3>

            <nav className="footer-nav" aria-label="Navegação do rodapé">
              <a href="/">Início</a>
              <a href="/#sobre">Sobre</a>
              <a href="/#contato">Contato</a>
            </nav>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h3>Conecte-se</h3>

            <div className="footer-social">

              <a
                href="https://br.linkedin.com/in/murilo-di-petta-484385164"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
                  />
                </svg>

                <span>LinkedIn</span>
              </a>
              
               <a
                href="https://www.instagram.com/pettatech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
               <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
               >
                 <path
                  fill="currentColor"
                  d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.75 2.25a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
                 />
               </svg>

               <span>Instagram</span>
               </a>


              <a
                href="mailto:pettatech@outlook.com.br"
                aria-label="Enviar e-mail"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                  />
                </svg>

                <span>E-mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} PettaTech. Todos os direitos reservados.
          </p>

          <div className="footer-status">
            <span className="footer-status-dot" />
            <span>Disponível para novos projetos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
