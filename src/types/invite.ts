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

  primaryColor: string;
  secondaryColor: string;

  photo?: string;
  photoShape?: PhotoShape;

  fontFamily?: FontFamily;
}