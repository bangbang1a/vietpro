import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createCommentProduct,
  getCommentsProduct,
  getProduct,
} from "../sevices/Api";
import { getImageProduct } from "../../shared/ultils";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux-setup/reducers/cart";
const Product = () => {
  const [product, setProduct] = useState({});
  const [comments, setComment] = useState(null);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams([]);
  const changeInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const clickAddToCart = (type) => {
    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: 1,
      })
    );
    if (type === "buy-now") return navigate("/Cart");
  };
  const clickSubmit = () => {
    createCommentProduct(id, data)
      .then(({ data }) => {
        getComment(id);
        if (data.status === "success") {
          setData({});
        }
      })
      .catch((error) => console.log(error));
  };
  const getComment = (id) => {
    getCommentsProduct(id)
      .then(({ data }) => setComment(data.data.docs))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProduct(id)
      .then(({ data }) => setProduct(data.data))
      .catch((error) => console.log(error));

    getComment(id);
  }, [id]);
  return (
    <div>
      {/*	List Product	*/}
      <div id="product">
        <div id="product-head" className="row">
          <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
            <img src={getImageProduct(product?.image)} />
          </div>
          <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
            <h1>{product?.name}</h1>
            <ul>
              <li>
                <span>Bảo hành:</span> 12 Tháng
              </li>
              <li>
                <span>Đi kèm:</span> {product?.accessories}
              </li>
              <li>
                <span>Tình trạng:</span> {product?.status}
              </li>
              <li>
                <span>Khuyến Mại:</span> {product?.promotion}
              </li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">{product?.price}đ</li>
              <li
                className={product?.is_stock ? "" : "text-danger"}
                id="status"
              >
                {product?.is_stock ? "Con hang" : "Het hang"}
              </li>
            </ul>
            {product?.is_stock && (
              <div id="add-cart">
                <button
                  onClick={() => clickAddToCart("buy-now")}
                  className="btn btn-warning mr-2"
                >
                  Mua ngay
                </button>

                <button onClick={clickAddToCart} className="btn btn-info">
                  Thêm vào giỏ hàng
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="product-body" className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>Đánh giá về {product?.name}</h3>
          <p>{product?.details}</p>
        </div>
      </div>
      {/*	Comment	*/}
      <div id="comment" className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>{product?.name}</h3>
          <form method="post">
            <div className="form-group">
              <label>Tên:</label>
              <input
                onChange={changeInputs}
                name="name"
                required
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                onChange={changeInputs}
                name="email"
                required
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Content:</label>
              <input
                onChange={changeInputs}
                name="content"
                required
                type="text"
                className="form-control"
              />
            </div>
            <button
              onClick={clickSubmit}
              type="button"
              name="sbm"
              className="btn btn-primary"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
      {/*	End Comment	*/}
      {/*	Comments List	*/}
      <div id="comments-list" className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {comments?.map((comment, index) => {
            return (
              <div key={index} className="comment-item">
                <ul>
                  <li>
                    <b>{comment.name}</b>
                  </li>
                  <li>{comment.createdAt}</li>
                  <li>
                    <p>{comment.content}</p>
                  </li>
                </ul>
              </div>
            );
          })}
          ;
        </div>
      </div>
      {/*	End Comments List	*/}
      {/*	End Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" href="#">
              Trang trước
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" href="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              Trang sau
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Product;
