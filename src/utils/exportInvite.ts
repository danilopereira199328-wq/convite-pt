import type { InviteData } from '../types/invite';

interface ExportOptions {
  data: InviteData;
  isPremium: boolean;
}

// 🎯 Tipo do estilo de cada ocasião
interface OccasionStyle {
  textColor: string;
  backgroundColor: string | null;
  accentColor?: string;
  label: string;
  footer: string;
  useGradient: boolean;
}

// Estilos de cada ocasião
const OCCASION_STYLES: Record<string, OccasionStyle> = {
  birthday: {
    textColor: '#ffffff',
    backgroundColor: null,
    label: 'ESTÁS CONVIDADO!',
    footer: '',
    useGradient: true,
  },
  wedding: {
    textColor: '#4a4a4a',
    backgroundColor: '#f8f5f0',
    accentColor: '#c9a96e',
    label: 'VAMOS CASAR',
    footer: 'Com amor',
    useGradient: false,
  },
  baptism: {
    textColor: '#1a5490',
    backgroundColor: '#e3f2fd',
    accentColor: '#4a90d9',
    label: 'BATIZADO DE',
    footer: 'Com fé e amor',
    useGradient: false,
  },
  communion: {
    textColor: '#8b5a2b',
    backgroundColor: '#fff9f0',
    accentColor: '#d4a557',
    label: 'PRIMEIRA COMUNHÃO DE',
    footer: 'Com alegria',
    useGradient: false,
  },
  'baby-shower': {
    textColor: '#c2185b',
    backgroundColor: '#fce4ec',
    accentColor: '#e91e63',
    label: 'BABY SHOWER DE',
    footer: 'Com amor',
    useGradient: false,
  },
};

export async function exportInviteAsPNG({
  data,
  isPremium,
}: ExportOptions): Promise<void> {
  const WIDTH = 1080;
  const HEIGHT = 1920;

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Pega o estilo conforme a ocasião
  const style = OCCASION_STYLES[data.occasion] || OCCASION_STYLES.birthday;

  // === 1. FUNDO ===
  if (style.useGradient) {
    // Gradiente para aniversário
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, data.primaryColor);
    gradient.addColorStop(1, data.secondaryColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  } else {
  // Cor sólida para outros
  ctx.fillStyle = style.backgroundColor || '#ffffff';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

  // === 2. MOLDURA (para casamento) ===
  if (data.occasion === 'wedding') {
    ctx.strokeStyle = style.accentColor || '#c9a96e';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, WIDTH - 120, HEIGHT - 120);
    ctx.strokeRect(80, 80, WIDTH - 160, HEIGHT - 160);
  }

  // === 3. COR DO TEXTO ===
  ctx.fillStyle = style.textColor;
  ctx.textAlign = 'center';

  // === 4. LABEL (topo) ===
  ctx.font = '24px Inter, sans-serif';
  if (style.accentColor) {
    ctx.fillStyle = style.accentColor;
  }
  ctx.fillText(style.label, WIDTH / 2, 180);

  // Linha decorativa
  ctx.strokeStyle = style.accentColor || style.textColor;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 150, 200);
  ctx.lineTo(WIDTH / 2 + 150, 200);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Volta à cor do texto
  ctx.fillStyle = style.textColor;

  // === 5. NOME ===
  const name = data.honoreeName || 'Nome';
  const nameLen = name.length;
  let nameFontSize = 100;
  if (nameLen > 20) nameFontSize = 48;
  else if (nameLen > 16) nameFontSize = 56;
  else if (nameLen > 12) nameFontSize = 68;
  else if (nameLen > 8) nameFontSize = 80;

  ctx.font = `bold ${nameFontSize}px "Playfair Display", Georgia, serif`;
  ctx.fillText(name, WIDTH / 2, 450);

  // === 6. IDADE (só para aniversário) ===
  if (data.occasion === 'birthday' && data.age) {
    ctx.font = 'bold 180px "Playfair Display", Georgia, serif';
    ctx.fillText(String(data.age), WIDTH / 2, 750);

    ctx.font = '26px Inter, sans-serif';
    ctx.fillText('A N O S', WIDTH / 2, 810);
  }

  // === 7. MENSAGEM ===
  const msg = data.message || 'A tua presença é essencial!';
  ctx.font = 'italic 30px "Playfair Display", Georgia, serif';
  ctx.fillText(msg, WIDTH / 2, 1050);

  // === 8. DATA ===
  const formattedDate = data.date
    ? new Date(data.date + 'T00:00:00').toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Data';

  if (style.accentColor) ctx.fillStyle = style.accentColor;
  ctx.font = 'bold 38px Inter, sans-serif';
  ctx.fillText(formattedDate, WIDTH / 2, 1300);

  ctx.fillStyle = style.textColor;
  ctx.font = '24px Inter, sans-serif';
  ctx.fillText(`ÀS ${data.time || '00:00'}`, WIDTH / 2, 1350);

  // === 9. SEPARADOR ===
  ctx.strokeStyle = style.accentColor || style.textColor;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 300, 1420);
  ctx.lineTo(WIDTH / 2 + 300, 1420);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // === 10. LOCAL ===
  ctx.fillStyle = style.textColor;
  ctx.font = 'bold 30px Inter, sans-serif';
  ctx.fillText(data.venueName || 'Local', WIDTH / 2, 1520);

  if (data.venueAddress) {
    ctx.font = '22px Inter, sans-serif';
    ctx.fillText(data.venueAddress, WIDTH / 2, 1570);
  }
  if (data.venueCity) {
    ctx.font = '22px Inter, sans-serif';
    ctx.fillText(data.venueCity, WIDTH / 2, 1610);
  }

  // === 11. RODAPÉ ===
  if (style.footer) {
    ctx.fillStyle = style.accentColor || style.textColor;
    ctx.font = '18px Inter, sans-serif';
    ctx.fillText(style.footer.toUpperCase(), WIDTH / 2, 1750);
  }

  // === 12. MARCA D'ÁGUA ===
  if (!isPremium) {
    ctx.save();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 60px Inter, sans-serif';
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText('Criado com Convite.pt', 0, 0);
    ctx.restore();
  }

  // === 13. DOWNLOAD ===
  const safeName = (data.honoreeName || 'convite')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-');

  const link = document.createElement('a');
  link.download = `convite-${safeName}.png`;
  link.href = canvas.toDataURL('image/png', 1.0);
  link.click();
}