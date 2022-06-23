import { generateUUID } from './utils';

describe('Utilities', () => {
  describe('generateUUID', () => {
    it('should generate a v4 UUID', () => {
      const uuid = generateUUID();
      const regex = 
        /^[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}$/;
      expect(uuid).toMatch(regex);
    });
  });
});