type HasId = {
  id: string;
};

type ProtoPetStructure = {
  name: string;
  specie: string;
  isAdopted: boolean;
  owner: string;
};

export type PetStructure = HasId & ProtoPetStructure;
