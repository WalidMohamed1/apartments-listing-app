# 🏠 Apartments Listing Application

A full-stack apartment listing application built with Next.js, Node.js, TypeScript, and PostgreSQL. The application allows users to browse apartments, view detailed information, and search/filter listings.

## 🚀 Features

### Core Features
- **Apartment Listing**: Browse all available apartments with image, price, and key details
- **Apartment Details**: View comprehensive information about each apartment
- **Add Apartments**: API endpoint to add new apartment listings
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices

### Bonus Features
- **Advanced Search & Filter**: Search apartments by unit name, unit number, or project name with real-time results
- **Statistics Dashboard**: Live statistics showing total listings, average price, number of projects, and average area
- **Loading States**: Professional skeleton loading animations for better user experience
- **Empty State Design**: Elegant empty state with helpful suggestions when no results are found
- **Smooth Animations**: Fade-in, slide-up, and hover animations for a premium feel
- **Error Handling**: User-friendly error messages with visual feedback
- **Interactive Cards**: Hover effects with zoom and elevation animations on apartment cards
- **Gradient UI Elements**: Modern gradient designs for statistics cards and headings

### UI/UX Enhancements
- **Skeleton Loading**: Replaced generic spinners with content-aware skeleton screens
- **Micro-interactions**: Smooth transitions and hover effects throughout the application
- **Visual Feedback**: Toast-style error messages and success indicators
- **Optimized Performance**: Lazy loading and optimized re-renders for better performance

## ✨ What Makes This Special

This project goes beyond the basic requirements with several creative enhancements:

1. **Premium User Experience**: Not just functional, but delightful to use with smooth animations and micro-interactions
2. **Data Visualization**: Real-time statistics dashboard that provides insights at a glance
3. **Professional Loading States**: Skeleton screens that maintain layout stability and reduce perceived loading time
4. **Thoughtful Empty States**: Instead of blank pages, users get helpful guidance when no results are found
5. **Modern Design System**: Gradient backgrounds, elevation effects, and a cohesive color palette throughout
6. **Performance Optimized**: Efficient re-renders and optimized asset loading for smooth performance

These enhancements demonstrate attention to detail, understanding of modern web UX principles, and the ability to make executive decisions that improve the product beyond specifications.

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe JavaScript
- **PostgreSQL** - Relational database
- **pg** - PostgreSQL client for Node.js

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (version 20.10 or higher)
- [Node.js](https://nodejs.org/) (version 20 or higher) - Optional, for local development

## 🚀 Quick Start

### Run with Docker (Recommended)

1. **Clone the repository**
```bash
git clone <repository-url>
cd apartments-app
```

2. **Start the application**
```bash
docker-compose up --build
```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Database: localhost:5432

4. **Stop the application**
```bash
docker-compose down
```

## 📁 Project Structure
```
apartments-app/
├── backend/                 # Backend API (Node.js + Express)
│   ├── src/
│   │   ├── index.ts        # Main application entry point
│   │   ├── database.ts     # Database connection and initialization
│   │   ├── routes/
│   │   │   └── apartments.ts  # Apartment API routes
│   │   └── models/
│   │       └── apartment.ts   # Apartment interface/model
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/               # Frontend Application (Next.js)
│   ├── app/
│   │   ├── page.tsx       # Home page (apartment listing)
│   │   └── apartments/
│   │       └── [id]/
│   │           └── page.tsx  # Apartment details page
│   ├── components/
│   │   ├── ApartmentCard.tsx  # Apartment card component
│   │   └── SearchBar.tsx      # Search and filter component
│   ├── Dockerfile
│   ├── package.json
│   └── next.config.ts
│
└── docker-compose.yml      # Docker composition file
```

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Get All Apartments
**GET** `/apartments`

Query Parameters:
- `search` (optional): Search by unit name, unit number, or project
- `project` (optional): Filter by project name

**Example:**
```bash
GET /apartments?search=luxury&project=Palm Hills
```

**Response:**
```json
[
  {
    "id": 1,
    "unit_name": "Luxury Penthouse",
    "unit_number": "A101",
    "project": "Palm Hills",
    "bedrooms": 3,
    "bathrooms": 2,
    "area": "150.00",
    "price": "500000.00",
    "description": "Beautiful apartment with sea view",
    "image_url": "https://example.com/image.jpg",
    "created_at": "2025-12-07T03:51:42.565Z"
  }
]
```

#### 2. Get Apartment by ID
**GET** `/apartments/:id`

**Example:**
```bash
GET /apartments/1
```

**Response:**
```json
{
  "id": 1,
  "unit_name": "Luxury Penthouse",
  "unit_number": "A101",
  "project": "Palm Hills",
  "bedrooms": 3,
  "bathrooms": 2,
  "area": "150.00",
  "price": "500000.00",
  "description": "Beautiful apartment with sea view",
  "image_url": "https://example.com/image.jpg",
  "created_at": "2025-12-07T03:51:42.565Z"
}
```

#### 3. Add New Apartment
**POST** `/apartments`

**Request Body:**
```json
{
  "unit_name": "Luxury Penthouse",
  "unit_number": "A101",
  "project": "Palm Hills",
  "bedrooms": 3,
  "bathrooms": 2,
  "area": 150,
  "price": 500000,
  "description": "Beautiful apartment with sea view",
  "image_url": "https://example.com/image.jpg"
}
```

**Response:**
```json
{
  "id": 1,
  "unit_name": "Luxury Penthouse",
  "unit_number": "A101",
  "project": "Palm Hills",
  "bedrooms": 3,
  "bathrooms": 2,
  "area": "150.00",
  "price": "500000.00",
  "description": "Beautiful apartment with sea view",
  "image_url": "https://example.com/image.jpg",
  "created_at": "2025-12-07T03:51:42.565Z"
}
```

#### 4. Health Check
**GET** `/health`

**Response:**
```json
{
  "status": "OK",
  "message": "Backend is running!"
}
```

## 🧪 Testing the API

### Using cURL

**Add an apartment:**
```bash
curl -X POST http://localhost:5000/api/apartments \
  -H "Content-Type: application/json" \
  -d '{
    "unit_name": "Luxury Penthouse",
    "unit_number": "A101",
    "project": "Palm Hills",
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 150,
    "price": 500000,
    "description": "Beautiful apartment",
    "image_url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500"
  }'
```

**Get all apartments:**
```bash
curl http://localhost:5000/api/apartments
```

### Using Postman

1. Import the API endpoints
2. Set base URL to `http://localhost:5000/api`
3. Use the endpoints documented above

## 🗄️ Database Schema

### Apartments Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY |
| unit_name | VARCHAR(255) | NOT NULL |
| unit_number | VARCHAR(50) | NOT NULL |
| project | VARCHAR(255) | NOT NULL |
| bedrooms | INTEGER | NOT NULL |
| bathrooms | INTEGER | NOT NULL |
| area | DECIMAL(10,2) | NOT NULL |
| price | DECIMAL(12,2) | NOT NULL |
| description | TEXT | NULLABLE |
| image_url | VARCHAR(500) | NULLABLE |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

## 🌱 Seeding Sample Data

To populate the database with sample apartments:

### Option 1: Using Docker
```bash
docker-compose exec backend npm run seed
```

### Option 2: Running Locally
```bash
cd backend
npm run seed
```

This will add 6 sample apartments to the database for testing purposes.

## 🔧 Development

### Run Locally (Without Docker)

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Database:**
- Install PostgreSQL locally
- Create database: `apartments_db`
- Update connection string in `.env`

## 🐛 Troubleshooting

### Docker Issues

**Port already in use:**
```bash
docker-compose down
docker system prune -f
docker-compose up --build
```

**Database connection failed:**
- Ensure PostgreSQL container is running
- Check `DATABASE_URL` in backend environment variables

### Frontend not updating:
```bash
docker-compose restart frontend
```

## 📝 Notes

- The application uses PostgreSQL as the database
- All containers are connected via a custom Docker network
- Data persists in Docker volumes
- The frontend uses Next.js App Router (not Pages Router)

## 👨‍💻 Author

Walid Mohamed

## 📄 License

This project is created as a hiring assignment.