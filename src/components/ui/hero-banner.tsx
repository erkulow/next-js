import Image from "next/image";
import BannerBtn from "./banner-btn";

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <div className="hero-banner__content">
                <h1>Коллекция масляных духов</h1>

                <h5>
                    впечатляющих ароматов <br />
                    для него и для нее
                </h5>

                <p className="sub-text"></p>
                <BannerBtn>Купить</BannerBtn>
            </div>
            <h2 className="hero-bg__title">Otlivant</h2>
            <div className="banner-item-1">
                <Image src="/assets/images/banner/hero-banner-item-1.png" alt="banner-item-1" layout="fill" />
            </div>
            <div className="banner-item-2">
                <Image src="/assets/images/banner/hero-banner-item-2.png" alt="banner-item-2" layout="fill" />
            </div>
            <div className="banner-item-3">
                <Image src="/assets/images/banner/hero-banner-item-3.png" alt="banner-item-3" layout="fill" />
            </div>
        </div>
    );
};

export default HeroBanner;
