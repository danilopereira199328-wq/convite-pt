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

export function Custom01({ data }: Props) {
  const hasPhoto = !!data.photo;
  const fontFamily = getFontFamily(data.fontFamily);
  const CakeComponent = getCakeComponent(data.occasion, data.cakeId);
  const Element2Component = getElementComponent(data.occasion, 'element2', data.element2Id);
  const Element3Component = getElementComponent(data.occasion, 'element3', data.element3Id);
  const Element4Component = getElementComponent(data.occasion, 'element4', data.element4Id);

  // 🎨 Cores personalizadas
  const primary = data.primaryColor || '#2c3e50';
  const secondary = data.secondaryColor || '#4a6fa5';
  const text = data.textColor || '#ffffff';
  const accent = data.accentColor || '#e8c547';

  const nameTop = hasPhoto ? 750 : 400;
  const ageTop = hasPhoto ? 1000 : 620;
  const messageTop = hasPhoto ? 1350 : 980;
  const dateTop = hasPhoto ? 1520 : 1220;
  const separatorTop = hasPhoto ? 1650 : 1420;
  const venueTop = hasPhoto ? 1720 : 1500;

  const getPhotoStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      top: '280px',
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
        border: `8px solid ${accent}`,
        boxShadow: `0 20px 60px ${accent}50`,
      };
    }

    if (data.photoShape === 'heart') {
      return {
        ...baseStyle,
        width: '560px',
        height: '500px',
        clipPath:
          'path("M 280 420 C 280 420 40 280 40 160 C 40 90 90 40 160 40 C 210 40 250 70 280 110 C 310 70 350 40 400 40 C 470 40 520 90 520 160 C 520 280 280 420 280 420 Z")',
        boxShadow: `0 20px 60px ${accent}50`,
      };
    }

    return {
      ...baseStyle,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: `8px solid ${accent}`,
      boxShadow: `0 20px 60px ${accent}50`,
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
      {/* Moldura dupla elegante */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          right: '60px',
          bottom: '60px',
          border: `2px solid ${accent}`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: '80px',
          right: '80px',
          bottom: '80px',
          border: `1px solid ${accent}80`,
          pointerEvents: 'none',
        }}
      />

      {/* Ornamento superior */}
      <div
        style={{
          position: 'absolute',
          top: '140px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '30px',
          color: accent,
        }}
      >
        ✦
      </div>

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '200px', left: 0, right: 0 }}>
        <span
          style={{
            fontSize: '20px',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            color: accent,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
          }}
        >
          Convite Especial
        </span>
      </div>

      {/* Linha decorativa */}
      <div
        style={{
          position: 'absolute',
          top: '245px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '1px',
          background: accent,
        }}
      />

      {/* Bolo */}
      {CakeComponent ? (
        <div style={{ position: 'absolute', top: '280px', right: '60px', opacity: 0.95 }}>
          <CakeComponent size={160} color={accent} accent={text} />
        </div>
      ) : null}

      {/* Elemento 2 */}
      {Element2Component ? (
        <div style={{ position: 'absolute', top: '280px', left: '60px', opacity: 0.95 }}>
          <Element2Component size={140} color={accent} accent={text} />
        </div>
      ) : null}

      {/* Elemento 3 */}
      {Element3Component ? (
        <div style={{ position: 'absolute', bottom: '200px', right: '60px', opacity: 0.95 }}>
          <Element3Component size={140} color={accent} accent={text} />
        </div>
      ) : null}

      {/* Elemento 4 */}
      {Element4Component ? (
        <div style={{ position: 'absolute', bottom: '200px', left: '60px', opacity: 0.95 }}>
          <Element4Component size={140} color={accent} accent={text} />
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
      <div style={{ position: 'absolute', top: `${nameTop}px`, left: '60px', right: '60px' }}>
        <h1
          style={{
            fontSize:
              (data.honoreeName || '').length > 16
                ? '56px'
                : (data.honoreeName || '').length > 10
                ? '80px'
                : '100px',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.15,
            color: text,
            wordBreak: 'break-word',
            textShadow: `0 2px 20px ${primary}80`,
          }}
        >
          {data.honoreeName || 'O teu nome'}
        </h1>
      </div>

      {/* Idade */}
      {data.age ? (
        <div style={{ position: 'absolute', top: `${ageTop}px`, left: 0, right: 0 }}>
          <div
            style={{
              fontSize: hasPhoto ? '120px' : '180px',
              fontWeight: 900,
              lineHeight: 1,
              color: accent,
              textShadow: `0 2px 30px ${accent}66`,
            }}
          >
            {data.age}
          </div>
          <div
            style={{
              fontSize: '22px',
              letterSpacing: '10px',
              textTransform: 'uppercase',
              color: accent,
              fontFamily: 'Inter, sans-serif',
              marginTop: '8px',
            }}
          >
            anos
          </div>
        </div>
      ) : null}

      {/* Mensagem */}
      <div style={{ position: 'absolute', top: `${messageTop}px`, left: '100px', right: '100px' }}>
        <p
          style={{
            fontSize: '30px',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.5,
            color: text,
            opacity: 0.9,
          }}
        >
          {data.message || 'Contamos contigo!'}
        </p>
      </div>

      {/* Data */}
      <div
        style={{
          position: 'absolute',
          top: `${dateTop}px`,
          left: 0,
          right: 0,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '38px',
            fontWeight: 600,
            textTransform: 'capitalize',
            color: text,
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
        <div style={{ fontSize: '24px', letterSpacing: '4px', color: accent, marginTop: '10px' }}>
          ÀS {data.time || '00:00'}
        </div>
      </div>

      {/* Separador */}
      <div
        style={{
          position: 'absolute',
          top: `${separatorTop}px`,
          left: '200px',
          right: '200px',
          height: '2px',
          background: `${accent}80`,
        }}
      />

      {/* Local */}
      <div
        style={{
          position: 'absolute',
          top: `${venueTop}px`,
          left: '100px',
          right: '100px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ fontSize: '30px', fontWeight: 700, color: text, marginBottom: '12px' }}>
          {data.venueName || 'Local'}
        </div>
        {data.venueAddress && (
          <div style={{ fontSize: '22px', color: text, opacity: 0.85, marginBottom: '6px' }}>
            {data.venueAddress}
          </div>
        )}
        {data.venueCity && (
          <div style={{ fontSize: '22px', color: text, opacity: 0.85 }}>
            {data.venueCity}
          </div>
        )}
      </div>

      {/* Ornamento inferior */}
      <div
        style={{
          position: 'absolute',
          bottom: '130px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          color: accent,
          letterSpacing: '20px',
        }}
      >
        ✦ ✦ ✦
      </div>
    </div>
  );
}