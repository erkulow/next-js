import HeroBanner from "@components/ui/hero-banner";

export const bgImageStyle = {
    backgroundImage: "url('/assets/client/bg.jpg')",
};

const HeroSlider: React.FC = () => {
    return (
        <div
            className="relative pb-5 mb-5 pt-5 md:pb-8 md:mb-8 md:pt-0 no-repeat center  bg-cover"
            style={bgImageStyle}
        >
            <HeroBanner />
        </div>
    );
};

export default HeroSlider;
