import { Link } from "react-router-dom";

const Slidebar = () => {
  return (
    <>
      <div id="banner">
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src="images/banner-1.png" />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src="images/banner-2.png" />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src="images/banner-3.png" />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src="images/banner-4.png" />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src="images/banner-5.png" />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src="images/banner-6.png" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Slidebar;
