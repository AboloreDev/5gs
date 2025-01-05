export function SearchAppointment({ query, onSearch }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search for appointment by ID"
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
        Filters
      </button>
    </div>
  );
}
