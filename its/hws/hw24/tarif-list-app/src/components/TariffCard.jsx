import React from 'react';
import styles from '../styles/TariffCard.module.css';
import { Wifi, CheckCircle2, Clock, Shield, Trophy, Star } from 'lucide-react';

const TariffCard = ({ 
  name, 
  speed, 
  price, 
  isSelected, 
  isRecommended, 
  speedLevel, 
  description, 
  type,
  onSelect,
  features,
  period = 'мес'
}) => {
  // Определяем классы для карточки на основе выбрана она или нет
  let cardTypeClass = '';
  switch(type) {
    case 'basic':
      cardTypeClass = styles.tariffCardBasic;
      break;
    case 'standard':
      cardTypeClass = styles.tariffCardStandard;
      break;
    case 'premium':
      cardTypeClass = styles.tariffCardPremium;
      break;
    case 'unlimited':
      cardTypeClass = styles.tariffCardUnlimited;
      break;
    default:
      cardTypeClass = '';
  }
  
  const cardClassName = `${styles.tariffCard} ${cardTypeClass} ${isSelected ? styles.selected : ''}`;
  
  // Определяем классы для индикатора скорости
  const speedLevelClass = 
    speedLevel === 'low' ? styles.speedLevelLow :
    speedLevel === 'medium' ? styles.speedLevelMed :
    speedLevel === 'high' ? styles.speedLevelHigh :
    speedLevel === 'max' ? styles.speedLevelMax : '';

  return (
    <div className={cardClassName} onClick={onSelect}>
      {/* Показываем бейдж для рекомендованного тарифа */}
      {isRecommended ? (
        <div className={styles.badge}>
          <Trophy size={14} className={styles.badgeIcon} /> Рекомендуемый
        </div>
      ) : null}
      
      {/* Показываем бейдж для премиум тарифа */}
      {type === 'premium' && (
        <div className={styles.premiumBadge}>
          <Star size={14} className={styles.badgeIcon} /> Премиум
        </div>
      )}
      
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
      
      <div className={styles.speedIndicator}>
        <div className={`${styles.speedLevel} ${speedLevelClass}`}></div>
      </div>
      
      <div className={styles.speed}>{speed} Мбит/с</div>
      <div className={styles.price}>{price} ₽/{period}</div>
      
      <button className={`
        ${styles.button} 
        ${styles[`button${type.charAt(0).toUpperCase() + type.slice(1)}`]}
        ${isSelected ? styles.buttonSelected : ''}
      `}>
        {isSelected ? 'Выбрано' : 'Выбрать'}
      </button>
      
      {/* Нижняя секция на сером фоне */}
      <div className={styles.featureSection}>
        {/* Секция с выделенным качеством */}
        <div className={styles.featureHighlight}>
          {type === 'basic' && 'Идеально для начинающих'}
          {type === 'standard' && 'Оптимальный баланс'}
          {type === 'premium' && 'Высокая скорость'}
          {type === 'unlimited' && 'Максимальная производительность'}
        </div>
        
        {/* Разделительная линия */}
        <div className={styles.divider}></div>
        
        {/* Дополнительная информация */}
        <div className={styles.additionalInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}><Wifi size={14} /></span>
            <span>Стабильное соединение</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}><CheckCircle2 size={14} /></span>
            <span>Без ограничений трафика</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}><Clock size={14} /></span>
            <span>Техподдержка 24/7</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}><Shield size={14} /></span>
            <span>Защита от DDoS-атак</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;