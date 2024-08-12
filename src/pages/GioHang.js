import React from 'react';

const GioHang = () => {
  return (
    <>
      <section className="bread-crumb">
        <span className="crumb-border"></span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul className="breadcrumb list-unstyled">
                <li className="home">
                  <a href="/"><span>Trang chủ</span></a>
                </li>
                <li><strong><span>Giỏ hàng</span></strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="main-cart-page main-container col1-layout margin-top-30">
        <div className="main container cartpcstyle">
          <div className="wrap_background_aside">
            <div className="header-cart">
              <div className="title-block-page">
                <h1 className="title_cart hidden">
                  <span>Giỏ hàng</span>
                </h1>
              </div>
            </div>
            <div className="cart-page d-xl-block d-none">
              <div className="drawer__inner">
                <div className="CartPageContainer">
                  <p>Giỏ hàng của bạn đang trống.</p> {/* Nội dung tạm thời */}
                </div>
              </div>
            </div>
            <div className="cart-mobile-page d-block d-xl-none">
              <div className="CartMobileContainer">
                <p>Giỏ hàng của bạn đang trống.</p> {/* Nội dung tạm thời */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GioHang;
