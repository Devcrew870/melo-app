import { ComponentType } from 'react';
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

type IconType = ComponentType<any>;

export interface Category {
  id: number | string;
  name: string;
  icon: IconType;
  iconName: string;
}

// Auth types
export interface GoogleAuthRequest {
  token: string;
}

export interface AuthData {
  isNewUser: boolean;
}
