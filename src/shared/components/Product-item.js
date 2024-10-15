import { Link } from "react-router-dom";
import { getImageProduct } from "../ultils";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const ProductItem = ({ item }) => {
  return (
    <div className="product-item card text-center">
      <Link to={`/Product-${item._id}`}>
        {" "}
        <img src={getImageProduct(item.image)} />
      </Link>
      <h4>
        <Link to={`/Product-${item._id}`}>{item.name}</Link>
      </h4>
      <p>
        Giá Bán: <span>{formatPrice(item.price)}đ</span>
      </p>
    </div>
  );
};
export default ProductItem;
