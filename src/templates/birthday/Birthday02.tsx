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

export function Birthday02({ data }: Props) {
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
        border: '8px solid #1a1a1a',
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
      border: '8px solid #1a1a1a',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: '#ffffff',
        position: 'relative',
        fontFamily: fontFamily,
        color: '#1a1a1a',
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
          border: '1px solid #1a1a1a',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'absolute', top: '120px', left: 0, right: 0 }}>
        <span
          style={{
            fontSize: '20px',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
          }}
        >
          Convite
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '170px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40px',
          height: '1px',
          background: '#1a1a1a',
        }}
      />

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
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: '2px',
            wordBreak: 'break-word',
          }}
        >
          {data.honoreeName || 'O teu nome'}
        </h1>
      </div>

      {data.age ? (
        <div style={{ position: 'absolute', top: `${ageTop}px`, left: 0, right: 0 }}>
          <div
            style={{
              fontSize: hasPhoto ? '110px' : '160px',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '4px',
              color: '#1a1a1a',
            }}
          >
            {data.age}
          </div>
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '12px',
              textTransform: 'uppercase',
              color: '#666',
              fontFamily: 'Inter, sans-serif',
              marginTop: '12px',
            }}
          >
            Anos
          </div>
        </div>
      ) : null}

      <div style={{ position: 'absolute', top: `${messageTop}px`, left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '26px',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.7,
            color: '#444',
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
            fontSize: '32px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            color: '#1a1a1a',
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
        <div style={{ fontSize: '20px', letterSpacing: '6px', color: '#666', marginTop: '16px' }}>
          {data.time || '00:00'}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: `${separatorTop}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '1px',
          background: '#1a1a1a',
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
            fontSize: '24px',
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {data.venueName || 'Local'}
        </div>
        {data.venueAddress && (
          <div style={{ fontSize: '18px', color: '#666', marginBottom: '6px', fontWeight: 300 }}>
            {data.venueAddress}
          </div>
        )}
        {data.venueCity && (
          <div style={{ fontSize: '18px', color: '#666', fontWeight: 300 }}>
            {data.venueCity}
          </div>
        )}
      </div>
    </div>
  );
}