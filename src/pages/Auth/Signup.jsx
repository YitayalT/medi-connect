import { useState } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiAlertCircle, FiArrowRight } from 'react-icons/fi';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      await signup(email, password, name);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center justify-center py-12 sm:px-6 ">
         
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-green-600">Create Your Account</h2>
            <p className="mt-2 text-center text-sm text-green-600">Join Our Community Today</p>
          </div>

           <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-start">
                <FiAlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-slate-600 focus:ring-slate-500 border-slate-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className="block text-sm text-slate-700">
                    I agree to the <a href="#" className="text-slate-800 hover:text-slate-900 font-medium underline">Terms</a> and <a href="#" className="text-slate-800 hover:text-slate-900 font-medium underline">Privacy Policy</a>
                  </label>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full group flex justify-center items-center gap-2 bg-green-600 hover:bg-green-900 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow-md"
            >
              Sign Up
              <FiArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <div className="text-center text-sm text-slate-600">
              Already have an account?{' '}
              <a href="/login" className="text-slate-800 hover:text-slate-900 font-medium underline">Log in</a>
            </div>
          </form>
          
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500">By signing up, you agree to our terms of service and privacy policy.</p>
          </div>
        </div>
        
      </div>
   
  );
}