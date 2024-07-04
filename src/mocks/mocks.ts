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

const hotels = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 1,
    'images': [
      'img/apartment-01.jpg'
    ],
    'isFavorite': false,
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment'
  },
  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'Wood and stone place',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 2,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 2,
    'images': [
      'img/room.jpg'
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/room.jpg',
    'price': 80,
    'rating': 4.8,
    'title': 'Wood and stone place',
    'type': 'private room'
  },
  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'Canal View Prinsengracht',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 3,
    'images': [
      'img/apartment-02.jpg'
    ],
    'isFavorite': false,
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-02.jpg',
    'price': 80,
    'rating': 4.8,
    'title': 'Canal View Prinsengracht',
    'type': 'apartment'
  },
];
