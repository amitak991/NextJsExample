import ProductTable from "../components/ProductTable";
import {getProducts} from "../lib/products";

export const dynamic = "force-dynamic";

const ProductPage = async() => {
  const products = await getProducts();
  return (
    <section>
      <h1>Products</h1>
      <ProductTable products={products} />
    </section>
  );
}

export default ProductPage;