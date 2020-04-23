const { repair } = require('./enhancer.js');

// test away!
// name,
// durability 0-100
// enchantment 0-20
describe('enhancer.js', () => {
  describe('.repair()', () => {
    const weapon = {
      durability: 80,
    };
    it('should return an item with 100 durability', () => {
      expect(repair(weapon)).toEqual({ durability: 100 });
    });
  });
});
