export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className="flex px-2 justify-center text-sm items-center space-x-2 mt-4 w-full text-center">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-lg ${
            page === currentPage
              ? "bg-primary-secondaryColor text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
