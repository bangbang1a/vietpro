import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Success from "./pages/Success";
import Footer from "./shared/components/Layout/Footer";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Slidebar from "./shared/components/Layout/Slidebar";
import Slider from "./shared/components/Layout/Slider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-setup/store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {/*	Body	*/}
        <div id="body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Menu />
              </div>
            </div>
            <div className="row">
              <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                <Slider />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Category-:id" element={<Category />} />
                  <Route path="/Product-:id" element={<Product />} />
                  <Route path="/Search" element={<Search />} />
                  <Route path="/Success" element={<Success />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </div>
              <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
                <Slidebar />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
