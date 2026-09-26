import Link from "next/link";
import {getProductCount} from "./lib/products";

export const dynamic = "force-static";

export default  async function Home() {
  const productCount = await getProductCount();
  return (
   <section>      
     <h1>Product Management App</h1>

      <p>
        Welcome to our Next.js product management
        application.
      </p>

      <div className="card">
        <h2>Products</h2>

        <p>
          We currently have {productCount} products.
        </p>

        <Link href="/products" className="button">
          View Products
        </Link>
      </div> 
      </section>
  );
}
