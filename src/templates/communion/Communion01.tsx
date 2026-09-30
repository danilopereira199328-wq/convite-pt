import type { InviteData } from '../../types/invite';

interface Props {
  data: InviteData;
}

export function Communion01({ data }: Props) {
  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: 'linear-gradient(180deg, #fff9f0 0%, #ffecd6 100%)',
        position: 'relative',
        fontFamily: '"Playfair Display", Georgia, serif',
        color: '#8b5a2b',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Decoração superior */}
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '60px',
          color: '#d4a557',
        }}
      >
        ✨
      </div>

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '250px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '22px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: '#d4a557',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Primeira Comunhão de
        </div>
      </div>

      {/* Nome */}
      <div style={{ position: 'absolute', top: '380px', left: '80px', right: '80px' }}>
        <div
          style={{
            fontSize: (data.honoreeName || '').length > 16 ? '60px' : (data.honoreeName || '').length > 10 ? '80px' : '96px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#8b5a2b',
            wordBreak: 'break-word',
          }}
        >
          {data.honoreeName || 'Nome da criança'}
        </div>
      </div>

      {/* Mensagem */}
      <div style={{ position: 'absolute', top: '720px', left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '28px',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#a87548',
            margin: 0,
          }}
        >
          {data.message ||
            'Celebramos juntos este momento de fé e crescimento espiritual'}
        </p>
      </div>

      {/* Data */}
      <div style={{ position: 'absolute', top: '1020px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '40px',
            fontWeight: 600,
            color: '#8b5a2b',
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
            color: '#d4a557',
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
          top: '1270px',
          left: '350px',
          right: '350px',
          height: '1px',
          background: '#d4a557',
          opacity: 0.5,
        }}
      />

      {/* Local */}
      <div style={{ position: 'absolute', top: '1340px', left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '30px',
            fontWeight: 700,
            color: '#8b5a2b',
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
              color: '#a87548',
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
              color: '#a87548',
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
          color: '#d4a557',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Com alegria
      </div>
    </div>
  );
}