import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import './Macarons.scss';

const Macarons = () => {
    const { t } = useLanguage();
const navigate = useNavigate(); // 1. Ներմուծել useNavigate

    const handleOrderNow = () => {
        navigate('/offers');
    };
    return (
        <section className="macarons-section">
            <h2 className="section-title">{t('MACARONS_TITLE')}</h2>
            {/* Տեքստը դիզայնի մեջ քիչ է, դնում ենք placeholder */}
            <p className="description-text-small">
                {t('CUSTOM_CAKES_TEXT').substring(0, 100)}...
            </p>

            <div className="macarons-content">
                <div className="treats-gallery">
                    <div className="gallery-item item-1">
                        <img src="/images/cupcake-2.png" alt="Cupcakes" />
                    </div>
                    <div className="gallery-item item-2">
                        <img src="/images/macaron-2.png" alt="Pink Cakes" />
                    </div>
                    <div className="gallery-item item-3">
                        <img src="/images/macaron-1.png" alt="Berry Cupcakes" />
                    </div>
                </div>

                <div className="holiday-offer-card">
                    <div className="card-content">
                        <h3 className="collection-title">{t('HOLIDAY_COLLECTION')}</h3>
                        <p className="discount-text">{t('OFF_20')}</p> 
                        <button className="btn order-btn" onClick={handleOrderNow}>
                            {t('ORDER_TODAY')}
                        </button>
                    </div>
                    <img
                        src="/images/cake-hero-2.png"
                        alt="Holiday Decoration"
                        className="card-decoration"
                    />
                </div>
            </div>
        </section>
    );
};

export default Macarons;