export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  images: string[];
}

export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  category: string;
  price: string;
  open: boolean;
  photos: string[];
  reviews: Review[];
}

export interface Category {
  id: number;
  name: string;
}
