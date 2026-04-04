import { ImageSourcePropType } from 'react-native';

export interface PopularVendor {
  id: number | string;
  name: string;
  category: string;
  image: ImageSourcePropType;
  rating: number;
  orders: number;
  distance: string;
}
