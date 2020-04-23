const { repair } = require('./enhancer.js');

// test away!
// name,
// durability 0-100
// enchantment 0-20
describe('enhancer.js', () => {
  describe('.repair()', () => {
    const weapon = {
      name: 'weapon',
      durability: 80,
      enchantment: 0,
    };
    it('should return an item with 100 durability', () => {
      expect(repair(weapon)).toEqual({ ...weapon, durability: 100 });
    });
  });
});
