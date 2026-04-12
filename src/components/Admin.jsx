import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { RefreshCw, Trash2, Download } from 'lucide-react'; // use lucide-react since it's in package.json

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!supabase) {
        throw new Error("Supabase is not configured yet.");
      }

      const { data: bookingsData, error: fetchError } = await supabase
        .from('Bookings')
        .select('*');

      if (fetchError) {
        throw fetchError;
      }

      setData(bookingsData || []);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      alert("Cannot delete: This record is missing a unique ID.");
      return;
    }

    if (!window.confirm('Are you sure you want to delete this booking?')) {
      return;
    }

    try {
      setLoading(true);
      
      // Perform the deletion in Supabase. 
      // We use .select() to confirm that a row was actually affected.
      const { data: deletedData, error: deleteError } = await supabase
        .from('Bookings')
        .delete()
        .eq('id', id)
        .select();

      if (deleteError) {
        throw deleteError;
      }

      // If no data is returned, it means the row wasn't deleted 
      // (usually due to Row Level Security policies or the ID not matching).
      if (!deletedData || deletedData.length === 0) {
        throw new Error("The record could not be deleted from the database. This is usually caused by Supabase Row Level Security (RLS) policies. Please ensure 'DELETE' permissions are enabled for the 'anon' role on the 'Bookings' table.");
      }

      // Success! Update the UI state to reflect the change.
      setData(prevData => prevData.filter(item => item.id !== id));
      
    } catch (err) {
      console.error('Error deleting record:', err);
      alert('Failed to delete: ' + err.message);
      
      // Re-fetch data to ensure the UI is in sync with the database
      fetchData();
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (data.length === 0) return;

    const headers = ['ID', 'Name', 'Phone', 'Age', 'Created At'];
    const csvContent = [
      headers.join(','),
      ...data.map(item => [
        item.id,
        `"${item.name || ''}"`,
        item.phone,
        item.age,
        item.created_at ? new Date(item.created_at).toLocaleString().replace(/,/g, '') : ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `bookings_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'atharv08') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter admin password"
              />
            </div>
            {authError && <p className="text-red-500 text-sm mb-4">{authError}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <a href="/" className="text-sm text-gray-500 hover:text-gray-700">Back to Home</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

          <div className="flex gap-4">
            <button
              onClick={exportToCSV}
              disabled={loading || data.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <Download className="w-5 h-5" />
              Export CSV
            </button>
            <a href="/" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              Back to Home
            </a>
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-sm text-gray-500 uppercase font-semibold">Total Bookings</p>
            <p className="text-3xl font-bold text-gray-800">{data.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-sm text-gray-500 uppercase font-semibold">Search Records</p>
            <input
              type="text"
              placeholder="Search by name or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full mt-2 px-3 py-1 border rounded text-sm focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <p><strong>Error:</strong> {error}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {loading && data.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Loading data...</div>
          ) : data.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No bookings found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-4 font-semibold text-gray-700">ID</th>
                    <th className="p-4 font-semibold text-gray-700">Name</th>
                    <th className="p-4 font-semibold text-gray-700">Phone</th>
                    <th className="p-4 font-semibold text-gray-700">Age</th>
                    <th className="p-4 font-semibold text-gray-700">Created At</th>
                    <th className="p-4 font-semibold text-gray-700 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter(booking =>
                      (booking.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                      (booking.phone || '').includes(searchTerm)
                    )
                    .map((booking, index) => (
                      <tr
                        key={booking.id || index}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-4 text-gray-600">{booking.id || '-'}</td>
                        <td className="p-4 text-gray-800 font-medium">{booking.name || '-'}</td>
                        <td className="p-4 text-gray-600">{booking.phone || '-'}</td>
                        <td className="p-4 text-gray-600">{booking.age || '-'}</td>
                        <td className="p-4 text-gray-500 text-sm">
                          {booking.created_at ? new Date(booking.created_at).toLocaleString() : '-'}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleDelete(booking.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                            title="Delete Booking"
                            disabled={loading}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
