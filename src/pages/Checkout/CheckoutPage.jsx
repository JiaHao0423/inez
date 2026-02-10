import React from 'react';
import './CheckoutPage.scss';

const Checkout = () => {
    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <section className="checkout-form">
                    <div className="form-section">
                        <h2>付款方式</h2>
                        <div className="radio-group">
                            <label><input type="radio" name="payment" /> 貨到付款</label>
                            <label><input type="radio" name="payment" /> 轉帳付款</label>
                            <label className="active"><input type="radio" name="payment" checked /> 信用卡付款</label>
                        </div>
                        <div className="credit-card-inputs">
                            <input type="text" placeholder="卡片詳情" />
                            <div className="row">
                                <input type="text" placeholder="到期日(MM/YY)" />
                                <input type="text" placeholder="安全驗證碼" />
                            </div>
                            <input type="text" placeholder="持卡人名字" />
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>運送方式</h2>
                        <div className="radio-group">
                            <label><input type="radio" name="shipping" /> 7-11取貨</label>
                            <label><input type="radio" name="shipping" /> 全家取貨</label>
                            <label className="active"><input type="radio" name="shipping" checked /> 宅配到府</label>
                        </div>
                        <div className="shipping-inputs">
                            <input type="text" placeholder="收件人姓名" />
                            <div className="row">
                                <select><option>+886</option></select>
                                <input type="text" placeholder="912345678" />
                            </div>
                            <input type="text" placeholder="請輸入真實地址" />
                        </div>
                    </div>
                </section>

                <aside className="order-summary">
                    <h2>訂單資訊</h2>
                    <div className="product-scroll-mobile">
                        {/* 商品小圖列表 */}
                    </div>
                    <div className="summary-details">
                        <div className="row"><span>總計</span><span>$590</span></div>
                        <div className="row"><span>運費</span><span>$590</span></div>
                        <div className="row"><span>折扣</span><span>$590</span></div>
                        <hr />
                        <div className="row total"><span>總結</span><span>$590</span></div>
                    </div>
                    <button className="btn-checkout">結帳</button>
                </aside>
            </div>
        </div>
    );
};

export default Checkout;
