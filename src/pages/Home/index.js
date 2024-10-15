import { Link } from "react-router-dom";
import ProductItem from "../../shared/components/Product-item";
import { useEffect, useState } from "react";
import { getProducts } from "../sevices/Api";
const Home = () => {
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [latestProduct, setLatestProduct] = useState([]);
  useEffect(() => {
    // get featured
    getProducts({
      params: {
        limit: 6,
        is_featured: true,
      },
    })
      .then(({ data }) => setFeaturedProduct(data.data.docs))
      .catch((error) => console.log(error));

    // get latest
    getProducts({
      params: {
        limit: 6,
      },
    })
      .then(({ data }) => setLatestProduct(data.data.docs))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/*	Feature Product	*/}
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div className="product-list card-deck">
          {featuredProduct.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/*	End Feature Product	*/}
      {/*	Latest Product	*/}
      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
          {latestProduct.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/*	End Latest Product	*/}
    </>
  );
};
export default Home;
