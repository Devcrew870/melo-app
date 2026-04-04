import { PopularVendor } from '../types/types';

export const popularVendors: PopularVendor[] = [
  {
    id: 1,
    name: 'Sweet Layers Studio',
    category: 'Custom Cakes & Desserts',
    image: require('../../assets/images/popular/cake.jpg'),
    rating: 4.8,
    orders: 120,
    distance: '2 km',
  },
  {
    id: 2,
    name: 'Crafted Gifts Co.',
    category: 'Personalized Gift Items',
    image: require('../../assets/images/popular/gift.jpg'),
    rating: 4.7,
    orders: 95,
    distance: '3 km',
  },
  {
    id: 3,
    name: 'Aari by Lakshmi',
    category: 'Aari Work & Stitching',
    image: require('../../assets/images/popular/aari.jpg'),
    rating: 4.9,
    orders: 80,
    distance: '1.5 km',
  },
  {
    id: 4,
    name: 'Bridal Glow Studio',
    category: 'Makeup Artists & Styling',
    image: require('../../assets/images/popular/makeup.jpg'),
    rating: 4.8,
    orders: 140,
    distance: '2.5 km',
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
