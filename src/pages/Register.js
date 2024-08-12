import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    LastName: '',
    FirstName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/account/register', formData)
      .then(response => {
        console.log(response.data);
        alert('User registered successfully!');
      })
      .catch(error => {
        console.error(error);
        alert('Error registering user');
      });
  };

  const loginFacebook = () => {
    const facebookClientId = 'YOUR_FACEBOOK_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/register';
    const url = `https://www.facebook.com/v3.2/dialog/oauth?client_id=${facebookClientId}&redirect_uri=${redirectUri}&scope=email&response_type=code`;
    window.location.href = url;
  };

  const loginGoogle = () => {
    const googleClientId = 'YOUR_GOOGLE_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/register';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&scope=email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code`;
    window.location.href = url;
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
                <li><strong><span>Đăng ký tài khoản</span></strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="customer-template">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="wrapper-form">
                <form onSubmit={handleSubmit} id="customer_register" acceptCharset="UTF-8">
                  <h4 className="customer-heading">Đăng ký tài khoản</h4>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label>Họ:</label>
                        <input type="text" name="LastName" className="input-control form-control" placeholder="Họ" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label>Tên:</label>
                        <input type="text" name="FirstName" className="input-control form-control" placeholder="Tên" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" className="input-control form-control" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label>Số điện thoại *</label>
                        <input type="text" className="form-control form-control-lg" name="phone" id="phone" pattern="\d+" placeholder="Số điện thoại" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label>Mật khẩu:</label>
                        <input type="password" name="password" className="input-control form-control" placeholder="Mật khẩu" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <button type="submit" className="btn btn-dark btn-transition btn-active-hover btn-uppercase">Đăng ký</button>
                        <a href="/account/login" className="btn btn-dark btn-transition btn-active-hover btn-uppercase">Đăng nhập</a>

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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
