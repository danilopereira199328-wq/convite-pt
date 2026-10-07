import type { InviteData } from '../../types/invite';
import { getCakeComponent } from '../../components/Cakes';
import { getElementComponent } from '../../components/Elements';

interface Props {
  data: InviteData;
}

function getFontFamily(fontFamily?: string): string {
  switch (fontFamily) {
    case 'cormorant':
      return '"Cormorant Garamond", Georgia, serif';
    case 'montserrat':
      return 'Montserrat, -apple-system, sans-serif';
    case 'lora':
      return 'Lora, Georgia, serif';
    case 'playfair':
    default:
      return '"Playfair Display", Georgia, serif';
  }
}

export function BabyShower02({ data }: Props) {
  const hasPhoto = !!data.photo;
  const fontFamily = getFontFamily(data.fontFamily);
  const CakeComponent = getCakeComponent(data.occasion, data.cakeId);
  const Element2Component = getElementComponent(data.occasion, 'element2', data.element2Id);
  const Element3Component = getElementComponent(data.occasion, 'element3', data.element3Id);
  const Element4Component = getElementComponent(data.occasion, 'element4', data.element4Id);

  const primary = data.primaryColor || '#f4a4b8';
  const secondary = data.secondaryColor || '#a4d4e8';
  const text = data.textColor || '#ffffff';
  const accent = data.accentColor || '#ffd166';

  const nameTop = hasPhoto ? 800 : 420;
  const messageTop = hasPhoto ? 1100 : 780;
  const dateTop = hasPhoto ? 1320 : 1080;
  const separatorTop = hasPhoto ? 1460 : 1330;
  const venueTop = hasPhoto ? 1540 : 1400;

  const getPhotoStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      top: '380px',
      left: '50%',
      transform: 'translateX(-50%)',
      overflow: 'hidden',
    };

    if (data.photoShape === 'square') {
      return {
        ...baseStyle,
        width: '400px',
        height: '400px',
        borderRadius: '20px',
        border: `8px solid ${text}`,
        boxShadow: `0 20px 60px ${text}40`,
      };
    }

    if (data.photoShape === 'heart') {
      return {
        ...baseStyle,
        width: '560px',
        height: '500px',
        clipPath:
          'path("M 280 420 C 280 420 40 280 40 160 C 40 90 90 40 160 40 C 210 40 250 70 280 110 C 310 70 350 40 400 40 C 470 40 520 90 520 160 C 520 280 280 420 280 420 Z")',
        boxShadow: `0 20px 60px ${text}40`,
      };
    }

    return {
      ...baseStyle,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: `8px solid ${text}`,
      boxShadow: `0 20px 60px ${text}40`,
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
        position: 'relative',
        fontFamily: fontFamily,
        color: text,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Círculos decorativos */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `${text}20`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `${accent}30`,
          pointerEvents: 'none',
        }}
      />

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '180px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '22px',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            color: text,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
          }}
        >
          Baby Shower
        </div>
        <div style={{ fontSize: '60px', marginTop: '20px' }}>👶</div>
      </div>

      {CakeComponent ? (
        <div style={{ position: 'absolute', top: '340px', right: '60px', opacity: 0.95 }}>
          <CakeComponent size={160} color={text} accent={accent} />
        </div>
      ) : null}

      {Element2Component ? (
        <div style={{ position: 'absolute', top: '340px', left: '60px', opacity: 0.95 }}>
          <Element2Component size={140} color={text} accent={accent} />
        </div>
      ) : null}

      {Element3Component ? (
        <div style={{ position: 'absolute', bottom: '200px', right: '60px', opacity: 0.95 }}>
          <Element3Component size={140} color={text} accent={accent} />
        </div>
      ) : null}

      {Element4Component ? (
        <div style={{ position: 'absolute', bottom: '200px', left: '60px', opacity: 0.95 }}>
          <Element4Component size={140} color={text} accent={accent} />
        </div>
      ) : null}

      {hasPhoto ? (
        <div style={getPhotoStyle()}>
          <img
            src={data.photo}
            alt="Foto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ) : null}

      <div style={{ position: 'absolute', top: `${nameTop}px`, left: '80px', right: '80px' }}>
        <div
          style={{
            fontSize:
              (data.honoreeName || '').length > 16
                ? '56px'
                : (data.honoreeName || '').length > 10
                ? '76px'
                : '90px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: text,
            wordBreak: 'break-word',
            textShadow: `0 4px 20px ${text}40`,
          }}
        >
          {data.honoreeName || 'Nome do bebé'}
        </div>
      </div>

      <div style={{ position: 'absolute', top: `${messageTop}px`, left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '26px',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: text,
            opacity: 0.95,
            margin: 0,
          }}
        >
          {data.message || 'Vem celebrar comigo a chegada do nosso maior amor!'}
        </p>
      </div>

      <div style={{ position: 'absolute', top: `${dateTop}px`, left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '38px',
            fontWeight: 700,
            color: text,
            textTransform: 'capitalize',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {data.date
            ? new Date(data.date + 'T00:00:00').toLocaleDateString('pt-PT', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })
            : 'Data'}
        </div>
        <div
          style={{
            fontSize: '22px',
            marginTop: '16px',
            letterSpacing: '6px',
            color: text,
            opacity: 0.9,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          ÀS {data.time || '00:00'}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: `${separatorTop}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '20px',
          color: text,
          letterSpacing: '20px',
        }}
      >
        ● ● ●
      </div>

      <div style={{ position: 'absolute', top: `${venueTop}px`, left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 700,
            color: text,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {data.venueName || 'Local'}
        </div>
        {data.venueAddress && (
          <div
            style={{
              fontSize: '20px',
              marginTop: '14px',
              color: text,
              opacity: 0.85,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {data.venueAddress}
          </div>
        )}
        {data.venueCity && (
          <div
            style={{
              fontSize: '20px',
              marginTop: '6px',
              color: text,
              opacity: 0.85,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {data.venueCity}
          </div>
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '140px',
          left: 0,
          right: 0,
          fontSize: '16px',
          letterSpacing: '8px',
          color: text,
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Com Amor
      </div>
    </div>
  );
}