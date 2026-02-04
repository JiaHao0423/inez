import DefaultLayout from "../../components/layout/DefaultLayout.jsx";
import Carousel from "../../components/carousel/Carousel.jsx";
import ProductSection from "../../components/productSection/ProductSection.jsx";


const HomePage = () => {
    const hotProducts = [
        {
            id: 1,
            name: '女士短袖襯衫',
            price: 590,
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
            isHot: true
        },
        {
            id: 2,
            name: '女士連帽外套',
            price: 890,
            image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 3,
            name: '女士寬鬆襯衫',
            price: 690,
            image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop',
            isHot: true
        },
        {
            id: 4,
            name: '女士吊帶背心',
            price: 490,
            image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 5,
            name: '女士針織外套',
            price: 790,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 6,
            name: '女士長袖上衣',
            price: 650,
            image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop',
            isHot: true
        },
        {
            id: 7,
            name: '女士套裝外套',
            price: 990,
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 8,
            name: '女士休閒襯衫',
            price: 590,
            image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=800&fit=crop',
            isHot: true
        }
    ];

    // 新品上架資料
    const newProducts = [
        {
            id: 9,
            name: '女士格紋襯衫',
            price: 790,
            image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 10,
            name: '女士短版上衣',
            price: 490,
            image: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 11,
            name: '女士連身洋裝',
            price: 1290,
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
            isHot: true
        },
        {
            id: 12,
            name: '女士長版外套',
            price: 1490,
            image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 13,
            name: '女士雪紡上衣',
            price: 690,
            image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 14,
            name: '女士牛仔外套',
            price: 990,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
            isHot: false
        },
        {
            id: 15,
            name: '女士西裝外套',
            price: 1190,
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop',
            isHot: true
        },
        {
            id: 16,
            name: '女士棉質襯衫',
            price: 590,
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
            isHot: false
        }
    ];
    return (
        <DefaultLayout>
            <Carousel/>
            {/* 熱銷排行榜 */}
            <ProductSection
                title="熱銷排行榜"
                products={hotProducts}
                viewAllLink="/hot-products"
            />

            {/* 新品上架 */}
            <ProductSection
                title="新品上架"
                products={newProducts}
                viewAllLink="/new-arrivals"
            />
        </DefaultLayout>
    )
}

export default HomePage