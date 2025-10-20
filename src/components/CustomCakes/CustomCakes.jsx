import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 ԱՎԵԼԱՑՐԵՔ ԱՅՍ ՏՈՂԸ
import { useLanguage } from '../../hooks/useLanguage';
import './CustomCakes.scss';

const cakesData = [
    { id: 1, img: '/images/custom-cake-1.png', desc: 'Pink Berry Delight' },
    { id: 2, img: '/images/custom-cake-2.png', desc: 'Elegant Vanilla' },
    { id: 3, img: '/images/custom-cake-3.png', desc: 'Macaron Blush' },
    { id: 4, img: '/images/custom-cake-4.png', desc: 'Two-Tone Classic' },
];

const CustomCakes = () => {
    const { t } = useLanguage();
    const navigate = useNavigate(); // 👈 ՍԱՀՄԱՆԵՔ useNavigate հուքը

    // Ֆունկցիա, որը կանչվում է, երբ սեղմում ենք "Պատվիրել հիմա" կոճակը
    const handleOrderClick = () => {
        navigate('/menu'); // Հղումը տանում է /menu էջ
    };

    return (
        <section className="custom-cakes-section">
            <h2 className="section-title">{t('CUSTOM_CAKES_TITLE')}</h2>
            <p className="description-text">{t('CUSTOM_CAKES_TEXT')}</p>

            <div className="cakes-grid">
                {cakesData.map((cake, index) => (
                    <div
                        key={cake.id}
                        className="cake-card"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div
                            className="cake-img-wrapper"
                            onClick={handleOrderClick} 
                        >
                            <img src={cake.img} alt={cake.desc} />
                            <div className="overlay">
                                <span className="view-btn">{t('ORDER_NOW')}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomCakes;