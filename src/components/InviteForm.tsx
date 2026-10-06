import { useState } from 'react';
import { useInviteStore } from '../store/inviteStore';
import { getTemplatesByOccasion } from '../templates';
import { CAKES_BY_OCCASION } from './Cakes';
import { ELEMENTS_BY_CATEGORY } from './Elements';
import type { OccasionType, FontFamily } from '../types/invite';

const occasions: { value: OccasionType; label: string; emoji: string }[] = [
  { value: 'birthday', label: 'Aniversário', emoji: '🎂' },
  { value: 'wedding', label: 'Casamento', emoji: '💍' },
  { value: 'baptism', label: 'Batizado', emoji: '💧' },
  { value: 'communion', label: 'Comunhão', emoji: '🕊️' },
  { value: 'baby-shower', label: 'Baby Shower', emoji: '👶' },
  { value: 'custom', label: 'Outro', emoji: '✨' },
];

const fonts: { value: FontFamily; label: string; css: string }[] = [
  { value: 'playfair', label: 'Elegante', css: '"Playfair Display", Georgia, serif' },
  { value: 'cormorant', label: 'Clássica', css: '"Cormorant Garamond", Georgia, serif' },
  { value: 'montserrat', label: 'Moderna', css: 'Montserrat, sans-serif' },
  { value: 'lora', label: 'Romântica', css: 'Lora, Georgia, serif' },
];

const CATEGORY_LABELS: Record<string, { e2: string; e3: string; e4: string }> = {
  birthday: { e2: 'Balões', e3: 'Presentes', e4: 'Confetes' },
  wedding: { e2: 'Anéis', e3: 'Rosas', e4: 'Corações' },
  baptism: { e2: 'Pombas', e3: 'Gotas', e4: 'Velas' },
  communion: { e2: 'Pombas', e3: 'Cálices', e4: 'Espigas' },
  'baby-shower': { e2: 'Ursinhos', e3: 'Mamadeiras', e4: 'Nuvens' },
  custom: { e2: 'Estrelas', e3: 'Corações', e4: 'Formas' },
};

type TabId = 'design' | 'decorations' | 'data';

function RenderSelector({
  title,
  items,
  selectedId,
  onSelect,
}: {
  title: string;
  items: Record<string, unknown>;
  selectedId?: string;
  onSelect: (id: string | undefined) => void;
}) {
  const ids = Object.keys(items);

  return (
    <div className="selector-block">
      <h3>{title}</h3>
      <div className="cake-grid">
        <button
          type="button"
          className={`cake-btn ${!selectedId ? 'active' : ''}`}
          onClick={() => onSelect(undefined)}
        >
          <span className="cake-none">Sem</span>
        </button>
        {ids.map((id, index) => (
          <button
            key={id}
            type="button"
            className={`cake-btn ${selectedId === id ? 'active' : ''}`}
            onClick={() => onSelect(id)}
          >
            <span className="cake-num">{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function InviteForm() {
  const { data, updateField, setOccasion, setTemplate } = useInviteStore();
  const [activeTab, setActiveTab] = useState<TabId>('design');

  const templatesForOccasion = getTemplatesByOccasion(data.occasion);
  const cakesForOccasion = CAKES_BY_OCCASION[data.occasion] || {};
  const elementsData = ELEMENTS_BY_CATEGORY[data.occasion] || {};
  const labels = CATEGORY_LABELS[data.occasion] || {
    e2: 'Elemento 2',
    e3: 'Elemento 3',
    e4: 'Elemento 4',
  };

  return (
    <div className="invite-form">
      {/* TIPO DE CONVITE — sempre visível */}
      <div className="form-section">
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
      </div>

      {/* ABAS */}
      <div className="tabs-nav">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          🎨 Design
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'decorations' ? 'active' : ''}`}
          onClick={() => setActiveTab('decorations')}
        >
          🍰 Decorações
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => setActiveTab('data')}
        >
          📝 Dados
        </button>
      </div>

      {/* CONTEÚDO DA ABA ATIVA */}
      <div className="tab-content">
        {/* ============ ABA: DESIGN ============ */}
        {activeTab === 'design' && (
          <>
            {/* ESTILO */}
            {templatesForOccasion.length > 1 && (
              <div className="form-section">
                <h3>Estilo</h3>
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
              </div>
            )}

            {/* PALETA DE CORES */}
            <div className="form-section">
              <h3>🎨 Paleta de Cores</h3>
              <div className="color-palette-grid">
                <div className="color-field">
                  <label>Cor Principal</label>
                  <input
                    type="color"
                    value={data.primaryColor}
                    onChange={(e) => updateField('primaryColor', e.target.value)}
                  />
                </div>
                <div className="color-field">
                  <label>Cor Secundária</label>
                  <input
                    type="color"
                    value={data.secondaryColor}
                    onChange={(e) => updateField('secondaryColor', e.target.value)}
                  />
                </div>
                <div className="color-field">
                  <label>Cor do Texto</label>
                  <input
                    type="color"
                    value={data.textColor || '#ffffff'}
                    onChange={(e) => updateField('textColor', e.target.value)}
                  />
                </div>
                <div className="color-field">
                  <label>Cor de Acento</label>
                  <input
                    type="color"
                    value={data.accentColor || '#ffd700'}
                    onChange={(e) => updateField('accentColor', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* FONTE */}
            <div className="form-section">
              <h3>Fonte</h3>
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
            </div>
          </>
        )}

        {/* ============ ABA: DECORAÇÕES ============ */}
        {activeTab === 'decorations' && (
          <>
            {/* BOLO */}
            <RenderSelector
              title="🍰 Bolo"
              items={cakesForOccasion}
              selectedId={data.cakeId}
              onSelect={(id) => updateField('cakeId', id)}
            />

            {/* ELEMENTO 2 */}
            {elementsData.element2 && (
              <RenderSelector
                title={`✨ ${labels.e2}`}
                items={elementsData.element2}
                selectedId={data.element2Id}
                onSelect={(id) => updateField('element2Id', id)}
              />
            )}

            {/* ELEMENTO 3 */}
            {elementsData.element3 && (
              <RenderSelector
                title={`✨ ${labels.e3}`}
                items={elementsData.element3}
                selectedId={data.element3Id}
                onSelect={(id) => updateField('element3Id', id)}
              />
            )}

            {/* ELEMENTO 4 */}
            {elementsData.element4 && (
              <RenderSelector
                title={`✨ ${labels.e4}`}
                items={elementsData.element4}
                selectedId={data.element4Id}
                onSelect={(id) => updateField('element4Id', id)}
              />
            )}

            {/* FOTO */}
            <div className="form-section">
              <h3>📷 Foto (opcional)</h3>
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
            </div>

            {/* FORMA DA FOTO */}
            {data.photo && (
              <div className="form-section">
                <h3>Forma da Foto</h3>
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
              </div>
            )}
          </>
        )}

        {/* ============ ABA: DADOS ============ */}
        {activeTab === 'data' && (
          <>
            <div className="form-section">
              <h3>Informação Principal</h3>

              <div className="form-field">
                <label>
                  {data.occasion === 'baby-shower'
                    ? 'Nome do Bebé'
                    : data.occasion === 'wedding'
                    ? 'Nome dos Noivos'
                    : data.occasion === 'custom'
                    ? 'Título do Evento'
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
                      : data.occasion === 'custom'
                      ? 'Ex: Festa de Fim de Ano'
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
            </div>

            <div className="form-section">
              <h3>Data e Hora</h3>
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
            </div>

            <div className="form-section">
              <h3>Local</h3>
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
            </div>

            <div className="form-section">
              <h3>Mensagem</h3>
              <div className="form-field">
                <textarea
                  value={data.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Escreve uma mensagem especial..."
                  rows={4}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}