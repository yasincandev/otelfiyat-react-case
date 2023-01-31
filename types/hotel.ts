export interface Hotel {
  id: number;
  name: string;
  price: number;
  description: string;
  location: string;
  rating: number;
  type: string;
  tripAdvisorRating: number;
  image: string;
  rooms: Room[];
}

export interface Room {
  id: number;
  name: string;
  price: number;
  image: string;
  extraImages: string[];
}
