import { Birthday01 } from './birthday/Birthday01';
import { Birthday02 } from './birthday/Birthday02';
import { Birthday03 } from './birthday/Birthday03';
import { Wedding01 } from './wedding/Wedding01';
import { Wedding02 } from './wedding/Wedding02';
import { Wedding03 } from './wedding/Wedding03';
import { Baptism01 } from './baptism/Baptism01';
import { Baptism02 } from './baptism/Baptism02';
import { Baptism03 } from './baptism/Baptism03';
import { Communion01 } from './communion/Communion01';
import { Communion02 } from './communion/Communion02';
import { Communion03 } from './communion/Communion03';
import { BabyShower01 } from './baby-shower/BabyShower01';
import { BabyShower02 } from './baby-shower/BabyShower02';
import { BabyShower03 } from './baby-shower/BabyShower03';
import { Custom01 } from './custom/Custom01';

export const templates = {
  // Aniversário
  'birthday-01': { id: 'birthday-01', name: 'Moderno', occasion: 'birthday', component: Birthday01 },
  'birthday-02': { id: 'birthday-02', name: 'Minimalista', occasion: 'birthday', component: Birthday02 },
  'birthday-03': { id: 'birthday-03', name: 'Elegante', occasion: 'birthday', component: Birthday03 },
  // Casamento
  'wedding-01': { id: 'wedding-01', name: 'Clássico', occasion: 'wedding', component: Wedding01 },
  'wedding-02': { id: 'wedding-02', name: 'Moderno', occasion: 'wedding', component: Wedding02 },
  'wedding-03': { id: 'wedding-03', name: 'Boho', occasion: 'wedding', component: Wedding03 },
  // Batizado
  'baptism-01': { id: 'baptism-01', name: 'Tradicional', occasion: 'baptism', component: Baptism01 },
  'baptism-02': { id: 'baptism-02', name: 'Minimalista', occasion: 'baptism', component: Baptism02 },
  'baptism-03': { id: 'baptism-03', name: 'Azul', occasion: 'baptism', component: Baptism03 },
  // Comunhão
  'communion-01': { id: 'communion-01', name: 'Elegante', occasion: 'communion', component: Communion01 },
  'communion-02': { id: 'communion-02', name: 'Minimalista', occasion: 'communion', component: Communion02 },
  'communion-03': { id: 'communion-03', name: 'Dourado', occasion: 'communion', component: Communion03 },
  // Baby Shower
  'baby-shower-01': { id: 'baby-shower-01', name: 'Delicado', occasion: 'baby-shower', component: BabyShower01 },
  'baby-shower-02': { id: 'baby-shower-02', name: 'Moderno', occasion: 'baby-shower', component: BabyShower02 },
  'baby-shower-03': { id: 'baby-shower-03', name: 'Neutro', occasion: 'baby-shower', component: BabyShower03 },
  // Personalizado
  'custom-01': { id: 'custom-01', name: 'Elegante', occasion: 'custom', component: Custom01 },
};

export function getTemplatesByOccasion(occasion: string) {
  return Object.values(templates).filter((t) => t.occasion === occasion);
}