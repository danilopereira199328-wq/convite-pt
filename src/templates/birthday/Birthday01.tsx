import type { InviteData } from '../../types/invite';

interface Props {
  data: InviteData;
}

export function Birthday01({ data }: Props) {
  const hasPhoto = !!data.photo;

  // Posições dinâmicas: mudam conforme há foto ou não
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
        border: '8px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      };
    }

    if (data.photoShape === 'heart') {
      return {
        ...baseStyle,
        width: '560px',
        height: '500px',
        clipPath:
          'path("M 280 420 C 280 420 40 280 40 160 C 40 90 90 40 160 40 C 210 40 250 70 280 110 C 310 70 350 40 400 40 C 470 40 520 90 520 160 C 520 280 280 420 280 420 Z")',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      };
    }

    return {
      ...baseStyle,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: '8px solid rgba(255, 255, 255, 0.4)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: `linear-gradient(135deg, ${data.primaryColor} 0%, ${data.secondaryColor} 100%)`,
        position: 'relative',
        fontFamily: '"Playfair Display", Georgia, serif',
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '100px', left: 0, right: 0 }}>
        <span
          style={{
            fontSize: '24px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            opacity: 0.9,
            paddingBottom: '12px',
            borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
            fontFamily: 'Inter, sans-serif',
            display: 'inline-block',
          }}
        >
          Estás convidado!
        </span>
      </div>

      {/* FOTO */}
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
            wordBreak: 'break-word',
          }}
        >
          {data.honoreeName || 'O teu nome'}
        </h1>
      </div>

      {/* IDADE (sempre visível) */}
      {data.age ? (
        <div style={{ position: 'absolute', top: `${ageTop}px`, left: 0, right: 0 }}>
          <div
            style={{
              fontSize: hasPhoto ? '120px' : '180px',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-6px',
            }}
          >
            {data.age}
          </div>
          <div
            style={{
              fontSize: hasPhoto ? '22px' : '26px',
              letterSpacing: '10px',
              textTransform: 'uppercase',
              opacity: 0.9,
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
        <p style={{ fontSize: '30px', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
          {data.message || 'A tua presença é essencial!'}
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
        <div style={{ fontSize: '38px', fontWeight: 600, textTransform: 'capitalize' }}>
          {data.date
            ? new Date(data.date + 'T00:00:00').toLocaleDateString('pt-PT', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })
            : 'Data'}
        </div>
        <div style={{ fontSize: '24px', letterSpacing: '4px', opacity: 0.85, marginTop: '10px' }}>
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
          background: 'rgba(255, 255, 255, 0.3)',
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
        <div style={{ fontSize: '30px', fontWeight: 700, marginBottom: '12px' }}>
          {data.venueName || 'Local'}
        </div>
        {data.venueAddress && (
          <div style={{ fontSize: '22px', opacity: 0.85, marginBottom: '6px' }}>
            {data.venueAddress}
          </div>
        )}
        {data.venueCity && (
          <div style={{ fontSize: '22px', opacity: 0.85 }}>{data.venueCity}</div>
        )}
      </div>
    </div>
  );
}