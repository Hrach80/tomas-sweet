import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.jsx'; 
import CountdownTimer from '../../components/Offers/CountdownTimer.jsx'; 
import './SpecialOffers.scss'; 

import { FaTruck, FaGift, FaBirthdayCake } from 'react-icons/fa';


const TARGET_DATE = '2026-10-25T23:59:59'; 

const offerCardsData = [
    {
        icon: FaGift,
        titleKey: 'OFFER_TITLE_1',
        descKey: 'OFFER_DESC_1',
        color: '#f44336' 
    },
    {
        icon: FaTruck,
        titleKey: 'OFFER_TITLE_2',
        descKey: 'OFFER_DESC_2',
        color: '#00bcd4' 
    },
    {
        icon: FaBirthdayCake,
        titleKey: 'OFFER_TITLE_3',
        descKey: 'OFFER_DESC_3',
        color: '#ffc107' 
    },
];

const SpecialOffers = () => {
    const { t } = useLanguage();

    return (
        <section className="special-offers-page">
            <h1 className="page-title">{t('SPECIAL_OFFERS')}</h1>
            <div className="hero-offer-block">
                <div className="offer-image-wrapper">
                    <img
                        src="/images/cake-hero-1.png"
                        alt={t('OFFER_SLOGAN_HERO')}
                        className="offer-image pulse-animation"
                    />
                </div>

                <div className="offer-content">
                    <p className="pre-title">{t('OFFER_PRE_TITLE_HERO')}</p>
                    <h2 className="offer-slogan">{t('OFFER_SLOGAN_HERO')}</h2>
                    <p className="discount-tag">{t('OFF_20')}</p>
                    <div className="timer-wrapper">
                        <p className="timer-text">{t('OFFER_TIMER_TEXT')}</p>
                        <CountdownTimer targetDate={TARGET_DATE} />
                    </div>

                    <a href="/menu" className="cta-button">
                        {t('ORDER_NOW')}
                    </a>
                </div>
            </div>

            <div className="offer-cards-grid">
                {offerCardsData.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={index}
                            className="offer-card interactive-hover"
                            style={{ '--card-color': card.color }}
                        >
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default SpecialOffers;