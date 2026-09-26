import {Product} from '../types/product';

const ProductTable = ({ products }: { products: Product[] }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>ID </th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.category}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;;