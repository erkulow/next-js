import SectionHeader from '@components/common/section-header';
import Alert from '@components/ui/alert';
import {useFeaturedProductsQuery} from "../../generated/graphql";
import {Product} from "@framework/types";
import ProductCard from '@components/product/product-card';

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
}

const ProductsFeatured: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = 'mb-12 md:mb-14 xl:mb-16',
}) => {
  const { data, error } = useFeaturedProductsQuery();

  const products = data?.products?.edges || [];

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="product-container">
          {products.map(({ node }) => (
            <ProductCard
              key={`product--key${node.id}`}
              product={node as Product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsFeatured;