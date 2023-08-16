const ContactForm: React.FC = () => {
  return (
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
  );
};

export default ContactForm;
