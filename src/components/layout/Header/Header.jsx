import React, {useState} from 'react';
import './Header.scss'
import {Link, useNavigate} from "react-router-dom";
import Image01 from "../../../assets/header/image01.png"
import Image02 from "../../../assets/header/image02.png"
import Image03 from "../../../assets/header/image03.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('tops');
    const navigate = useNavigate();

    // 判斷是否在搜尋頁面
    const isSearchPage = location.pathname === '/search';


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setActiveTab('tops');
        }
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleItemClick = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };


    //漢堡選單分類
    const menuCategories = [
        {
            id: 'tops',
            name: '上衣',
            items: [
                {name: 'T恤', path: '/products/t-shirt'},
                {name: '襯衫', path: '/products/shirt'},
                {name: '設計類上衣', path: '/products/designer-tops'}
            ]
        },
        {
            id: 'bottoms',
            name: '下身',
            items: [
                {name: '長褲', path: '/products/long-pants'},
                {name: '短褲', path: '/products/shorts'},
                {name: '裙子', path: '/products/skirt'}
            ]
        },
        {
            id: 'onePiece',
            name: '連身',
            items: [
                {name: '外套', path: '/products/dress'},
                {name: '西裝外套', path: '/products/jumpsuit'},
                {name: '針織外套', path: '/products/jumpsuit'},
                {name: '抗UV防曬外套', path: '/products/jumpsuit'}
            ]
        }
    ];

    const imageCategories = [
        {
            src: Image01,
            title: '新年限定 7 折優惠'
        },
        {
            src: Image02,
            title: '人氣商品限時免運'
        },
        {
            src: Image03,
            title: '會員獨享折扣專區'
        }
    ]
    return (
        <header className={`header ${isMenuOpen ? 'header--orange' : ''} `}>
            <div className="container">
                <div className={`header__wrapper ${isSearchPage ? 'header__wrapper--search' : ''}`}>
                    {/* 漢堡選單按鈕 */}
                    <button
                        className={`header__hamburger ${isMenuOpen ? 'header__hamburger--active' : ''} ${isSearchPage ? 'header__hamburger--search' : ''}`}
                        onClick={toggleMenu}
                        aria-label="切換選單"
                        aria-expanded={isMenuOpen}
                    >
                        <span
                            className={`header__hamburger-line ${isMenuOpen ? 'header__hamburger-line--white' : ''}`}></span>
                        <span
                            className={`header__hamburger-line ${isMenuOpen ? 'header__hamburger-line--white' : ''}`}></span>
                        <span
                            className={`header__hamburger-line ${isMenuOpen ? 'header__hamburger-line--white' : ''}`}></span>
                    </button>

                    {isSearchPage ? (
                        <button className="header__current-button" aria-label="上一頁">
                            <svg
                                className="header__current-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.5 3.25 L7.75 12 L16.5 20.75"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </button>
                    ) : null}

                    {/* Logo */}
                    <Link to="/" className={`header__logo ${isSearchPage ? 'header__logo--search' : ''}`}
                          aria-label="回到首頁">
                        <div className="header__logo-box">
                            {/* 暫時用主色填滿，之後可替換成圖片或 SVG */}
                        </div>
                    </Link>

                    {/* 搜尋區域 - 根據頁面切換顯示 */}
                    {isSearchPage ? (
                        // 搜尋頁面：顯示搜尋輸入框
                        <div className="header__search-bar">
                            <input
                                type="text"
                                className="header__search-input"
                                placeholder="寬鬆西裝外套"
                                autoFocus
                            />
                            <button className="header__camera-button" aria-label="相機">
                                <svg
                                    className="header__camera-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="3"
                                        y="6"
                                        width="18"
                                        height="14"
                                        rx="2"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M8 6L9.5 4H14.5L16 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="12"
                                        cy="13"
                                        r="3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                            <button className="header__search-button" aria-label="搜尋">
                                <svg className="header__search-icon" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="m21 21-4.35-4.35"/>
                                </svg>
                            </button>
                        </div>
                    ) : null}
                    <div className={`header__icons ${isSearchPage ? 'header__icons--search' : ''}`}>
                        <button
                            className={`
                            header__icon 
                            ${isMenuOpen ? 'header__icon--white' : ''}
                            ${isSearchPage ? 'header__icon--search' : ''}
                            `}
                            aria-label="搜尋"
                            onClick={() => navigate(`/search`)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                width="24"
                                height="24"
                            >
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </button>
                        <button
                            className={`header__icon ${isMenuOpen ? 'header__icon--white' : ''}`}
                            aria-label="購物車"
                            onClick={() => console.log('購物車')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                width="24"
                                height="24"
                            >
                                <circle cx="9" cy="21" r="1"/>
                                <circle cx="20" cy="21" r="1"/>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                            </svg>
                        </button>
                        <button
                            className={`header__icon ${isMenuOpen ? 'header__icon--white' : ''}`}
                            aria-label="會員中心"
                            onClick={() => console.log('會員')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                width="24"
                                height="24"
                            >
                                <circle cx="12" cy="8" r="4"/>
                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            <nav className={`header__dropdown ${isMenuOpen ? 'header__dropdown--open' : ''}`}>
                <div className="container">
                    {/* 主分類 Tabs */}
                    <div className="header__tabs">
                        {menuCategories.map((category) => (
                            <button
                                key={category.id}
                                className={`header__tab ${activeTab === category.id ? 'header__tab--active' : ''}`}
                                onClick={() => handleTabClick(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* 子分類內容 */}
                    <div className="header__content">
                        {menuCategories.map((category) => (
                            <div
                                key={category.id}
                                className={`header__panel ${activeTab === category.id ? 'header__panel--active' : ''}`}
                            >
                                <ul className="header__list">
                                    {category.items.map((item, index) => (
                                        <li key={index} className="header__list-item">
                                            <button
                                                className="header__list-link"
                                                onClick={() => handleItemClick(item.path)}
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            {/*桌面板下拉選單*/}
            <nav className={`header__dropdown--desktop ${isMenuOpen ? 'header__dropdown--open' : ''}`}>
                <div className="header-menu">
                    {menuCategories.map((category) => (
                        <div className="header__column">
                            <h4 className="header__column-title">{category.name}</h4>
                            <ul className="header__list">
                                {category.items.map((item, index) => (
                                    <li key={index} className="header__list-item">
                                        <button
                                            className="header__list-link"
                                            onClick={() => handleItemClick(item.path)}
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="header__imagebox">
                    {imageCategories.map((image) => (
                        <div className="header__image-container">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="header__image"
                            />
                        </div>

                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header;