import React, { useEffect } from 'react';

const LienHe = () => {
  useEffect(() => {
    // Tải Google reCAPTCHA sau khi component đã được render
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6Ldtu4IUAAAAAMQzG1gCw3wFlx_GytlZyLrXcsuK';
      script.async = true;
      script.onload = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute('6Ldtu4IUAAAAAMQzG1gCw3wFlx_GytlZyLrXcsuK', { action: 'contact' })
              .then((token) => {
                const tokenInput = document.getElementById('Token-b8713869e2cd4e698fb53f1d3a92dfce');
                if (tokenInput) {
                  tokenInput.value = token;
                }
              });
          });
        }
      };
      document.body.appendChild(script);
    };

    loadRecaptcha();

    // Cleanup script khi component bị unmount
    return () => {
      const script = document.querySelector('script[src*="recaptcha/api.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
                <li><strong><span>Liên hệ</span></strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="page-template">
        <div className="container">
          <div className="row">
            <div className="module-header">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1 className="title-head">Liên hệ</h1>
              </div>
            </div>
            <div className="module-content">
              <div className="col-xs-12 col-sm-12 col-md-6 col-md-push-6 col-lg-6 col-lg-push-6 margin-bottom-15">
                <div className="section_maps">
                  <div className="iFrameMap">
                    <div className="maps_iframe">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.9773294210371!2d105.81571390800251!3d21.0363141279003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95e2757774994b9c!2sLadeco+Building-+Green+House+Vietnam!5e0!3m2!1svi!2s!4v1559097353323!5m2!1svi!2s"
                        width="2000"
                        height="350"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-md-pull-6 col-lg-6 col-lg-pull-6">
                <form method="post" action="/postcontact" id="contact" acceptCharset="UTF-8">
                  <input name="FormType" type="hidden" value="contact" />
                  <input name="utf8" type="hidden" value="true" />
                  <input type="hidden" id="Token-b8713869e2cd4e698fb53f1d3a92dfce" name="Token" />

                  <div className="form-group">
                    <label>Tên <span className="required">*</span></label>
                    <input type="text" name="contact[Name]" className="input-control form-control" placeholder="Tên" required />
                  </div>

                  <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input type="email" name="contact[email]" className="input-control form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required />
                  </div>

                  <div className="form-group">
                    <label>Nội dung <span className="required">*</span></label>
                    <textarea name="contact[Body]" rows="5" className="input-control form-control" placeholder="Nội dung" required></textarea>
                  </div>

                  <div className="form-group">
                    <button className="btn btn-style btn-transition btn_hover_black">Gửi liên hệ</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LienHe;
