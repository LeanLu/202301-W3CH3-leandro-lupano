import { Pet } from './Pet';

describe('Given the class Pet', () => {
  describe('When we create a new Pet ', () => {
    test('Then if the properties are ("Fido", "Ovejero","Fabio"), it should create an object with 5 properties', () => {
      const newPet = new Pet('Fido', 'Ovejero', 'Fabio');

      expect(newPet).toHaveProperty('name');
      expect(newPet).toHaveProperty('specie');
      expect(newPet).toHaveProperty('owner');
      expect(newPet).toHaveProperty('isAdopted');
      expect(newPet).toHaveProperty('id');
    });
  });
});
