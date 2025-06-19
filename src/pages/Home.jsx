import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";
import {
  FiLogOut,
  FiUser,
  FiSettings,
  FiCalendar,
  FiMessageSquare,
  FiSearch,
  FiFilter,
} from "react-icons/fi";
import { useState, useEffect } from "react";

export function Home() {
  const { user, logout } = useAuth();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    specialization: "",
    minRating: 0,
  });
  const [showFilters, setShowFilters] = useState(false);

  // Sample data - in a real app, you'd fetch this from an API
  useEffect(() => {
    const sampleDoctors = [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialization: "Cardiologist",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        specialization: "Neurologist",
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Dr. Emily Wilson",
        specialization: "Pediatrician",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        name: "Dr. Robert Garcia",
        specialization: "Dermatologist",
        rating: 4.3,
        image:
          "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        name: "Dr. Priya Patel",
        specialization: "Cardiologist",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 6,
        name: "Dr. James Wilson",
        specialization: "Orthopedic Surgeon",
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 7,
        name: "Dr. Lisa Wong",
        specialization: "Ophthalmologist",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 8,
        name: "Dr. David Kim",
        specialization: "Gastroenterologist",
        rating: 4.4,
        image:
          "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 9,
        name: "Dr. Olivia Martinez",
        specialization: "Endocrinologist",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 10,
        name: "Dr. Benjamin Taylor",
        specialization: "Pulmonologist",
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 11,
        name: "Dr. Sophia Lee",
        specialization: "Rheumatologist",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 12,
        name: "Dr. William Brown",
        specialization: "Urologist",
        rating: 4.2,
        image:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 13,
        name: "Dr. Ava Garcia",
        specialization: "Psychiatrist",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 14,
        name: "Dr. Ethan Wilson",
        specialization: "Oncologist",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 15,
        name: "Dr. Mia Rodriguez",
        specialization: "Nephrologist",
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ];

    setDoctors(sampleDoctors);
    setFilteredDoctors(sampleDoctors);
  }, []);

  // Apply filters whenever filters or doctors change
  useEffect(() => {
    const filtered = doctors.filter((doctor) => {
      const matchesName = doctor.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      const matchesSpecialization = doctor.specialization
        .toLowerCase()
        .includes(filters.specialization.toLowerCase());
      const matchesRating = doctor.rating >= filters.minRating;

      return matchesName && matchesSpecialization && matchesRating;
    });

    setFilteredDoctors(filtered);
  }, [filters, doctors]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === "minRating" ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <div
      className="min-h-screen  bg-gray-50 w-screen"
      style={{ fontFamily: " 'Times New Roman', serif" }}
    >
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-green-800">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:text-green-700 focus:outline-none">
                <FiSettings className="h-6 w-6" />
              </button>
              <button
                onClick={logout}
                className="flex items-center text-sm text-green-700 hover:text-green-600"
              >
                <FiLogOut className="mr-1" /> Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-4 md:mb-8">
          Find a Doctor
        </h1>

        {/* Mobile Search Bar */}
        <div className="md:hidden mb-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              placeholder="Search doctors..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-green-600"
            >
              <FiFilter />
            </button>
          </div>
        </div>

        {/* Filter Section - Mobile */}
        {showFilters && (
          <div className="md:hidden bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={filters.specialization}
                  onChange={handleFilterChange}
                  placeholder="Specialization"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Min Rating
                </label>
                <select
                  name="minRating"
                  value={filters.minRating}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Filter Section - Desktop */}
        <div className="hidden md:block bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Filter Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
                placeholder="Search by name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                value={filters.specialization}
                onChange={handleFilterChange}
                placeholder="Search by specialization"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Rating
              </label>
              <select
                name="minRating"
                value={filters.minRating}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
              >
                <option value="0">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 md:p-6">
                  <div className="flex flex-col items-center mb-3 md:mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-blue-100"
                    />
                    <h3 className="mt-3 text-lg md:text-xl font-semibold text-gray-800 text-center">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm md:text-base">
                      {doctor.specialization}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-3 space-y-2 md:space-y-0">
                    <div className="flex items-center justify-center md:justify-start">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="ml-1 text-gray-700 font-medium">
                        {doctor.rating}
                      </span>
                      <span className="text-gray-500 text-xs md:text-sm ml-1">
                        ({Math.floor(doctor.rating * 20)} reviews)
                      </span>
                    </div>
                    {/* <button className="px-3 py-1.5 md:px-4 md:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 text-sm md:text-base">
                      View Profile
                    </button> */}
                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 text-sm md:text-base"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 md:py-12">
              <p className="text-gray-500 text-base md:text-lg">
                No doctors match your filters. Try adjusting your search
                criteria.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
