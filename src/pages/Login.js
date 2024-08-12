import React from 'react';
 
const Login = () => {
  const showRecoverPasswordForm = () => {
    document.getElementById('recover_password').style.display = 'block';
  };

  const hideRecoverPasswordForm = () => {
    document.getElementById('recover_password').style.display = 'none';
  };

  const loginFacebook = () => {
    const params = {
      client_id: "947410958642584",
      redirect_uri: "https://store.mysapo.net/account/facebook_account_callback",
      state: JSON.stringify({ redirect_url: window.location.href }),
      scope: "email",
      response_type: "code"
    };
    const url = "https://www.facebook.com/v3.2/dialog/oauth" + encodeURIParams(params, true);
    window.location.href = url;
  };

  const loginGoogle = () => {
    const params = {
      client_id: "997675985899-pu3vhvc2rngfcuqgh5ddgt7mpibgrasr.apps.googleusercontent.com",
      redirect_uri: "https://store.mysapo.net/account/google_account_callback",
      scope: "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
      access_type: "online",
      state: JSON.stringify({ redirect_url: window.location.href }),
      response_type: "code"
    };
    const url = "https://accounts.google.com/o/oauth2/v2/auth" + encodeURIParams(params, true);
    window.location.href = url;
  };

  const encodeURIParams = (params, addQuestionMark) => {
    const query = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');
    return addQuestionMark ? '?' + query : query;
  };

  return (
    <div>
      <section className="bread-crumb">
        <span className="crumb-border"></span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul className="breadcrumb list-unstyled">
                <li className="home">
                  <a href="/" ><span>Trang chủ</span></a>
                </li>
                <li><strong><span>Đăng nhập tài khoản</span></strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="customer-template">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrapper-form">
                <form method="post" action="/account/login" id="customer_login" acceptCharset="UTF-8">
                  <input name="FormType" type="hidden" value="customer_login" />
                  <input name="utf8" type="hidden" value="true" />
                  <h1 className="customer-heading">Đăng nhập tài khoản</h1>

                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="input-control form-control form-control-lg" name="email" id="customer_email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu:</label>
                    <input type="password" className="input-control form-control form-control-lg" name="password" id="customer_password" placeholder="Mật khẩu" />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-dark btn-transition margin-right-15 btn-active-hover btn-uppercase">Đăng nhập</button>
                    <a href="#recover" onClick={(e) => { e.preventDefault(); showRecoverPasswordForm(); }}>Quên mật khẩu?</a>
                  </div>
                </form>
                <div id="recover_password" style={{ display: 'none' }}>
                  <form method="post" action="/account/recover" id="recover_customer_password" acceptCharset="UTF-8">
                    <input name="FormType" type="hidden" value="recover_customer_password" />
                    <input name="utf8" type="hidden" value="true" />
                    <h4 className="customer-heading">Lấy lại mật khẩu</h4>
                    <p>Chúng tôi sẽ gửi email kích hoạt việc lấy lại mật khẩu.</p>
                    <div className="form-group">
                      <label>Email:</label>
                      <input type="email" className="input-control form-control form-control-lg" name="email" id="recover_customer_email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                    </div>
                    <div className="form-group clearfix">
                      <a href="javascript:;" className="pull-right" onClick={(e) => { e.preventDefault(); hideRecoverPasswordForm(); }}>Quay lại</a>
                      <button type="submit" className="btn btn-dark btn-transition btn-active-hover btn-uppercase">Gửi</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrapper-form">
                <h2 className="customer-heading">Tạo tài khoản mới</h2>
                <p>Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn! Ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành viên.</p>
                <a href="/register" className="btn btn-dark btn-transition btn-active-hover">Tạo tài khoản</a>

                <div className="block social-login--facebooks">
                  <p className="a-center">Hoặc đăng nhập bằng</p>
                  <a href="javascript:void(0)" className="social-login--facebook" onClick={loginFacebook}>
                    <img width="129px" height="37px" alt="facebook-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" />
                  </a>
                  <a href="javascript:void(0)" className="social-login--google" onClick={loginGoogle}>
                    <img width="129px" height="37px" alt="google-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
