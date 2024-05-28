import { useCallback, useEffect, useState } from "react";
import LoadMoreButton from "./LoadMoreButton";

export default function Products({ pageLimit = 10 }: { pageLimit: number }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const skipAmount = (page - 1) * pageLimit;

  const fetchProducts = useCallback(
    async function fetchProducts() {
      setLoading(true);

      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${pageLimit}&skip=${skipAmount}`
        );
        const data = await res.json();
        console.log(data);

        setTotalProducts(data.total);
        setProducts((products) => [...products, ...data.products]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [pageLimit, skipAmount]
  );

  useEffect(
    function () {
      fetchProducts();
    },
    [fetchProducts]
  );

  console.log(products);
  return (
    <div className="w-content h-content">
      <div className=" grid grid-cols-5 gap-2">
        {products.map((product) => {
          return (
            <div
              className="w-[14rem] h-[15rem] border border-gray-900"
              key={product.id}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[10rem] h-[10rem] object-contain"
              />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <LoadMoreButton
          onButtonClick={setPage}
          isLoading={loading}
          totalProducts={totalProducts}
          skipAmount={skipAmount}
          productsLength={products.length}
        />
      </div>
    </div>
  );
}
