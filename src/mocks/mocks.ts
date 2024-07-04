import { PlaceType } from './interfaces';

export const PLACES_INFO = [
  {
    img: 'img/apartment-01.jpg',
    price: '120',
    name: 'Beautiful & luxurious apartment at great location',
    type: PlaceType.Apartment,
    id: '1',
    isFavorite: false,
    isPremium: true,
  },
  {
    img: 'img/room.jpg',
    price: '80',
    name: 'Wood and stone place',
    type: PlaceType.PrivateRoom,
    id: '2',
    isFavorite: true,
    isPremium: false,
  },
  {
    img: 'img/apartment-02.jpg',
    price: '132',
    name: 'Canal View Prinsengracht',
    type: PlaceType.Apartment,
    id: '3',
    isFavorite: false,
    isPremium: false,
  },
  {
    img: 'img/apartment-03.jpg',
    price: '180',
    name: 'Nice, cozy, warm big bed apartment',
    type: PlaceType.Apartment,
    id: '4',
    isFavorite: false,
    isPremium: false,
  },
  {
    img: 'img/room.jpg',
    price: '80',
    name: 'Wood and stone place',
    type: PlaceType.PrivateRoom,
    id: '5',
    isFavorite: false,
    isPremium: false,
  },
];
