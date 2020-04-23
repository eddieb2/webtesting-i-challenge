const { repair, succeed, fail } = require('./enhancer.js');

// test away!
// name,
// durability 0-100
// enchantment 0-20
describe('enhancer.js', () => {
  describe('////.repair()', () => {
    it('should return an item with 100 durability', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 0,
      };

      expect(repair(weapon)).toEqual({ ...weapon, durability: 100 });
    });
  });
  describe('////.succeed', () => {
    it('should increment enchantment by 1', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 1,
      };

      expect(succeed(weapon)).toEqual({ ...weapon, enchantment: 2 });
      // console.log(weapon);
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
  describe('////.fail', () => {
    it('should reduced durability by 5 if enchantment is less than 15', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 14,
      };

      expect(fail(weapon)).toEqual({ ...weapon, durability: 75 });
    });
    it('should reduce durability by 10 if enchantment is equal to 15', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 15,
      };

      expect(fail(weapon)).toEqual({ ...weapon, durability: 70 });
    });
    it('should reduce durability by 10 and reduce enchantment by 1 if enchantment is greater than or equal to 16', () => {
      const weapon = {
        name: 'weapon',
        durability: 80,
        enchantment: 16,
      };

      expect(fail(weapon)).toEqual({
        ...weapon,
        durability: 70,
        enchantment: 15,
      });
    });
  });
});
