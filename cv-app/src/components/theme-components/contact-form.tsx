"use client";

import { FormEvent } from "react";

const ContactForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const subject = (formData.get("subject") as string) || "";
    const message = (formData.get("message") as string) || "";

    const mailtoSubject = encodeURIComponent(subject || "Contact from website");
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ];
    const mailtoBody = encodeURIComponent(bodyLines.join("\n"));

    const mailtoUrl = `mailto:jesus.jarp@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.open(mailtoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form id="contact_form_mailto" className="contact-form" onSubmit={handleSubmit}>
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
                id="form_subject"
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

        <input
          type="submit"
          className="button btn-send"
          value="Send message"
        />
      </div>
    </form>
  );
};

export default ContactForm;
