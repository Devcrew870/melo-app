import { PopularVendor } from '../types/types';

export const popularVendors: PopularVendor[] = [
  {
    id: 1,
    category: 'Bridal Mehendi',
    name: 'Henna by Anjali',
    location: 'Anna Nagar',
    image: require('../../assets/images/categories/mehendi.jpg'),
    rating: 4.9,
    orders: 154,
    distance: '2.1 km',
  },
  {
    id: 2,
    category: 'Designer Cakes',
    name: 'Sweet Delights',
    location: 'T. Nagar',
    image: require('../../assets/images/popular/cake.jpg'),
    rating: 4.8,
    orders: 120,
    distance: '1.8 km',
  },
  {
    id: 3,
    category: 'Custom Gift Hampers',
    name: 'Gift Box Studio',
    location: 'Velachery',
    image: require('../../assets/images/popular/gift.jpg'),
    rating: 4.7,
    orders: 95,
    distance: '3.2 km',
  },
  {
    id: 4,
    category: 'Blouse Stitching',
    name: 'Priyasi Tailoring',
    location: 'Tambaram',
    image: require('../../assets/images/categories/stitching.jpg'),
    rating: 4.8,
    orders: 140,
    distance: '2.5 km',
  },
  {
    id: 5,
    category: 'Bridal Makeup',
    name: 'Glarn by Neha',
    location: 'Adyar',
    image: require('../../assets/images/categories/makeup.jpg'),
    rating: 4.9,
    orders: 173,
    distance: '1.9 km',
  },
  {
    id: 6,
    category: 'Aari Embroidery',
    name: "LakChri's Creations",
    location: 'Mylapore',
    image: require('../../assets/images/popular/aari.jpg'),
    rating: 4.8,
    orders: 88,
    distance: '2.4 km',
  },
];

export const categories = [
  {
    id: 1,
    name: 'Cake',
    image: require('../../assets/images/categories/cake.jpg'),
  },
  {
    id: 2,
    name: 'Gift Items',
    image: require('../../assets/images/categories/gift.jpg'),
  },
  {
    id: 3,
    name: 'Aari Works',
    image: require('../../assets/images/categories/aari.jpg'),
  },
  {
    id: 4,
    name: 'Stitching',
    image: require('../../assets/images/categories/stitching.jpg'),
  },
  {
    id: 5,
    name: 'Mehendi',
    image: require('../../assets/images/categories/mehendi.jpg'),
  },
  {
    id: 6,
    name: 'Makeup Artists',
    image: require('../../assets/images/categories/makeup.jpg'),
  },
];
