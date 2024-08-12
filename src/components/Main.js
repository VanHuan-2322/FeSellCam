import React from 'react';
import "../css/Main.css";

const Main = () => {
  return (
    <>
      <h1 className="hidden">Raw Camera - Công ty TNHH Raw Camera</h1>

      <div className="section_policy">
        <div className="container">
          <div className="row">
            <div className="swiper_policy swiper-container" data-lg-items="4" data-md-items="4" data-sm-items="2" data-xs-items="1" data-xxs-items="1">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="item fw rotateY">
                    <div className="policy_image">
                      <img src="images/policy_1_image.png" alt="mien-phi-van-chuyen" className="img-responsive" />
                    </div>
                    <div className="policy_info">
                      <div className="policy_title fw">
                        Miễn phí vận chuyển
                      </div>
                      <div className="policy_desc fw">
                        <span>Trong bán kính 50 km</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="item fw rotateY">
                    <div className="policy_image">
                      <img src="images/policy_2_image.png" alt="doi-tra-mien-phi" className="img-responsive" />
                    </div>
                    <div className="policy_info">
                      <div className="policy_title fw">
                        Đổi trả miễn phí
                      </div>
                      <div className="policy_desc fw">
                        <span>Đổi trả sản phẩm trong 24h</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="item fw rotateY">
                    <div className="policy_image">
                      <img src="images/policy_3_image.png" alt="thanh-toan-da-dang" className="img-responsive" />
                    </div>
                    <div className="policy_info">
                      <div className="policy_title fw">
                        Thanh toán đa dạng
                      </div>
                      <div className="policy_desc fw">
                        <span>Tiền mặt, thẻ tín dụng ...</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="item fw rotateY">
                    <div className="policy_image">
                      <img src="images/policy_4_image.png" alt="tu-van-24-7" className="img-responsive" />
                    </div>
                    <div className="policy_info">
                      <div className="policy_title fw">
                        Tư vấn 24/7
                      </div>
                      <div className="policy_desc fw">
                        <span>Hotline</span>
                        <span>: <a href="callto:19006750">1900 6750</a></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
