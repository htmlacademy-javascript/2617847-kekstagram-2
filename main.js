// Данные для генерации
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Егор',
  'Иван',
  'Василий',
  'Александр',
  'Дарья',
  'Мария',
  'Никита',
  'Фёдор',
  'Элина',
  'Екатерина'
];

const DESCRIPTIONS = [
  'Прекрасный заказ',
  'Красивый пёсик',
  'Отличный день для рыбалки',
  'Любимый завтрак',
  'Утрення рутина',
  'Обожаю эту группу',
  'Лучший день этого лета',
  'Лифтолук',
  'Спорт - это жизнь'
]

// Диапозон для генерации описания фотографий
const PHOTO_MIN_RANGE = 1;
const PHOTO_MAX_RANGE = 25;

// Диапозон лайков
const MIN_LIKES = 15;
const MAX_LIKES = 200;

// Диапозон комментариев для генерации
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

// Количество фото для генерации
const PHOTOS_COUNT = 25;

// Диапозон аватарок
const AVATAR_MIN_RANGE = 1;
const AVATAR_MAX_RANGE = 6;

// Диапозон количества комментариев
const MESSAGE_MIN_RANGE = 1;
const MESSAGE_MAX_RANGE = 2;

// Функции-рандомайзеры
const getRandomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const getUniqueId = () => {
  let lastId = 0;
  return () => ++lastId;
}
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Функция генерации комментария
const generateComment = () => {
  const generateCommentId = getUniqueId;
  return Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, () => ({
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_RANGE, AVATAR_MAX_RANGE)}.svg`,
    message: Array.from({length: getRandomInteger(MESSAGE_MIN_RANGE, MESSAGE_MAX_RANGE)}, () => getRandomArrayElement(MESSAGES)).join(' '),
    name: getRandomArrayElement(NAMES)
  }))
};

// Функция генерации фото
const generatePhotoMessage = () => {
  const photoId = getUniqueId();
  return {
    id: photoId(),
    url: `photos/${photoId()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: generateComment()
  }
}
// Создание массива фотографий
const photoDescription = Array.from({length: PHOTO_MAX_RANGE}, generatePhotoMessage);

window.console.log(photoDescription)
