import type { InviteData } from '../types/invite';

interface ExportOptions {
  data: InviteData;
  isPremium: boolean;
}

interface OccasionStyle {
  textColor: string;
  backgroundColor: string | null;
  accentColor?: string;
  mutedColor?: string;
  label: string;
  footer: string;
  useGradient: boolean;
  fontFamily?: string;
  fontWeight?: number;
  letterSpacing?: number;
  backgroundGradient?: { from: string; to: string };
}

const OCCASION_STYLES: Record<string, OccasionStyle> = {
  // === ANIVERSÁRIO ===
  'birthday-01': {
    textColor: '#ffffff',
    backgroundColor: null,
    label: 'ESTÁS CONVIDADO!',
    footer: '',
    useGradient: true,
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: 700,
  },
  'birthday-02': {
    textColor: '#1a1a1a',
    backgroundColor: '#ffffff',
    accentColor: '#1a1a1a',
    mutedColor: '#666666',
    label: 'CONVITE',
    footer: '',
    useGradient: false,
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: 400,
    letterSpacing: 2,
  },
  'birthday-03': {
    textColor: '#d4af37',
    backgroundColor: '#0f0f0f',
    accentColor: '#d4af37',
    mutedColor: '#e8d9a0',
    label: 'ESTÁS CONVIDADO',
    footer: '',
    useGradient: false,
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: 700,
    backgroundGradient: { from: '#0f0f0f', to: '#1a1a1a' },
  },
  // === CASAMENTO ===
  'wedding-01': {
    textColor: '#4a4a4a',
    backgroundColor: '#f8f5f0',
    accentColor: '#c9a96e',
    label: 'VAMOS CASAR',
    footer: 'Com amor',
    useGradient: false,
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: 700,
  },
  // === BATIZADO ===
  'baptism-01': {
    textColor: '#1a5490',
    backgroundColor: '#e3f2fd',
    accentColor: '#4a90d9',
    label: 'BATIZADO DE',
    footer: 'Com fé e amor',
    useGradient: false,
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: 700,
  },
  // === COMUNHÃO ===
  'communion-01': {
    textColor: '#8b5a2b',
    backgroundColor: '#fff9f0',
    accentColor: '#d4a557',
    label: 'PRIMEIRA COMUNHÃO DE',
    footer: 'Com alegria',
    useGradient: false,
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: 700,
  },
  // === BABY SHOWER ===
  'baby-shower-01': {
    textColor: '#c2185b',
    backgroundColor: '#fce4ec',
    accentColor: '#e91e63',
    label: 'BABY SHOWER DE',
    footer: 'Com amor',
    useGradient: false,
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: 700,
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

  const style = OCCASION_STYLES[data.templateId] || OCCASION_STYLES['birthday-01'];

  // === 1. FUNDO ===
  if (style.backgroundGradient) {
    // Gradiente personalizado (elegante - preto)
    const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    gradient.addColorStop(0, style.backgroundGradient.from);
    gradient.addColorStop(0.5, style.backgroundGradient.to);
    gradient.addColorStop(1, style.backgroundGradient.from);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  } else if (style.useGradient) {
    // Gradiente com cores do utilizador (moderno)
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, data.primaryColor);
    gradient.addColorStop(1, data.secondaryColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  } else {
    // Cor sólida (minimalista, casamento, etc.)
    ctx.fillStyle = style.backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  // === 2. MOLDURA (conforme o estilo) ===
  if (data.templateId === 'birthday-02') {
    // Minimalista - moldura simples preta
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    ctx.strokeRect(60, 60, WIDTH - 120, HEIGHT - 120);
  } else if (data.templateId === 'birthday-03') {
    // Elegante - moldura dupla dourada
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, WIDTH - 120, HEIGHT - 120);
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.5;
    ctx.strokeRect(80, 80, WIDTH - 160, HEIGHT - 160);
    ctx.globalAlpha = 1;
  } else if (data.occasion === 'wedding') {
    // Casamento - moldura dourada dupla
    ctx.strokeStyle = '#c9a96e';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, WIDTH - 120, HEIGHT - 120);
    ctx.lineWidth = 1;
    ctx.strokeRect(80, 80, WIDTH - 160, HEIGHT - 160);
  }

  // === 3. FOTO (todos os templates, com formas) ===
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
      const photoY = data.occasion === 'wedding' ? 400 : 280;
      const shape = data.photoShape || 'circle';
      const borderColor = style.accentColor || 'rgba(255, 255, 255, 0.5)';

      ctx.save();

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

  // === 4. COR DO TEXTO ===
  ctx.fillStyle = style.textColor;
  ctx.textAlign = 'center';

  // === 5. LABEL (topo) ===
  const labelFontSize = data.templateId === 'birthday-02' ? 20 : 24;
  ctx.font = `${labelFontSize}px Inter, sans-serif`;
  if (style.accentColor) ctx.fillStyle = style.accentColor;
  ctx.fillText(style.label, WIDTH / 2, 180);

  // Linha decorativa
  ctx.strokeStyle = style.accentColor || style.textColor;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = data.templateId === 'birthday-02' ? 1 : 2;

  if (data.templateId === 'birthday-02') {
    // Minimalista - linha curta
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2 - 20, 220);
    ctx.lineTo(WIDTH / 2 + 20, 220);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2 - 150, 200);
    ctx.lineTo(WIDTH / 2 + 150, 200);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = style.textColor;

  // === 6. NOME ===
  const name = data.honoreeName || 'Nome';
  const nameLen = name.length;
  let nameFontSize = 100;
  if (nameLen > 20) nameFontSize = 48;
  else if (nameLen > 16) nameFontSize = 56;
  else if (nameLen > 12) nameFontSize = 68;
  else if (nameLen > 8) nameFontSize = 80;

  const nameY = hasPhoto ? 850 : 450;
  const nameWeight = style.fontWeight || 700;
  const nameFont = style.fontFamily || '"Playfair Display", Georgia, serif';

  ctx.font = `${nameWeight} ${nameFontSize}px ${nameFont}`;
  if (style.accentColor) ctx.fillStyle = style.accentColor;
  if (data.templateId === 'birthday-03') {
    ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
    ctx.shadowBlur = 20;
  }
  ctx.fillText(name, WIDTH / 2, nameY);
  ctx.shadowBlur = 0;

  // === 7. IDADE ===
  if (data.occasion === 'birthday' && data.age) {
    const ageFontSize = hasPhoto ? 120 : 180;
    const ageY = hasPhoto ? 1120 : 750;
    const anosY = hasPhoto ? 1180 : 810;

    if (data.templateId === 'birthday-03') {
      ctx.fillStyle = '#d4af37';
      ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
      ctx.shadowBlur = 30;
    } else if (data.templateId === 'birthday-02') {
      ctx.fillStyle = '#1a1a1a';
    } else {
      ctx.fillStyle = style.textColor;
    }

    ctx.font = `${style.fontWeight || 900} ${ageFontSize}px ${nameFont}`;
    ctx.fillText(String(data.age), WIDTH / 2, ageY);
    ctx.shadowBlur = 0;

    if (data.templateId === 'birthday-03') {
      ctx.fillStyle = '#d4af37';
    } else if (data.templateId === 'birthday-02') {
      ctx.fillStyle = '#666666';
    } else {
      ctx.fillStyle = style.textColor;
    }

    ctx.font = `${hasPhoto ? 22 : 26}px Inter, sans-serif`;
    ctx.fillText('A N O S', WIDTH / 2, anosY);
  }

  // === 8. MENSAGEM ===
  const defaultMsg: Record<string, string> = {
    birthday: 'A tua presença é essencial!',
    wedding: 'É com grande alegria que convidamos para celebrar o nosso casamento',
    baptism: 'Com muita alegria convidamos para celebrar este momento tão especial',
    communion: 'Celebramos juntos este momento de fé e crescimento espiritual',
    'baby-shower': 'Vem celebrar comigo a chegada do nosso maior amor!',
  };

  const msg = data.message || defaultMsg[data.occasion] || 'A tua presença é essencial!';
  const msgY = hasPhoto ? 1350 : 1050;
  const msgFontSize = data.templateId === 'birthday-02' ? 26 : 30;

  if (data.templateId === 'birthday-03') {
    ctx.fillStyle = '#e8d9a0';
  } else if (data.templateId === 'birthday-02') {
    ctx.fillStyle = '#444444';
  } else {
    ctx.fillStyle = style.textColor;
  }

  ctx.font = `italic ${msgFontSize}px ${nameFont}`;
  ctx.fillText(msg, WIDTH / 2, msgY);

  // === 9. DATA ===
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
  ctx.font = `bold 38px Inter, sans-serif`;
  ctx.fillText(formattedDate, WIDTH / 2, dateY);

  if (data.templateId === 'birthday-03') ctx.fillStyle = '#d4af37';
  else if (data.templateId === 'birthday-02') ctx.fillStyle = '#666666';
  else ctx.fillStyle = style.textColor;

  ctx.font = `24px Inter, sans-serif`;
  ctx.fillText(`ÀS ${data.time || '00:00'}`, WIDTH / 2, timeY);

  // === 10. SEPARADOR ===
  const separatorY = hasPhoto ? 1650 : 1420;

  ctx.strokeStyle = style.accentColor || style.textColor;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();

  if (data.templateId === 'birthday-02') {
    ctx.moveTo(WIDTH / 2 - 30, separatorY);
    ctx.lineTo(WIDTH / 2 + 30, separatorY);
  } else {
    ctx.moveTo(WIDTH / 2 - 300, separatorY);
    ctx.lineTo(WIDTH / 2 + 300, separatorY);
  }
  ctx.stroke();
  ctx.globalAlpha = 1;

  // === 11. LOCAL ===
  const venueY = hasPhoto ? 1720 : 1520;
  const addressY = hasPhoto ? 1770 : 1570;
  const cityY = hasPhoto ? 1810 : 1610;

  if (data.templateId === 'birthday-03') ctx.fillStyle = '#d4af37';
  else if (data.templateId === 'birthday-02') ctx.fillStyle = '#1a1a1a';
  else ctx.fillStyle = style.textColor;

  ctx.font = `bold 30px Inter, sans-serif`;
  ctx.fillText(data.venueName || 'Local', WIDTH / 2, venueY);

  if (data.templateId === 'birthday-03') ctx.fillStyle = '#e8d9a0';
  else if (data.templateId === 'birthday-02') ctx.fillStyle = '#666666';
  else ctx.fillStyle = style.textColor;

  if (data.venueAddress) {
    ctx.font = `22px Inter, sans-serif`;
    ctx.fillText(data.venueAddress, WIDTH / 2, addressY);
  }
  if (data.venueCity) {
    ctx.font = `22px Inter, sans-serif`;
    ctx.fillText(data.venueCity, WIDTH / 2, cityY);
  }

  // === 12. RODAPÉ ===
  if (style.footer) {
    ctx.fillStyle = style.accentColor || style.textColor;
    ctx.font = `18px Inter, sans-serif`;
    ctx.fillText(style.footer.toUpperCase(), WIDTH / 2, hasPhoto ? 1860 : 1750);
  }

  // === 13. MARCA D'ÁGUA ===
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

  // === 14. DOWNLOAD ===
  const safeName = (data.honoreeName || 'convite')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-');

  const link = document.createElement('a');
  link.download = `convite-${safeName}.png`;
  link.href = canvas.toDataURL('image/png', 1.0);
  link.click();
}