import { useState, useEffect } from "react";
import { useSettings } from "../../context/SettingsContext";
import "../../components/sections/section-styles.css";

const SettingsPanel = ({ onClose }: { onClose: () => void }) => {
  const { currency, setCurrency, language, setLanguage } = useSettings();

  const [selectedCurrency, setSelectedCurrency] = useState(currency);
  const [selectedLanguage, setSelectedLanguage] = useState(language || "es");

  useEffect(() => {
    // Sync estado interno cuando se abre el modal
    setSelectedCurrency(currency);
    setSelectedLanguage(language || "es");
  }, [currency, language]);

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modalContent settings-modal">
        <div className="modal-header">
          <h2>⚙️ Configuración</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="modal-section">
          <label>Moneda preferida:</label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="usd">USD - Dólar estadounidense</option>
            <option value="eur">EUR - Euro</option>
            <option value="pen">PEN - Sol peruano</option>
            <option value="mxn">MXN - Peso mexicano</option>
          </select>
        </div>

        <div className="modal-section">
          <label>Idioma:</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>

        <div className="modal-section">
          <label>Tema visual:</label>
          <p style={{ fontStyle: "italic", color: "gray" }}>
            Esta opción se gestiona globalmente desde el Shell.
          </p>
        </div>

        <div className="modal-actions">
          <button
            className="btn-apply"
            onClick={() => {
              setCurrency(selectedCurrency);
              setLanguage(selectedLanguage);
              onClose();
            }}
          >
            Guardar cambios
          </button>

          <button className="btn-close" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
