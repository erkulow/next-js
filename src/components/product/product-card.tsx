import type { FC } from "react";
import { useUI } from "@contexts/ui.context";
import { Product } from "@framework/types";
import {generateCartItem} from "@utils/generate-cart-item";
import {useCart} from "@contexts/cart/cart.context";
import {toast} from "react-toastify";

interface ProductProps {
	product: Product;
	className?: string;
	contactClassName?: string;
	imageContentClassName?: string;
	variant?: "grid" | "gridSlim" | "list" | "listSmall";
	imgWidth?: number | string;
	imgHeight?: number | string;
	imgLoading?: "eager" | "lazy";
}

const ProductCard: FC<ProductProps> = ({
	product
}) => {
	const { openModal, setModalView, setModalData } = useUI();

	const { pricing, variants } = product;
	const discount = pricing?.onSale;
	const basePrice = pricing?.discount?.net.amount + pricing?.priceRange?.stop?.net.amount;

	const image = product?.thumbnail?.url;
	const id = product?.id;
	const name = product?.name;
	const slug = product?.slug;
	const price = pricing?.priceRange?.stop?.net.amount;

	const cardDescription = 
	JSON.parse(product?.description as string).blocks[0].data.text.split(" ").length > 6
	? `${JSON.parse(product?.description as string).blocks[0].data.text.split(" ").slice(0, 6).join(" ")}...`
	: JSON.parse(product?.description as string).blocks[0].data.text;

	const description = JSON.parse(product?.description as string).blocks[0].data.text;

	function addToCart(product: any) {

		const currency = pricing?.priceRange?.stop?.net.currency;
		const {addItemToCart} = useCart();
    
        if (product) {
            const item = generateCartItem(
                {
                    id,
                    name,
                    slug: slug || '',
                    image: image,
                    price,
                    currency
                }, null);
            addItemToCart(item, 1);
            toast("Добавлено в корзину", {
                type: "success",
                progressClassName: "fancy-progress-bar",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }


	function handlePopupView() {
		const data = {
			...product,
			description: description,
			discount,
			price,
			basePrice,
			image,
			variants
		}
		setModalData({ data });
		setModalView("PRODUCT_VIEW");
		return openModal();
	}
	
	return (
		<div className="product-card">
      <div className="product-card__image-container">
      <img src={image} alt={product?.name || 'Product Image'} className="product-card__image" onClick={handlePopupView} />
      </div>
      <div className="product-card__options-container">
        <div className="product-card__text-container">
          <h2 className="product-card__title">{product?.name}</h2>
          <p className="product-card__description">{cardDescription}</p>
          <h4 className="product-card__brand-name">{product?.name}</h4>
        </div>
        <div className="product-card__bottom-container">
          <div className="product-card__price-container">
            <span className="product-card__price">{price} р.</span>
            <span className="product-card__old-price">10000 р.</span>
          </div>
          <button className="product-card__button" onClick={addToCart}>В корзину</button>
        </div>
      </div>
    </div>
	);
};

export default ProductCard;