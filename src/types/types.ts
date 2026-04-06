import { ImageSourcePropType } from 'react-native';

export interface PopularVendor {
  id: number | string;
  name: string;
  category: string;
  location: string;
  image: ImageSourcePropType;
  rating: number;
  orders: number;
  distance: string;
}

export interface Category {
  id: number | string;
  name: string;
  image: ImageSourcePropType;
}

// Auth types
export interface GoogleAuthRequest {
  token: string;
}

export interface AuthData {
  isNewUser: boolean;
}
