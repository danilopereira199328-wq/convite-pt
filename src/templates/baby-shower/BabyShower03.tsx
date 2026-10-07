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

export function BabyShower03({ data }: Props) {
  const hasPhoto = !!data.photo;
  const fontFamily = getFontFamily(data.fontFamily);
  const CakeComponent = getCakeComponent(data.occasion, data.cakeId);
  const Element2Component = getElementComponent(data.occasion, 'element2', data.element2Id);
  const Element3Component = getElementComponent(data.occasion, 'element3', data.element3Id);
  const Element4Component = getElementComponent(data.occasion, 'element4', data.element4Id);

  const primary = data.primaryColor || '#f5f0e8';
  const secondary = data.secondaryColor || '#e8dcc8';
  const text = data.textColor || '#7a6a52';
  const accent = data.accentColor || '#b8a184';

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
        border: `4px solid ${accent}`,
        boxShadow: `0 20px 40px ${accent}40`,
      };
    }

    if (data.photoShape === 'heart') {
      return {
        ...baseStyle,
        width: '560px',
        height: '500px',
        clipPath:
          'path("M 280 420 C 280 420 40 280 40 160 C 40 90 90 40 160 40 C 210 40 250 70 280 110 C 310 70 350 40 400 40 C 470 40 520 90 520 160 C 520 280 280 420 280 420 Z")',
        boxShadow: `0 20px 40px ${accent}40`,
      };
    }

    return {
      ...baseStyle,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: `4px solid ${accent}`,
      boxShadow: `0 20px 40px ${accent}40`,
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: `linear-gradient(180deg, ${primary} 0%, ${secondary} 100%)`,
        position: 'relative',
        fontFamily: fontFamily,
        color: text,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Moldura creme */}
      <div
        style={{
          position: 'absolute',
          top: '50px',
          left: '50px',
          right: '50px',
          bottom: '50px',
          border: `1px solid ${accent}`,
          pointerEvents: 'none',
        }}
      />

      {/* Arco decorativo superior */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '350px',
          height: '220px',
          borderBottom: `2px solid ${accent}`,
          borderRadius: '0 0 175px 175px',
          opacity: 0.6,
        }}
      />

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '180px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '18px',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            color: accent,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
          }}
        >
          Baby Shower
        </div>
        <div style={{ fontSize: '40px', marginTop: '20px', color: accent }}>🌿</div>
      </div>

      {CakeComponent ? (
        <div style={{ position: 'absolute', top: '340px', right: '80px', opacity: 0.9 }}>
          <CakeComponent size={150} color={primary} accent={accent} />
        </div>
      ) : null}

      {Element2Component ? (
        <div style={{ position: 'absolute', top: '340px', left: '80px', opacity: 0.9 }}>
          <Element2Component size={130} color={primary} accent={accent} />
        </div>
      ) : null}

      {Element3Component ? (
        <div style={{ position: 'absolute', bottom: '200px', right: '80px', opacity: 0.9 }}>
          <Element3Component size={130} color={primary} accent={accent} />
        </div>
      ) : null}

      {Element4Component ? (
        <div style={{ position: 'absolute', bottom: '200px', left: '80px', opacity: 0.9 }}>
          <Element4Component size={130} color={primary} accent={accent} />
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
            fontStyle: 'italic',
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
            opacity: 0.85,
            margin: 0,
          }}
        >
          {data.message || 'Vem celebrar comigo a chegada do nosso maior amor!'}
        </p>
      </div>

      <div style={{ position: 'absolute', top: `${dateTop}px`, left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '34px',
            fontWeight: 500,
            color: text,
            textTransform: 'capitalize',
            fontFamily: fontFamily,
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
            fontSize: '20px',
            marginTop: '16px',
            letterSpacing: '6px',
            color: accent,
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
          fontSize: '18px',
          color: accent,
          letterSpacing: '20px',
        }}
      >
        ✿ ❀ ✿
      </div>

      <div style={{ position: 'absolute', top: `${venueTop}px`, left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 600,
            color: text,
            fontFamily: fontFamily,
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
              opacity: 0.7,
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
              opacity: 0.7,
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
          color: accent,
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Com Amor
      </div>
    </div>
  );
}