
import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import HeroSlider from "@containers/hero-slider-fullwidth";
import ProductsFeatured from "@containers/products-featured";
import FeatureBlock from "@containers/feature-block";
import BannerCarouselBlock from "@containers/banner-carousel-block";
import AlertBanner from "@components/ui/alert-banner";
import OrderBanner from "@components/ui/order-banner";

export default function Home() {
    return (
        <>
            <HeroSlider />
            <Container>
                <FeatureBlock />
                <ProductsFeatured sectionHeading="text-featured-products" />
                <AlertBanner />
                <BannerCarouselBlock />
                <OrderBanner />
            </Container>
            <Divider className="mb-0" />
        </>
    );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ["common", "forms", "menu", "footer"])),
        },
    };
};
