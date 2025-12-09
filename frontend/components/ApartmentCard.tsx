import Link from 'next/link';

interface ApartmentCardProps {
  id: number;
  unit_name: string;
  unit_number: string;
  project: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  image_url?: string;
}

export default function ApartmentCard({
  id,
  unit_name,
  unit_number,
  project,
  bedrooms,
  bathrooms,
  area,
  price,
  image_url,
}: ApartmentCardProps) {
  return (
    <Link href={`/apartments/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          {image_url ? (
            <img
              src={image_url}
              alt={unit_name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{unit_name}</h3>
          <p className="text-gray-600 mb-2">Unit: {unit_number}</p>
          <p className="text-sm text-gray-500 mb-3">{project}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {bedrooms} Beds
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              {bathrooms} Baths
            </span>
            <span>{area} m²</span>
          </div>
          
          <p className="text-2xl font-bold text-blue-600">
            {price.toLocaleString()} EGP
          </p>
        </div>
      </div>
    </Link>
  );
}