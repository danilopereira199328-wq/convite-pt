import type { InviteData } from '../../types/invite';

interface Props {
  data: InviteData;
}

export function Wedding01({ data }: Props) {
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
      <div
        style={{
          position: 'absolute',
          top: '180px',
          left: '0',
          right: '0',
          textAlign: 'center',
        }}
      >
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
        <div
          style={{
            fontSize: '50px',
            color: '#c9a96e',
            marginTop: '20px',
          }}
        >
          ♥
        </div>
      </div>

      {/* Nome dos noivos */}
      <div
        style={{
          position: 'absolute',
          top: '450px',
          left: '100px',
          right: '100px',
        }}
      >
        <div
          style={{
            fontSize: '90px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#4a4a4a',
          }}
        >
          {data.honoreeName || 'Noivo & Noiva'}
        </div>
      </div>

      {/* Mensagem */}
      <div
        style={{
          position: 'absolute',
          top: '820px',
          left: '150px',
          right: '150px',
        }}
      >
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
      <div
        style={{
          position: 'absolute',
          top: '1080px',
          left: '0',
          right: '0',
        }}
      >
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
          top: '1300px',
          left: '350px',
          right: '350px',
          height: '1px',
          background: '#c9a96e',
        }}
      />

      {/* Local */}
      <div
        style={{
          position: 'absolute',
          top: '1360px',
          left: '100px',
          right: '100px',
        }}
      >
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
          left: '0',
          right: '0',
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