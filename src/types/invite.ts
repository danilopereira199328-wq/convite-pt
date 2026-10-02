export type OccasionType =
  | 'birthday'
  | 'wedding'
  | 'baptism'
  | 'communion'
  | 'baby-shower';

export type PhotoShape = 'circle' | 'square' | 'heart';

export type FontFamily = 'playfair' | 'cormorant' | 'montserrat' | 'lora';

export interface InviteData {
  occasion: OccasionType;
  templateId: string;

  eventTitle: string;
  honoreeName: string;
  age?: number;

  date: string;
  time: string;

  venueName: string;
  venueAddress: string;
  venueCity: string;

  message: string;

  dressCode?: string;
  rsvpContact?: string;

  // 🎨 Cores personalizáveis (4)
  primaryColor: string;    // Cor principal (fundo/gradiente)
  secondaryColor: string;  // Cor secundária (gradiente/acentos)
  textColor?: string;      // Cor do texto principal (opcional)
  accentColor?: string;    // Cor de destaque (bordas, elementos - opcional)

  photo?: string;
  photoShape?: PhotoShape;

  fontFamily?: FontFamily;

  // Decorações
  cakeId?: string;
  element2Id?: string;
  element3Id?: string;
  element4Id?: string;
}