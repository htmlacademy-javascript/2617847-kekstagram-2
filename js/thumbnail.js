import {mockedPhotos} from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (photo) => {

  const thumbnail = template.cloneNode(true);
  thumbnail.href = photo.url;
  thumbnail.dataset.id = photo.id;
  const image = template.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  template.querySelector('.picture__comments').textContent = photo.comments.length;
  template.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};

const fragment = document.createDocumentFragment();
mockedPhotos.forEach((photo) => {
  const thumbnail = createThumbnail(photo);
  fragment.appendChild(thumbnail);
});
container.appendChild(fragment);
