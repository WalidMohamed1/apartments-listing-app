/**
 * Apartment Model Interface
 * Defines the structure of an apartment object
 */
export interface Apartment {
  id?: number;
  
  unit_name: string;
  
  unit_number: string;
  
  project: string;
  
  bedrooms: number;
  
  bathrooms: number;
  
  area: number;
  
  price: number;
  
  description?: string;
  
  image_url?: string;
  
  created_at?: Date;
}