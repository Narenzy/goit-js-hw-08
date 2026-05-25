const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const text = images.map(image => {
  return `<li class= "items"><img class= "image"  src ="${image.url}"alt="${image.alt}"></li>`;
});

const galleryImages = document.querySelector('.gallery');
galleryImages.insertAdjacentHTML('beforeend', text.join(''));

galleryImages.style.display = 'flex';
galleryImages.style.flexWrap = 'wrap';
galleryImages.style.listStyle = 'none';

const items = galleryImages.querySelectorAll('.items');
const imags = galleryImages.querySelectorAll('.image');

items.forEach(item => {
  item.style.listStyle = 'none';
  item.style.flexBasis = 'calc((100% - 48px) / 3)';
});

imags.forEach(img => {
  img.style.width = '580px';
  img.style.height = 'auto';
});
