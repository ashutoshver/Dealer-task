import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, mode, dealer, onSave }) => {
  const [formData, setFormData] = useState({
    dealerName: '',
    address: '',
    email: '',
    phone: '',
    operatingHours: '',
    location: '',
    status: 'Active'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (dealer) {
      setFormData({
        dealerName: dealer.dealerName || '',
        address: dealer.address || '',
        email: dealer.email || '',
        phone: dealer.phone || '',
        operatingHours: dealer.operatingHours || '',
        location: dealer.location || '',
        status: dealer.status || 'Active'
      });
    }
  }, [dealer]);

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

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
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

    if (mode === 'edit' && validateForm()) {
      onSave({ ...dealer, ...formData });
      onClose();
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={handleClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-6 pt-5 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {mode === 'view' ? 'Dealer Details' : 'Edit Dealer Information'}
              </h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {mode === 'view' ? (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="text-2xl font-bold text-blue-600">{dealer?.dealerName}</h4>
                  <div className="mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(dealer?.status)}`}>
                      {dealer?.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Location</p>
                    <p className="mt-1 text-gray-800">{dealer?.location}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Contact</p>
                    <p className="mt-1 text-gray-800">{dealer?.contact}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="mt-1 text-blue-600 hover:underline">
                      <a href={`mailto:${dealer?.email}`}>{dealer?.email}</a>
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="mt-1 text-blue-600 hover:underline">
                      <a href={`tel:${dealer?.phone}`}>{dealer?.phone}</a>
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Address</p>
                    <p className="mt-1 text-gray-800">{dealer?.address}</p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Operating Hours</p>
                    <p className="mt-1 text-gray-800">{dealer?.operatingHours}</p>
                  </div>
                </div>
              </div>
            ) : (
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
                  />
                  {errors.dealerName && (
                    <p className="mt-1 text-sm text-red-500">{errors.dealerName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-500">{errors.location}</p>
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
                    rows="2"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
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
                  />
                  {errors.operatingHours && (
                    <p className="mt-1 text-sm text-red-500">{errors.operatingHours}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>

          {mode === 'view' && (
            <div className="bg-gray-50 px-6 py-4">
              <button
                onClick={handleClose}
                className="w-full px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
