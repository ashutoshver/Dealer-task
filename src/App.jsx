import React, { useState } from 'react';
import Layout from './components/Layout';
import DealerList from './components/DealerList';
import DealerProfileForm from './components/DealerProfileForm';
import Modal from './components/Modal';
import { mockDealers } from './data/mockDealers';

function App() {
  const [dealers, setDealers] = useState(mockDealers);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('view');
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleViewDealer = (dealer) => {
    setSelectedDealer(dealer);
    setModalMode('view');
    setModalOpen(true);
  };

  const handleEditDealer = (dealer) => {
    setSelectedDealer(dealer);
    setModalMode('edit');
    setModalOpen(true);
  };

  const handleSaveDealer = (updatedDealer) => {
    setDealers(prevDealers =>
      prevDealers.map(dealer =>
        dealer.id === updatedDealer.id ? { ...dealer, ...updatedDealer, contact: updatedDealer.phone } : dealer
      )
    );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDealer(null);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Dealer Dashboard
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'form'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Add New Dealer
          </button>
        </div>

        {activeTab === 'dashboard' ? (
          <div>
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Dealers</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{dealers.length}</p>
                    </div>
                    <div className="text-4xl">🏢</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Active</p>
                      <p className="text-3xl font-bold text-green-600 mt-2">
                        {dealers.filter(d => d.status === 'Active').length}
                      </p>
                    </div>
                    <div className="text-4xl">✅</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Inactive</p>
                      <p className="text-3xl font-bold text-red-600 mt-2">
                        {dealers.filter(d => d.status === 'Inactive').length}
                      </p>
                    </div>
                    <div className="text-4xl">❌</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Pending</p>
                      <p className="text-3xl font-bold text-yellow-600 mt-2">
                        {dealers.filter(d => d.status === 'Pending').length}
                      </p>
                    </div>
                    <div className="text-4xl">⏳</div>
                  </div>
                </div>
              </div>
            </div>

            <DealerList
              dealers={dealers}
              onViewDealer={handleViewDealer}
              onEditDealer={handleEditDealer}
            />
          </div>
        ) : (
          <DealerProfileForm />
        )}

        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          mode={modalMode}
          dealer={selectedDealer}
          onSave={handleSaveDealer}
        />
      </div>
    </Layout>
  );
}

export default App;
