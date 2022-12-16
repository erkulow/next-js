import ProductCard from "@components/product/product-card";
import type {FC} from "react";
import {Product} from "@framework/types";
import Button from "@components/ui/button";
import {useTranslation} from "next-i18next";
import { useEffect, useState} from "react";
import {
    useAllProductsLazyQuery, useCollectionBySlugLazyQuery,
    useProductsByCategoryLazyQuery,
    useProductsByMainCategoryLazyQuery,
    useProductsLazyQuery
} from "../../../generated/graphql";

interface ProductGridProps {
    className?: string;
    products: any;
    error: any;
    pageInfo?: any;
    func: any;
    arg?: any;
    categoryId?: string;
}

export const ProductGrid: FC<ProductGridProps> = ({products, error, pageInfo, func, arg, categoryId}) => {
    const [productsData, setProductsData] = useState<any>(null);
    const [newPageInfo, setNewPageInfo] = useState<any>(null);

    useEffect(() => {
        setProductsData(products);
        setNewPageInfo(pageInfo);
    }, [products, pageInfo]);

    if (error) return <p>{error.message}</p>;

    const {t} = useTranslation("common");

    const [getAllProducts, {  }] = useAllProductsLazyQuery({variables: { ...arg, after: newPageInfo?.endCursor }});
    const [getProducts, {}] = useProductsLazyQuery({ variables: {...arg, after: newPageInfo?.endCursor } as any});
    const [getProductsByCategory, {}] = useProductsByCategoryLazyQuery({ variables: { id: categoryId, ...arg, after: newPageInfo?.endCursor } as any});
    const [getProductsByMainCategory, {}] = useProductsByMainCategoryLazyQuery({ variables: { id: categoryId, ...arg, after: newPageInfo?.endCursor  } as any});
    const [getCollection, {}] = useCollectionBySlugLazyQuery({variables: { ...arg, after: newPageInfo?.endCursor }});

    function fetchNextPage() {
        switch (func){
            case "allProducts": {
                getAllProducts().then(({data}) => {
                    if (data && data?.products){
                        setProductsData([...productsData, ...data?.products?.edges as any[]])
                        setNewPageInfo(data?.products?.pageInfo);
                    }
                });
                break;
            }
            case 'products': {
                getProducts().then(({data}) => {
                    if (data && data?.products){
                        setProductsData([...productsData, ...data?.products?.edges as any[]])
                        setNewPageInfo(data?.products?.pageInfo);
                    }
                });
                break;
            }
            case 'search': {
                getProductsByCategory().then(({data}) => {
                    if (data && data?.products){
                        setProductsData([...productsData, ...data?.products?.edges as any[]])
                        setNewPageInfo(data?.products?.pageInfo);
                    }
                });
                break;
            }
            case 'mainCategory': {
                getProductsByMainCategory().then(({data}) => {
                    if (data && data?.products){
                        setProductsData([...productsData, ...data?.products?.edges as any[]])
                        setNewPageInfo(data?.products?.pageInfo);
                    }
                });
                break;
            }
            case 'collection': {
                getCollection().then(({data}) => {
                    if (data && data?.collection?.products){
                        setProductsData([...productsData, ...data?.collection?.products?.edges as any[]])
                        setNewPageInfo(data?.collection?.products?.pageInfo);
                    }
                });
                break;
            }
        }
    }

    return (
        <>
            <div
                className="product-container"
            >
                {
                    productsData?.map(({node}: any) => {
                                return (
                                    <ProductCard
                                        key={`product--key${node.id}`}
                                        product={node as Product}
                                        variant="grid"
                                    />
                                );
                            })
                }


            </div>
            <div className="text-center pt-8 xl:pt-14">
                {newPageInfo?.hasNextPage && (
                	<Button
                		onClick={() => fetchNextPage()}
                		variant="slim"
                        className="bg-primary hover:bg-primary-focus"
                	>
                		{t("button-load-more")}
                	</Button>
                )}
            </div>
        </>
    );
};