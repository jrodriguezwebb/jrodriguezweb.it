import StandardPage from "@/components/layout/standard-page";

export default function Contact() {
  return (
    <StandardPage>
      <div className="page-title">
        <h1>Contact</h1>
        <div className="page-subtitle">
          <h4> Get in Touch</h4>
        </div>
      </div>

      <div
        id="content"
        className="page-content site-content single-post"
        role="main"
      >
        {/* <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div id="map" className="map"></div>
            </div>
          </div>
        */}
        <div className="row">
          <div className=" col-xs-12 col-sm-4 ">
            <div id="info_list_1" className="info-list-w-icon">
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="linecons linecons-phone"></i>
                </div>
                <div className="ci-text">
                  <h4>415-832-2000</h4>
                  <p>
                    Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                    dui.
                  </p>
                </div>
              </div>

              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="linecons linecons-location"></i>
                </div>
                <div className="ci-text">
                  <h4>San Francisco</h4>
                  <p>
                    Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                    dui.
                  </p>
                </div>
              </div>

              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="linecons linecons-mail"></i>
                </div>
                <div className="ci-text">
                  <h4>hello@example.com</h4>
                  <p>
                    Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                    dui.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-xs-12 col-sm-8 ">
            <div className="block-title">
              <h2>How Can I Help You?</h2>
            </div>

            <form
              id="contact_form"
              className="contact-form"
              action="contact_form/contact_form.php"
              method="post"
            >
              <div className="messages"></div>

              <div className="controls two-columns">
                <div className="fields clearfix">
                  <div className="left-column">
                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required={true}
                        data-error="Name is required."
                      />
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required={true}
                        data-error="Valid email is required."
                      />
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required={true}
                        data-error="Subject is required."
                      />
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="right-column">
                    <div className="form-group form-group-with-icon">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        rows={7}
                        required={true}
                        data-error="Please, leave me a message."
                      ></textarea>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <div
                  className="g-recaptcha"
                  data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                  data-theme="dark"
                ></div>

                <input
                  type="submit"
                  className="button btn-send disabled"
                  value="Send message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
