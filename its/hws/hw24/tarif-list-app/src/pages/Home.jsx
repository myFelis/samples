import React from 'react';
import TariffSelector from '../components/TariffSelector';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-1200 mx-auto px-4">
          <h1 className="text-xl font-semibold text-gray-800">Интернет-провайдер</h1>
        </div>
      </header>
      
      <main>
         <TariffSelector />
      </main>
      
      <footer className="bg-white py-6 mt-12">
        <div className="max-w-1200 mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Интернет-провайдер. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;