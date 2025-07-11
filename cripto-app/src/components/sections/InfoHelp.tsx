import "../../components/sections/section-styles.css";

const InfoHelp = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modalContent info-help-modal">
        <div className="modal-header">
          <h2>ℹ️ Información General</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="modal-section">
          <h3>🧠 Acerca del Cripto Dashboard</h3>
          <p>
            Visualiza la evolución de criptomonedas populares, compara precios,
            aplica filtros y configura tu experiencia de análisis con datos
            actualizados.
          </p>
        </div>

        <div className="modal-section">
          <h3>🌐 Fuente de Datos</h3>
          <p>
            Todos los datos provienen de la API pública y gratuita de{" "}
            <strong>CoinGecko</strong>.
          </p>
        </div>

        <div className="modal-section">
          <h3>📘 Glosario Básico</h3>
          <ul>
            <li>
              <strong>Capitalización de mercado</strong>: Valor total de todas
              las monedas en circulación.
            </li>
            <li>
              <strong>Volumen</strong>: Monto total negociado en 24 horas.
            </li>
            <li>
              <strong>% Cambio</strong>: Variación porcentual del precio en un
              periodo.
            </li>
            <li>
              <strong>Criptomoneda</strong>: Activo digital basado en
              blockchain.
            </li>
          </ul>
        </div>

        <div className="modal-section">
          <h3>🔗 Recursos Útiles</h3>
          <ul>
            <li>
              <a
                href="https://www.coingecko.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoinGecko
              </a>
            </li>
            <li>
              <a
                href="https://bitcoin.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitcoin Whitepaper
              </a>
            </li>
            <li>
              <a
                href="https://ethereum.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ethereum.org
              </a>
            </li>
          </ul>
        </div>

        <button className="close-btn-bottom" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default InfoHelp;
