import { Birthday01 } from './birthday/Birthday01';
import { Wedding01 } from './wedding/Wedding01';
import { Baptism01 } from './baptism/Baptism01';
import { Communion01 } from './communion/Communion01';
import { BabyShower01 } from './baby-shower/BabyShower01';

export const templates = {
  'birthday-01': {
    id: 'birthday-01',
    name: 'Aniversário Moderno',
    occasion: 'birthday',
    component: Birthday01,
  },
  'wedding-01': {
    id: 'wedding-01',
    name: 'Casamento Clássico',
    occasion: 'wedding',
    component: Wedding01,
  },
  'baptism-01': {
    id: 'baptism-01',
    name: 'Batizado Tradicional',
    occasion: 'baptism',
    component: Baptism01,
  },
  'communion-01': {
    id: 'communion-01',
    name: 'Comunhão Elegante',
    occasion: 'communion',
    component: Communion01,
  },
  'baby-shower-01': {
    id: 'baby-shower-01',
    name: 'Baby Shower Delicado',
    occasion: 'baby-shower',
    component: BabyShower01,
  },
};

export function getTemplatesByOccasion(occasion: string) {
  return Object.values(templates).filter((t) => t.occasion === occasion);
}