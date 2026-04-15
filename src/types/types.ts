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

export type Vendors = {
  id: number | string;
  vendorName: string;
  productName: string;
  description: string;
  image: string;
  price: number;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
};

type Offerings = {
  id: number | string;
  serviceName: string;
  vendors: Vendors[];
};

export interface Category {
  id: number | string;
  name: string;
  icon: IconType;
  iconName: string;
}

export interface ServiceCatalog {
  id: number | string;
  categoryName: string;
  icon: IconType;
  iconName: string;
  offerings: Offerings[];
}

export interface AllCategories {
  id: number | string;
  title: string;
  description: string;
  vendors: number;
  image: string;
}

// Auth types
export interface GoogleAuthRequest {
  token: string;
}

export interface AuthData {
  isNewUser: boolean;
}
