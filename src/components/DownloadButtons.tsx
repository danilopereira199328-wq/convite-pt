import { useState } from 'react';
import { useInviteStore } from '../store/inviteStore';
import { exportInviteAsPNG } from '../utils/exportInvite';

// 🎯 METE AQUI O TEU NÚMERO DE MB WAY
const MBWAY_PHONE = '937562769'; // ← Substitui pelo teu número real!
const DONATION_AMOUNT = '5'; // Valor sugerido em euros (sem casas decimais)

export function DownloadButtons() {
  const { data } = useInviteStore();
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFreeDownload = async () => {
    await exportInviteAsPNG({ data });
  };

  const handleDonate = () => {
    setShowDonateModal(true);
  };

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(MBWAY_PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  return (
    <>
      <div className="download-buttons">
        <button onClick={handleFreeDownload} className="btn-free">
          📥 Descarregar Grátis
        </button>
        <button onClick={handleDonate} className="btn-donate">
          ❤️ Apoiar o projeto — MB Way
        </button>
      </div>

      {/* MODAL DE DOAÇÃO */}
      {showDonateModal && (
        <div className="donate-overlay" onClick={() => setShowDonateModal(false)}>
          <div className="donate-modal" onClick={(e) => e.stopPropagation()}>
            {/* Botão fechar */}
            <button
              className="donate-close"
              onClick={() => setShowDonateModal(false)}
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Cabeçalho */}
            <div className="donate-header">
              <div className="donate-heart">❤️</div>
              <h2>Apoiar o Convite.pt</h2>
              <p>O teu apoio ajuda a manter este projeto grátis para todos</p>
            </div>

            {/* Valor */}
            <div className="donate-amount-section">
              <label>Valor sugerido</label>
              <div className="donate-amount">€ {DONATION_AMOUNT},00</div>
              <small>Podes enviar qualquer valor que quiseres</small>
            </div>

            {/* Número MB Way */}
            <div className="donate-phone-section">
              <label>Enviar MB Way para:</label>
              <div className="donate-phone-box">
                <span className="donate-phone">{formatPhone(MBWAY_PHONE)}</span>
                <button
                  className={`donate-copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyPhone}
                >
                  {copied ? '✓ Copiado!' : '📋 Copiar'}
                </button>
              </div>
            </div>

            {/* Instruções */}
            <div className="donate-instructions">
              <h3>Como fazer:</h3>
              <ol>
                <li>
                  Abre a app <strong>MB Way</strong> no teu telemóvel
                </li>
                <li>
                  Escolhe <strong>"Enviar dinheiro"</strong>
                </li>
                <li>
                  Cola o número <strong>{formatPhone(MBWAY_PHONE)}</strong>
                </li>
                <li>
                  Escreve o valor <strong>€ {DONATION_AMOUNT},00</strong>
                </li>
                <li>
                  Confirma o envio <strong>🙏</strong>
                </li>
              </ol>
            </div>

            {/* Agradecimento */}
            <div className="donate-thanks">
              <p>Obrigado pelo teu apoio! 💛</p>
              <small>O Convite.pt vai continuar 100% grátis graças a ti</small>
            </div>
          </div>
        </div>
      )}
    </>
  );
}