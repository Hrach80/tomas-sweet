

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage.jsx';
import { menuData } from '../../data/menuData.js';
import './Menu.scss';

import logo from '/images/logo.png';

const Menu = () => {
    const { t, lang } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [animateClass, setAnimateClass] = useState('');
    const [flippedCardId, setFlippedCardId] = useState(null);
    const [orderMessage, setOrderMessage] = useState('');

    const categories = [
        { key: 'all', label: t('MENU_ALL') || 'All Products' },
        ...Array.from(new Set(menuData.map(item => item.category)))
            .map(cat => ({
                key: cat,
                label: menuData.find(item => item.category === cat)[`category_${lang}`] || t(cat.toUpperCase())
            }))
    ];

    const filteredItems = selectedCategory === 'all'
        ? menuData
        : menuData.filter(item => item.category === selectedCategory);

    const handleCategoryChange = (category) => {
        setAnimateClass('fade-out');
        setFlippedCardId(null);
        setTimeout(() => {
            setSelectedCategory(category);
            setAnimateClass('fade-in');
        }, 300);
    };

    useEffect(() => {
        setAnimateClass('fade-in');
    }, []);

    const getTitle = (item) => item[`title_${lang}`] || item.title_en;
    const getDescription = (item) => item[`description_${lang}`] || item.description_en;
    const sendWhatsAppOrder = (item) => {
        const itemName = getTitle(item);
        const phone = t('WHATSAPP_NUMBER') || '+37494395221';

        let message = `*${t('FLIP_CARD_TITLE') || 'New Order Request'}*\n`;
        message += `------------------------\n`;
        message += `${t('MENU') || 'Product'}: ${itemName} (${item.category})\n`;
        message += `${t('ORDER_NOW') || 'Price'}: ${item.price.toLocaleString()} AMD\n`;
        message += `\n${t('FLIP_CARD_MESSAGE') || 'Special Request'}:\n${orderMessage || t('NO_MESSAGE_PROVIDED') || 'No additional request provided.'}\n`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone.replace(/\+/g, '')}?text=${encodedMessage}`, '_blank');

        setFlippedCardId(null);
        setOrderMessage('');
    };

    const handleFlip = (id) => {
        setFlippedCardId(flippedCardId === id ? null : id);
        setOrderMessage('');
    };

    return (
        <section className="menu-page">
            <h1 className="menu-title">{t('MENU_TITLE') || 'Our Sweets Collection'}</h1>

            <div className="category-tabs">
                {categories.map(cat => (
                    <button
                        key={cat.key}
                        className={`tab-btn ${selectedCategory === cat.key ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(cat.key)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className={`menu-list ${animateClass}`}>
                {filteredItems.map(item => (
                    <div
                        className={`menu-item-container ${flippedCardId === item.id ? 'flipped' : ''}`}
                        key={item.id}
                    >
                        <div className="menu-item-inner">
                            <div className="menu-item front">
                                <div className="item-image-wrapper">
                                    <img src={item.img} alt={getTitle(item)} className="item-image" />
                                </div>
                                <div className="item-details">
                                    <h3 className="item-title">{getTitle(item)}</h3>
                                    <p className="item-description">{getDescription(item)}</p>
                                    <div className="item-footer">
                                        <span className="item-price">{item.price.toLocaleString()} AMD</span>
                                        <button
                                            className="order-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleFlip(item.id);
                                            }}
                                        >
                                            {t('MENU_ORDER') || 'Order Now'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item back">
                                <div className="back-content">
                                    <img src={logo} alt="Logo" className="back-logo" />
                                    <h4 className="back-title">{t('FLIP_CARD_TITLE')}</h4>
                                    <p className="back-message">{t('FLIP_CARD_MESSAGE')}</p>

                                    <textarea
                                        className="message-input"
                                        placeholder={t('FLIP_CARD_PLACEHOLDER') || 'Enter your special request here...'}
                                        value={orderMessage}
                                        onChange={(e) => setOrderMessage(e.target.value)}
                                        onClick={(e) => e.stopPropagation()}
                                        rows="3"
                                    />

                                    <button
                                        className="send-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            sendWhatsAppOrder(item); 
                                        }}
                                    >
                                        {t('SEND_ORDER') || 'Send Order via WhatsApp'}
                                    </button>

                                    <button
                                        className="cancel-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleFlip(item.id);
                                        }}
                                    >
                                        {t('CANCEL') || 'Cancel'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;