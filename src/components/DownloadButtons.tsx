import { useInviteStore } from '../store/inviteStore';
import { exportInviteAsPNG } from '../utils/exportInvite';

export function DownloadButtons() {
  const { data } = useInviteStore();

  const handleFreeDownload = async () => {
    await exportInviteAsPNG({ data, isPremium: false });
  };

  const handlePremiumDownload = () => {
    alert('Em breve! Pagamento com MB Way.');
  };

  return (
    <div className="download-buttons">
      <button onClick={handleFreeDownload} className="btn-free">
        📥 Descarregar Grátis (com marca d'água)
      </button>
      <button onClick={handlePremiumDownload} className="btn-premium">
        ✨ Sem Marca d'Água — € 4,90
      </button>
    </div>
  );
}