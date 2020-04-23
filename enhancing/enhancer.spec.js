const { repair, succeed } = require('./enhancer.js');

// test away!
// name,
// durability 0-100
// enchantment 0-20
describe('enhancer.js', () => {
  describe('.repair()', () => {
    it('should return an item with 100 durability', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 0,
      };

      expect(repair(weapon)).toEqual({ ...weapon, durability: 100 });
    });
  });
  describe('.succeed', () => {
    it('should increment enchantment by 1', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 1,
      };

      expect(succeed(weapon)).toEqual({ ...weapon, enchantment: 2 });
      console.log(weapon);
    });
    it('should not increment enchantment by 1 if enchantment is 20', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 20,
      };
      expect(succeed(weapon)).toEqual({ ...weapon, enchantment: 20 });
    });
    it('should not change durability', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 20,
      };

      expect(succeed(weapon)).toEqual({ ...weapon, durability: 80 });
      expect(succeed(weapon)).toEqual({ ...weapon });
    });
  });
});
