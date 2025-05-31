import React, { useState } from 'react';
import TariffCard from './TariffCard';
import AdditionalInfo from './AdditionalInfo'
import { InfoIcon, Calendar, CalendarClock } from 'lucide-react';
import styles from '../styles/TariffSelector.module.css';

// Данные о тарифных планах
const tariffPlans = [
  {
    id: 1,
    name: 'Базовый',
    speed: 50,
    monthlyPrice: 299,
    yearlyPrice: 2990, // ~10 месяцев вместо 12 (скидка ~17%)
    description: 'Для базового использования интернета',
    speedLevel: 'low',
    isRecommended: false,
    type: 'basic'
  },
  {
    id: 2,
    name: 'Стандарт',
    speed: 100,
    monthlyPrice: 499,
    yearlyPrice: 4990, // ~10 месяцев вместо 12 (скидка ~17%)
    description: 'Для комфортного использования интернета',
    speedLevel: 'medium',
    isRecommended: false,
    type: 'standard'
  },
  {
    id: 3,
    name: 'Премиум',
    speed: 300,
    monthlyPrice: 699,
    yearlyPrice: 6990, // ~10 месяцев вместо 12 (скидка ~17%)
    description: 'Для требовательных пользователей',
    speedLevel: 'high',
    isRecommended: true,
    type: 'premium'
  },
  {
    id: 4,
    name: 'Безлимитный',
    speed: 1000,
    monthlyPrice: 1299,
    yearlyPrice: 12990, // ~10 месяцев вместо 12 (скидка ~17%)
    description: 'Для профессионального использования',
    speedLevel: 'max',
    isRecommended: false,
    type: 'unlimited'
  }
];

const TariffSelector = () => {
  // Состояние для хранения ID выбранного тарифа
  const [selectedTariffId, setSelectedTariffId] = useState(3); // По умолчанию выбран Премиум
  
  // Состояние для хранения выбранного периода оплаты (месячный или годовой)
  const [isYearly, setIsYearly] = useState(false);

  // Функция для обработки выбора тарифа
  const handleTariffSelect = (id) => {
    setSelectedTariffId(id);
  };
  
  // Функция для переключения между месячным и годовым периодом
  const toggleBillingPeriod = () => {
    setIsYearly(!isYearly);
  };

  // Вычисление скидки для годового периода
  const discountPercentage = 17; // примерно 17% скидка при годовой оплате

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Выберите тарифный план</h1>
        <p className={styles.subtitle}>
          Мы предлагаем различные тарифные планы для удовлетворения ваших потребностей
        </p>
        
        {/* Переключатель периода оплаты */}
        <div className={styles.billingToggle}>
          <div className={styles.billingPeriodWrapper}>
            <div className={`${styles.billingOption} ${!isYearly ? styles.billingOptionActive : ''}`}>
              <Calendar size={16} />
              <span>в мес.</span>
            </div>
            
            <div className={styles.toggleWrapper}>
              <label className={styles.switch}>
                <input 
                  type="checkbox" 
                  checked={isYearly} 
                  onChange={toggleBillingPeriod}
                  className={styles.toggleInput}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            
            <div className={`${styles.billingOption} ${isYearly ? styles.billingOptionActive : ''}`}>
              <CalendarClock size={16} />
              <span>в год</span>
              <span className={styles.discount}>
                <span className={styles.discountTextFull}>Скидка {discountPercentage}%</span>
                <span className={styles.discountTextShort}>-{discountPercentage}%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tariffGrid}>
          {tariffPlans.map((tariff) => {
            const tariffProps = {...tariff};
            tariffProps.price = isYearly ? tariff.yearlyPrice : tariff.monthlyPrice;
            tariffProps.period = isYearly ? 'год' : 'мес';
            tariffProps.isSelected = selectedTariffId === tariff.id;
            tariffProps.onSelect = () => handleTariffSelect(tariff.id);

            return <TariffCard key={tariff.id} {...tariffProps} />;
          })}
        </div>

      <div className={styles.tariffGrid}>
          <p>
               <AdditionalInfo />
          </p>
      </div>

      <div className={styles.footer}>
        <p>
          <span className={styles.infoIcon}>
            <InfoIcon size={16} />
          </span>
          Указанные скорости являются максимально возможными и могут варьироваться в зависимости от загруженности сети и других факторов.
        </p>
      </div>
    </div>
  );
};

export default TariffSelector;