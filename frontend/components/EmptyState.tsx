interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = "No apartments found" }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-32 h-32 mb-6 text-gray-300">
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{message}</h3>
      <p className="text-gray-500 text-center max-w-md mb-6">
        Try adjusting your search or filters to find what you're looking for.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
}