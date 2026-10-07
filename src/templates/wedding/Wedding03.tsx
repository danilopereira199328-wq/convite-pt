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

export function Wedding03({ data }: Props) {
  const hasPhoto = !!data.photo;
  const fontFamily = getFontFamily(data.fontFamily);
  const CakeComponent = getCakeComponent(data.occasion, data.cakeId);
  const Element2Component = getElementComponent(data.occasion, 'element2', data.element2Id);
  const Element3Component = getElementComponent(data.occasion, 'element3', data.element3Id);
  const Element4Component = getElementComponent(data.occasion, 'element4', data.element4Id);

  // 🎨 Cores personalizadas (tom boho)
  const primary = data.primaryColor || '#f5ede4';
  const secondary = data.secondaryColor || '#e8dcc8';
  const text = data.textColor || '#6b5744';
  const accent = data.accentColor || '#c9a875';

  const nameTop = hasPhoto ? 800 : 450;
  const messageTop = hasPhoto ? 1100 : 820;
  const dateTop = hasPhoto ? 1320 : 1080;
  const separatorTop = hasPhoto ? 1460 : 1300;
  const venueTop = hasPhoto ? 1540 : 1360;

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
        borderRadius: '200px 200px 20px 20px', // Arco boho
        border: `4px solid ${accent}`,
        boxShadow: `0 20px 40px ${accent}30`,
      };
    }

    if (data.photoShape === 'heart') {
      return {
        ...baseStyle,
        width: '560px',
        height: '500px',
        clipPath:
          'path("M 280 420 C 280 420 40 280 40 160 C 40 90 90 40 160 40 C 210 40 250 70 280 110 C 310 70 350 40 400 40 C 470 40 520 90 520 160 C 520 280 280 420 280 420 Z")',
        boxShadow: `0 20px 40px ${accent}30`,
      };
    }

    return {
      ...baseStyle,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: `4px solid ${accent}`,
      boxShadow: `0 20px 40px ${accent}30`,
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
      {/* Arco decorativo no topo */}
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '300px',
          borderBottom: `2px solid ${accent}`,
          borderRadius: '0 0 200px 200px',
          opacity: 0.5,
        }}
      />

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '180px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '20px',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            color: accent,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
          }}
        >
          Vamos Casar
        </div>
        <div style={{ fontSize: '40px', color: accent, marginTop: '20px' }}>🌿</div>
      </div>

      {/* Bolo */}
      {CakeComponent ? (
        <div style={{ position: 'absolute', top: '280px', right: '60px', opacity: 0.9 }}>
          <CakeComponent size={160} color={primary} accent={accent} />
        </div>
      ) : null}

      {/* Elemento 2 */}
      {Element2Component ? (
        <div style={{ position: 'absolute', top: '280px', left: '60px', opacity: 0.9 }}>
          <Element2Component size={140} color={primary} accent={accent} />
        </div>
      ) : null}

      {/* Elemento 3 */}
      {Element3Component ? (
        <div style={{ position: 'absolute', bottom: '200px', right: '60px', opacity: 0.9 }}>
          <Element3Component size={140} color={primary} accent={accent} />
        </div>
      ) : null}

      {/* Elemento 4 */}
      {Element4Component ? (
        <div style={{ position: 'absolute', bottom: '200px', left: '60px', opacity: 0.9 }}>
          <Element4Component size={140} color={primary} accent={accent} />
        </div>
      ) : null}

      {/* Foto */}
      {hasPhoto ? (
        <div style={getPhotoStyle()}>
          <img
            src={data.photo}
            alt="Foto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ) : null}

      {/* Nome */}
      <div style={{ position: 'absolute', top: `${nameTop}px`, left: '100px', right: '100px' }}>
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
            fontStyle: 'italic',
          }}
        >
          {data.honoreeName || 'Noivo & Noiva'}
        </div>
      </div>

      {/* Mensagem */}
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
          {data.message || 'É com grande alegria que convidamos para celebrar o nosso casamento'}
        </p>
      </div>

      {/* Data */}
      <div style={{ position: 'absolute', top: `${dateTop}px`, left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '36px',
            fontWeight: 400,
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
            fontSize: '22px',
            marginTop: '16px',
            letterSpacing: '6px',
            color: accent,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          ÀS {data.time || '00:00'}
        </div>
      </div>

      {/* Separador floral */}
      <div
        style={{
          position: 'absolute',
          top: `${separatorTop}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          color: accent,
          letterSpacing: '20px',
        }}
      >
        ✿ ❀ ✿
      </div>

      {/* Local */}
      <div style={{ position: 'absolute', top: `${venueTop}px`, left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '30px',
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

      {/* Rodapé */}
      <div
        style={{
          position: 'absolute',
          bottom: '140px',
          left: 0,
          right: 0,
          fontSize: '18px',
          letterSpacing: '6px',
          color: accent,
          textTransform: 'uppercase',
          fontFamily: fontFamily,
          fontStyle: 'italic',
        }}
      >
        Com amor
      </div>
    </div>
  );
}