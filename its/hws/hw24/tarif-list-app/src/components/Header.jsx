import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Интернет-Тарифы</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-white text-gray-600 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors flex items-center">
              <Phone className="h-5 w-5 inline mr-2" />
              Поддержка
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
