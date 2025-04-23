import React from 'react';
import { ShieldCheckIcon, ClockIcon, HelpCircleIcon } from 'lucide-react';

const AdditionalInfo = () => {
  return (
    <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Дополнительная информация</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <ShieldCheckIcon className="h-5 w-5 text-primary mr-2" />
              <h4 className="text-lg font-medium text-gray-900">Безопасность</h4>
            </div>
            <p className="text-gray-600">Все тарифы включают базовую защиту от DDoS-атак и вредоносных программ</p>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <ClockIcon className="h-5 w-5 text-primary mr-2" />
              <h4 className="text-lg font-medium text-gray-900">Установка</h4>
            </div>
            <p className="text-gray-600">Подключение и настройка оборудования в течение 24 часов после заявки</p>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <HelpCircleIcon className="h-5 w-5 text-primary mr-2" />
              <h4 className="text-lg font-medium text-gray-900">Поддержка</h4>
            </div>
            <p className="text-gray-600">Круглосуточная техническая поддержка 24/7 по телефону или через онлайн-чат</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
