import type { InviteData } from '../types/invite';

// ============================================
// ELEMENTOS EM SVG STRING — para desenhar no PNG
// ============================================

interface ElementSvgParams {
  primaryColor: string;
  accentColor: string;
}

// Cores padrão por ocasião
const OCCASION_COLORS: Record<string, { primary: string; accent: string }> = {
  birthday: { primary: '#e91e63', accent: '#ffd700' },
  wedding: { primary: '#ffffff', accent: '#c9a96e' },
  baptism: { primary: '#ffffff', accent: '#4a90d9' },
  communion: { primary: '#ffffff', accent: '#d4a557' },
  'baby-shower': { primary: '#ffffff', accent: '#e91e63' },
};

// ============================================
// 🎈 BALÕES
// ============================================
const ELEMENT_SVGS: Record<string, Record<string, Record<string, (p: ElementSvgParams) => string>>> = {
  birthday: {
    element2: {
      'el-01': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="40" rx="20" ry="25" fill="${primaryColor}"/><path d="M 50 65 L 50 90" stroke="${accentColor}" stroke-width="1.5"/><ellipse cx="43" cy="32" rx="3" ry="4" fill="#fff" opacity="0.5"/></svg>`,
      'el-02': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="35" cy="35" rx="15" ry="20" fill="${primaryColor}"/><path d="M 35 55 L 35 80" stroke="${accentColor}" stroke-width="1.5"/><ellipse cx="65" cy="45" rx="15" ry="20" fill="${accentColor}"/><path d="M 65 65 L 65 90" stroke="${primaryColor}" stroke-width="1.5"/></svg>`,
      'el-03': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 15 Q 70 15 70 35 Q 70 50 50 65 Q 30 50 30 35 Q 30 15 50 15 Z" fill="${primaryColor}"/><path d="M 50 65 L 50 90" stroke="${accentColor}" stroke-width="1.5"/><circle cx="50" cy="40" r="4" fill="#fff" opacity="0.4"/></svg>`,
      'el-04': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="35" cy="30" rx="14" ry="18" fill="${primaryColor}"/><path d="M 35 48 L 35 70" stroke="${accentColor}" stroke-width="1.5"/><ellipse cx="65" cy="35" rx="14" ry="18" fill="#4caf50"/><path d="M 65 53 L 65 75" stroke="${accentColor}" stroke-width="1.5"/><ellipse cx="50" cy="55" rx="14" ry="18" fill="${accentColor}"/><path d="M 50 73 L 50 95" stroke="${primaryColor}" stroke-width="1.5"/></svg>`,
      'el-05': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 15 L 55 35 L 75 35 L 60 48 L 65 68 L 50 55 L 35 68 L 40 48 L 25 35 L 45 35 Z" fill="${accentColor}"/><circle cx="30" cy="25" r="5" fill="${primaryColor}"/><circle cx="70" cy="25" r="5" fill="#4caf50"/><circle cx="30" cy="70" r="5" fill="#2196f3"/><circle cx="70" cy="70" r="5" fill="#ff9800"/></svg>`,
    },
    element3: {
      'el-01': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="40" width="60" height="45" rx="3" fill="${primaryColor}"/><rect x="20" y="40" width="60" height="10" fill="${accentColor}"/><rect x="45" y="40" width="10" height="45" fill="${accentColor}"/><path d="M 50 40 Q 35 30 40 22 Q 45 15 50 25 Q 55 15 60 22 Q 65 30 50 40 Z" fill="${accentColor}"/></svg>`,
      'el-02': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="15" y="45" width="50" height="40" rx="3" fill="${primaryColor}"/><rect x="15" y="45" width="50" height="8" fill="${accentColor}"/><rect x="35" y="45" width="10" height="40" fill="${accentColor}"/><rect x="50" y="55" width="40" height="30" rx="3" fill="${accentColor}"/><rect x="50" y="55" width="40" height="6" fill="${primaryColor}"/><rect x="66" y="55" width="8" height="30" fill="${primaryColor}"/></svg>`,
      'el-03': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 25 45 L 75 45 L 75 88 L 25 88 Z" fill="${primaryColor}"/><path d="M 25 45 L 75 45 L 70 40 L 30 40 Z" fill="${accentColor}"/><circle cx="50" cy="35" r="8" fill="${accentColor}"/></svg>`,
      'el-04': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="30" y="50" width="40" height="38" rx="2" fill="${primaryColor}"/><rect x="30" y="50" width="40" height="8" fill="${accentColor}"/><rect x="46" y="50" width="8" height="38" fill="${accentColor}"/><path d="M 40 50 L 38 40 L 45 38 L 50 50 Z" fill="${accentColor}"/><path d="M 60 50 L 62 40 L 55 38 L 50 50 Z" fill="${accentColor}"/></svg>`,
      'el-05': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="55" width="60" height="33" rx="2" fill="${accentColor}"/><rect x="20" y="55" width="60" height="6" fill="${primaryColor}"/><rect x="46" y="55" width="8" height="33" fill="${primaryColor}"/><circle cx="50" cy="45" r="10" fill="${primaryColor}"/></svg>`,
    },
    element4: {
      'el-01': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 20 L 53 35 L 68 35 L 56 45 L 60 60 L 50 50 L 40 60 L 44 45 L 32 35 L 47 35 Z" fill="${accentColor}"/><circle cx="25" cy="25" r="3" fill="${primaryColor}"/><circle cx="75" cy="30" r="3" fill="#4caf50"/><circle cx="35" cy="70" r="3" fill="#2196f3"/><circle cx="65" cy="75" r="3" fill="#ff9800"/></svg>`,
      'el-02': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="4" fill="${accentColor}"/><circle cx="50" cy="20" r="4" fill="${primaryColor}"/><circle cx="75" cy="25" r="4" fill="#4caf50"/><circle cx="30" cy="50" r="4" fill="#2196f3"/><circle cx="70" cy="50" r="4" fill="#ff9800"/><circle cx="50" cy="55" r="4" fill="${accentColor}"/><circle cx="25" cy="75" r="4" fill="${primaryColor}"/><circle cx="50" cy="80" r="4" fill="#4caf50"/><circle cx="75" cy="75" r="4" fill="#2196f3"/></svg>`,
      'el-03': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="20" width="4" height="8" fill="${accentColor}" transform="rotate(30 22 24)"/><rect x="40" y="25" width="4" height="8" fill="${primaryColor}" transform="rotate(-20 42 29)"/><rect x="60" y="15" width="4" height="8" fill="#4caf50" transform="rotate(45 62 19)"/><rect x="30" y="55" width="4" height="8" fill="#2196f3" transform="rotate(60 32 59)"/><rect x="55" y="50" width="4" height="8" fill="#ff9800" transform="rotate(-30 57 54)"/><rect x="75" y="45" width="4" height="8" fill="${accentColor}" transform="rotate(15 77 49)"/></svg>`,
      'el-04': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 30 30 L 35 45 L 50 45 L 38 55 L 42 70 L 30 60 L 18 70 L 22 55 L 10 45 L 25 45 Z" fill="${accentColor}"/><path d="M 70 30 L 75 45 L 90 45 L 78 55 L 82 70 L 70 60 L 58 70 L 62 55 L 50 45 L 65 45 Z" fill="${primaryColor}"/></svg>`,
      'el-05': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="30" r="2" fill="${accentColor}"/><circle cx="50" cy="25" r="2" fill="${primaryColor}"/><circle cx="70" cy="30" r="2" fill="#4caf50"/><circle cx="50" cy="55" r="4" fill="${accentColor}"/><path d="M 50 45 L 53 50 L 58 51 L 54 55 L 55 60 L 50 57 L 45 60 L 46 55 L 42 51 L 47 50 Z" fill="${primaryColor}"/></svg>`,
    },
  },
  wedding: {
    element2: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="40" cy="55" r="20" fill="none" stroke="${accentColor}" stroke-width="4"/><circle cx="60" cy="55" r="20" fill="none" stroke="#fff" stroke-width="4"/><circle cx="60" cy="35" r="4" fill="${accentColor}"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="25" fill="none" stroke="${accentColor}" stroke-width="4"/><path d="M 42 30 L 50 20 L 58 30 L 50 40 Z" fill="#fff"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="60" rx="30" ry="8" fill="none" stroke="${accentColor}" stroke-width="3"/><path d="M 30 50 L 50 30 L 70 50" stroke="#fff" stroke-width="3" fill="none"/><circle cx="50" cy="30" r="5" fill="${accentColor}"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="50" r="18" fill="none" stroke="${accentColor}" stroke-width="3"/><circle cx="65" cy="50" r="18" fill="none" stroke="#fff" stroke-width="3"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="55" r="22" fill="none" stroke="${accentColor}" stroke-width="5"/><path d="M 45 40 L 50 25 L 55 40 L 50 45 Z" fill="#fff"/></svg>`,
    },
    element3: {
      'el-01': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="20" fill="${primaryColor}"/><circle cx="50" cy="45" r="13" fill="${accentColor}"/><circle cx="50" cy="45" r="6" fill="${primaryColor}"/><path d="M 50 65 L 50 90" stroke="#4caf50" stroke-width="2"/></svg>`,
      'el-02': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 20 Q 65 30 65 45 Q 65 60 50 65 Q 35 60 35 45 Q 35 30 50 20 Z" fill="${primaryColor}"/><path d="M 50 30 Q 58 35 58 45 Q 58 55 50 58 Q 42 55 42 45 Q 42 35 50 30 Z" fill="${accentColor}"/><path d="M 50 65 L 50 90" stroke="#4caf50" stroke-width="2"/></svg>`,
      'el-03': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 30 40 Q 40 25 55 30 Q 70 35 70 50 Q 70 65 55 70 Q 40 75 30 60 Q 25 50 30 40 Z" fill="${primaryColor}"/><circle cx="50" cy="50" r="10" fill="${accentColor}"/></svg>`,
      'el-04': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="40" r="15" fill="${primaryColor}"/><circle cx="35" cy="40" r="8" fill="${accentColor}"/><circle cx="65" cy="50" r="15" fill="${accentColor}"/><circle cx="65" cy="50" r="8" fill="${primaryColor}"/></svg>`,
      'el-05': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 25 Q 65 25 65 40 Q 65 50 55 55 L 55 80" stroke="#4caf50" stroke-width="2" fill="none"/><path d="M 50 25 Q 35 25 35 40 Q 35 50 45 55 L 45 80" stroke="#4caf50" stroke-width="2" fill="none"/><circle cx="50" cy="30" r="8" fill="${primaryColor}"/><circle cx="50" cy="30" r="4" fill="${accentColor}"/></svg>`,
    },
    element4: {
      'el-01': ({ primaryColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 80 C 50 80 20 60 20 40 C 20 25 30 18 40 18 C 46 18 50 22 50 28 C 50 22 54 18 60 18 C 70 18 80 25 80 40 C 80 60 50 80 50 80 Z" fill="${primaryColor}"/></svg>`,
      'el-02': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 80 C 50 80 20 60 20 40 C 20 25 30 18 40 18 C 46 18 50 22 50 28 C 50 22 54 18 60 18 C 70 18 80 25 80 40 C 80 60 50 80 50 80 Z" fill="${primaryColor}"/><path d="M 50 70 C 50 70 30 55 30 42 C 30 32 36 28 42 28 C 46 28 50 31 50 35 C 50 31 54 28 58 28 C 64 28 70 32 70 42 C 70 55 50 70 50 70 Z" fill="${accentColor}" opacity="0.5"/></svg>`,
      'el-03': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 30 C 50 30 45 20 35 20 C 25 20 20 27 20 35 C 20 50 50 75 50 75 C 50 75 80 50 80 35 C 80 27 75 20 65 20 C 55 20 50 30 50 30 Z" fill="${primaryColor}"/><circle cx="50" cy="45" r="4" fill="${accentColor}"/></svg>`,
      'el-04': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 35 80 C 35 80 10 60 10 40 C 10 25 20 18 30 18 C 35 18 40 22 40 28 C 40 22 45 18 50 18 C 60 18 70 25 70 40 C 70 60 45 80 45 80 Z" fill="${primaryColor}"/><path d="M 55 80 C 55 80 30 60 30 40 C 30 25 40 18 50 18 C 55 18 60 22 60 28 C 60 22 65 18 70 18 C 80 18 90 25 90 40 C 90 60 65 80 65 80 Z" fill="${accentColor}" opacity="0.7"/></svg>`,
      'el-05': ({ primaryColor, accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 30 C 50 30 45 20 35 20 C 25 20 20 27 20 35 C 20 50 50 75 50 75 C 50 75 80 50 80 35 C 80 27 75 20 65 20 C 55 20 50 30 50 30 Z" fill="${primaryColor}"/><path d="M 50 50 L 50 30 M 40 40 L 60 40" stroke="${accentColor}" stroke-width="2"/></svg>`,
    },
  },
  baptism: {
    element2: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 30 50 Q 30 30 50 30 Q 70 30 70 50 Q 70 65 50 70 Q 30 65 30 50 Z" fill="#fff"/><path d="M 50 40 L 45 30 L 50 35 L 55 30 Z" fill="${accentColor}"/><circle cx="45" cy="45" r="1.5" fill="#333"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 20 60 Q 30 40 50 40 Q 70 40 80 60 Q 65 55 50 55 Q 35 55 20 60 Z" fill="#fff"/><path d="M 50 40 L 55 30 L 60 40" fill="${accentColor}"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="25" ry="12" fill="#fff"/><path d="M 45 45 Q 50 30 60 35 Q 55 45 50 48 Z" fill="#fff"/><circle cx="55" cy="42" r="1.5" fill="#333"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 25 Q 65 35 65 55 Q 65 75 50 80 Q 35 75 35 55 Q 35 35 50 25 Z" fill="#fff"/><path d="M 30 55 L 20 50 L 28 58 L 18 60 L 30 62 Z" fill="#fff"/><path d="M 70 55 L 80 50 L 72 58 L 82 60 L 70 62 Z" fill="#fff"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 40 Q 65 45 70 60 Q 55 55 50 55 Q 45 55 30 60 Q 35 45 50 40 Z" fill="#fff"/><circle cx="50" cy="42" r="3" fill="#333"/><path d="M 50 30 Q 48 25 50 22 Q 52 25 50 30 Z" fill="${accentColor}"/></svg>`,
    },
    element3: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 20 Q 70 50 70 65 Q 70 80 50 80 Q 30 80 30 65 Q 30 50 50 20 Z" fill="${accentColor}"/><ellipse cx="42" cy="60" rx="4" ry="6" fill="#fff" opacity="0.5"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 35 25 Q 45 45 45 55 Q 45 65 35 65 Q 25 65 25 55 Q 25 45 35 25 Z" fill="${accentColor}"/><path d="M 65 40 Q 75 60 75 70 Q 75 80 65 80 Q 55 80 55 70 Q 55 60 65 40 Z" fill="${accentColor}"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 15 Q 65 40 65 55 Q 65 70 50 70 Q 35 70 35 55 Q 35 40 50 15 Z" fill="${accentColor}"/><path d="M 30 70 Q 35 80 40 85 Q 35 88 30 85 Q 25 88 20 85 Q 25 80 30 70 Z" fill="${accentColor}" opacity="0.7"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="55" r="20" fill="${accentColor}"/><path d="M 50 20 L 60 50 L 40 50 Z" fill="${accentColor}"/><ellipse cx="42" cy="50" rx="3" ry="5" fill="#fff" opacity="0.5"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 20 Q 60 40 60 50 Q 60 60 50 60 Q 40 60 40 50 Q 40 40 50 20 Z" fill="${accentColor}"/><path d="M 35 55 Q 42 70 42 78 Q 42 85 35 85 Q 28 85 28 78 Q 28 70 35 55 Z" fill="${accentColor}" opacity="0.7"/><path d="M 65 55 Q 72 70 72 78 Q 72 85 65 85 Q 58 85 58 78 Q 58 70 65 55 Z" fill="${accentColor}" opacity="0.7"/></svg>`,
    },
    element4: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="42" y="40" width="16" height="45" rx="2" fill="${accentColor}"/><path d="M 50 40 Q 45 30 50 20 Q 55 30 50 40 Z" fill="#ffd700"/><ellipse cx="50" cy="30" rx="4" ry="8" fill="#ff5722" opacity="0.8"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="35" y="45" width="12" height="35" rx="2" fill="#ffd700"/><path d="M 41 45 Q 37 38 41 30 Q 45 38 41 45 Z" fill="#ff9800"/><rect x="53" y="45" width="12" height="35" rx="2" fill="#ffd700"/><path d="M 59 45 Q 55 38 59 30 Q 63 38 59 45 Z" fill="#ff9800"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="80" rx="20" ry="5" fill="${accentColor}"/><rect x="44" y="45" width="12" height="35" fill="#ffd700"/><path d="M 50 45 Q 45 35 50 25 Q 55 35 50 45 Z" fill="#ff9800"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="45" y="30" width="10" height="55" rx="2" fill="#ffd700"/><path d="M 50 30 Q 46 20 50 12 Q 54 20 50 30 Z" fill="#ff9800"/><rect x="40" y="85" width="20" height="4" rx="1" fill="${accentColor}"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="30" y="50" width="10" height="30" rx="2" fill="#ffd700"/><path d="M 35 50 Q 31 42 35 34 Q 39 42 35 50 Z" fill="#ff9800"/><rect x="60" y="50" width="10" height="30" rx="2" fill="#ffd700"/><path d="M 65 50 Q 61 42 65 34 Q 69 42 65 50 Z" fill="#ff9800"/><rect x="45" y="55" width="10" height="25" rx="2" fill="#ffd700"/><path d="M 50 55 Q 46 47 50 40 Q 54 47 50 55 Z" fill="#ff9800"/></svg>`,
    },
  },
  communion: {
    element2: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 30 50 Q 30 30 50 30 Q 70 30 70 50 Q 70 65 50 70 Q 30 65 30 50 Z" fill="#fff"/><path d="M 50 40 L 45 30 L 50 35 L 55 30 Z" fill="${accentColor}"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 20 60 Q 30 40 50 40 Q 70 40 80 60 Q 65 55 50 55 Q 35 55 20 60 Z" fill="#fff"/><path d="M 50 40 L 55 30 L 60 40" fill="${accentColor}"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="25" ry="12" fill="#fff"/><path d="M 45 45 Q 50 30 60 35 Q 55 45 50 48 Z" fill="#fff"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 25 Q 65 35 65 55 Q 65 75 50 80 Q 35 75 35 55 Q 35 35 50 25 Z" fill="#fff"/><path d="M 30 55 L 20 50 L 28 58 L 18 60 L 30 62 Z" fill="#fff"/><path d="M 70 55 L 80 50 L 72 58 L 82 60 L 70 62 Z" fill="#fff"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 40 Q 65 45 70 60 Q 55 55 50 55 Q 45 55 30 60 Q 35 45 50 40 Z" fill="#fff"/><path d="M 50 30 Q 48 25 50 22 Q 52 25 50 30 Z" fill="${accentColor}"/></svg>`,
    },
    element3: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 35 30 L 35 50 Q 35 65 50 65 Q 65 65 65 50 L 65 30 Z" fill="${accentColor}"/><rect x="48" y="65" width="4" height="20" fill="${accentColor}"/><rect x="35" y="85" width="30" height="4" rx="2" fill="${accentColor}"/><ellipse cx="50" cy="30" rx="15" ry="3" fill="#8b5a2b"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 30 25 L 30 55 Q 30 70 50 70 Q 70 70 70 55 L 70 25 Z" fill="${accentColor}"/><rect x="48" y="70" width="4" height="18" fill="${accentColor}"/><ellipse cx="50" cy="90" rx="20" ry="4" fill="${accentColor}"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 40 25 L 40 50 L 60 50 L 60 25 Z" fill="${accentColor}"/><path d="M 40 50 Q 40 65 50 70 Q 60 65 60 50" fill="${accentColor}"/><rect x="48" y="70" width="4" height="20" fill="${accentColor}"/><path d="M 35 90 L 65 90 L 60 85 L 40 85 Z" fill="${accentColor}"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 35 20 Q 35 55 50 60 Q 65 55 65 20 Z" fill="${accentColor}"/><rect x="48" y="60" width="4" height="25" fill="${accentColor}"/><ellipse cx="50" cy="90" rx="18" ry="3" fill="${accentColor}"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 40 25 L 40 45 Q 40 55 50 55 Q 60 55 60 45 L 60 25 Z" fill="${accentColor}"/><path d="M 35 20 L 65 20 L 60 25 L 40 25 Z" fill="#8b5a2b"/><rect x="48" y="55" width="4" height="25" fill="${accentColor}"/><rect x="40" y="80" width="20" height="4" rx="2" fill="${accentColor}"/></svg>`,
    },
    element4: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 90 L 50 20" stroke="#8b5a2b" stroke-width="2"/><ellipse cx="45" cy="30" rx="4" ry="8" fill="${accentColor}" transform="rotate(-30 45 30)"/><ellipse cx="55" cy="30" rx="4" ry="8" fill="${accentColor}" transform="rotate(30 55 30)"/><ellipse cx="45" cy="45" rx="4" ry="8" fill="${accentColor}" transform="rotate(-30 45 45)"/><ellipse cx="55" cy="45" rx="4" ry="8" fill="${accentColor}" transform="rotate(30 55 45)"/><ellipse cx="45" cy="60" rx="4" ry="8" fill="${accentColor}" transform="rotate(-30 45 60)"/><ellipse cx="55" cy="60" rx="4" ry="8" fill="${accentColor}" transform="rotate(30 55 60)"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 35 90 L 35 30 M 65 90 L 65 30" stroke="#8b5a2b" stroke-width="2"/><ellipse cx="35" cy="30" rx="5" ry="10" fill="${accentColor}"/><ellipse cx="65" cy="30" rx="5" ry="10" fill="${accentColor}"/><ellipse cx="35" cy="50" rx="5" ry="10" fill="${accentColor}"/><ellipse cx="65" cy="50" rx="5" ry="10" fill="${accentColor}"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 90 Q 50 50 30 30" stroke="#8b5a2b" stroke-width="2" fill="none"/><path d="M 50 90 Q 50 50 70 30" stroke="#8b5a2b" stroke-width="2" fill="none"/><ellipse cx="30" cy="30" rx="4" ry="8" fill="${accentColor}"/><ellipse cx="70" cy="30" rx="4" ry="8" fill="${accentColor}"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50 90 L 50 40" stroke="#8b5a2b" stroke-width="2"/><circle cx="50" cy="35" r="8" fill="${accentColor}"/><ellipse cx="42" cy="45" rx="4" ry="8" fill="${accentColor}" transform="rotate(-20 42 45)"/><ellipse cx="58" cy="45" rx="4" ry="8" fill="${accentColor}" transform="rotate(20 58 45)"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 40 90 Q 40 60 30 40 M 60 90 Q 60 60 70 40" stroke="#8b5a2b" stroke-width="2" fill="none"/><ellipse cx="30" cy="35" rx="5" ry="10" fill="${accentColor}"/><ellipse cx="70" cy="35" rx="5" ry="10" fill="${accentColor}"/><ellipse cx="50" cy="90" rx="8" ry="3" fill="#8b5a2b" opacity="0.5"/></svg>`,
    },
  },
  'baby-shower': {
    element2: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="60" r="20" fill="#a1887f"/><circle cx="35" cy="40" r="8" fill="#a1887f"/><circle cx="65" cy="40" r="8" fill="#a1887f"/><circle cx="35" cy="40" r="5" fill="#8d6e63"/><circle cx="65" cy="40" r="5" fill="#8d6e63"/><circle cx="43" cy="60" r="2" fill="#fff"/><circle cx="57" cy="60" r="2" fill="#fff"/><ellipse cx="50" cy="68" rx="3" ry="2" fill="#8d6e63"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="65" rx="18" ry="22" fill="#a1887f"/><circle cx="38" cy="42" r="7" fill="#a1887f"/><circle cx="62" cy="42" r="7" fill="#a1887f"/><circle cx="50" cy="58" r="12" fill="#8d6e63"/><circle cx="45" cy="60" r="1.5" fill="#fff"/><circle cx="55" cy="60" r="1.5" fill="#fff"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="55" r="18" fill="#a1887f"/><circle cx="38" cy="35" r="6" fill="#a1887f"/><circle cx="62" cy="35" r="6" fill="#a1887f"/><circle cx="44" cy="52" r="2" fill="#fff"/><circle cx="56" cy="52" r="2" fill="#fff"/><circle cx="50" cy="60" r="3" fill="#8d6e63"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="65" rx="20" ry="18" fill="#a1887f"/><circle cx="50" cy="42" r="14" fill="#a1887f"/><circle cx="38" cy="35" r="5" fill="#a1887f"/><circle cx="62" cy="35" r="5" fill="#a1887f"/><circle cx="45" cy="42" r="1.5" fill="#fff"/><circle cx="55" cy="42" r="1.5" fill="#fff"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="40" cy="55" r="15" fill="#a1887f"/><circle cx="60" cy="55" r="15" fill="#a1887f"/><circle cx="40" cy="40" r="6" fill="#a1887f"/><circle cx="60" cy="40" r="6" fill="#a1887f"/><circle cx="40" cy="52" r="1.5" fill="#fff"/><circle cx="60" cy="52" r="1.5" fill="#fff"/><circle cx="50" cy="65" r="4" fill="#8d6e63"/></svg>`,
    },
    element3: {
      'el-01': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="42" y="30" width="16" height="50" rx="4" fill="#fce4ec"/><rect x="42" y="55" width="16" height="25" fill="${accentColor}"/><rect x="45" y="18" width="10" height="12" rx="2" fill="${accentColor}"/><ellipse cx="50" cy="18" rx="6" ry="3" fill="${accentColor}"/></svg>`,
      'el-02': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 40 35 L 40 80 Q 40 85 45 85 L 55 85 Q 60 85 60 80 L 60 35 Z" fill="#fce4ec"/><path d="M 40 60 L 40 80 Q 40 85 45 85 L 55 85 Q 60 85 60 80 L 60 60 Z" fill="${accentColor}"/><rect x="44" y="20" width="12" height="15" rx="3" fill="${accentColor}"/><ellipse cx="50" cy="20" rx="8" ry="3" fill="${accentColor}"/></svg>`,
      'el-03': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="40" y="35" width="20" height="45" rx="5" fill="#fce4ec"/><path d="M 42 55 Q 42 65 50 65 Q 58 65 58 55 L 58 35 L 42 35 Z" fill="${accentColor}"/><rect x="46" y="20" width="8" height="15" rx="2" fill="${accentColor}"/><circle cx="50" cy="20" r="4" fill="${accentColor}"/></svg>`,
      'el-04': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 42 25 Q 42 20 50 20 Q 58 20 58 25 L 58 40 Q 62 45 62 55 L 62 75 Q 62 82 55 82 L 45 82 Q 38 82 38 75 L 38 55 Q 38 45 42 40 Z" fill="#fce4ec"/><path d="M 42 55 L 42 75 Q 42 82 45 82 L 55 82 Q 58 82 58 75 L 58 55 Z" fill="${accentColor}"/><circle cx="50" cy="30" r="2" fill="${accentColor}"/></svg>`,
      'el-05': ({ accentColor }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="35" y="40" width="14" height="40" rx="4" fill="#fce4ec"/><rect x="35" y="60" width="14" height="20" fill="${accentColor}"/><rect x="38" y="28" width="8" height="12" rx="2" fill="${accentColor}"/><rect x="52" y="40" width="14" height="40" rx="4" fill="#fce4ec"/><rect x="52" y="60" width="14" height="20" fill="${accentColor}"/><rect x="55" y="28" width="8" height="12" rx="2" fill="${accentColor}"/></svg>`,
    },
    element4: {
      'el-01': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="55" r="12" fill="#fff"/><circle cx="50" cy="50" r="15" fill="#fff"/><circle cx="65" cy="55" r="12" fill="#fff"/><rect x="35" y="55" width="30" height="12" fill="#fff"/></svg>`,
      'el-02': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="55" r="10" fill="#fff"/><circle cx="50" cy="48" r="13" fill="#fff"/><circle cx="65" cy="55" r="10" fill="#fff"/><rect x="35" y="55" width="30" height="10" fill="#fff"/></svg>`,
      'el-03': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="50" r="9" fill="#fff"/><circle cx="45" cy="45" r="12" fill="#fff"/><circle cx="60" cy="45" r="12" fill="#fff"/><circle cx="75" cy="50" r="9" fill="#fff"/><rect x="30" y="50" width="45" height="9" fill="#fff"/></svg>`,
      'el-04': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="40" cy="50" r="10" fill="#fff"/><circle cx="55" cy="48" r="12" fill="#fff"/><circle cx="68" cy="52" r="9" fill="#fff"/><rect x="40" y="50" width="28" height="10" fill="#fff"/></svg>`,
      'el-05': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="60" r="8" fill="#fff"/><circle cx="42" cy="55" r="10" fill="#fff"/><circle cx="58" cy="55" r="10" fill="#fff"/><circle cx="70" cy="60" r="8" fill="#fff"/><rect x="30" y="60" width="40" height="8" fill="#fff"/></svg>`,
    },
  },
};

/**
 * Devolve a string SVG do elemento escolhido
 */
export function getElementSvgString(
  data: InviteData,
  category: 'element2' | 'element3' | 'element4'
): string | null {
  const idKey = `${category}Id` as keyof InviteData;
  const elementId = data[idKey] as string | undefined;
  if (!elementId) return null;

  const occasionData = ELEMENT_SVGS[data.occasion];
  if (!occasionData) return null;

  const categoryData = occasionData[category];
  if (!categoryData) return null;

  const svgFn = categoryData[elementId];
  if (!svgFn) return null;

  // Cores por ocasião (aniversário usa as custom)
  if (data.occasion === 'birthday') {
    return svgFn({
      primaryColor: data.primaryColor,
      accentColor: data.secondaryColor,
    });
  }

  const colors = OCCASION_COLORS[data.occasion] || OCCASION_COLORS.birthday;
  return svgFn({
    primaryColor: colors.primary,
    accentColor: colors.accent,
  });
}