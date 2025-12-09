'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

interface Apartment {
  id: number;
  unit_name: string;
  unit_number: string;
  project: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  description?: string;
  image_url?: string;
  created_at?: string;
}

export default function ApartmentDetails() {
  const params = useParams();
  const router = useRouter();
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApartment = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/apartments/${params.id}`
        );
        setApartment(response.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch apartment details.');
        console.error('Error fetching apartment:', err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchApartment();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !apartment) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error || 'Apartment not found'}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => router.push('/')}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Listings
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 bg-gray-200">
            {apartment.image_url ? (
              <img
                src={apartment.image_url}
                alt={apartment.unit_name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            )}
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {apartment.unit_name}
                </h1>
                <p className="text-gray-600">Unit Number: {apartment.unit_number}</p>
                <p className="text-lg text-gray-700 mt-2">{apartment.project}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-600">
                  {apartment.price.toLocaleString()} EGP
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-gray-800">{apartment.bedrooms}</p>
                <p className="text-gray-600">Bedrooms</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-gray-800">{apartment.bathrooms}</p>
                <p className="text-gray-600">Bathrooms</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-gray-800">{apartment.area}</p>
                <p className="text-gray-600">m² Area</p>
              </div>
            </div>

            {apartment.description && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{apartment.description}</p>
              </div>
            )}

            <div className="border-t pt-6">
              <button
                onClick={() => alert('Contact functionality coming soon!')}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}