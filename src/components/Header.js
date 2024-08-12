import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header fw">
      <div className="topbar fw">
        <div className="container">
          <div className="row">
            <div className="hidden-xs col-sm-6 col-md-8 col-lg-8">
              <div className="custom_text">
                <img src="images/icon_open.png" alt="Giờ mở cửa: 8:00 - 20:00"/>
                <span>Giờ mở cửa: 8:00 - 20:00</span>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="top_search fw">
                <form action="/search" method="get">
                  <input type="text" className="form-control" maxLength="70" name="query" id="search" placeholder="Nhập từ khóa tìm kiếm..." required=""/>
                  <button className="btn btn-default" type="submit">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 192.904 192.904" style={{enableBackground: "new 0 0 192.904 192.904"}} xmlSpace="preserve">
                      <path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0
                          C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078
                          c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193
                          C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187
                          C44.693,147.38,15,117.689,15,81.193z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header fw">
        <div className="container">
          <div className="row" id="main-header-mobile">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" id="logo-mobile">
              <div className="logo">
                <a href="/" title="Raw Camera">
                  <img src="images/logo.png" alt="Logo Raw Camera" className="img-responsive"/>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9" id="header-info-mobile">
              <div className="header-info fw hidden-xs">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="account-area fw">
                      <ul className="account-info">
                        <li>
                          <Link to="/login" className="btn-transition login_btn" title="Đăng nhập">
                            Đăng nhập
                          </Link>
                        </li>
                        <li>
                          <Link to="/register" className="btn-transition register_btn" title="Đăng ký">
                            Đăng ký
                          </Link>
                        </li>
                      </ul>

                      <div className="top-cart-contain">
                        <div className="text-xs-center mini-cart content_cart_header block-cart">
                          <div className="heading-cart cart_header">
                            <Link to="/cart">
                              <img src="images/icon_cart.png" alt="Giỏ hàng"/>
                              <span className="count_item cartCount count_item_pr" id="cart-total">0</span>
                              <span className="cart-text">Giỏ hàng</span>
                            </Link>
                          </div>
                          <div className="top-cart-content">
                            <div className="CartHeaderContainer">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row hidden-sm">
                  <div className="col-md-12 col-lg-12">
                    <div className="header-menu fw">
                      <nav>
                        <ul id="nav" className="nav">
                          <li className="nav-item active">
                            <Link className="nav-link" to="/" title="Trang chủ">
                              Trang chủ
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/gioi-thieu" title="Giới thiệu">
                              Giới thiệu
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/collections/all" className="nav-link" title="Sản phẩm">
                              Sản phẩm
                              <i data-toggle="dropdown">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.688 490.688" style={{enableBackground: "new 0 0 490.688 490.688"}} xmlSpace="preserve">
                                  <path style={{fill: "#FFC107"}} d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
                                    c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
                                    c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
                                    L472.328,120.529z"/>
                                  <path d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
                                    c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
                                    c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
                                    C250.748,372.281,248.039,373.408,245.213,373.415z"/>
                                </svg>
                              </i>
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu nav-item-lv2">
                                <Link className="nav-link" to="/may-anh-dslr" title="Máy ảnh DSLR">
                                  Máy ảnh DSLR 
                                  <i className="fa">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.8 490.8" style={{enableBackground: "new 0 0 490.8 490.8"}} xmlSpace="preserve">
                                      <path style={{fill:"#F44336"}} d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
                                        L355.2,252.233L120.602,486.821c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
                                        c0.089-0.086,0.176-0.173,0.262-0.262L383.161,252.233L135.685,3.128z"/>
                                    </svg>
                                  </i>
                                </Link>
                              </li>
                              <li className="dropdown-submenu nav-item-lv2">
                                <Link className="nav-link" to="/may-anh-mirrorless" title="Máy ảnh Mirrorless">
                                  Máy ảnh Mirrorless 
                                  <i className="fa">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.8 490.8" style={{enableBackground: "new 0 0 490.8 490.8"}} xmlSpace="preserve">
                                      <path style={{fill:"#F44336"}} d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
                                        L355.2,252.233L120.602,486.821c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
                                        c0.089-0.086,0.176-0.173,0.262-0.262L383.161,252.233L135.685,3.128z"/>
                                    </svg>
                                  </i>
                                </Link>
                              </li>
                              <li className="dropdown-submenu nav-item-lv2">
                                <Link className="nav-link" to="/may-anh-compact" title="Máy ảnh Compact">
                                  Máy ảnh Compact 
                                  <i className="fa">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.8 490.8" style={{enableBackground: "new 0 0 490.8 490.8"}} xmlSpace="preserve">
                                      <path style={{fill:"#F44336"}} d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
                                        L355.2,252.233L120.602,486.821c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
                                        c0.089-0.086,0.176-0.173,0.262-0.262L383.161,252.233L135.685,3.128z"/>
                                    </svg>
                                  </i>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/tin-tuc" title="Tin tức">
                              Tin tức
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/lien-he" title="Liên hệ">
                              Liên hệ
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden-lg hidden-md hidden-sm" id="menu-bar">
                <img src="images/menu-bar.png" alt="Menu bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
