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

export function Communion03({ data }: Props) {
  const hasPhoto = !!data.photo;
  const fontFamily = getFontFamily(data.fontFamily);
  const CakeComponent = getCakeComponent(data.occasion, data.cakeId);
  const Element2Component = getElementComponent(data.occasion, 'element2', data.element2Id);
  const Element3Component = getElementComponent(data.occasion, 'element3', data.element3Id);
  const Element4Component = getElementComponent(data.occasion, 'element4', data.element4Id);

  const primary = data.primaryColor || '#1a1a1a';
  const secondary = data.secondaryColor || '#2a2a2a';
  const text = data.textColor || '#d4a557';
  const accent = data.accentColor || '#d4a557';

  const nameTop = hasPhoto ? 800 : 400;
  const messageTop = hasPhoto ? 1100 : 750;
  const dateTop = hasPhoto ? 1320 : 1050;
  const separatorTop = hasPhoto ? 1460 : 1300;
  const venueTop = hasPhoto ? 1540 : 1370;

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
        border: `6px solid ${accent}`,
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
      border: `6px solid ${accent}`,
      boxShadow: `0 20px 60px ${accent}50`,
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: `linear-gradient(180deg, ${primary} 0%, ${secondary} 50%, ${primary} 100%)`,
        position: 'relative',
        fontFamily: fontFamily,
        color: text,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Moldura dupla dourada */}
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

      {/* Ornamento */}
      <div
        style={{
          position: 'absolute',
          top: '180px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '30px',
          color: accent,
        }}
      >
        ✦
      </div>

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '230px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '18px',
            letterSpacing: '12px',
            textTransform: 'uppercase',
            color: accent,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
          }}
        >
          Primeira Comunhão
        </div>
      </div>

      {CakeComponent ? (
        <div style={{ position: 'absolute', top: '300px', right: '80px', opacity: 0.95 }}>
          <CakeComponent size={150} color={accent} accent={text} />
        </div>
      ) : null}

      {Element2Component ? (
        <div style={{ position: 'absolute', top: '300px', left: '80px', opacity: 0.95 }}>
          <Element2Component size={130} color={accent} accent={text} />
        </div>
      ) : null}

      {Element3Component ? (
        <div style={{ position: 'absolute', bottom: '200px', right: '80px', opacity: 0.95 }}>
          <Element3Component size={130} color={accent} accent={text} />
        </div>
      ) : null}

      {Element4Component ? (
        <div style={{ position: 'absolute', bottom: '200px', left: '80px', opacity: 0.95 }}>
          <Element4Component size={130} color={accent} accent={text} />
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
            textShadow: `0 2px 20px ${accent}50`,
          }}
        >
          {data.honoreeName || 'Nome da criança'}
        </div>
      </div>

      <div style={{ position: 'absolute', top: `${messageTop}px`, left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '26px',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: text,
            opacity: 0.9,
            margin: 0,
          }}
        >
          {data.message || 'Celebramos juntos este momento de fé e crescimento espiritual'}
        </p>
      </div>

      <div style={{ position: 'absolute', top: `${dateTop}px`, left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '38px',
            fontWeight: 500,
            color: accent,
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
            opacity: 0.85,
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
          color: accent,
          letterSpacing: '20px',
        }}
      >
        ✦ ✦ ✦
      </div>

      <div style={{ position: 'absolute', top: `${venueTop}px`, left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 600,
            color: text,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {data.venueName || 'Igreja'}
        </div>
        {data.venueAddress && (
          <div
            style={{
              fontSize: '20px',
              marginTop: '14px',
              color: text,
              opacity: 0.75,
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
              opacity: 0.75,
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
        Com Alegria
      </div>
    </div>
  );
}