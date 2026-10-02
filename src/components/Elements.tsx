import React from 'react';

// ============================================
// ELEMENTOS DECORATIVOS — 60 SVGs ORIGINAIS
// ============================================

interface ElementProps {
  size?: number;
  color?: string;
  accent?: string;
}

// ============================================
// 🎈 BALÕES (Aniversário)
// ============================================

export const Balloon1: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="40" rx="20" ry="25" fill={color} />
    <path d="M 50 65 L 50 90" stroke={accent} strokeWidth="1.5" />
    <ellipse cx="43" cy="32" rx="3" ry="4" fill="#fff" opacity="0.5" />
  </svg>
);

export const Balloon2: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="35" cy="35" rx="15" ry="20" fill={color} />
    <path d="M 35 55 L 35 80" stroke={accent} strokeWidth="1.5" />
    <ellipse cx="65" cy="45" rx="15" ry="20" fill={accent} />
    <path d="M 65 65 L 65 90" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const Balloon3: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 15 Q 70 15 70 35 Q 70 50 50 65 Q 30 50 30 35 Q 30 15 50 15 Z" fill={color} />
    <path d="M 50 65 L 50 90" stroke={accent} strokeWidth="1.5" />
    <circle cx="50" cy="40" r="4" fill="#fff" opacity="0.4" />
  </svg>
);

export const Balloon4: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="35" cy="30" rx="14" ry="18" fill={color} />
    <path d="M 35 48 L 35 70" stroke={accent} strokeWidth="1.5" />
    <ellipse cx="65" cy="35" rx="14" ry="18" fill="#4caf50" />
    <path d="M 65 53 L 65 75" stroke={accent} strokeWidth="1.5" />
    <ellipse cx="50" cy="55" rx="14" ry="18" fill={accent} />
    <path d="M 50 73 L 50 95" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const Balloon5: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 15 L 55 35 L 75 35 L 60 48 L 65 68 L 50 55 L 35 68 L 40 48 L 25 35 L 45 35 Z" fill={accent} />
    <circle cx="30" cy="25" r="5" fill={color} />
    <circle cx="70" cy="25" r="5" fill="#4caf50" />
    <circle cx="30" cy="70" r="5" fill="#2196f3" />
    <circle cx="70" cy="70" r="5" fill="#ff9800" />
  </svg>
);

// ============================================
// 🎁 PRESENTES (Aniversário)
// ============================================

export const Gift1: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="20" y="40" width="60" height="45" rx="3" fill={color} />
    <rect x="20" y="40" width="60" height="10" fill={accent} />
    <rect x="45" y="40" width="10" height="45" fill={accent} />
    <path d="M 50 40 Q 35 30 40 22 Q 45 15 50 25 Q 55 15 60 22 Q 65 30 50 40 Z" fill={accent} />
  </svg>
);

export const Gift2: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="15" y="45" width="50" height="40" rx="3" fill={color} />
    <rect x="15" y="45" width="50" height="8" fill={accent} />
    <rect x="35" y="45" width="10" height="40" fill={accent} />
    <rect x="50" y="55" width="40" height="30" rx="3" fill={accent} />
    <rect x="50" y="55" width="40" height="6" fill={color} />
    <rect x="66" y="55" width="8" height="30" fill={color} />
  </svg>
);

export const Gift3: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 25 45 L 75 45 L 75 88 L 25 88 Z" fill={color} />
    <path d="M 25 45 L 75 45 L 70 40 L 30 40 Z" fill={accent} />
    <circle cx="50" cy="35" r="8" fill={accent} />
    <path d="M 42 35 L 50 28 L 58 35" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

export const Gift4: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="30" y="50" width="40" height="38" rx="2" fill={color} />
    <rect x="30" y="50" width="40" height="8" fill={accent} />
    <rect x="46" y="50" width="8" height="38" fill={accent} />
    <path d="M 40 50 L 38 40 L 45 38 L 50 50 Z" fill={accent} />
    <path d="M 60 50 L 62 40 L 55 38 L 50 50 Z" fill={accent} />
  </svg>
);

export const Gift5: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="20" y="55" width="60" height="33" rx="2" fill={accent} />
    <rect x="20" y="55" width="60" height="6" fill={color} />
    <rect x="46" y="55" width="8" height="33" fill={color} />
    <circle cx="50" cy="45" r="10" fill={color} />
    <circle cx="50" cy="45" r="6" fill={accent} />
  </svg>
);

// ============================================
// ⭐ CONFETES E ESTRELAS (Aniversário)
// ============================================

export const Confetti1: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 20 L 53 35 L 68 35 L 56 45 L 60 60 L 50 50 L 40 60 L 44 45 L 32 35 L 47 35 Z" fill={accent} />
    <circle cx="25" cy="25" r="3" fill={color} />
    <circle cx="75" cy="30" r="3" fill="#4caf50" />
    <circle cx="35" cy="70" r="3" fill="#2196f3" />
    <circle cx="65" cy="75" r="3" fill="#ff9800" />
  </svg>
);

export const Confetti2: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="25" cy="25" r="4" fill={accent} />
    <circle cx="50" cy="20" r="4" fill={color} />
    <circle cx="75" cy="25" r="4" fill="#4caf50" />
    <circle cx="30" cy="50" r="4" fill="#2196f3" />
    <circle cx="70" cy="50" r="4" fill="#ff9800" />
    <circle cx="50" cy="55" r="4" fill={accent} />
    <circle cx="25" cy="75" r="4" fill={color} />
    <circle cx="50" cy="80" r="4" fill="#4caf50" />
    <circle cx="75" cy="75" r="4" fill="#2196f3" />
  </svg>
);

export const Confetti3: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="20" y="20" width="4" height="8" fill={accent} transform="rotate(30 22 24)" />
    <rect x="40" y="25" width="4" height="8" fill={color} transform="rotate(-20 42 29)" />
    <rect x="60" y="15" width="4" height="8" fill="#4caf50" transform="rotate(45 62 19)" />
    <rect x="30" y="55" width="4" height="8" fill="#2196f3" transform="rotate(60 32 59)" />
    <rect x="55" y="50" width="4" height="8" fill="#ff9800" transform="rotate(-30 57 54)" />
    <rect x="75" y="45" width="4" height="8" fill={accent} transform="rotate(15 77 49)" />
    <rect x="25" y="80" width="4" height="8" fill={color} transform="rotate(-45 27 84)" />
    <rect x="50" y="75" width="4" height="8" fill="#4caf50" transform="rotate(20 52 79)" />
    <rect x="70" y="70" width="4" height="8" fill="#2196f3" transform="rotate(-15 72 74)" />
  </svg>
);

export const Confetti4: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 30 30 L 35 45 L 50 45 L 38 55 L 42 70 L 30 60 L 18 70 L 22 55 L 10 45 L 25 45 Z" fill={accent} />
    <path d="M 70 30 L 75 45 L 90 45 L 78 55 L 82 70 L 70 60 L 58 70 L 62 55 L 50 45 L 65 45 Z" fill={color} />
  </svg>
);

export const Confetti5: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="30" cy="30" r="2" fill={accent} />
    <circle cx="50" cy="25" r="2" fill={color} />
    <circle cx="70" cy="30" r="2" fill="#4caf50" />
    <circle cx="40" cy="50" r="2" fill="#2196f3" />
    <circle cx="60" cy="50" r="2" fill="#ff9800" />
    <circle cx="30" cy="70" r="2" fill={accent} />
    <circle cx="50" cy="75" r="2" fill={color} />
    <circle cx="70" cy="70" r="2" fill="#4caf50" />
    <circle cx="50" cy="55" r="4" fill={accent} />
    <path d="M 50 45 L 53 50 L 58 51 L 54 55 L 55 60 L 50 57 L 45 60 L 46 55 L 42 51 L 47 50 Z" fill={color} />
  </svg>
);

// ============================================
// 💍 ANÉIS (Casamento)
// ============================================

export const Rings1: React.FC<ElementProps> = ({ size = 120, color = '#c9a96e', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="40" cy="55" r="20" fill="none" stroke={color} strokeWidth="4" />
    <circle cx="60" cy="55" r="20" fill="none" stroke={accent} strokeWidth="4" />
    <circle cx="60" cy="35" r="4" fill={color} />
  </svg>
);

export const Rings2: React.FC<ElementProps> = ({ size = 120, color = '#c9a96e', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="4" />
    <path d="M 42 30 L 50 20 L 58 30 L 50 40 Z" fill={accent} />
    <path d="M 50 20 L 50 40 M 42 30 L 58 30" stroke={color} strokeWidth="1" />
  </svg>
);

export const Rings3: React.FC<ElementProps> = ({ size = 120, color = '#c9a96e', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="60" rx="30" ry="8" fill="none" stroke={color} strokeWidth="3" />
    <path d="M 30 50 L 50 30 L 70 50" stroke={accent} strokeWidth="3" fill="none" />
    <circle cx="50" cy="30" r="5" fill={color} />
  </svg>
);

export const Rings4: React.FC<ElementProps> = ({ size = 120, color = '#c9a96e', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="35" cy="50" r="18" fill="none" stroke={color} strokeWidth="3" />
    <circle cx="65" cy="50" r="18" fill="none" stroke={accent} strokeWidth="3" />
    <circle cx="35" cy="32" r="3" fill={color} />
    <circle cx="65" cy="32" r="3" fill={accent} />
  </svg>
);

export const Rings5: React.FC<ElementProps> = ({ size = 120, color = '#c9a96e', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="55" r="22" fill="none" stroke={color} strokeWidth="5" />
    <path d="M 45 40 L 50 25 L 55 40 L 50 45 Z" fill={accent} />
    <circle cx="50" cy="32" r="3" fill={color} />
  </svg>
);

// ============================================
// 🌹 ROSAS (Casamento)
// ============================================

export const Rose1: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="45" r="20" fill={color} />
    <circle cx="50" cy="45" r="13" fill={accent} />
    <circle cx="50" cy="45" r="6" fill={color} />
    <path d="M 50 65 L 50 90" stroke="#4caf50" strokeWidth="2" />
  </svg>
);

export const Rose2: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 20 Q 65 30 65 45 Q 65 60 50 65 Q 35 60 35 45 Q 35 30 50 20 Z" fill={color} />
    <path d="M 50 30 Q 58 35 58 45 Q 58 55 50 58 Q 42 55 42 45 Q 42 35 50 30 Z" fill={accent} />
    <circle cx="50" cy="45" r="4" fill={color} />
    <path d="M 50 65 L 50 90" stroke="#4caf50" strokeWidth="2" />
  </svg>
);

export const Rose3: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 30 40 Q 40 25 55 30 Q 70 35 70 50 Q 70 65 55 70 Q 40 75 30 60 Q 25 50 30 40 Z" fill={color} />
    <circle cx="50" cy="50" r="10" fill={accent} />
    <circle cx="50" cy="50" r="4" fill={color} />
    <path d="M 25 40 Q 20 45 25 50" stroke="#4caf50" strokeWidth="2" fill="none" />
  </svg>
);

export const Rose4: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="35" cy="40" r="15" fill={color} />
    <circle cx="35" cy="40" r="8" fill={accent} />
    <circle cx="65" cy="50" r="15" fill={accent} />
    <circle cx="65" cy="50" r="8" fill={color} />
    <path d="M 35 55 L 35 75 M 65 65 L 65 85" stroke="#4caf50" strokeWidth="2" />
  </svg>
);

export const Rose5: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 25 Q 65 25 65 40 Q 65 50 55 55 L 55 80" stroke="#4caf50" strokeWidth="2" fill="none" />
    <path d="M 50 25 Q 35 25 35 40 Q 35 50 45 55 L 45 80" stroke="#4caf50" strokeWidth="2" fill="none" />
    <circle cx="50" cy="30" r="8" fill={color} />
    <circle cx="50" cy="30" r="4" fill={accent} />
    <path d="M 42 45 Q 50 40 58 45" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

// ============================================
// ❤️ CORAÇÕES (Casamento)
// ============================================

export const Heart1: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 80 C 50 80 20 60 20 40 C 20 25 30 18 40 18 C 46 18 50 22 50 28 C 50 22 54 18 60 18 C 70 18 80 25 80 40 C 80 60 50 80 50 80 Z" fill={color} />
  </svg>
);

export const Heart2: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 80 C 50 80 20 60 20 40 C 20 25 30 18 40 18 C 46 18 50 22 50 28 C 50 22 54 18 60 18 C 70 18 80 25 80 40 C 80 60 50 80 50 80 Z" fill={color} />
    <path d="M 50 70 C 50 70 30 55 30 42 C 30 32 36 28 42 28 C 46 28 50 31 50 35 C 50 31 54 28 58 28 C 64 28 70 32 70 42 C 70 55 50 70 50 70 Z" fill={accent} opacity="0.5" />
  </svg>
);

export const Heart3: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 30 C 50 30 45 20 35 20 C 25 20 20 27 20 35 C 20 50 50 75 50 75 C 50 75 80 50 80 35 C 80 27 75 20 65 20 C 55 20 50 30 50 30 Z" fill={color} />
    <circle cx="50" cy="45" r="4" fill={accent} />
  </svg>
);

export const Heart4: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 40 80 C 40 80 15 60 15 40 C 15 25 25 18 35 18 C 40 18 45 22 45 28 C 45 22 50 18 55 18 C 65 18 75 25 75 40 C 75 60 50 80 50 80 Z" fill={color} transform="translate(-10,0)" />
    <path d="M 60 80 C 60 80 35 60 35 40 C 35 25 45 18 55 18 C 60 18 65 22 65 28 C 65 22 70 18 75 18 C 85 18 95 25 95 40 C 95 60 70 80 70 80 Z" fill={accent} transform="translate(-10,0)" opacity="0.8" />
  </svg>
);

export const Heart5: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#c9a96e' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 30 C 50 30 45 20 35 20 C 25 20 20 27 20 35 C 20 50 50 75 50 75 C 50 75 80 50 80 35 C 80 27 75 20 65 20 C 55 20 50 30 50 30 Z" fill={color} />
    <path d="M 50 50 L 50 30" stroke={accent} strokeWidth="2" />
    <path d="M 40 40 L 60 40" stroke={accent} strokeWidth="2" />
  </svg>
);

// ============================================
// 🕊️ POMBAS (Batizado + Comunhão)
// ============================================

export const Dove1: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 30 50 Q 30 30 50 30 Q 70 30 70 50 Q 70 65 50 70 Q 30 65 30 50 Z" fill={accent} />
    <path d="M 50 40 L 45 30 L 50 35 L 55 30 Z" fill={color} />
    <circle cx="45" cy="45" r="1.5" fill="#333" />
    <path d="M 70 50 L 80 45 L 78 50 L 80 55 Z" fill={accent} />
  </svg>
);

export const Dove2: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 20 60 Q 30 40 50 40 Q 70 40 80 60 Q 65 55 50 55 Q 35 55 20 60 Z" fill={accent} />
    <path d="M 50 40 L 55 30 L 60 40" fill={color} />
    <circle cx="52" cy="42" r="1.5" fill="#333" />
    <path d="M 20 60 L 15 55 L 20 62 Z" fill={accent} />
  </svg>
);

export const Dove3: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="55" rx="25" ry="12" fill={accent} />
    <path d="M 45 45 Q 50 30 60 35 Q 55 45 50 48 Z" fill={accent} />
    <path d="M 30 55 L 20 60 L 30 60 L 20 65 Z" fill={accent} />
    <circle cx="55" cy="42" r="1.5" fill="#333" />
  </svg>
);

export const Dove4: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 25 Q 65 35 65 55 Q 65 75 50 80 Q 35 75 35 55 Q 35 35 50 25 Z" fill={accent} />
    <path d="M 30 55 L 20 50 L 28 58 L 18 60 L 30 62 Z" fill={accent} />
    <path d="M 70 55 L 80 50 L 72 58 L 82 60 L 70 62 Z" fill={accent} />
    <circle cx="50" cy="45" r="2" fill="#333" />
    <path d="M 50 25 L 45 15 L 55 15 Z" fill={color} />
  </svg>
);

export const Dove5: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 40 Q 65 45 70 60 Q 55 55 50 55 Q 45 55 30 60 Q 35 45 50 40 Z" fill={accent} />
    <circle cx="50" cy="42" r="3" fill="#333" />
    <path d="M 70 60 L 80 55 L 78 62 L 85 65 Z" fill={accent} />
    <path d="M 50 30 Q 48 25 50 22 Q 52 25 50 30 Z" fill={color} />
  </svg>
);

// ============================================
// 💧 GOTAS (Batizado)
// ============================================

export const Drop1: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#e3f2fd' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 20 Q 70 50 70 65 Q 70 80 50 80 Q 30 80 30 65 Q 30 50 50 20 Z" fill={color} />
    <ellipse cx="42" cy="60" rx="4" ry="6" fill="#fff" opacity="0.5" />
  </svg>
);

export const Drop2: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#e3f2fd' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 35 25 Q 45 45 45 55 Q 45 65 35 65 Q 25 65 25 55 Q 25 45 35 25 Z" fill={color} />
    <path d="M 65 40 Q 75 60 75 70 Q 75 80 65 80 Q 55 80 55 70 Q 55 60 65 40 Z" fill={color} />
  </svg>
);

export const Drop3: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#e3f2fd' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 15 Q 65 40 65 55 Q 65 70 50 70 Q 35 70 35 55 Q 35 40 50 15 Z" fill={color} />
    <path d="M 30 70 Q 35 80 40 85 Q 35 88 30 85 Q 25 88 20 85 Q 25 80 30 70 Z" fill={accent} />
    <path d="M 70 70 Q 75 80 80 85 Q 75 88 70 85 Q 65 88 60 85 Q 65 80 70 70 Z" fill={accent} />
  </svg>
);

export const Drop4: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#e3f2fd' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="55" r="20" fill={color} />
    <path d="M 50 20 L 60 50 L 40 50 Z" fill={color} />
    <ellipse cx="42" cy="50" rx="3" ry="5" fill="#fff" opacity="0.5" />
  </svg>
);

export const Drop5: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#e3f2fd' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 20 Q 60 40 60 50 Q 60 60 50 60 Q 40 60 40 50 Q 40 40 50 20 Z" fill={color} />
    <path d="M 35 55 Q 42 70 42 78 Q 42 85 35 85 Q 28 85 28 78 Q 28 70 35 55 Z" fill={color} opacity="0.7" />
    <path d="M 65 55 Q 72 70 72 78 Q 72 85 65 85 Q 58 85 58 78 Q 58 70 65 55 Z" fill={color} opacity="0.7" />
  </svg>
);

// ============================================
// 🕯️ VELAS (Batizado)
// ============================================

export const Candle1: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="42" y="40" width="16" height="45" rx="2" fill={color} />
    <path d="M 50 40 Q 45 30 50 20 Q 55 30 50 40 Z" fill={accent} />
    <ellipse cx="50" cy="30" rx="4" ry="8" fill="#ff5722" opacity="0.8" />
  </svg>
);

export const Candle2: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="35" y="45" width="12" height="35" rx="2" fill={accent} />
    <path d="M 41 45 Q 37 38 41 30 Q 45 38 41 45 Z" fill="#ff9800" />
    <rect x="53" y="45" width="12" height="35" rx="2" fill={accent} />
    <path d="M 59 45 Q 55 38 59 30 Q 63 38 59 45 Z" fill="#ff9800" />
  </svg>
);

export const Candle3: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="80" rx="20" ry="5" fill={color} />
    <rect x="44" y="45" width="12" height="35" fill={accent} />
    <path d="M 50 45 Q 45 35 50 25 Q 55 35 50 45 Z" fill="#ff9800" />
    <circle cx="50" cy="60" r="2" fill={color} />
  </svg>
);

export const Candle4: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="45" y="30" width="10" height="55" rx="2" fill={accent} />
    <path d="M 50 30 Q 46 20 50 12 Q 54 20 50 30 Z" fill="#ff9800" />
    <rect x="40" y="85" width="20" height="4" rx="1" fill={color} />
  </svg>
);

export const Candle5: React.FC<ElementProps> = ({ size = 120, color = '#4a90d9', accent = '#ffd700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="30" y="50" width="10" height="30" rx="2" fill={accent} />
    <path d="M 35 50 Q 31 42 35 34 Q 39 42 35 50 Z" fill="#ff9800" />
    <rect x="60" y="50" width="10" height="30" rx="2" fill={accent} />
    <path d="M 65 50 Q 61 42 65 34 Q 69 42 65 50 Z" fill="#ff9800" />
    <rect x="45" y="55" width="10" height="25" rx="2" fill={accent} />
    <path d="M 50 55 Q 46 47 50 40 Q 54 47 50 55 Z" fill="#ff9800" />
  </svg>
);

// ============================================
// 🍷 CÁLICES (Comunhão)
// ============================================

export const Chalice1: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 35 30 L 35 50 Q 35 65 50 65 Q 65 65 65 50 L 65 30 Z" fill={color} />
    <rect x="48" y="65" width="4" height="20" fill={color} />
    <rect x="35" y="85" width="30" height="4" rx="2" fill={color} />
    <ellipse cx="50" cy="30" rx="15" ry="3" fill={accent} />
  </svg>
);

export const Chalice2: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 30 25 L 30 55 Q 30 70 50 70 Q 70 70 70 55 L 70 25 Z" fill={color} />
    <circle cx="50" cy="40" r="6" fill={accent} />
    <rect x="48" y="70" width="4" height="18" fill={color} />
    <ellipse cx="50" cy="90" rx="20" ry="4" fill={color} />
  </svg>
);

export const Chalice3: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 40 25 L 40 50 L 60 50 L 60 25 Z" fill={color} />
    <path d="M 40 50 Q 40 65 50 70 Q 60 65 60 50" fill={color} />
    <rect x="48" y="70" width="4" height="20" fill={color} />
    <path d="M 35 90 L 65 90 L 60 85 L 40 85 Z" fill={color} />
    <ellipse cx="50" cy="25" rx="10" ry="2" fill={accent} />
  </svg>
);

export const Chalice4: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 35 20 Q 35 55 50 60 Q 65 55 65 20 Z" fill={color} />
    <rect x="48" y="60" width="4" height="25" fill={color} />
    <ellipse cx="50" cy="90" rx="18" ry="3" fill={color} />
    <path d="M 42 30 L 58 30" stroke={accent} strokeWidth="2" />
  </svg>
);

export const Chalice5: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 40 25 L 40 45 Q 40 55 50 55 Q 60 55 60 45 L 60 25 Z" fill={color} />
    <path d="M 35 20 L 65 20 L 60 25 L 40 25 Z" fill={accent} />
    <rect x="48" y="55" width="4" height="25" fill={color} />
    <rect x="40" y="80" width="20" height="4" rx="2" fill={color} />
    <circle cx="50" cy="40" r="3" fill={accent} />
  </svg>
);

// ============================================
// 🌾 ESPIGAS (Comunhão)
// ============================================

export const Wheat1: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 90 L 50 20" stroke={accent} strokeWidth="2" />
    <ellipse cx="45" cy="30" rx="4" ry="8" fill={color} transform="rotate(-30 45 30)" />
    <ellipse cx="55" cy="30" rx="4" ry="8" fill={color} transform="rotate(30 55 30)" />
    <ellipse cx="45" cy="45" rx="4" ry="8" fill={color} transform="rotate(-30 45 45)" />
    <ellipse cx="55" cy="45" rx="4" ry="8" fill={color} transform="rotate(30 55 45)" />
    <ellipse cx="45" cy="60" rx="4" ry="8" fill={color} transform="rotate(-30 45 60)" />
    <ellipse cx="55" cy="60" rx="4" ry="8" fill={color} transform="rotate(30 55 60)" />
  </svg>
);

export const Wheat2: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 35 90 L 35 30 M 65 90 L 65 30" stroke={accent} strokeWidth="2" />
    <ellipse cx="35" cy="30" rx="5" ry="10" fill={color} />
    <ellipse cx="65" cy="30" rx="5" ry="10" fill={color} />
    <ellipse cx="35" cy="50" rx="5" ry="10" fill={color} />
    <ellipse cx="65" cy="50" rx="5" ry="10" fill={color} />
  </svg>
);

export const Wheat3: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 90 Q 50 50 30 30" stroke={accent} strokeWidth="2" fill="none" />
    <path d="M 50 90 Q 50 50 70 30" stroke={accent} strokeWidth="2" fill="none" />
    <ellipse cx="30" cy="30" rx="4" ry="8" fill={color} />
    <ellipse cx="70" cy="30" rx="4" ry="8" fill={color} />
    <ellipse cx="30" cy="45" rx="4" ry="8" fill={color} opacity="0.7" />
    <ellipse cx="70" cy="45" rx="4" ry="8" fill={color} opacity="0.7" />
  </svg>
);

export const Wheat4: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 50 90 L 50 40" stroke={accent} strokeWidth="2" />
    <circle cx="50" cy="35" r="8" fill={color} />
    <ellipse cx="42" cy="45" rx="4" ry="8" fill={color} transform="rotate(-20 42 45)" />
    <ellipse cx="58" cy="45" rx="4" ry="8" fill={color} transform="rotate(20 58 45)" />
  </svg>
);

export const Wheat5: React.FC<ElementProps> = ({ size = 120, color = '#d4a557', accent = '#8b5a2b' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 40 90 Q 40 60 30 40 M 60 90 Q 60 60 70 40" stroke={accent} strokeWidth="2" fill="none" />
    <ellipse cx="30" cy="35" rx="5" ry="10" fill={color} />
    <ellipse cx="70" cy="35" rx="5" ry="10" fill={color} />
    <ellipse cx="30" cy="55" rx="5" ry="10" fill={color} opacity="0.7" />
    <ellipse cx="70" cy="55" rx="5" ry="10" fill={color} opacity="0.7" />
    <ellipse cx="50" cy="90" rx="8" ry="3" fill={accent} opacity="0.5" />
  </svg>
);

// ============================================
// 🧸 URSINHOS (Baby Shower)
// ============================================

export const Bear1: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="60" r="20" fill={color} />
    <circle cx="35" cy="40" r="8" fill={color} />
    <circle cx="65" cy="40" r="8" fill={color} />
    <circle cx="35" cy="40" r="5" fill={accent} />
    <circle cx="65" cy="40" r="5" fill={accent} />
    <circle cx="43" cy="60" r="2" fill="#fff" />
    <circle cx="57" cy="60" r="2" fill="#fff" />
    <ellipse cx="50" cy="68" rx="3" ry="2" fill={accent} />
  </svg>
);

export const Bear2: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="65" rx="18" ry="22" fill={color} />
    <circle cx="38" cy="42" r="7" fill={color} />
    <circle cx="62" cy="42" r="7" fill={color} />
    <circle cx="50" cy="58" r="12" fill={accent} />
    <circle cx="45" cy="60" r="1.5" fill="#333" />
    <circle cx="55" cy="60" r="1.5" fill="#333" />
    <ellipse cx="50" cy="66" rx="2" ry="1.5" fill="#333" />
  </svg>
);

export const Bear3: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="55" r="18" fill={color} />
    <circle cx="38" cy="35" r="6" fill={color} />
    <circle cx="62" cy="35" r="6" fill={color} />
    <circle cx="44" cy="52" r="2" fill="#fff" />
    <circle cx="56" cy="52" r="2" fill="#fff" />
    <circle cx="50" cy="60" r="3" fill={accent} />
    <path d="M 45 65 Q 50 68 55 65" stroke="#333" strokeWidth="0.8" fill="none" />
  </svg>
);

export const Bear4: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="65" rx="20" ry="18" fill={color} />
    <circle cx="50" cy="42" r="14" fill={color} />
    <circle cx="38" cy="35" r="5" fill={color} />
    <circle cx="62" cy="35" r="5" fill={color} />
    <circle cx="45" cy="42" r="1.5" fill="#fff" />
    <circle cx="55" cy="42" r="1.5" fill="#fff" />
    <ellipse cx="50" cy="48" rx="3" ry="2" fill="#fff" />
    <ellipse cx="50" cy="78" rx="6" ry="3" fill={accent} />
  </svg>
);

export const Bear5: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="40" cy="55" r="15" fill={color} />
    <circle cx="60" cy="55" r="15" fill={color} />
    <circle cx="40" cy="40" r="6" fill={color} />
    <circle cx="60" cy="40" r="6" fill={color} />
    <circle cx="40" cy="52" r="1.5" fill="#fff" />
    <circle cx="60" cy="52" r="1.5" fill="#fff" />
    <circle cx="50" cy="65" r="4" fill={accent} />
  </svg>
);

// ============================================
// 🍼 MAMADEIRAS (Baby Shower)
// ============================================

export const Bottle1: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="42" y="30" width="16" height="50" rx="4" fill={accent} />
    <rect x="42" y="55" width="16" height="25" fill={color} />
    <rect x="45" y="18" width="10" height="12" rx="2" fill={color} />
    <ellipse cx="50" cy="18" rx="6" ry="3" fill={color} />
    <circle cx="50" cy="40" r="2" fill={color} />
  </svg>
);

export const Bottle2: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 40 35 L 40 80 Q 40 85 45 85 L 55 85 Q 60 85 60 80 L 60 35 Z" fill={accent} />
    <path d="M 40 60 L 40 80 Q 40 85 45 85 L 55 85 Q 60 85 60 80 L 60 60 Z" fill={color} />
    <rect x="44" y="20" width="12" height="15" rx="3" fill={color} />
    <ellipse cx="50" cy="20" rx="8" ry="3" fill={color} />
  </svg>
);

export const Bottle3: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="40" y="35" width="20" height="45" rx="5" fill={accent} />
    <path d="M 42 55 Q 42 65 50 65 Q 58 65 58 55 L 58 35 L 42 35 Z" fill={color} />
    <rect x="46" y="20" width="8" height="15" rx="2" fill={color} />
    <circle cx="50" cy="20" r="4" fill={color} />
  </svg>
);

export const Bottle4: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 42 25 Q 42 20 50 20 Q 58 20 58 25 L 58 40 Q 62 45 62 55 L 62 75 Q 62 82 55 82 L 45 82 Q 38 82 38 75 L 38 55 Q 38 45 42 40 Z" fill={accent} />
    <path d="M 42 55 L 42 75 Q 42 82 45 82 L 55 82 Q 58 82 58 75 L 58 55 Z" fill={color} />
    <circle cx="50" cy="30" r="2" fill={color} />
  </svg>
);

export const Bottle5: React.FC<ElementProps> = ({ size = 120, color = '#e91e63', accent = '#fce4ec' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="35" y="40" width="14" height="40" rx="4" fill={accent} />
    <rect x="35" y="60" width="14" height="20" fill={color} />
    <rect x="38" y="28" width="8" height="12" rx="2" fill={color} />
    <rect x="52" y="40" width="14" height="40" rx="4" fill={accent} />
    <rect x="52" y="60" width="14" height="20" fill={color} />
    <rect x="55" y="28" width="8" height="12" rx="2" fill={color} />
  </svg>
);

// ============================================
// ☁️ NUVENS (Baby Shower)
// ============================================

export const Cloud1: React.FC<ElementProps> = ({ size = 120, color = '#fff', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="35" cy="55" r="12" fill={color} />
    <circle cx="50" cy="50" r="15" fill={color} />
    <circle cx="65" cy="55" r="12" fill={color} />
    <rect x="35" y="55" width="30" height="12" fill={color} />
    <circle cx="50" cy="40" r="3" fill={accent} />
  </svg>
);

export const Cloud2: React.FC<ElementProps> = ({ size = 120, color = '#fff', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="35" cy="55" r="10" fill={color} />
    <circle cx="50" cy="48" r="13" fill={color} />
    <circle cx="65" cy="55" r="10" fill={color} />
    <rect x="35" y="55" width="30" height="10" fill={color} />
    <path d="M 40 68 L 45 75 L 50 68 L 55 75 L 60 68" stroke={accent} strokeWidth="1.5" fill="none" />
  </svg>
);

export const Cloud3: React.FC<ElementProps> = ({ size = 120, color = '#fff', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="30" cy="50" r="9" fill={color} />
    <circle cx="45" cy="45" r="12" fill={color} />
    <circle cx="60" cy="45" r="12" fill={color} />
    <circle cx="75" cy="50" r="9" fill={color} />
    <rect x="30" y="50" width="45" height="9" fill={color} />
    <path d="M 45 60 Q 50 55 55 60" stroke={accent} strokeWidth="1" fill="none" />
  </svg>
);

export const Cloud4: React.FC<ElementProps> = ({ size = 120, color = '#fff', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="40" cy="50" r="10" fill={color} />
    <circle cx="55" cy="48" r="12" fill={color} />
    <circle cx="68" cy="52" r="9" fill={color} />
    <rect x="40" y="50" width="28" height="10" fill={color} />
    <circle cx="30" cy="35" r="2" fill={accent} />
    <circle cx="70" cy="35" r="2" fill={accent} />
    <circle cx="50" cy="28" r="3" fill={accent} />
  </svg>
);

export const Cloud5: React.FC<ElementProps> = ({ size = 120, color = '#fff', accent = '#e91e63' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="30" cy="60" r="8" fill={color} />
    <circle cx="42" cy="55" r="10" fill={color} />
    <circle cx="58" cy="55" r="10" fill={color} />
    <circle cx="70" cy="60" r="8" fill={color} />
    <rect x="30" y="60" width="40" height="8" fill={color} />
    <path d="M 50 30 L 52 38 L 60 40 L 52 42 L 50 50 L 48 42 L 40 40 L 48 38 Z" fill={accent} />
  </svg>
);

// ============================================
// MAPEAMENTO POR CATEGORIA E OCASIÃO
// ============================================

export const ELEMENTS_BY_CATEGORY: Record<
  string,
  Record<string, Record<string, React.FC<ElementProps>>>
> = {
  birthday: {
    element2: {
      'el-01': Balloon1,
      'el-02': Balloon2,
      'el-03': Balloon3,
      'el-04': Balloon4,
      'el-05': Balloon5,
    },
    element3: {
      'el-01': Gift1,
      'el-02': Gift2,
      'el-03': Gift3,
      'el-04': Gift4,
      'el-05': Gift5,
    },
    element4: {
      'el-01': Confetti1,
      'el-02': Confetti2,
      'el-03': Confetti3,
      'el-04': Confetti4,
      'el-05': Confetti5,
    },
  },
  wedding: {
    element2: {
      'el-01': Rings1,
      'el-02': Rings2,
      'el-03': Rings3,
      'el-04': Rings4,
      'el-05': Rings5,
    },
    element3: {
      'el-01': Rose1,
      'el-02': Rose2,
      'el-03': Rose3,
      'el-04': Rose4,
      'el-05': Rose5,
    },
    element4: {
      'el-01': Heart1,
      'el-02': Heart2,
      'el-03': Heart3,
      'el-04': Heart4,
      'el-05': Heart5,
    },
  },
  baptism: {
    element2: {
      'el-01': Dove1,
      'el-02': Dove2,
      'el-03': Dove3,
      'el-04': Dove4,
      'el-05': Dove5,
    },
    element3: {
      'el-01': Drop1,
      'el-02': Drop2,
      'el-03': Drop3,
      'el-04': Drop4,
      'el-05': Drop5,
    },
    element4: {
      'el-01': Candle1,
      'el-02': Candle2,
      'el-03': Candle3,
      'el-04': Candle4,
      'el-05': Candle5,
    },
  },
  communion: {
    element2: {
      'el-01': Dove1,
      'el-02': Dove2,
      'el-03': Dove3,
      'el-04': Dove4,
      'el-05': Dove5,
    },
    element3: {
      'el-01': Chalice1,
      'el-02': Chalice2,
      'el-03': Chalice3,
      'el-04': Chalice4,
      'el-05': Chalice5,
    },
    element4: {
      'el-01': Wheat1,
      'el-02': Wheat2,
      'el-03': Wheat3,
      'el-04': Wheat4,
      'el-05': Wheat5,
    },
  },
  'baby-shower': {
    element2: {
      'el-01': Bear1,
      'el-02': Bear2,
      'el-03': Bear3,
      'el-04': Bear4,
      'el-05': Bear5,
    },
    element3: {
      'el-01': Bottle1,
      'el-02': Bottle2,
      'el-03': Bottle3,
      'el-04': Bottle4,
      'el-05': Bottle5,
    },
    element4: {
      'el-01': Cloud1,
      'el-02': Cloud2,
      'el-03': Cloud3,
      'el-04': Cloud4,
      'el-05': Cloud5,
    },
  },
};

export function getElementComponent(
  occasion: string,
  category: string,
  elementId?: string
): React.FC<ElementProps> | null {
  if (!elementId) return null;
  const occasionData = ELEMENTS_BY_CATEGORY[occasion];
  if (!occasionData) return null;
  const categoryData = occasionData[category];
  if (!categoryData) return null;
  return categoryData[elementId] || null;
}