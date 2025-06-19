import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiMessageSquare, FiPhone, FiMapPin, FiClock, FiAward } from 'react-icons/fi';
import { useState } from 'react';

const DoctorProfile = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Neurologist',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Dr. Emily Wilson',
      specialization: 'Pediatrician',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Dr. Robert Garcia',
      specialization: 'Dermatologist',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Dr. Priya Patel',
      specialization: 'Cardiologist',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Dr. James Wilson',
      specialization: 'Orthopedic Surgeon',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      name: 'Dr. Lisa Wong',
      specialization: 'Ophthalmologist',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      name: 'Dr. David Kim',
      specialization: 'Gastroenterologist',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 9,
      name: 'Dr. Olivia Martinez',
      specialization: 'Endocrinologist',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 10,
      name: 'Dr. Benjamin Taylor',
      specialization: 'Pulmonologist',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 11,
      name: 'Dr. Sophia Lee',
      specialization: 'Rheumatologist',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 12,
      name: 'Dr. William Brown',
      specialization: 'Urologist',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 13,
      name: 'Dr. Ava Garcia',
      specialization: 'Psychiatrist',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 14,
      name: 'Dr. Ethan Wilson',
      specialization: 'Oncologist',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 15,
      name: 'Dr. Mia Rodriguez',
      specialization: 'Nephrologist',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
  const doctor = doctors.find(doc => doc.id === parseInt(id));
  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Doctor not found</p>
      </div>
    );
  }

  const profileData = {
    bio: "Dr. " + doctor.name.split(' ')[1] + " is a board-certified " + doctor.specialization +
         " with over 10 years of experience. Committed to providing personalized care and " +
         "the highest quality treatment to all patients.",
    education: [
      "MD, Harvard Medical School",
      "Residency at Johns Hopkins Hospital",
      "Fellowship in " + doctor.specialization + " at Mayo Clinic"
    ],
    experience: "15 years in " + doctor.specialization,
    languages: ["English", "Spanish", "French"],
    clinic: {
      name: "City Medical Center",
      address: "123 Healthcare Ave, Medical City, MC 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM"
    },
    services: [
      "General Consultation",
      "Preventive Care",
      "Diagnostic Tests",
      "Treatment Plans",
      "Follow-up Care"
    ]
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50" style={{ fontFamily: "'Times New Roman', serif" }}>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="flex items-center text-green-600 hover:text-green-800 font-bold">
            <FiArrowLeft className="mr-2" /> Back to Doctors
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8 flex flex-col md:flex-row">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-blue-100"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
              <p className="text-blue-600 text-xl font-medium mb-4">{doctor.specialization}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-6">
                  <span className="text-yellow-400 text-xl mr-1">★</span>
                  <span className="text-gray-700 font-medium">{doctor.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({Math.floor(doctor.rating * 20)} reviews)</span>
                </div>
                <div className="flex items-center text-green-600">
                  <FiAward className="mr-1" />
                  <span>15 years experience</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{profileData.bio}</p>
              <div className="flex flex-wrap gap-3">
                <button 
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FiCalendar className="mr-2" /> Book Appointment
                </button>
                <button className="px-4 py-2 bg-white border border-green-600 text-green-600 rounded-md hover:bg-green-100 flex items-center">
                  <FiMessageSquare className="mr-2" /> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Education */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
              <ul className="space-y-3">
                {profileData.education.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Services</h2>
              <div className="flex flex-wrap gap-2">
                {profileData.services.map((service, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Clinic Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Clinic Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">{profileData.clinic.name}</h3>
                    <p className="text-gray-600">{profileData.clinic.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-green-600 mr-3" />
                  <span className="text-gray-600">{profileData.clinic.phone}</span>
                </div>
                <div className="flex items-start">
                  <FiClock className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Working Hours</h3>
                    {profileData.clinic.hours.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Languages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Languages Spoken</h2>
              <div className="flex flex-wrap gap-2">
                {profileData.languages.map((language, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative mx-auto">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Book Appointment</h2>
      
      <form onSubmit={(e) => {
          e.preventDefault();
          
          const name = e.target.name.value.trim();
          const date = e.target.date.value;
          const time = e.target.time.value;

          if (!name || !date || !time) {
            alert("Please fill out all fields.");
            return;
          }

          const appointment = {
            doctorId: doctor.id,
            doctorName: doctor.name,
            doctorSpecialization: doctor.specialization,
            patientName: name,
            date,
            time,
            bookedAt: new Date().toISOString()
          };

          const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
          storedAppointments.push(appointment);
          localStorage.setItem('appointments', JSON.stringify(storedAppointments));

          alert(`Appointment booked successfully for ${name} on ${date} at ${time}`);
          setIsModalOpen(false);
        }}
      >
        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">Your Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="John Doe"
            className="py-2 pl-4 block font-bold w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">Date</label>
          <input 
            type="date" 
            name="date"
            className="py-2 pl-4 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">Time</label>
          <input 
            type="time" 
            name="time"
            className="py-2 pl-4 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 text-base"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button 
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-1 bg-red-700 text-white rounded hover:bg-red-800 w-full sm:w-auto"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto"
          >
            Confirm Booking
          </button>
        </div>
      </form>

      {/* Close Button */}
      <button 
        className="absolute top-4 right-4 text-gray-500 text-2xl font-bold"
        onClick={() => setIsModalOpen(false)}
      >
        &times;
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default DoctorProfile;