import type { InviteData } from '../../types/invite';

interface Props {
  data: InviteData;
}

export function BabyShower01({ data }: Props) {
  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        background: 'linear-gradient(180deg, #fce4ec 0%, #f8bbd0 50%, #fce4ec 100%)',
        position: 'relative',
        fontFamily: '"Playfair Display", Georgia, serif',
        color: '#c2185b',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Bebé decorativo */}
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '100px',
        }}
      >
        👶
      </div>

      {/* Cabeçalho */}
      <div style={{ position: 'absolute', top: '300px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '22px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: '#e91e63',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Baby Shower de
        </div>
      </div>

      {/* Nome */}
      <div style={{ position: 'absolute', top: '420px', left: '80px', right: '80px' }}>
        <div
          style={{
            fontSize: (data.honoreeName || '').length > 16 ? '60px' : (data.honoreeName || '').length > 10 ? '80px' : '96px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#c2185b',
            wordBreak: 'break-word',
          }}
        >
          {data.honoreeName || 'Nome do bebé'}
        </div>
      </div>

      {/* Mensagem */}
      <div style={{ position: 'absolute', top: '780px', left: '150px', right: '150px' }}>
        <p
          style={{
            fontSize: '28px',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#d81b60',
            margin: 0,
          }}
        >
          {data.message ||
            'Vem celebrar comigo a chegada do nosso maior amor!'}
        </p>
      </div>

      {/* Data */}
      <div style={{ position: 'absolute', top: '1080px', left: 0, right: 0 }}>
        <div
          style={{
            fontSize: '40px',
            fontWeight: 600,
            color: '#c2185b',
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
            color: '#e91e63',
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
          top: '1330px',
          left: '350px',
          right: '350px',
          height: '1px',
          background: '#e91e63',
          opacity: 0.5,
        }}
      />

      {/* Local */}
      <div style={{ position: 'absolute', top: '1400px', left: '100px', right: '100px' }}>
        <div
          style={{
            fontSize: '30px',
            fontWeight: 700,
            color: '#c2185b',
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
              color: '#d81b60',
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
              color: '#d81b60',
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
          color: '#e91e63',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Com amor
      </div>
    </div>
  );
}