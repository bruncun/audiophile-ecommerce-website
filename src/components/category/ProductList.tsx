import ProductFeature from "./ProductFeature";
import { Product } from "types";

interface ProductListProps {
  products?: Product[];
}

function ProductList({ products = [] }: ProductListProps) {
  return (
    <>
      {products.map((product, idx) => (
        <div className={idx !== products.length - 1 ? "mb-6 pb-4" : ""}>
          <ProductFeature
            product={product}
            key={idx}
            swapColOrder={idx % 2 !== 0}
          />
        </div>
      ))}
    </>
  );
}

export default ProductList;
