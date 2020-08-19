module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement === 20) return { ...item };
  const newItem = { ...item };
  newItem.enhancement++;
  return { ...newItem };
}

function fail(item) {
  const newItem = { ...item };
  if (item.enhancement < 15) newItem.durability -= 5;
  else if (item.enhancement >= 15) newItem.durability -= 10;
  if (item.enhancement > 16) newItem.enhancement--;
  return { ...newItem };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
