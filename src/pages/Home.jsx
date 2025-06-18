import { useAuth } from '../auth/AuthProvider';
import { Link } from 'react-router-dom';
import { FiLogOut, FiUser, FiSettings, FiCalendar, FiMessageSquare } from 'react-icons/fi';

export function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <FiSettings className="h-6 w-6" />
              </button>
              <button 
                onClick={logout}
                className="flex items-center text-sm text-gray-700 hover:text-indigo-600"
              >
                <FiLogOut className="mr-1" /> Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
          <div className="flex items-center">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <FiUser className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Welcome back, {user?.email}</h2>
              <p className="text-sm text-gray-500">Here's what's happening with your account today</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Projects', value: '12', change: '+2', changeColor: 'text-green-600' },
            { title: 'Tasks Completed', value: '34', change: '+5', changeColor: 'text-green-600' },
            { title: 'Pending Requests', value: '7', change: '-1', changeColor: 'text-red-600' },
            { title: 'Messages', value: '5', change: '+3', changeColor: 'text-green-600' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className={`ml-2 text-sm font-medium ${stat.changeColor}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <Link to="/activity" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { icon: <FiCalendar className="h-5 w-5 text-indigo-600" />, title: 'Meeting with team', time: '10:00 AM', description: 'Discuss project milestones' },
              { icon: <FiMessageSquare className="h-5 w-5 text-blue-600" />, title: 'New message', time: '9:30 AM', description: 'From client regarding project' },
              { icon: <FiUser className="h-5 w-5 text-green-600" />, title: 'New team member', time: 'Yesterday', description: 'Alex joined the marketing team' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Create Project', icon: <FiUser className="h-6 w-6 text-indigo-600" /> },
              { name: 'Send Message', icon: <FiMessageSquare className="h-6 w-6 text-blue-600" /> },
              { name: 'Schedule Event', icon: <FiCalendar className="h-6 w-6 text-green-600" /> },
              { name: 'View Reports', icon: <FiSettings className="h-6 w-6 text-purple-600" /> },
            ].map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors duration-200"
              >
                <div className="mb-2">{action.icon}</div>
                <span className="text-sm font-medium text-gray-700">{action.name}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}