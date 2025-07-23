import { useState } from 'react';

const RadheshyamElectronics = () => {
  const [tvs, setTvs] = useState([]);
  const [formData, setFormData] = useState({
    brand: '',
    size: '',
    date: '',
    deliveryDate: '',
    amount: '',
    issue: '',
    status: 'pending'
  });
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTvs([...tvs, { ...formData, id: Date.now() }]);
    setFormData({
      brand: '',
      size: '',
      date: '',
      deliveryDate: '',
      amount: '',
      issue: '',
      status: 'pending'
    });
  };

  const handlePayment = (id) => {
    setTvs(tvs.map(tv => tv.id === id ? { ...tv, status: 'paid' } : tv));
  };

  const handleDelete = (id) => {
    setTvs(tvs.filter(tv => tv.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
              <span className="text-xl font-bold">RE</span>
            </div>
            <h1 className="text-2xl font-bold">Radheshyam Electronics</h1>
          </div>
          <nav className="flex space-x-1 md:space-x-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'dashboard' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('add')}
              className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'add' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
            >
              Add New TV
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'services' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
            >
              Our Services
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {activeTab === 'dashboard' && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">TV Service Dashboard</h2>
            {tvs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No TVs added yet. Add your first TV service record.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  <div className="bg-gray-50 rounded-t-lg flex font-semibold text-sm">
                    <div className="w-1/6 p-3">Brand</div>
                    <div className="w-1/6 p-3">Size</div>
                    <div className="w-1/6 p-3">Issue Date</div>
                    <div className="w-1/6 p-3">Delivery Date</div>
                    <div className="w-1/6 p-3">Amount</div>
                    <div className="w-1/6 p-3">Actions</div>
                  </div>
                  {tvs.map(tv => (
                    <div key={tv.id} className="flex border-b hover:bg-gray-50 text-sm">
                      <div className="w-1/6 p-3">{tv.brand}</div>
                      <div className="w-1/6 p-3">{tv.size}"</div>
                      <div className="w-1/6 p-3">{tv.date}</div>
                      <div className="w-1/6 p-3">{tv.deliveryDate}</div>
                      <div className="w-1/6 p-3">₹{tv.amount}</div>
                      <div className="w-1/6 p-3 flex space-x-2">
                        {tv.status === 'pending' && (
                          <button 
                            onClick={() => handlePayment(tv.id)}
                            className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                          >
                            Confirm Payment
                          </button>
                        )}
                        {tv.status === 'paid' && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span>
                        )}
                        <button 
                          onClick={() => handleDelete(tv.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'add' && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Add New TV Service</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Brand</label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Size (inches)</label>
                  <input
                    type="number"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Received Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Expected Delivery Date</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Service Amount (₹)</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-1">Issue Description</label>
                <textarea
                  name="issue"
                  value={formData.issue}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add TV Service
              </button>
            </form>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-semibold mb-6 text-blue-600 border-b pb-2">Our Services</h2>
            
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg h-full border border-blue-100">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">LED Panel Replacement</h3>
                  <p className="text-gray-600 text-sm">Professional replacement of damaged LED panels with genuine parts for all major brands.</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg h-full border border-blue-100">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Power Supply Repair</h3>
                  <p className="text-gray-600 text-sm">Diagnosis and repair of power supply issues including no power, intermittent power, etc.</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg h-full border border-blue-100">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Main Board Repair</h3>
                  <p className="text-gray-600 text-sm">Expert repair of main board issues including no display, freezing, software problems.</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg h-full border border-blue-100">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Backlight Repair</h3>
                  <p className="text-gray-600 text-sm">Fix for dark screen issues including LED strip replacement and backlight circuit repair.</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg h-full border border-blue-100">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Software Update</h3>
                  <p className="text-gray-600 text-sm">Firmware updates and software troubleshooting for smart TV features and performance.</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg h-full border border-blue-100">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">General Diagnosis</h3>
                  <p className="text-gray-600 text-sm">Comprehensive TV health check to identify any existing or potential issues.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    All our services come with a 90-day warranty on parts and labor. We use only genuine components for all repairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Radheshyam Electronics - LED TV Service Center</p>
        <p className="mt-1 text-gray-400">Contact: +91 XXXXX XXXXX | Address: [Your Address]</p>
      </footer>
    </div>
  );
};

export default RadheshyamElectronics;