import type { InviteData } from '../types/invite';

interface ExportOptions {
  data: InviteData;
  isPremium: boolean;
}

interface OccasionStyle {
  textColor: string;
  backgroundColor: string | null;
  accentColor?: string;
  label: string;
  footer: string;
  useGradient: boolean;
}

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
  const hasPhoto = !!data.photo;

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const style = OCCASION_STYLES[data.occasion] || OCCASION_STYLES.birthday;

  // === 1. FUNDO ===
  if (style.useGradient) {
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, data.primaryColor);
    gradient.addColorStop(1, data.secondaryColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  } else {
    ctx.fillStyle = style.backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  // === 1.5. FOTO (com formas) ===
  if (hasPhoto) {
    try {
      const img = new Image();
      img.src = data.photo!;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const photoSize = 400;
      const photoX = (WIDTH - photoSize) / 2;
      const photoY = data.occasion === 'wedding' ? 400 : 300;
      const shape = data.photoShape || 'circle';
      const borderColor = style.accentColor || 'rgba(255, 255, 255, 0.5)';

      ctx.save();

      // Clip conforme a forma
      if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
      } else if (shape === 'square') {
        const radius = 20;
        ctx.beginPath();
        ctx.moveTo(photoX + radius, photoY);
        ctx.lineTo(photoX + photoSize - radius, photoY);
        ctx.quadraticCurveTo(photoX + photoSize, photoY, photoX + photoSize, photoY + radius);
        ctx.lineTo(photoX + photoSize, photoY + photoSize - radius);
        ctx.quadraticCurveTo(photoX + photoSize, photoY + photoSize, photoX + photoSize - radius, photoY + photoSize);
        ctx.lineTo(photoX + radius, photoY + photoSize);
        ctx.quadraticCurveTo(photoX, photoY + photoSize, photoX, photoY + photoSize - radius);
        ctx.lineTo(photoX, photoY + radius);
        ctx.quadraticCurveTo(photoX, photoY, photoX + radius, photoY);
        ctx.closePath();
        ctx.clip();
      } else if (shape === 'heart') {
        const cx = photoX + photoSize / 2;
        const cy = photoY + photoSize / 2 + 30;
        const size = photoSize / 2 - 20;
        ctx.beginPath();
        ctx.moveTo(cx, cy + size * 0.3);
        ctx.bezierCurveTo(cx, cy - size * 0.3, cx - size, cy - size * 0.3, cx - size, cy + size * 0.3);
        ctx.bezierCurveTo(cx - size, cy + size, cx, cy + size * 1.3, cx, cy + size * 1.5);
        ctx.bezierCurveTo(cx, cy + size * 1.3, cx + size, cy + size, cx + size, cy + size * 0.3);
        ctx.bezierCurveTo(cx + size, cy - size * 0.3, cx, cy - size * 0.3, cx, cy + size * 0.3);
        ctx.closePath();
        ctx.clip();
      }

      ctx.drawImage(img, photoX, photoY, photoSize, photoSize);
      ctx.restore();

      // Borda (exceto coração)
      if (shape !== 'heart') {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 8;

        if (shape === 'circle') {
          ctx.beginPath();
          ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 0, Math.PI * 2);
          ctx.stroke();
        } else if (shape === 'square') {
          const radius = 20;
          ctx.beginPath();
          ctx.moveTo(photoX + radius, photoY);
          ctx.lineTo(photoX + photoSize - radius, photoY);
          ctx.quadraticCurveTo(photoX + photoSize, photoY, photoX + photoSize, photoY + radius);
          ctx.lineTo(photoX + photoSize, photoY + photoSize - radius);
          ctx.quadraticCurveTo(photoX + photoSize, photoY + photoSize, photoX + photoSize - radius, photoY + photoSize);
          ctx.lineTo(photoX + radius, photoY + photoSize);
          ctx.quadraticCurveTo(photoX, photoY + photoSize, photoX, photoY + photoSize - radius);
          ctx.lineTo(photoX, photoY + radius);
          ctx.quadraticCurveTo(photoX, photoY, photoX + radius, photoY);
          ctx.closePath();
          ctx.stroke();
        }
      }
    } catch (error) {
      console.error('Erro ao carregar foto:', error);
    }
  }

  // === 2. MOLDURA (casamento) ===
  if (data.occasion === 'wedding') {
    ctx.strokeStyle = style.accentColor || '#c9a96e';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, WIDTH - 120, HEIGHT - 120);
    ctx.strokeRect(80, 80, WIDTH - 160, HEIGHT - 160);
  }

  // === 3. COR DO TEXTO ===
  ctx.fillStyle = style.textColor;
  ctx.textAlign = 'center';

  // === 4. LABEL ===
  ctx.font = '24px Inter, sans-serif';
  if (style.accentColor) ctx.fillStyle = style.accentColor;
  ctx.fillText(style.label, WIDTH / 2, 180);

  ctx.strokeStyle = style.accentColor || style.textColor;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 150, 200);
  ctx.lineTo(WIDTH / 2 + 150, 200);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.fillStyle = style.textColor;

  // === 5. NOME ===
  const name = data.honoreeName || 'Nome';
  const nameLen = name.length;
  let nameFontSize = 100;
  if (nameLen > 20) nameFontSize = 48;
  else if (nameLen > 16) nameFontSize = 56;
  else if (nameLen > 12) nameFontSize = 68;
  else if (nameLen > 8) nameFontSize = 80;

  const nameY = hasPhoto ? 850 : 450;

  ctx.font = `bold ${nameFontSize}px "Playfair Display", Georgia, serif`;
  ctx.fillText(name, WIDTH / 2, nameY);

    // === 6. IDADE (sempre visível no aniversário) ===
  if (data.occasion === 'birthday' && data.age) {
    const ageFontSize = hasPhoto ? 120 : 180;
    const ageY = hasPhoto ? 1120 : 750;
    const anosY = hasPhoto ? 1180 : 810;

    ctx.font = `bold ${ageFontSize}px "Playfair Display", Georgia, serif`;
    ctx.fillText(String(data.age), WIDTH / 2, ageY);

    ctx.font = hasPhoto ? '22px Inter, sans-serif' : '26px Inter, sans-serif';
    ctx.fillText('A N O S', WIDTH / 2, anosY);
  }

  // === 7. MENSAGEM ===
  const defaultMsg: Record<string, string> = {
    birthday: 'A tua presença é essencial!',
    wedding: 'É com grande alegria que convidamos para celebrar o nosso casamento',
    baptism: 'Com muita alegria convidamos para celebrar este momento tão especial',
    communion: 'Celebramos juntos este momento de fé e crescimento espiritual',
    'baby-shower': 'Vem celebrar comigo a chegada do nosso maior amor!',
  };

  const msg = data.message || defaultMsg[data.occasion] || 'A tua presença é essencial!';
  const msgY = hasPhoto ? 1350 : 1050;
  ctx.font = 'italic 30px "Playfair Display", Georgia, serif';
  ctx.fillText(msg, WIDTH / 2, msgY);

  // === 8. DATA ===
  const formattedDate = data.date
    ? new Date(data.date + 'T00:00:00').toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Data';

  const dateY = hasPhoto ? 1520 : 1300;
  const timeY = hasPhoto ? 1570 : 1350;

  if (style.accentColor) ctx.fillStyle = style.accentColor;
  ctx.font = 'bold 38px Inter, sans-serif';
  ctx.fillText(formattedDate, WIDTH / 2, dateY);

  ctx.fillStyle = style.textColor;
  ctx.font = '24px Inter, sans-serif';
  ctx.fillText(`ÀS ${data.time || '00:00'}`, WIDTH / 2, timeY);

  // === 9. SEPARADOR ===
  const separatorY = hasPhoto ? 1650 : 1420;

  ctx.strokeStyle = style.accentColor || style.textColor;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 300, separatorY);
  ctx.lineTo(WIDTH / 2 + 300, separatorY);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // === 10. LOCAL ===
  const venueY = hasPhoto ? 1720 : 1520;
  const addressY = hasPhoto ? 1770 : 1570;
  const cityY = hasPhoto ? 1810 : 1610;

  ctx.fillStyle = style.textColor;
  ctx.font = 'bold 30px Inter, sans-serif';
  ctx.fillText(data.venueName || 'Local', WIDTH / 2, venueY);

  if (data.venueAddress) {
    ctx.font = '22px Inter, sans-serif';
    ctx.fillText(data.venueAddress, WIDTH / 2, addressY);
  }
  if (data.venueCity) {
    ctx.font = '22px Inter, sans-serif';
    ctx.fillText(data.venueCity, WIDTH / 2, cityY);
  }

  // === 11. RODAPÉ ===
  if (style.footer) {
    ctx.fillStyle = style.accentColor || style.textColor;
    ctx.font = '18px Inter, sans-serif';
    ctx.fillText(style.footer.toUpperCase(), WIDTH / 2, hasPhoto ? 1860 : 1750);
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