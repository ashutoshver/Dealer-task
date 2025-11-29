import React, { useState } from 'react';

const DealerProfileForm = () => {
  const [formData, setFormData] = useState({
    dealerName: '',
    address: '',
    email: '',
    phone: '',
    operatingHours: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.dealerName.trim()) {
      newErrors.dealerName = 'Dealer name is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    if (!formData.operatingHours.trim()) {
      newErrors.operatingHours = 'Operating hours are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmittedData(formData);
      setFormData({
        dealerName: '',
        address: '',
        email: '',
        phone: '',
        operatingHours: ''
      });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dealer Profile Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="dealerName" className="block text-sm font-medium text-gray-700 mb-1">
              Dealer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="dealerName"
              name="dealerName"
              value={formData.dealerName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.dealerName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter dealer name"
            />
            {errors.dealerName && (
              <p className="mt-1 text-sm text-red-500">{errors.dealerName}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter complete address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="dealer@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="operatingHours" className="block text-sm font-medium text-gray-700 mb-1">
              Operating Hours <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="operatingHours"
              name="operatingHours"
              value={formData.operatingHours}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.operatingHours ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Mon-Fri: 9AM-6PM"
            />
            {errors.operatingHours && (
              <p className="mt-1 text-sm text-red-500">{errors.operatingHours}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  dealerName: '',
                  address: '',
                  email: '',
                  phone: '',
                  operatingHours: ''
                });
                setErrors({});
              }}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 border-2 border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Dealer Profile Preview</h3>
            <button
              onClick={handleReset}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear Preview
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="border-b pb-4">
              <h4 className="text-2xl font-bold text-blue-600">{submittedData.dealerName}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Address</p>
                <p className="mt-1 text-gray-800">{submittedData.address}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Operating Hours</p>
                <p className="mt-1 text-gray-800">{submittedData.operatingHours}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                <p className="mt-1 text-blue-600 hover:underline">
                  <a href={`mailto:${submittedData.email}`}>{submittedData.email}</a>
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                <p className="mt-1 text-blue-600 hover:underline">
                  <a href={`tel:${submittedData.phone}`}>{submittedData.phone}</a>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                  ✓ Successfully Submitted
                </span>
                <span className="text-sm text-gray-500">
                  Submitted on {new Date().toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealerProfileForm;
