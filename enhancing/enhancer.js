module.exports = {
  succeed,
  fail,
  repair,
};

function repair(item) {
  return { ...item, durability: 100 };
}

function succeed(item) {
  if (item.enchantment === 20) {
    return { ...item };
  } else {
    item.enchantment += 1;
    return { ...item };
  }
}

function fail(item) {
  if (item.enchantment > 0 && item.enchantment < 15) {
    // decrease durability 5
    item.durability -= 5;
    return { ...item };
  } else if (item.enchantment === 15) {
    item.durability -= 10;
    return { ...item };
  } else if (item.enchantment >= 16 && item.enchantment <= 19) {
    item.durability -= 10;
    item.enchantment -= 1;
    return { ...item };
  } else {
    return { ...item };
  }
}

/* 
  - a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.

  - a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.

  - a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.

*/
