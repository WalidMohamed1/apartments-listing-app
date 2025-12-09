import { query } from './database';

/**
 * Seed Script
 * Populates the database with sample apartment data
 * Run this script to quickly add test data to the database
 */

const sampleApartments = [
  {
    unit_name: 'Luxury Penthouse',
    unit_number: 'A101',
    project: 'Palm Hills',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    price: 8500000,
    description: 'Beautiful penthouse with stunning sea views and modern amenities. Features a spacious living area, gourmet kitchen, and private terrace.',
    image_url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500'
  },
  {
    unit_name: 'Modern Studio',
    unit_number: 'B205',
    project: 'New Cairo Residence',
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    price: 2800000,
    description: 'Cozy studio perfect for singles or couples. Open floor plan with high ceilings and plenty of natural light.',
    image_url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500'
  },
  {
    unit_name: 'Family Villa',
    unit_number: 'C301',
    project: 'Madinaty',
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    price: 12000000,
    description: 'Spacious villa with private garden and parking. Perfect for families looking for comfort and privacy.',
    image_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500'
  },
  {
    unit_name: 'Downtown Loft',
    unit_number: 'D102',
    project: 'City Center',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    price: 4500000,
    description: 'Contemporary loft in the heart of downtown. Walking distance to shops, restaurants, and entertainment.',
    image_url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500'
  },
  {
    unit_name: 'Beachfront Suite',
    unit_number: 'E505',
    project: 'Marina Bay',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    price: 9200000,
    description: 'Luxurious beachfront suite with panoramic ocean views. Includes access to private beach and resort amenities.',
    image_url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500'
  },
  {
    unit_name: 'Garden Apartment',
    unit_number: 'F201',
    project: 'Green Valley',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    price: 3200000,
    description: 'Ground floor apartment with direct access to communal gardens. Pet-friendly and family-oriented community.',
    image_url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500'
  },
  {
    unit_name: 'Elegant Duplex',
    unit_number: 'G304',
    project: 'Palm Hills',
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    price: 10500000,
    description: 'Two-story duplex with modern design and spacious rooms. Features a private entrance and balcony.',
    image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500'
  },
  {
    unit_name: 'Skyline View Studio',
    unit_number: 'H801',
    project: 'City Center',
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    price: 2400000,
    description: 'High-floor studio with breathtaking city skyline views. Perfect for young professionals.',
    image_url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500'
  },
  {
    unit_name: 'Premium Townhouse',
    unit_number: 'I150',
    project: 'Madinaty',
    bedrooms: 5,
    bathrooms: 4,
    area: 320,
    price: 18000000,
    description: 'Luxurious townhouse with private garden and garage. Ideal for large families seeking comfort and space.',
    image_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500'
  },
  {
    unit_name: 'Cozy Corner Unit',
    unit_number: 'J202',
    project: 'New Cairo Residence',
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    price: 3800000,
    description: 'Corner unit with extra windows providing abundant natural light. Comes with built-in storage.',
    image_url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500'
  },
  {
    unit_name: 'Waterfront Paradise',
    unit_number: 'K401',
    project: 'Marina Bay',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    price: 14500000,
    description: 'Stunning waterfront apartment with direct marina access. Includes yacht parking space.',
    image_url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500'
  },
  {
    unit_name: 'Urban Chic Apartment',
    unit_number: 'L303',
    project: 'Green Valley',
    bedrooms: 2,
    bathrooms: 2,
    area: 105,
    price: 3500000,
    description: 'Modern apartment with contemporary finishes and smart home features. Close to schools and parks.',
    image_url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500'
  }
];

/**
 * Insert sample apartments into database
 */
const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seed...');
    
    // Delete all existing apartments first
    await query('DELETE FROM apartments');
    console.log('🗑️  Cleared existing apartments');

    for (const apartment of sampleApartments) {
      await query(
        `INSERT INTO apartments (unit_name, unit_number, project, bedrooms, bathrooms, area, price, description, image_url)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          apartment.unit_name,
          apartment.unit_number,
          apartment.project,
          apartment.bedrooms,
          apartment.bathrooms,
          apartment.area,
          apartment.price,
          apartment.description,
          apartment.image_url
        ]
      );
      console.log(`✅ Added: ${apartment.unit_name}`);
    }

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();