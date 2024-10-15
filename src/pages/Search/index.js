import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../sevices/Api";
import ProductItem from "../../shared/components/Product-item";
import Pagination from "../../shared/components/Pagination";
const Search = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    getProducts({
      params: {
        name: keyword,
        limit: 6,
        page,
      },
    })
      .then(({ data }) => {
        setProducts(data.data.docs);
        setPages(data.data.pages);
      })
      .catch((error) => console.log(error));
  }, [keyword, page]);
  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <div id="search-result">
          Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span>
        </div>
        <div className="product-list card-deck">
          {products.map((product, index) => (
            <ProductItem key={index} item={product} />
          ))}
        </div>
      </div>
      {/*	End List Product	*/}
      <Pagination pages={pages} />
    </>
  );
};
export default Search;
