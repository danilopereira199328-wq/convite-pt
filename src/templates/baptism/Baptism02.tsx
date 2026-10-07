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

export function Baptism02({ data }: Props) {
  const hasPhoto = !!data.photo;
  const fontFamily = getFontFamily(data.fontFamily);
  const CakeComponent = getCakeComponent(data.occasion, data.cakeId);
  const Element2Component = getElementComponent(data.occasion, 'element2', data.element2Id);
  const Element3Component = getElementComponent(data.occasion, 'element3', data.element3Id);
  const Element4Component = getElementComponent(data.occasion, 'element4', data.element4Id);

  const primary = data.primaryColor || '#ffffff';
  const text = data.textColor || '#1a1a1a';
  const accent = data.accentColor || '#4a90d9';

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
        border: `2px solid ${text}`,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      };
    }

    if (data.photoShape === 'heart') {
      return {
        ...baseStyle,
        width: '560px',
        height: '500px',
        clipPath:
          'path("M 280 420 C 280 420 40 280 40 160 C 40 90 90 40 160 40 C 210 40 250 70 280 110 C 310 70 350 40 400 40 C 470 40 520 90 520 160 C 520 280 280 420 280 420 Z")',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      };
    }

    return {
      ...baseStyle,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: `2px solid ${text}`,
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: primary,
        position: 'relative',
        fontFamily: fontFamily,
        color: text,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Moldura minimalista */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: `1px solid ${text}`,
          pointerEvents: 'none',
        }}
      />

      {/* Cruz pequena no topo */}
      <div
        style={{
          position: 'absolute',
          top: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '32px',
          color: text,
          fontWeight: 300,
        }}
      >
        ✝
      </div>

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '200px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '16px',
            letterSpacing: '14px',
            textTransform: 'uppercase',
            color: text,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
          }}
        >
          Batizado
        </div>
      </div>

      {/* Linha decorativa */}
      <div
        style={{
          position: 'absolute',
          top: '250px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '30px',
          height: '1px',
          background: text,
        }}
      />

      {CakeComponent ? (
        <div style={{ position: 'absolute', top: '300px', right: '100px', opacity: 0.9 }}>
          <CakeComponent size={130} color={primary} accent={accent} />
        </div>
      ) : null}

      {Element2Component ? (
        <div style={{ position: 'absolute', top: '300px', left: '100px', opacity: 0.9 }}>
          <Element2Component size={120} color={primary} accent={accent} />
        </div>
      ) : null}

      {Element3Component ? (
        <div style={{ position: 'absolute', bottom: '200px', right: '100px', opacity: 0.9 }}>
          <Element3Component size={120} color={primary} accent={accent} />
        </div>
      ) : null}

      {Element4Component ? (
        <div style={{ position: 'absolute', bottom: '200px', left: '100px', opacity: 0.9 }}>
          <Element4Component size={120} color={primary} accent={accent} />
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

      <div style={{ position: 'absolute', top: `${nameTop}px`, left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize:
              (data.honoreeName || '').length > 16
                ? '56px'
                : (data.honoreeName || '').length > 10
                ? '76px'
                : '90px',
            fontWeight: 300,
            lineHeight: 1.2,
            color: text,
            letterSpacing: '2px',
          }}
        >
          {data.honoreeName || 'Nome da criança'}
        </div>
      </div>

      <div style={{ position: 'absolute', top: `${messageTop}px`, left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '24px',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: text,
            opacity: 0.75,
            margin: 0,
            fontWeight: 300,
          }}
        >
          {data.message || 'Com muita alegria convidamos para celebrar este momento tão especial'}
        </p>
      </div>

      <div style={{ position: 'absolute', top: `${dateTop}px`, left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '32px',
            fontWeight: 300,
            color: text,
            textTransform: 'uppercase',
            letterSpacing: '6px',
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
            fontSize: '20px',
            marginTop: '20px',
            letterSpacing: '6px',
            color: text,
            opacity: 0.6,
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
          width: '40px',
          height: '1px',
          background: text,
        }}
      />

      <div style={{ position: 'absolute', top: `${venueTop}px`, left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '26px',
            fontWeight: 400,
            color: text,
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '2px',
          }}
        >
          {data.venueName || 'Igreja'}
        </div>
        {data.venueAddress && (
          <div
            style={{
              fontSize: '18px',
              marginTop: '14px',
              color: text,
              opacity: 0.6,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
            }}
          >
            {data.venueAddress}
          </div>
        )}
        {data.venueCity && (
          <div
            style={{
              fontSize: '18px',
              marginTop: '6px',
              color: text,
              opacity: 0.6,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
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
          fontSize: '14px',
          letterSpacing: '12px',
          color: text,
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
        }}
      >
        Com Fé
      </div>
    </div>
  );
}