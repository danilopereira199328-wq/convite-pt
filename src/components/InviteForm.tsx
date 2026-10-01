import { useInviteStore } from '../store/inviteStore';
import { getTemplatesByOccasion } from '../templates';
import type { OccasionType, FontFamily } from '../types/invite';

const occasions: { value: OccasionType; label: string; emoji: string }[] = [
  { value: 'birthday', label: 'Aniversário', emoji: '🎂' },
  { value: 'wedding', label: 'Casamento', emoji: '💍' },
  { value: 'baptism', label: 'Batizado', emoji: '💧' },
  { value: 'communion', label: 'Comunhão', emoji: '🕊️' },
  { value: 'baby-shower', label: 'Baby Shower', emoji: '👶' },
];

const fonts: { value: FontFamily; label: string; css: string }[] = [
  { value: 'playfair', label: 'Elegante', css: '"Playfair Display", Georgia, serif' },
  { value: 'cormorant', label: 'Clássica', css: '"Cormorant Garamond", Georgia, serif' },
  { value: 'montserrat', label: 'Moderna', css: 'Montserrat, sans-serif' },
  { value: 'lora', label: 'Romântica', css: 'Lora, Georgia, serif' },
];

export function InviteForm() {
  const { data, updateField, setOccasion, setTemplate } = useInviteStore();

  const templatesForOccasion = getTemplatesByOccasion(data.occasion);

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

      {/* SELETOR DE ESTILO */}
      {templatesForOccasion.length > 1 && (
        <>
          <h2>Estilo</h2>
          <div className="style-grid">
            {templatesForOccasion.map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                className={`style-btn ${data.templateId === tpl.id ? 'active' : ''}`}
                onClick={() => setTemplate(tpl.id)}
              >
                <span className="style-name">{tpl.name}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* SELETOR DE FONTE */}
      <h2>Fonte</h2>
      <div className="font-grid">
        {fonts.map((font) => (
          <button
            key={font.value}
            type="button"
            className={`font-btn ${data.fontFamily === font.value ? 'active' : ''}`}
            onClick={() => updateField('fontFamily', font.value)}
            style={{ fontFamily: font.css }}
          >
            <span className="font-preview">Aa</span>
            <span className="font-label">{font.label}</span>
          </button>
        ))}
      </div>

      {/* FOTO */}
      <h2>Foto (opcional)</h2>

      <div className="photo-upload">
        {data.photo ? (
          <div className="photo-preview">
            <img src={data.photo} alt="Foto do convite" />
            <button
              type="button"
              className="photo-remove"
              onClick={() => updateField('photo', undefined)}
            >
              ✕ Remover Foto
            </button>
          </div>
        ) : (
          <label className="photo-input-label">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (event) => {
                  updateField('photo', event.target?.result as string);
                };
                reader.readAsDataURL(file);
              }}
              style={{ display: 'none' }}
            />
            <span className="photo-input-btn">📷 Adicionar Foto</span>
            <small>Formatos: JPG, PNG (máx. 5MB)</small>
          </label>
        )}
      </div>

      {/* SELETOR DE FORMA */}
      {data.photo && (
        <>
          <h2>Forma da Foto</h2>
          <div className="photo-shape-grid">
            <button
              type="button"
              className={`photo-shape-btn ${data.photoShape === 'circle' ? 'active' : ''}`}
              onClick={() => updateField('photoShape', 'circle')}
            >
              <span className="shape-preview circle" />
              <span className="shape-label">Círculo</span>
            </button>
            <button
              type="button"
              className={`photo-shape-btn ${data.photoShape === 'square' ? 'active' : ''}`}
              onClick={() => updateField('photoShape', 'square')}
            >
              <span className="shape-preview square" />
              <span className="shape-label">Quadrado</span>
            </button>
            <button
              type="button"
              className={`photo-shape-btn ${data.photoShape === 'heart' ? 'active' : ''}`}
              onClick={() => updateField('photoShape', 'heart')}
            >
              <span className="shape-preview heart">♥</span>
              <span className="shape-label">Coração</span>
            </button>
          </div>
        </>
      )}

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

      {data.occasion === 'birthday' && data.templateId === 'birthday-01' && (
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