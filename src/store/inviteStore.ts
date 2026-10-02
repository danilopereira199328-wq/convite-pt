import { create } from 'zustand';
import type { InviteData, OccasionType } from '../types/invite';

interface InviteStore {
  data: InviteData;
  step: number;

  setOccasion: (occasion: OccasionType) => void;
  setTemplate: (templateId: string) => void;
  updateField: <K extends keyof InviteData>(field: K, value: InviteData[K]) => void;
  resetColors: () => void;
  setStep: (step: number) => void;
  reset: () => void;
}

const initialData: InviteData = {
  occasion: 'birthday',
  templateId: 'birthday-01',
  eventTitle: '',
  honoreeName: '',
  date: '',
  time: '',
  venueName: '',
  venueAddress: '',
  venueCity: '',
  message: '',
  primaryColor: '#e91e63',
  secondaryColor: '#ffd700',
  textColor: '#ffffff',
  accentColor: '#ffd700',
  photo: undefined,
  photoShape: 'circle',
  fontFamily: 'playfair',
  cakeId: undefined,
  element2Id: undefined,
  element3Id: undefined,
  element4Id: undefined,
};

export const useInviteStore = create<InviteStore>((set) => ({
  data: initialData,
  step: 1,

  setOccasion: (occasion) =>
    set((state) => ({
      data: {
        ...state.data,
        occasion,
        templateId: `${occasion}-01`,
        cakeId: undefined,
        element2Id: undefined,
        element3Id: undefined,
        element4Id: undefined,
      },
    })),

  setTemplate: (templateId) =>
    set((state) => ({ data: { ...state.data, templateId } })),

  updateField: (field, value) =>
    set((state) => ({ data: { ...state.data, [field]: value } })),

  resetColors: () =>
    set((state) => ({
      data: {
        ...state.data,
        primaryColor: '#e91e63',
        secondaryColor: '#ffd700',
        textColor: '#ffffff',
        accentColor: '#ffd700',
      },
    })),

  setStep: (step) => set({ step }),
  reset: () => set({ data: initialData, step: 1 }),
}));