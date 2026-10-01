import { create } from 'zustand';
import type { InviteData, OccasionType } from '../types/invite';

interface InviteStore {
  data: InviteData;
  step: number;

  setOccasion: (occasion: OccasionType) => void;
  setTemplate: (templateId: string) => void;
  updateField: <K extends keyof InviteData>(field: K, value: InviteData[K]) => void;
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
  photo: undefined,
  photoPosition: 'top',
};

export const useInviteStore = create<InviteStore>((set) => ({
  data: initialData,
  step: 1,

  setOccasion: (occasion) =>
    set((state) => ({
      data: { ...state.data, occasion, templateId: `${occasion}-01` },
    })),

  setTemplate: (templateId) =>
    set((state) => ({ data: { ...state.data, templateId } })),

  updateField: (field, value) =>
    set((state) => ({ data: { ...state.data, [field]: value } })),

  setStep: (step) => set({ step }),
  reset: () => set({ data: initialData, step: 1 }),
}));