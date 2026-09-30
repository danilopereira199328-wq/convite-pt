import type { InviteData } from '../../types/invite';

interface Props {
  data: InviteData;
}

export function Birthday01({ data }: Props) {
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

      {/* Nome */}
      <div style={{ position: 'absolute', top: '330px', left: '60px', right: '60px' }}>
        <h1
          style={{
            fontSize: (data.honoreeName || '').length > 16 ? '56px' : (data.honoreeName || '').length > 10 ? '80px' : '100px',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.15,
            wordBreak: 'break-word',
          }}
        >
          {data.honoreeName || 'O teu nome'}
        </h1>
      </div>

      {/* Idade */}
      {data.age ? (
        <div style={{ position: 'absolute', top: '600px', left: 0, right: 0 }}>
          <div style={{ fontSize: '180px', fontWeight: 900, lineHeight: 1, letterSpacing: '-6px' }}>
            {data.age}
          </div>
          <div
            style={{
              fontSize: '26px',
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
      <div style={{ position: 'absolute', top: '950px', left: '100px', right: '100px' }}>
        <p style={{ fontSize: '30px', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
          {data.message || 'A tua presença é essencial!'}
        </p>
      </div>

      {/* Data */}
      <div
        style={{
          position: 'absolute',
          top: '1200px',
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
          top: '1400px',
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
          top: '1480px',
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