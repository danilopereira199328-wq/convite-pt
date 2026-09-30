import type { InviteData } from '../../types/invite';

interface Props {
  data: InviteData;
}

export function Baptism01({ data }: Props) {
  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: 'linear-gradient(180deg, #e3f2fd 0%, #bbdefb 50%, #e3f2fd 100%)',
        position: 'relative',
        fontFamily: '"Playfair Display", Georgia, serif',
        color: '#1a5490',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Cruz decorativa */}
      <div
        style={{
          position: 'absolute',
          top: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '80px',
          color: '#4a90d9',
        }}
      >
        ✝
      </div>

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '280px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '22px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: '#4a90d9',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Batizado de
        </div>
      </div>

      {/* Nome */}
      <div style={{ position: 'absolute', top: '400px', left: '80px', right: '80px' }}>
        <div
          style={{
            fontSize: (data.honoreeName || '').length > 16 ? '60px' : (data.honoreeName || '').length > 10 ? '80px' : '96px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#1a5490',
            wordBreak: 'break-word',
          }}
        >
          {data.honoreeName || 'Nome da criança'}
        </div>
      </div>

      {/* Mensagem */}
      <div style={{ position: 'absolute', top: '750px', left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '28px',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#2c6db5',
            margin: 0,
          }}
        >
          {data.message ||
            'Com muita alegria convidamos para celebrar este momento tão especial'}
        </p>
      </div>

      {/* Data */}
      <div style={{ position: 'absolute', top: '1050px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '40px',
            fontWeight: 600,
            color: '#1a5490',
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
            fontSize: '24px',
            marginTop: '12px',
            letterSpacing: '4px',
            color: '#4a90d9',
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
          top: '1300px',
          left: '350px',
          right: '350px',
          height: '1px',
          background: '#4a90d9',
          opacity: 0.5,
        }}
      />

      {/* Local */}
      <div style={{ position: 'absolute', top: '1370px', left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '30px',
            fontWeight: 700,
            color: '#1a5490',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {data.venueName || 'Igreja'}
        </div>
        {data.venueAddress && (
          <div
            style={{
              fontSize: '22px',
              marginTop: '12px',
              color: '#2c6db5',
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
              color: '#2c6db5',
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
          color: '#4a90d9',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Com fé e amor
      </div>
    </div>
  );
}