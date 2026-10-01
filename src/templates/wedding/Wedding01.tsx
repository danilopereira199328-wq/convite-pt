import type { InviteData } from '../../types/invite';

interface Props {
  data: InviteData;
}

export function Wedding01({ data }: Props) {
  const hasPhoto = !!data.photo;

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
        borderRadius: '20px',
        border: '8px solid #c9a96e',
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
      border: '8px solid #c9a96e',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    };
  };

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: 'linear-gradient(135deg, #f8f5f0 0%, #e8dfd3 100%)',
        position: 'relative',
        fontFamily: '"Playfair Display", Georgia, serif',
        color: '#4a4a4a',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Moldura decorativa */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          right: '60px',
          bottom: '60px',
          border: '2px solid #c9a96e',
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
          border: '1px solid #c9a96e',
          pointerEvents: 'none',
        }}
      />

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '180px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '20px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: '#c9a96e',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Vamos casar
        </div>
        <div style={{ fontSize: '50px', color: '#c9a96e', marginTop: '20px' }}>♥</div>
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

      {/* Nome dos noivos */}
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
            color: '#4a4a4a',
          }}
        >
          {data.honoreeName || 'Noivo & Noiva'}
        </div>
      </div>

      {/* Mensagem */}
      <div style={{ position: 'absolute', top: `${messageTop}px`, left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '28px',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#666',
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
            fontSize: '44px',
            fontWeight: 600,
            color: '#4a4a4a',
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
            fontSize: '26px',
            marginTop: '16px',
            letterSpacing: '6px',
            color: '#c9a96e',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          ÀS {data.time || '00:00'}
        </div>
      </div>

      {/* Separador */}
      <div
        style={{
          position: 'absolute',
          top: `${separatorTop}px`,
          left: '350px',
          right: '350px',
          height: '1px',
          background: '#c9a96e',
        }}
      />

      {/* Local */}
      <div style={{ position: 'absolute', top: `${venueTop}px`, left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '30px',
            fontWeight: 700,
            color: '#4a4a4a',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {data.venueName || 'Local'}
        </div>
        {data.venueAddress && (
          <div
            style={{
              fontSize: '22px',
              marginTop: '12px',
              color: '#666',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {data.venueAddress}
          </div>
        )}
        {data.venueCity && (
          <div
            style={{
              fontSize: '22px',
              marginTop: '6px',
              color: '#666',
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
          bottom: '150px',
          left: 0,
          right: 0,
          fontSize: '18px',
          letterSpacing: '4px',
          color: '#c9a96e',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Com amor
      </div>
    </div>
  );
}