import Image from "next/image";
import BannerBtn from "./banner-btn";

const OrderBanner = () => {
    return (
        <div className="order-banner">
            <div className="order-banner__title">
                <h1>
                    Доставка во все пункты <br /> выдачи Wildberries <br /> по всей России
                </h1>
                <h5>с гарантией возврата</h5>
                <BannerBtn>Заказать</BannerBtn>
            </div>
            <div className="order-banner__image">
                <Image src="/assets/images/banner/order-banner-item.png" layout="fill" />
            </div>
            <div className="order-banner__description">
                <h5>
                    Вы можете заказать <br /> доставку 2-х ароматов <br /> и на месте выбрать понравившийся аромат
                </h5>
            </div>
        </div>
    );
};

export default OrderBanner;
