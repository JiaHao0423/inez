import React, {useState} from 'react';
import './CartPage.scss';
import {useNavigate} from "react-router-dom";
import Header from '../../components/layout/Header/Header.jsx';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: '女士短版襯衫',
            color: '#FFB6C1',
            size: 'S',
            price: 590,
            quantity: 1,
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
        },
        {
            id: 2,
            name: '女士短版襯衫',
            color: '#FFB6C1',
            size: 'S',
            price: 590,
            quantity: 1,
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
        },
        {
            id: 3,
            name: '女士短版襯衫',
            color: '#FFB6C1',
            size: 'S',
            price: 590,
            quantity: 1,
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
        },
        {
            id: 4,
            name: '女士短版襯衫',
            color: '#FFB6C1',
            size: 'S',
            price: 590,
            quantity: 1,
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
        },
        {
            id: 5,
            name: '女士短版襯衫',
            color: '#FFB6C1',
            size: 'S',
            price: 590,
            quantity: 1,
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
        },
        {
            id: 6,
            name: '女士短版襯衫',
            color: '#FFB6C1',
            size: 'S',
            price: 590,
            quantity: 1,
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
        },
        // ... 其他商品
    ]);

    return (
        <div className="cart">
            <header className="cart__header">
                <button className="cart__back-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <h1 className="cart__title">購物車</h1>
                <div className="cart__header-icons">
                    <button className="cart__icon cart__icon--help">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9"
                                    stroke="currentColor" strokeWidth="2"/>
                            <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.8.6-1.3 1-1.3 2.3"
                                  stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round"/>
                            <circle cx="12" cy="17" r="1" fill="currentColor"/>
                        </svg>
                    </button>
                    <button className="cart__icon cart__icon--user">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="8" r="4"
                                    stroke="currentColor" strokeWidth="2"/>
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6"
                                  stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </header>

            <Header className="header--cart" />

            <main className="cart__container">
                {/* 桌機版表頭 */}
                <div className="cart__table-header">
                    <span className="cart__table-label">商品</span>
                    <span className="cart__table-label">價錢</span>
                    <span className="cart__table-label">數量</span>
                    <span className="cart__table-label">總價</span>
                    <span className="cart__table-label"></span>
                </div>

                <div className="cart__list">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item__checkbox-wrapper">
                                <input type="checkbox" id={item.id} className="cart-item__checkbox"/>
                                <label htmlFor={item.id} className="cart-item__checkbox-label"></label>
                            </div>
                            <img src={item.img} alt={item.name} className="cart-item__img"/>
                            <div className="cart-item__content">
                                <button className="cart-item__remove-btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h3 className="cart-item__name">{item.name}</h3>
                                <div className="cart-item__detail">
                                    顏色
                                    <span className="cart-item__color-dot" style={{backgroundColor: item.color}}/>
                                </div>
                                <div className="cart-item__detail">
                                    尺寸 <span className="cart-item__size-tag">{item.size}</span>
                                </div>
                                <div className="quantity-selector">
                                    <button className="quantity-selector__btn quantity-selector__btn--minus">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12h14"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"/>
                                        </svg>

                                    </button>
                                    <span className="quantity-selector__value">{item.quantity}</span>
                                    <button className="quantity-selector__btn quantity-selector__btn--plus">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5v14M5 12h14"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="cart-item__price cart-item__price--mobile">${item.price}</div>
                            </div>
                            <div className="cart-item__price cart-item__price--desktop">${item.price}</div>
                            <div className="quantity-selector quantity-selector--desktop">
                                <button className="quantity-selector__btn quantity-selector__btn--minus">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12h14"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"/>
                                    </svg>

                                </button>
                                <span className="quantity-selector__value">{item.quantity}</span>
                                <button className="quantity-selector__btn quantity-selector__btn--plus">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5v14M5 12h14"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="cart-item__total">${item.price * item.quantity}</div>
                        </div>
                    ))}
                </div>

                <aside className="cart-summary">
                    <h2 className="cart-summary__title">小計</h2>
                    <div className="cart-summary__row">
                        <span>總計</span><span>$590</span>
                    </div>
                    <div className="cart-summary__row">
                        <span>折扣</span><span>$190</span>
                    </div>
                    <hr className="cart-summary__divider"/>
                    <div className="cart-summary__row">
                        <span>總結</span>
                        <span className="cart-summary__row--total">$590</span>
                    </div>
                    <button className="cart-summary__next-btn">下一步</button>
                </aside>
            </main>

            <footer className="cart-footer-mobile">
                <label className="cart-footer-mobile__select-all">
                    <input type="checkbox" id="item-2" className="cart-footer-mobile__checkbox"/>
                    <label htmlFor="item-2" className="cart-footer-mobile__checkbox-label"></label>
                    全部
                </label>
                <div className="cart-footer-mobile__info">
                    <span className="cart-footer-mobile__price">$590</span>
                    <button className="cart-footer-mobile__btn" onClick={() => navigate(`/checkout`)}>下一步</button>
                </div>
            </footer>
        </div>

    );
};

export default Cart;
