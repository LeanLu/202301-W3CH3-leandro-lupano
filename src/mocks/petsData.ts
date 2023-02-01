import { Pet } from '../models/Pet';
import { PetStructure } from '../models/PetsStructure';

export const PET: PetStructure[] = [
  {
    id: '164983',
    name: 'Fido',
    specie: 'Ovejero',
    owner: 'Fabio',
    isAdopted: false,
  },
  {
    id: '253487',
    name: 'Rambo',
    specie: 'Caniche',
    owner: 'El profe',
    isAdopted: false,
  },
  new Pet('Hendrix', 'Pitbull', 'Slash'),
  new Pet('Messi', 'Rottweiler', 'Carlos'),
];
