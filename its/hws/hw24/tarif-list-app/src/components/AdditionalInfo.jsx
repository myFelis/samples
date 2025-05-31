import React from 'react';
import { ShieldCheckIcon, ClockIcon, HelpCircleIcon } from 'lucide-react';

const AdditionalInfo = () => {
  // Массив данных для элементов
  const infoItems = [
    {
      id: 1,
      icon: ShieldCheckIcon,
      title: "Безопасность",
      description: "Все тарифы включают базовую защиту от DDoS-атак и вредоносных программ"
    },
    {
      id: 2,
      icon: ClockIcon,
      title: "Установка",
      description: "Подключение и настройка оборудования в течение 24 часов после заявки"
    },
    {
      id: 3,
      icon: HelpCircleIcon,
      title: "Поддержка",
      description: "Круглосуточная техническая поддержка 24/7 по телефону или через онлайн-чат"
    }
  ];

  return (
    <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Дополнительная информация</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center mb-2">
                  <IconComponent className="h-5 w-5 text-primary mr-2" />
                  <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
