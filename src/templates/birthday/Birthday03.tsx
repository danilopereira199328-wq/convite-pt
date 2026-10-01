import type { InviteData } from '../../types/invite';

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

export function Birthday03({ data }: Props) {
  const hasPhoto = !!data.photo;
  const fontFamily = getFontFamily(data.fontFamily);

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
        border: '8px solid #d4af37',
        boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3)',
      };
    }

    if (data.photoShape === 'heart') {
      return {
        ...baseStyle,
        width: '560px',
        height: '500px',
        clipPath:
          'path("M 280 420 C 280 420 40 280 40 160 C 40 90 90 40 160 40 C 210 40 250 70 280 110 C 310 70 350 40 400 40 C 470 40 520 90 520 160 C 520 280 280 420 280 420 Z")',
        boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3)',
      };
    }

    return {
      ...baseStyle,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: '8px solid #d4af37',
      boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3)',
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
        position: 'relative',
        fontFamily: fontFamily,
        color: '#d4af37',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          right: '60px',
          bottom: '60px',
          border: '2px solid #d4af37',
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
          border: '1px solid rgba(212, 175, 55, 0.5)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '180px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '30px',
          color: '#d4af37',
        }}
      >
        ✦
      </div>

      <div style={{ position: 'absolute', top: '230px', left: 0, right: 0 }}>
        <span
          style={{
            fontSize: '18px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: '#d4af37',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
          }}
        >
          Estás convidado
        </span>
      </div>

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
            lineHeight: 1.2,
            color: '#d4af37',
            wordBreak: 'break-word',
            textShadow: '0 2px 20px rgba(212, 175, 55, 0.3)',
          }}
        >
          {data.honoreeName || 'O teu nome'}
        </h1>
      </div>

      {data.age ? (
        <div style={{ position: 'absolute', top: `${ageTop}px`, left: 0, right: 0 }}>
          <div
            style={{
              fontSize: hasPhoto ? '120px' : '180px',
              fontWeight: 900,
              lineHeight: 1,
              color: '#d4af37',
              textShadow: '0 2px 30px rgba(212, 175, 55, 0.4)',
            }}
          >
            {data.age}
          </div>
          <div
            style={{
              fontSize: '20px',
              letterSpacing: '12px',
              textTransform: 'uppercase',
              color: '#d4af37',
              fontFamily: 'Inter, sans-serif',
              marginTop: '10px',
              fontWeight: 300,
            }}
          >
            Anos
          </div>
        </div>
      ) : null}

      <div style={{ position: 'absolute', top: `${messageTop}px`, left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '28px',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.6,
            color: '#e8d9a0',
            fontWeight: 300,
          }}
        >
          {data.message || 'A tua presença é essencial!'}
        </p>
      </div>

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
            fontSize: '36px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#d4af37',
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
        <div style={{ fontSize: '22px', letterSpacing: '6px', color: '#d4af37', marginTop: '16px' }}>
          {data.time || '00:00'}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: `${separatorTop}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '1px',
          background: '#d4af37',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: `${venueTop}px`,
          left: '100px',
          right: '100px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '26px',
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#d4af37',
            marginBottom: '16px',
          }}
        >
          {data.venueName || 'Local'}
        </div>
        {data.venueAddress && (
          <div style={{ fontSize: '18px', color: '#e8d9a0', marginBottom: '6px', fontWeight: 300 }}>
            {data.venueAddress}
          </div>
        )}
        {data.venueCity && (
          <div style={{ fontSize: '18px', color: '#e8d9a0', fontWeight: 300 }}>
            {data.venueCity}
          </div>
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '130px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          color: '#d4af37',
          letterSpacing: '20px',
        }}
      >
        ✦ ✦ ✦
      </div>
    </div>
  );
}