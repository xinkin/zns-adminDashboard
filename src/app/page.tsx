'use client';
import React, { useState } from 'react';
import CommonFunctions from '@/app/components/CommonFunctions';
import OracleFunctions from '@/app/components/OracleFunctions';
import GiftCardFunctions from '@/app/components/GiftCardFunctions';
import RegistryFunctions from '@/app/components/RegistryFunctions';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('common');

  const tabs = [
    { id: 'common', label: 'Common' },
    { id: 'oracle', label: 'Oracle' },
    { id: 'giftCard', label: 'Gift Card' },
    { id: 'registry', label: 'Registry' },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'common':
        return <CommonFunctions />;
      case 'oracle':
        return <OracleFunctions />;
      case 'giftCard':
        return <GiftCardFunctions />;
      case 'registry':
        return <RegistryFunctions />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mr-2 px-4 py-2 rounded-xl ${
              activeTab === tab.id ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">{renderActiveTab()}</div>
    </div>
  );
};

export default AdminDashboard;
