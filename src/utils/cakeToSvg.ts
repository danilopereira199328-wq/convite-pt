import type { InviteData } from '../types/invite';

// ============================================
// MAPA DE BOLOS POR OCASIÃO (SVG strings)
// Cada bolo é uma string SVG que o canvas consegue desenhar
// ============================================

interface CakeSvgParams {
  primaryColor: string;
  accentColor: string;
}

// 🎂 ANIVERSÁRIO
function cakeBirthday1({ primaryColor, accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill="${accentColor}" opacity="0.4"/>
    <rect x="15" y="65" width="70" height="22" rx="3" fill="${primaryColor}"/>
    <ellipse cx="50" cy="65" rx="35" ry="4" fill="${accentColor}"/>
    <circle cx="25" cy="76" r="1.5" fill="${accentColor}"/>
    <circle cx="40" cy="76" r="1.5" fill="${accentColor}"/>
    <circle cx="60" cy="76" r="1.5" fill="${accentColor}"/>
    <circle cx="75" cy="76" r="1.5" fill="${accentColor}"/>
    <rect x="25" y="45" width="50" height="22" rx="3" fill="#fff" stroke="${primaryColor}" stroke-width="1.5"/>
    <ellipse cx="50" cy="45" rx="25" ry="3" fill="${primaryColor}"/>
    <rect x="35" y="30" width="3" height="15" fill="${accentColor}"/>
    <rect x="48.5" y="30" width="3" height="15" fill="${accentColor}"/>
    <rect x="62" y="30" width="3" height="15" fill="${accentColor}"/>
    <ellipse cx="36.5" cy="27" rx="2" ry="3" fill="#ff5722"/>
    <ellipse cx="50" cy="27" rx="2" ry="3" fill="#ff5722"/>
    <ellipse cx="63.5" cy="27" rx="2" ry="3" fill="#ff5722"/>
  </svg>`;
}

function cakeBirthday2({ primaryColor, accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="88" rx="40" ry="4" fill="${accentColor}" opacity="0.4"/>
    <ellipse cx="50" cy="70" rx="35" ry="18" fill="${primaryColor}"/>
    <rect x="15" y="70" width="70" height="15" fill="${primaryColor}"/>
    <ellipse cx="50" cy="85" rx="35" ry="4" fill="${primaryColor}"/>
    <path d="M 15 70 Q 25 65 35 70 Q 45 65 55 70 Q 65 65 75 70 Q 82 67 85 70" stroke="${accentColor}" stroke-width="3" fill="none"/>
    <text x="50" y="80" text-anchor="middle" font-size="20" font-weight="bold" fill="${accentColor}">1</text>
    <circle cx="30" cy="75" r="1" fill="${accentColor}"/>
    <circle cx="70" cy="72" r="1" fill="${accentColor}"/>
  </svg>`;
}

function cakeBirthday3({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill="${accentColor}" opacity="0.4"/>
    <rect x="20" y="60" width="60" height="25" rx="3" fill="#6d4c41"/>
    <rect x="20" y="60" width="60" height="5" fill="#4e342e"/>
    <path d="M 20 60 Q 50 55 80 60" stroke="#4e342e" stroke-width="4" fill="none"/>
    <circle cx="30" cy="58" r="4" fill="#f44336"/>
    <circle cx="50" cy="56" r="4" fill="#f44336"/>
    <circle cx="70" cy="58" r="4" fill="#f44336"/>
    <circle cx="30" cy="65" r="1" fill="${accentColor}"/>
    <circle cx="50" cy="65" r="1" fill="${accentColor}"/>
    <circle cx="70" cy="65" r="1" fill="${accentColor}"/>
  </svg>`;
}

function cakeBirthday4({ primaryColor, accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M 30 60 L 35 88 L 65 88 L 70 60 Z" fill="${accentColor}"/>
    <ellipse cx="50" cy="55" rx="22" ry="15" fill="${primaryColor}"/>
    <path d="M 35 55 Q 40 48 45 55 Q 50 48 55 55 Q 60 48 65 55" stroke="#fff" stroke-width="1.5" fill="none"/>
    <circle cx="50" cy="40" r="4" fill="#f44336"/>
    <path d="M 50 36 Q 52 30 55 28" stroke="#4caf50" stroke-width="1.5" fill="none"/>
  </svg>`;
}

function cakeBirthday5({ primaryColor, accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="88" rx="42" ry="4" fill="${accentColor}" opacity="0.4"/>
    <rect x="15" y="70" width="70" height="15" rx="2" fill="${primaryColor}"/>
    <rect x="25" y="55" width="50" height="15" rx="2" fill="#fff" stroke="${primaryColor}" stroke-width="1"/>
    <rect x="35" y="40" width="30" height="15" rx="2" fill="${primaryColor}"/>
    <circle cx="25" cy="77" r="1.5" fill="${accentColor}"/>
    <circle cx="50" cy="77" r="1.5" fill="${accentColor}"/>
    <circle cx="75" cy="77" r="1.5" fill="${accentColor}"/>
    <circle cx="50" cy="47" r="1.5" fill="${accentColor}"/>
    <circle cx="50" cy="35" r="4" fill="${accentColor}"/>
  </svg>`;
}

// 💍 CASAMENTO
function cakeWedding1({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="15" y="75" width="70" height="15" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="25" y="55" width="50" height="20" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="35" y="35" width="30" height="20" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <circle cx="45" cy="28" r="3" fill="${accentColor}"/>
    <circle cx="55" cy="28" r="3" fill="${accentColor}"/>
    <path d="M 45 31 L 55 31" stroke="${accentColor}" stroke-width="0.8"/>
  </svg>`;
}

function cakeWedding2({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <path d="M 50 80 C 50 80 20 60 20 45 C 20 35 28 30 35 30 C 42 30 50 38 50 45 C 50 38 58 30 65 30 C 72 30 80 35 80 45 C 80 60 50 80 50 80 Z" fill="#fff" stroke="${accentColor}" stroke-width="1.5"/>
    <circle cx="35" cy="50" r="2" fill="${accentColor}"/>
    <circle cx="65" cy="50" r="2" fill="${accentColor}"/>
    <circle cx="50" cy="65" r="2" fill="${accentColor}"/>
  </svg>`;
}

function cakeWedding3({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="1" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="28" y="55" width="44" height="17" rx="1" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="38" y="38" width="24" height="17" rx="1" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <circle cx="25" cy="80" r="2.5" fill="${accentColor}" opacity="0.7"/>
    <circle cx="75" cy="80" r="2.5" fill="${accentColor}" opacity="0.7"/>
    <circle cx="50" cy="46" r="2.5" fill="${accentColor}" opacity="0.7"/>
    <path d="M 50 38 L 45 30 L 50 25 L 55 30 Z" fill="${accentColor}"/>
  </svg>`;
}

function cakeWedding4({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="20" y="70" width="60" height="18" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1.5"/>
    <rect x="30" y="52" width="40" height="18" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1.5"/>
    <line x1="20" y1="72" x2="80" y2="72" stroke="${accentColor}" stroke-width="0.8"/>
    <line x1="30" y1="54" x2="70" y2="54" stroke="${accentColor}" stroke-width="0.8"/>
    <path d="M 45 48 L 50 42 L 55 48" stroke="${accentColor}" stroke-width="1.5" fill="none"/>
  </svg>`;
}

function cakeWedding5({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="28" y="55" width="44" height="17" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <circle cx="30" cy="50" r="3" fill="${accentColor}"/>
    <circle cx="40" cy="48" r="3" fill="${accentColor}"/>
    <circle cx="60" cy="48" r="3" fill="${accentColor}"/>
    <circle cx="70" cy="50" r="3" fill="${accentColor}"/>
  </svg>`;
}

// 💧 BATIZADO
function cakeBaptism1({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#e3f2fd" stroke="${accentColor}" stroke-width="1"/>
    <rect x="30" y="52" width="40" height="20" rx="2" fill="#e3f2fd" stroke="${accentColor}" stroke-width="1"/>
    <rect x="48" y="30" width="4" height="20" fill="${accentColor}"/>
    <rect x="42" y="36" width="16" height="4" fill="${accentColor}"/>
  </svg>`;
}

function cakeBaptism2({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <ellipse cx="50" cy="70" rx="35" ry="18" fill="${accentColor}"/>
    <rect x="15" y="70" width="70" height="15" fill="${accentColor}"/>
    <ellipse cx="50" cy="85" rx="35" ry="4" fill="${accentColor}"/>
    <path d="M 15 70 Q 25 65 35 70 Q 45 65 55 70 Q 65 65 75 70 Q 82 68 85 70" stroke="#fff" stroke-width="2" fill="none"/>
    <circle cx="30" cy="77" r="1.5" fill="#fff"/>
    <circle cx="50" cy="77" r="1.5" fill="#fff"/>
    <circle cx="70" cy="77" r="1.5" fill="#fff"/>
  </svg>`;
}

function cakeBaptism3({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="20" y="72" width="60" height="16" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="30" y="55" width="40" height="17" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="40" y="40" width="20" height="15" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <path d="M 45 32 Q 40 25 50 22 Q 55 25 55 32 Q 60 30 62 35 Q 55 35 50 32 Q 48 35 45 32 Z" fill="#fff" stroke="${accentColor}" stroke-width="0.8"/>
  </svg>`;
}

function cakeBaptism4({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="20" y="70" width="60" height="18" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <ellipse cx="50" cy="58" rx="15" ry="10" fill="#ffd9ba"/>
    <circle cx="50" cy="58" r="8" fill="#ffcc99"/>
    <path d="M 45 55 Q 47 53 49 55" stroke="#333" stroke-width="0.5" fill="none"/>
    <path d="M 51 55 Q 53 53 55 55" stroke="#333" stroke-width="0.5" fill="none"/>
    <path d="M 48 61 Q 50 63 52 61" stroke="#333" stroke-width="0.5" fill="none"/>
  </svg>`;
}

function cakeBaptism5({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <rect x="28" y="55" width="44" height="17" rx="2" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <path d="M 45 45 Q 40 40 45 35 Q 50 38 50 45 Q 50 38 55 35 Q 60 40 55 45 Q 50 48 45 45 Z" fill="#fff" stroke="${accentColor}" stroke-width="0.8"/>
    <circle cx="50" cy="35" r="3" fill="#ffd9ba"/>
  </svg>`;
}

// 🕊️ COMUNHÃO
function cakeCommunion1({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1"/>
    <rect x="28" y="55" width="44" height="17" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1"/>
    <path d="M 42 50 L 42 40 L 58 40 L 58 50 Q 50 55 42 50 Z" fill="${accentColor}"/>
    <rect x="48" y="30" width="4" height="10" fill="${accentColor}"/>
    <rect x="42" y="28" width="16" height="2" fill="${accentColor}"/>
    <circle cx="50" cy="25" r="4" fill="#fff" stroke="${accentColor}" stroke-width="0.8"/>
  </svg>`;
}

function cakeCommunion2({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1.5"/>
    <rect x="28" y="55" width="44" height="17" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1.5"/>
    <rect x="38" y="40" width="24" height="15" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1.5"/>
    <path d="M 45 33 Q 38 25 50 22 Q 58 22 55 30 Q 58 28 60 32 Q 55 32 50 30 Q 48 33 45 33 Z" fill="${accentColor}"/>
  </svg>`;
}

function cakeCommunion3({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="20" y="72" width="60" height="16" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1"/>
    <rect x="30" y="55" width="40" height="17" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1"/>
    <rect x="48" y="35" width="4" height="20" fill="${accentColor}"/>
    <rect x="42" y="41" width="16" height="4" fill="${accentColor}"/>
  </svg>`;
}

function cakeCommunion4({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <path d="M 20 88 Q 20 72 30 68 L 70 68 Q 80 72 80 88 Z" fill="#fff9f0" stroke="${accentColor}" stroke-width="1"/>
    <rect x="30" y="55" width="40" height="13" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1"/>
    <path d="M 25 75 Q 35 70 45 75 Q 55 70 65 75 Q 70 72 75 75" stroke="${accentColor}" stroke-width="0.8" fill="none"/>
    <circle cx="50" cy="60" r="2" fill="${accentColor}"/>
  </svg>`;
}

function cakeCommunion5({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#fff9f0" stroke="${accentColor}" stroke-width="1"/>
    <circle cx="45" cy="50" r="3" fill="#9c27b0"/>
    <circle cx="53" cy="50" r="3" fill="#9c27b0"/>
    <circle cx="49" cy="45" r="3" fill="#9c27b0"/>
    <circle cx="49" cy="55" r="3" fill="#9c27b0"/>
    <path d="M 50 42 Q 52 38 55 38" stroke="#4caf50" stroke-width="1" fill="none"/>
  </svg>`;
}

// 👶 BABY SHOWER
function cakeBaby1({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="20" y="72" width="60" height="16" rx="2" fill="#fce4ec" stroke="${accentColor}" stroke-width="1"/>
    <circle cx="50" cy="55" r="15" fill="#a1887f"/>
    <circle cx="38" cy="45" r="5" fill="#a1887f"/>
    <circle cx="62" cy="45" r="5" fill="#a1887f"/>
    <circle cx="38" cy="45" r="3" fill="#8d6e63"/>
    <circle cx="62" cy="45" r="3" fill="#8d6e63"/>
    <circle cx="45" cy="55" r="1.5" fill="#333"/>
    <circle cx="55" cy="55" r="1.5" fill="#333"/>
    <ellipse cx="50" cy="61" rx="2" ry="1.5" fill="#333"/>
  </svg>`;
}

function cakeBaby2({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#fce4ec" stroke="${accentColor}" stroke-width="1"/>
    <rect x="28" y="55" width="44" height="17" rx="2" fill="#fce4ec" stroke="${accentColor}" stroke-width="1"/>
    <circle cx="50" cy="42" r="8" fill="none" stroke="${accentColor}" stroke-width="2"/>
    <circle cx="50" cy="42" r="3" fill="${accentColor}"/>
    <rect x="48" y="32" width="4" height="6" fill="${accentColor}"/>
    <rect x="42" y="28" width="16" height="4" rx="2" fill="${accentColor}"/>
  </svg>`;
}

function cakeBaby3({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <ellipse cx="50" cy="70" rx="35" ry="18" fill="${accentColor}"/>
    <rect x="15" y="70" width="70" height="15" fill="${accentColor}"/>
    <ellipse cx="50" cy="85" rx="35" ry="4" fill="${accentColor}"/>
    <circle cx="42" cy="42" r="6" fill="#fff"/>
    <circle cx="50" cy="38" r="8" fill="#fff"/>
    <circle cx="58" cy="42" r="6" fill="#fff"/>
    <circle cx="50" cy="48" r="7" fill="#fff"/>
  </svg>`;
}

function cakeBaby4({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="18" y="72" width="64" height="16" rx="2" fill="#fce4ec" stroke="${accentColor}" stroke-width="1"/>
    <path d="M 30 65 Q 30 45 50 45 Q 70 45 70 65 Z" fill="${accentColor}"/>
    <circle cx="35" cy="75" r="4" fill="#333"/>
    <circle cx="65" cy="75" r="4" fill="#333"/>
    <path d="M 30 65 L 25 55 L 35 55" stroke="#fce4ec" stroke-width="1.5" fill="none"/>
  </svg>`;
}

function cakeBaby5({ accentColor }: CakeSvgParams): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="42" ry="4" fill="${accentColor}" opacity="0.3"/>
    <rect x="20" y="72" width="60" height="16" rx="2" fill="#fce4ec" stroke="${accentColor}" stroke-width="1"/>
    <path d="M 35 70 L 35 55 L 65 55 L 65 70 Q 50 75 35 70 Z" fill="#fff" stroke="${accentColor}" stroke-width="1"/>
    <path d="M 45 60 L 55 60 M 50 55 L 50 65" stroke="${accentColor}" stroke-width="1.5"/>
    <path d="M 50 45 C 50 45 42 38 42 33 C 42 30 44 28 47 28 C 49 28 50 30 50 31 C 50 30 51 28 53 28 C 56 28 58 30 58 33 C 58 38 50 45 50 45 Z" fill="${accentColor}"/>
  </svg>`;
}

// ============================================
// MAPEAMENTO PRINCIPAL
// ============================================

const CAKE_SVG_MAP: Record<string, Record<string, (params: CakeSvgParams) => string>> = {
  birthday: {
    'cake-01': cakeBirthday1,
    'cake-02': cakeBirthday2,
    'cake-03': cakeBirthday3,
    'cake-04': cakeBirthday4,
    'cake-05': cakeBirthday5,
  },
  wedding: {
    'cake-01': cakeWedding1,
    'cake-02': cakeWedding2,
    'cake-03': cakeWedding3,
    'cake-04': cakeWedding4,
    'cake-05': cakeWedding5,
  },
  baptism: {
    'cake-01': cakeBaptism1,
    'cake-02': cakeBaptism2,
    'cake-03': cakeBaptism3,
    'cake-04': cakeBaptism4,
    'cake-05': cakeBaptism5,
  },
  communion: {
    'cake-01': cakeCommunion1,
    'cake-02': cakeCommunion2,
    'cake-03': cakeCommunion3,
    'cake-04': cakeCommunion4,
    'cake-05': cakeCommunion5,
  },
  'baby-shower': {
    'cake-01': cakeBaby1,
    'cake-02': cakeBaby2,
    'cake-03': cakeBaby3,
    'cake-04': cakeBaby4,
    'cake-05': cakeBaby5,
  },
};

// Cores por ocasião (para o PNG)
const OCCASION_CAKE_COLORS: Record<string, { primary: string; accent: string }> = {
  birthday: { primary: '#e91e63', accent: '#ffd700' },
  wedding: { primary: '#ffffff', accent: '#c9a96e' },
  baptism: { primary: '#ffffff', accent: '#4a90d9' },
  communion: { primary: '#ffffff', accent: '#d4a557' },
  'baby-shower': { primary: '#ffffff', accent: '#e91e63' },
};

/**
 * Devolve a string SVG do bolo escolhido
 */
export function getCakeSvgString(data: InviteData): string | null {
  if (!data.cakeId) return null;

  const occasionCakes = CAKE_SVG_MAP[data.occasion];
  if (!occasionCakes) return null;

  const cakeFn = occasionCakes[data.cakeId];
  if (!cakeFn) return null;

  const colors = OCCASION_CAKE_COLORS[data.occasion] || OCCASION_CAKE_COLORS.birthday;

  // Para aniversário usa as cores personalizadas
  if (data.occasion === 'birthday') {
    return cakeFn({
      primaryColor: data.primaryColor,
      accentColor: data.secondaryColor,
    });
  }

  return cakeFn({
    primaryColor: colors.primary,
    accentColor: colors.accent,
  });
}

/**
 * Converte string SVG para Image (para usar com canvas)
 */
export async function svgStringToImage(svgString: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };

    img.src = url;
  });
}