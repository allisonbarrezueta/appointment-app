import { ProductsTables } from "@/components/features/products/ProductsTables";
import HeaderTitle from "@/components/ui/header-title";
import { productsData } from "@/lib/samples";

const Products = () => {
    return (
        <>
            <HeaderTitle title="Products" />
            <ProductsTables data={productsData} />
        </>
    );
};

export default Products;
