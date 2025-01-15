export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 p-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50 text-xs sm:text-sm"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-lg text-xs sm:text-sm ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50 text-xs sm:text-sm"
      >
        Next
      </button>
    </div>
  );
}
