const getRandomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const getUniqueId = () => {
  let lastId = 0;
  return () => ++lastId;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, getUniqueId, getRandomArrayElement };
