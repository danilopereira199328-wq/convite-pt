import { useInviteStore } from '../store/inviteStore';
import type { OccasionType } from '../types/invite';

const occasions: { value: OccasionType; label: string; emoji: string }[] = [
  { value: 'birthday', label: 'Aniversário', emoji: '🎂' },
  { value: 'wedding', label: 'Casamento', emoji: '💍' },
  { value: 'baptism', label: 'Batizado', emoji: '💧' },
  { value: 'communion', label: 'Comunhão', emoji: '🕊️' },
  { value: 'baby-shower', label: 'Baby Shower', emoji: '👶' },
];

export function InviteForm() {
  const { data, updateField, setOccasion } = useInviteStore();

  return (
    <div className="invite-form">
      <h2>Tipo de Convite</h2>

      <div className="occasion-grid">
        {occasions.map((occ) => (
          <button
            key={occ.value}
            type="button"
            className={`occasion-btn ${data.occasion === occ.value ? 'active' : ''}`}
            onClick={() => setOccasion(occ.value)}
          >
            <span className="occasion-emoji">{occ.emoji}</span>
            <span className="occasion-label">{occ.label}</span>
          </button>
        ))}
      </div>

      <h2>Dados do Convite</h2>

      <div className="form-field">
        <label>
          {data.occasion === 'baby-shower'
            ? 'Nome do Bebé'
            : data.occasion === 'wedding'
            ? 'Nome dos Noivos'
            : 'Nome'}
        </label>
        <input
          type="text"
          value={data.honoreeName}
          onChange={(e) => updateField('honoreeName', e.target.value)}
          placeholder={
            data.occasion === 'wedding'
              ? 'Ex: Ana & Pedro'
              : data.occasion === 'baby-shower'
              ? 'Ex: Mateus'
              : 'Ex: Maria Silva'
          }
        />
      </div>

      {data.occasion === 'birthday' && (
        <div className="form-field">
          <label>Idade</label>
          <input
            type="number"
            value={data.age || ''}
            onChange={(e) => updateField('age', Number(e.target.value))}
            placeholder="Ex: 30"
          />
        </div>
      )}

      <div className="form-row">
        <div className="form-field">
          <label>Data</label>
          <input
            type="date"
            value={data.date}
            onChange={(e) => updateField('date', e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Hora</label>
          <input
            type="time"
            value={data.time}
            onChange={(e) => updateField('time', e.target.value)}
          />
        </div>
      </div>

      <div className="form-field">
        <label>Nome do Local</label>
        <input
          type="text"
          value={data.venueName}
          onChange={(e) => updateField('venueName', e.target.value)}
          placeholder="Ex: Quinta dos Sonhos"
        />
      </div>

      <div className="form-field">
        <label>Endereço</label>
        <input
          type="text"
          value={data.venueAddress}
          onChange={(e) => updateField('venueAddress', e.target.value)}
          placeholder="Ex: Rua das Flores, 123"
        />
      </div>

      <div className="form-field">
        <label>Cidade</label>
        <input
          type="text"
          value={data.venueCity}
          onChange={(e) => updateField('venueCity', e.target.value)}
          placeholder="Ex: Lisboa"
        />
      </div>

      <div className="form-field">
        <label>Mensagem</label>
        <textarea
          value={data.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Escreve uma mensagem especial..."
          rows={3}
        />
      </div>

      {data.occasion === 'birthday' && (
        <div className="form-row">
          <div className="form-field">
            <label>Cor Principal</label>
            <input
              type="color"
              value={data.primaryColor}
              onChange={(e) => updateField('primaryColor', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Cor Secundária</label>
            <input
              type="color"
              value={data.secondaryColor}
              onChange={(e) => updateField('secondaryColor', e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}