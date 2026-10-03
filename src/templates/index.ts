import { Birthday01 } from './birthday/Birthday01';
import { Birthday02 } from './birthday/Birthday02';
import { Birthday03 } from './birthday/Birthday03';
import { Wedding01 } from './wedding/Wedding01';
import { Baptism01 } from './baptism/Baptism01';
import { Communion01 } from './communion/Communion01';
import { BabyShower01 } from './baby-shower/BabyShower01';
import { Custom01 } from './custom/Custom01';

export const templates = {
  // Aniversário
  'birthday-01': {
    id: 'birthday-01',
    name: 'Moderno',
    occasion: 'birthday',
    component: Birthday01,
  },
  'birthday-02': {
    id: 'birthday-02',
    name: 'Minimalista',
    occasion: 'birthday',
    component: Birthday02,
  },
  'birthday-03': {
    id: 'birthday-03',
    name: 'Elegante',
    occasion: 'birthday',
    component: Birthday03,
  },
  // Casamento
  'wedding-01': {
    id: 'wedding-01',
    name: 'Clássico',
    occasion: 'wedding',
    component: Wedding01,
  },
  // Batizado
  'baptism-01': {
    id: 'baptism-01',
    name: 'Tradicional',
    occasion: 'baptism',
    component: Baptism01,
  },
  // Comunhão
  'communion-01': {
    id: 'communion-01',
    name: 'Elegante',
    occasion: 'communion',
    component: Communion01,
  },
  // Baby Shower
  'baby-shower-01': {
    id: 'baby-shower-01',
    name: 'Delicado',
    occasion: 'baby-shower',
    component: BabyShower01,
  },
  // Personalizado / Outro
  'custom-01': {
    id: 'custom-01',
    name: 'Elegante',
    occasion: 'custom',
    component: Custom01,
  },
};

export function getTemplatesByOccasion(occasion: string) {
  return Object.values(templates).filter((t) => t.occasion === occasion);
}