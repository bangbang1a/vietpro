import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../shared/components/Product-item";
import { getCategory, getProductsCategory } from "../sevices/Api";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProductsCategory(id, {})
      .then(({ data }) => {
        setProducts(data.data.docs);
        setTotalProduct(data.data.pages.total);
      })
      .catch((error) => console.log(error));
    getCategory(id, {})
      .then(({ data }) => setCategory(data.data.name))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="product">
        <h3>
          {category} ( hiện có {totalProduct} sản phẩm )
        </h3>
        <div className="product-list card-deck">
          {products.map((product, index) => (
            <ProductItem key={index} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
