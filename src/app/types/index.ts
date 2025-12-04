export interface Listing {
  id?: string; // 👈 make this optional
  name: string;
  price: string;
  category: string;
  description: string;
  image?: string;
}
