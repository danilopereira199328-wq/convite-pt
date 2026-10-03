import React from 'react';

// ============================================
// BOLOS EM SVG — 25 ILUSTRAÇÕES ORIGINAIS
// ============================================

interface CakeProps {
  size?: number;
  color?: string;
  accent?: string;
}

// ============================================
// 🎂 ANIVERSÁRIO
// ============================================

export const CakeBirthday1: React.FC<CakeProps> = ({ size = 200, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    {/* Prato */}
    <ellipse cx="50" cy="88" rx="42" ry="4" fill={accent} opacity="0.4" />
    {/* Base do bolo */}
    <rect x="15" y="65" width="70" height="22" rx="3" fill={color} />
    {/* Cobertura */}
    <ellipse cx="50" cy="65" rx="35" ry="4" fill={accent} />
    {/* Detalhes base */}
    <circle cx="25" cy="76" r="1.5" fill={accent} />
    <circle cx="40" cy="76" r="1.5" fill={accent} />
    <circle cx="60" cy="76" r="1.5" fill={accent} />
    <circle cx="75" cy="76" r="1.5" fill={accent} />
    {/* Andar do meio */}
    <rect x="25" y="45" width="50" height="22" rx="3" fill="#fff" stroke={color} strokeWidth="1.5" />
    <ellipse cx="50" cy="45" rx="25" ry="3" fill={color} />
    {/* Velas */}
    <rect x="35" y="30" width="3" height="15" fill={accent} />
    <rect x="48.5" y="30" width="3" height="15" fill={accent} />
    <rect x="62" y="30" width="3" height="15" fill={accent} />
    {/* Chamas */}
    <ellipse cx="36.5" cy="27" rx="2" ry="3" fill="#ff5722" />
    <ellipse cx="50" cy="27" rx="2" ry="3" fill="#ff5722" />
    <ellipse cx="63.5" cy="27" rx="2" ry="3" fill="#ff5722" />
  </svg>
);

export const CakeBirthday2: React.FC<CakeProps> = ({ size = 200, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="40" ry="4" fill={accent} opacity="0.4" />
    {/* Bolo redondo */}
    <ellipse cx="50" cy="70" rx="35" ry="18" fill={color} />
    <rect x="15" y="70" width="70" height="15" fill={color} />
    <ellipse cx="50" cy="85" rx="35" ry="4" fill={color} />
    {/* Cobertura ondulada */}
    <path d="M 15 70 Q 25 65 35 70 Q 45 65 55 70 Q 65 65 75 70 Q 82 67 85 70" stroke={accent} strokeWidth="3" fill="none" />
    {/* Número */}
    <text x="50" y="80" textAnchor="middle" fontSize="20" fontWeight="bold" fill={accent}>1</text>
    {/* Glitter */}
    <circle cx="30" cy="75" r="1" fill={accent} />
    <circle cx="70" cy="72" r="1" fill={accent} />
  </svg>
);

export const CakeBirthday3: React.FC<CakeProps> = ({ size = 200, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill={accent} opacity="0.4" />
    {/* Bolo de chocolate */}
    <rect x="20" y="60" width="60" height="25" rx="3" fill="#6d4c41" />
    <rect x="20" y="60" width="60" height="5" fill="#4e342e" />
    {/* Cobertura chocolate */}
    <path d="M 20 60 Q 50 55 80 60" stroke="#4e342e" strokeWidth="4" fill="none" />
    {/* Morangos */}
    <circle cx="30" cy="58" r="4" fill="#f44336" />
    <circle cx="50" cy="56" r="4" fill="#f44336" />
    <circle cx="70" cy="58" r="4" fill="#f44336" />
    {/* Decoração */}
    <circle cx="30" cy="65" r="1" fill={accent} />
    <circle cx="50" cy="65" r="1" fill={accent} />
    <circle cx="70" cy="65" r="1" fill={accent} />
  </svg>
);

export const CakeBirthday4: React.FC<CakeProps> = ({ size = 200, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    {/* Cupcake */}
    <path d="M 30 60 L 35 88 L 65 88 L 70 60 Z" fill={accent} />
    <path d="M 30 60 L 35 88 L 65 88 L 70 60 Z" fill="none" stroke={color} strokeWidth="0.5" />
    {/* Cobertura */}
    <ellipse cx="50" cy="55" rx="22" ry="15" fill={color} />
    <path d="M 35 55 Q 40 48 45 55 Q 50 48 55 55 Q 60 48 65 55" stroke="#fff" strokeWidth="1.5" fill="none" />
    {/* Cereja */}
    <circle cx="50" cy="40" r="4" fill="#f44336" />
    <path d="M 50 36 Q 52 30 55 28" stroke="#4caf50" strokeWidth="1.5" fill="none" />
  </svg>
);

export const CakeBirthday5: React.FC<CakeProps> = ({ size = 200, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill={accent} opacity="0.4" />
    {/* Bolo 3 andares */}
    <rect x="15" y="70" width="70" height="15" rx="2" fill={color} />
    <rect x="25" y="55" width="50" height="15" rx="2" fill="#fff" stroke={color} strokeWidth="1" />
    <rect x="35" y="40" width="30" height="15" rx="2" fill={color} />
    {/* Decorações */}
    <circle cx="25" cy="77" r="1.5" fill={accent} />
    <circle cx="50" cy="77" r="1.5" fill={accent} />
    <circle cx="75" cy="77" r="1.5" fill={accent} />
    <circle cx="50" cy="47" r="1.5" fill={accent} />
    {/* Topo */}
    <circle cx="50" cy="35" r="4" fill={accent} />
    <path d="M 47 33 L 50 30 L 53 33" stroke={color} strokeWidth="1" fill="none" />
  </svg>
);

// ============================================
// 💍 CASAMENTO
// ============================================

export const CakeWedding1: React.FC<CakeProps> = ({ size = 200, color = '#f8f5f0', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Base */}
    <rect x="15" y="75" width="70" height="15" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Andar 2 */}
    <rect x="25" y="55" width="50" height="20" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Andar 3 */}
    <rect x="35" y="35" width="30" height="20" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Detalhes */}
    <path d="M 20 82 Q 25 78 30 82 Q 35 78 40 82 Q 45 78 50 82 Q 55 78 60 82 Q 65 78 70 82 Q 75 78 80 82" stroke={accent} strokeWidth="0.8" fill="none" />
    <path d="M 30 62 Q 35 58 40 62 Q 45 58 50 62 Q 55 58 60 62 Q 65 58 70 62" stroke={accent} strokeWidth="0.8" fill="none" />
    <path d="M 40 42 Q 45 38 50 42 Q 55 38 60 42" stroke={accent} strokeWidth="0.8" fill="none" />
    {/* Noivos no topo */}
    <circle cx="45" cy="28" r="3" fill={accent} />
    <circle cx="55" cy="28" r="3" fill={accent} />
    <path d="M 45 31 L 55 31" stroke={accent} strokeWidth="0.8" />
  </svg>
);

export const CakeWedding2: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo coração */}
    <path d="M 50 80 C 50 80 20 60 20 45 C 20 35 28 30 35 30 C 42 30 50 38 50 45 C 50 38 58 30 65 30 C 72 30 80 35 80 45 C 80 60 50 80 50 80 Z" fill={color} stroke={accent} strokeWidth="1.5" />
    {/* Decorações no coração */}
    <circle cx="35" cy="50" r="2" fill={accent} />
    <circle cx="65" cy="50" r="2" fill={accent} />
    <circle cx="50" cy="65" r="2" fill={accent} />
  </svg>
);

export const CakeWedding3: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo quadrado */}
    <rect x="18" y="72" width="64" height="16" rx="1" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="28" y="55" width="44" height="17" rx="1" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="38" y="38" width="24" height="17" rx="1" fill={color} stroke={accent} strokeWidth="1" />
    {/* Rosas */}
    <circle cx="25" cy="80" r="2.5" fill={accent} opacity="0.7" />
    <circle cx="75" cy="80" r="2.5" fill={accent} opacity="0.7" />
    <circle cx="35" cy="63" r="2.5" fill={accent} opacity="0.7" />
    <circle cx="65" cy="63" r="2.5" fill={accent} opacity="0.7" />
    <circle cx="50" cy="46" r="2.5" fill={accent} opacity="0.7" />
    {/* Topo */}
    <path d="M 50 38 L 45 30 L 50 25 L 55 30 Z" fill={accent} />
  </svg>
);

export const CakeWedding4: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo minimalista */}
    <rect x="20" y="70" width="60" height="18" rx="2" fill={color} stroke={accent} strokeWidth="1.5" />
    <rect x="30" y="52" width="40" height="18" rx="2" fill={color} stroke={accent} strokeWidth="1.5" />
    {/* Linha dourada */}
    <line x1="20" y1="72" x2="80" y2="72" stroke={accent} strokeWidth="0.8" />
    <line x1="30" y1="54" x2="70" y2="54" stroke={accent} strokeWidth="0.8" />
    {/* Ornamento */}
    <path d="M 45 48 L 50 42 L 55 48" stroke={accent} strokeWidth="1.5" fill="none" />
  </svg>
);

export const CakeWedding5: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo floral */}
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="28" y="55" width="44" height="17" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Flores */}
    <g fill={accent}>
      <circle cx="30" cy="50" r="3" />
      <circle cx="40" cy="48" r="3" />
      <circle cx="60" cy="48" r="3" />
      <circle cx="70" cy="50" r="3" />
    </g>
    <g fill={color}>
      <circle cx="30" cy="50" r="1" />
      <circle cx="40" cy="48" r="1" />
      <circle cx="60" cy="48" r="1" />
      <circle cx="70" cy="50" r="1" />
    </g>
    {/* Folhas */}
    <path d="M 25 53 Q 22 50 25 48" stroke="#4caf50" strokeWidth="1" fill="none" />
    <path d="M 75 53 Q 78 50 75 48" stroke="#4caf50" strokeWidth="1" fill="none" />
  </svg>
);

// ============================================
// 💧 BATIZADO
// ============================================

export const CakeBaptism1: React.FC<CakeProps> = ({ size = 200, color = '#e3f2fd', accent = '#4a90d9' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="30" y="52" width="40" height="20" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Cruz no topo */}
    <rect x="48" y="30" width="4" height="20" fill={accent} />
    <rect x="42" y="36" width="16" height="4" fill={accent} />
    {/* Decorações */}
    <circle cx="25" cy="80" r="1" fill={accent} />
    <circle cx="75" cy="80" r="1" fill={accent} />
  </svg>
);

export const CakeBaptism2: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#4a90d9' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo redondo azul */}
    <ellipse cx="50" cy="70" rx="35" ry="18" fill={accent} />
    <rect x="15" y="70" width="70" height="15" fill={accent} />
    <ellipse cx="50" cy="85" rx="35" ry="4" fill={accent} />
    {/* Onda branca */}
    <path d="M 15 70 Q 25 65 35 70 Q 45 65 55 70 Q 65 65 75 70 Q 82 68 85 70" stroke="#fff" strokeWidth="2" fill="none" />
    {/* Detalhes */}
    <circle cx="30" cy="77" r="1.5" fill="#fff" />
    <circle cx="50" cy="77" r="1.5" fill="#fff" />
    <circle cx="70" cy="77" r="1.5" fill="#fff" />
  </svg>
);

export const CakeBaptism3: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#4a90d9' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="20" y="72" width="60" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="30" y="55" width="40" height="17" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="40" y="40" width="20" height="15" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Pomba */}
    <path d="M 45 32 Q 40 25 50 22 Q 55 25 55 32 Q 60 30 62 35 Q 55 35 50 32 Q 48 35 45 32 Z" fill="#fff" stroke={accent} strokeWidth="0.8" />
  </svg>
);

export const CakeBaptism4: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#4a90d9' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo com bebé */}
    <rect x="20" y="70" width="60" height="18" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Bebé dormindo */}
    <ellipse cx="50" cy="58" rx="15" ry="10" fill="#ffd9ba" />
    <circle cx="50" cy="58" r="8" fill="#ffcc99" />
    <path d="M 45 55 Q 47 53 49 55" stroke="#333" strokeWidth="0.5" fill="none" />
    <path d="M 51 55 Q 53 53 55 55" stroke="#333" strokeWidth="0.5" fill="none" />
    <path d="M 48 61 Q 50 63 52 61" stroke="#333" strokeWidth="0.5" fill="none" />
  </svg>
);

export const CakeBaptism5: React.FC<CakeProps> = ({ size = 200, color = '#fff', accent = '#4a90d9' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="28" y="55" width="44" height="17" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Anjo no topo */}
    <path d="M 45 45 Q 40 40 45 35 Q 50 38 50 45 Q 50 38 55 35 Q 60 40 55 45 Q 50 48 45 45 Z" fill="#fff" stroke={accent} strokeWidth="0.8" />
    <circle cx="50" cy="35" r="3" fill="#ffd9ba" />
  </svg>
);

// ============================================
// 🕊️ COMUNHÃO
// ============================================

export const CakeCommunion1: React.FC<CakeProps> = ({ size = 200, color = '#fff9f0', accent = '#d4a557' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="28" y="55" width="44" height="17" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Cálice */}
    <path d="M 42 50 L 42 40 L 58 40 L 58 50 Q 50 55 42 50 Z" fill={accent} />
    <rect x="48" y="30" width="4" height="10" fill={accent} />
    <rect x="42" y="28" width="16" height="2" fill={accent} />
    {/* Hóstia */}
    <circle cx="50" cy="25" r="4" fill="#fff" stroke={accent} strokeWidth="0.8" />
    <path d="M 47 25 L 50 23 L 53 25" stroke={accent} strokeWidth="0.5" fill="none" />
  </svg>
);

export const CakeCommunion2: React.FC<CakeProps> = ({ size = 200, color = '#fff9f0', accent = '#d4a557' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo dourado */}
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1.5" />
    <rect x="28" y="55" width="44" height="17" rx="2" fill={color} stroke={accent} strokeWidth="1.5" />
    <rect x="38" y="40" width="24" height="15" rx="2" fill={color} stroke={accent} strokeWidth="1.5" />
    {/* Pomba no topo */}
    <path d="M 45 33 Q 38 25 50 22 Q 58 22 55 30 Q 58 28 60 32 Q 55 32 50 30 Q 48 33 45 33 Z" fill={accent} />
    <circle cx="48" cy="26" r="0.8" fill="#fff" />
  </svg>
);

export const CakeCommunion3: React.FC<CakeProps> = ({ size = 200, color = '#fff9f0', accent = '#d4a557' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="20" y="72" width="60" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="30" y="55" width="40" height="17" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Cruz dourada */}
    <rect x="48" y="35" width="4" height="20" fill={accent} />
    <rect x="42" y="41" width="16" height="4" fill={accent} />
    {/* Detalhes */}
    <circle cx="25" cy="80" r="1" fill={accent} />
    <circle cx="75" cy="80" r="1" fill={accent} />
    <circle cx="35" cy="63" r="1" fill={accent} />
    <circle cx="65" cy="63" r="1" fill={accent} />
  </svg>
);

export const CakeCommunion4: React.FC<CakeProps> = ({ size = 200, color = '#fff9f0', accent = '#d4a557' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo elegante */}
    <path d="M 20 88 Q 20 72 30 68 L 70 68 Q 80 72 80 88 Z" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="30" y="55" width="40" height="13" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Decoração dourada */}
    <path d="M 25 75 Q 35 70 45 75 Q 55 70 65 75 Q 70 72 75 75" stroke={accent} strokeWidth="0.8" fill="none" />
    <circle cx="50" cy="60" r="2" fill={accent} />
  </svg>
);

export const CakeCommunion5: React.FC<CakeProps> = ({ size = 200, color = '#fff9f0', accent = '#d4a557' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Uvas (símbolo comunhão) */}
    <g fill="#9c27b0">
      <circle cx="45" cy="50" r="3" />
      <circle cx="53" cy="50" r="3" />
      <circle cx="49" cy="45" r="3" />
      <circle cx="49" cy="55" r="3" />
      <circle cx="57" cy="55" r="3" />
      <circle cx="41" cy="55" r="3" />
    </g>
    <path d="M 50 42 Q 52 38 55 38" stroke="#4caf50" strokeWidth="1" fill="none" />
  </svg>
);

// ============================================
// 👶 BABY SHOWER
// ============================================

export const CakeBaby1: React.FC<CakeProps> = ({ size = 200, color = '#fce4ec', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="20" y="72" width="60" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Ursinho */}
    <circle cx="50" cy="55" r="15" fill="#a1887f" />
    <circle cx="38" cy="45" r="5" fill="#a1887f" />
    <circle cx="62" cy="45" r="5" fill="#a1887f" />
    <circle cx="38" cy="45" r="3" fill="#8d6e63" />
    <circle cx="62" cy="45" r="3" fill="#8d6e63" />
    <circle cx="45" cy="55" r="1.5" fill="#333" />
    <circle cx="55" cy="55" r="1.5" fill="#333" />
    <ellipse cx="50" cy="61" rx="2" ry="1.5" fill="#333" />
    <path d="M 47 63 Q 50 65 53 63" stroke="#333" strokeWidth="0.5" fill="none" />
  </svg>
);

export const CakeBaby2: React.FC<CakeProps> = ({ size = 200, color = '#fce4ec', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    <rect x="28" y="55" width="44" height="17" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Chupeta */}
    <circle cx="50" cy="42" r="8" fill="none" stroke={accent} strokeWidth="2" />
    <circle cx="50" cy="42" r="3" fill={accent} />
    <rect x="48" y="32" width="4" height="6" fill={accent} />
    <rect x="42" y="28" width="16" height="4" rx="2" fill={accent} />
  </svg>
);

export const CakeBaby3: React.FC<CakeProps> = ({ size = 200, color = '#fce4ec', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    {/* Bolo rosa */}
    <ellipse cx="50" cy="70" rx="35" ry="18" fill={accent} />
    <rect x="15" y="70" width="70" height="15" fill={accent} />
    <ellipse cx="50" cy="85" rx="35" ry="4" fill={accent} />
    {/* Nuvem no topo */}
    <g fill="#fff">
      <circle cx="42" cy="42" r="6" />
      <circle cx="50" cy="38" r="8" />
      <circle cx="58" cy="42" r="6" />
      <circle cx="50" cy="48" r="7" />
    </g>
  </svg>
);

export const CakeBaby4: React.FC<CakeProps> = ({ size = 200, color = '#fce4ec', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="18" y="72" width="64" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Carrinho de bebé */}
    <path d="M 30 65 Q 30 45 50 45 Q 70 45 70 65 Z" fill={accent} />
    <path d="M 30 65 Q 30 45 50 45 Q 70 45 70 65" stroke={color} strokeWidth="1.5" fill="none" />
    <circle cx="35" cy="75" r="4" fill="#333" />
    <circle cx="65" cy="75" r="4" fill="#333" />
    <path d="M 30 65 L 25 55 L 35 55" stroke={color} strokeWidth="1.5" fill="none" />
  </svg>
);

export const CakeBaby5: React.FC<CakeProps> = ({ size = 200, color = '#fce4ec', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill={accent} opacity="0.3" />
    <rect x="20" y="72" width="60" height="16" rx="2" fill={color} stroke={accent} strokeWidth="1" />
    {/* Fralda */}
    <path d="M 35 70 L 35 55 L 65 55 L 65 70 Q 50 75 35 70 Z" fill="#fff" stroke={accent} strokeWidth="1" />
    {/* Alfinete */}
    <path d="M 45 60 L 55 60 M 50 55 L 50 65" stroke={accent} strokeWidth="1.5" />
    {/* Coração */}
    <path d="M 50 45 C 50 45 42 38 42 33 C 42 30 44 28 47 28 C 49 28 50 30 50 31 C 50 30 51 28 53 28 C 56 28 58 30 58 33 C 58 38 50 45 50 45 Z" fill={accent} />
  </svg>
);

// ============================================
// ✨ PERSONALIZADO / OUTRO
// ============================================

export const CakeCustom1: React.FC<CakeProps> = ({ size = 200, accent = '#e8c547' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill={accent} opacity="0.4"/>
    <rect x="15" y="65" width="70" height="22" rx="3" fill={accent}/>
    <ellipse cx="50" cy="65" rx="35" ry="4" fill="#fff"/>
    <rect x="25" y="45" width="50" height="22" rx="3" fill="#fff" stroke={accent} strokeWidth="1.5"/>
    <ellipse cx="50" cy="45" rx="25" ry="3" fill={accent}/>
    <circle cx="50" cy="30" r="4" fill={accent}/>
  </svg>
);

export const CakeCustom2: React.FC<CakeProps> = ({ size = 200, accent = '#e8c547' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill={accent} opacity="0.4"/>
    <rect x="20" y="70" width="60" height="16" rx="2" fill="#fff" stroke={accent} strokeWidth="2"/>
    <rect x="30" y="52" width="40" height="18" rx="2" fill="#fff" stroke={accent} strokeWidth="2"/>
    <rect x="40" y="38" width="20" height="14" rx="2" fill="#fff" stroke={accent} strokeWidth="2"/>
    <line x1="20" y1="72" x2="80" y2="72" stroke={accent} strokeWidth="1"/>
    <line x1="30" y1="54" x2="70" y2="54" stroke={accent} strokeWidth="1"/>
    <line x1="40" y1="40" x2="60" y2="40" stroke={accent} strokeWidth="1"/>
  </svg>
);

export const CakeCustom3: React.FC<CakeProps> = ({ size = 200, accent = '#e8c547' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="35" ry="3" fill={accent} opacity="0.4"/>
    <path d="M 25 85 Q 20 55 50 30 Q 80 55 75 85 Z" fill="#fff" stroke={accent} strokeWidth="2"/>
    <circle cx="50" cy="50" r="4" fill={accent}/>
    <circle cx="35" cy="65" r="3" fill={accent} opacity="0.7"/>
    <circle cx="65" cy="65" r="3" fill={accent} opacity="0.7"/>
    <circle cx="50" cy="30" r="3" fill={accent}/>
  </svg>
);

export const CakeCustom4: React.FC<CakeProps> = ({ size = 200, accent = '#e8c547' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="40" ry="3" fill={accent} opacity="0.4"/>
    <ellipse cx="50" cy="75" rx="30" ry="8" fill={accent}/>
    <rect x="20" y="75" width="60" height="10" fill={accent}/>
    <ellipse cx="50" cy="85" rx="30" ry="3" fill={accent} opacity="0.6"/>
    <ellipse cx="50" cy="60" rx="20" ry="6" fill="#fff" stroke={accent} strokeWidth="1.5"/>
    <ellipse cx="50" cy="45" rx="12" ry="4" fill={accent}/>
    <circle cx="50" cy="35" r="3" fill={accent}/>
  </svg>
);

export const CakeCustom5: React.FC<CakeProps> = ({ size = 200, accent = '#e8c547' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill={accent} opacity="0.4"/>
    <rect x="15" y="72" width="70" height="14" rx="2" fill={accent}/>
    <rect x="25" y="56" width="50" height="16" rx="2" fill="#fff" stroke={accent} strokeWidth="1"/>
    <rect x="35" y="42" width="30" height="14" rx="2" fill={accent} opacity="0.7"/>
    <circle cx="50" cy="30" r="5" fill={accent}/>
    <path d="M 42 32 L 50 25 L 58 32" stroke={accent} strokeWidth="1.5" fill="none"/>
  </svg>
);

// ============================================
// MAPEAMENTO DE BOLOS POR OCASIÃO
// ============================================

export const CAKES_BY_OCCASION: Record<string, Record<string, React.FC<CakeProps>>> = {
  birthday: {
    'cake-01': CakeBirthday1,
    'cake-02': CakeBirthday2,
    'cake-03': CakeBirthday3,
    'cake-04': CakeBirthday4,
    'cake-05': CakeBirthday5,
  },
  wedding: {
    'cake-01': CakeWedding1,
    'cake-02': CakeWedding2,
    'cake-03': CakeWedding3,
    'cake-04': CakeWedding4,
    'cake-05': CakeWedding5,
  },
  baptism: {
    'cake-01': CakeBaptism1,
    'cake-02': CakeBaptism2,
    'cake-03': CakeBaptism3,
    'cake-04': CakeBaptism4,
    'cake-05': CakeBaptism5,
  },
  communion: {
    'cake-01': CakeCommunion1,
    'cake-02': CakeCommunion2,
    'cake-03': CakeCommunion3,
    'cake-04': CakeCommunion4,
    'cake-05': CakeCommunion5,
  },
    'baby-shower': {
    'cake-01': CakeBaby1,
    'cake-02': CakeBaby2,
    'cake-03': CakeBaby3,
    'cake-04': CakeBaby4,
    'cake-05': CakeBaby5,
  },
  custom: {
    'cake-01': CakeCustom1,
    'cake-02': CakeCustom2,
    'cake-03': CakeCustom3,
    'cake-04': CakeCustom4,
    'cake-05': CakeCustom5,
  },
};

export function getCakeComponent(occasion: string, cakeId?: string): React.FC<CakeProps> | null {
  if (!cakeId) return null;
  const cakes = CAKES_BY_OCCASION[occasion];
  if (!cakes) return null;
  return cakes[cakeId] || null;
}