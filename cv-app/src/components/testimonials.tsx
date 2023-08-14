import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      {/* <!-- Testimonials --> */}
      <div className="block-title">
        <h2>Testimonials</h2>
      </div>

      <div
        id="testimonials_1"
        className="testimonials owl-carousel"
        data-mobile-items="1"
        data-tablet-items="2"
        data-items="2"
      >
        {/* <!-- Testimonial 1 --> */}
        <div className="testimonial-item">
          {/* <!-- Testimonial Content --> */}
          <div className="testimonial-content">
            {/* <!-- Picture --> */}
            <div className="testimonial-picture">
              <Image
                src="/images/testimonials/testimonial-1.jpg"
                alt="Billy Adams"
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
              />
            </div>
            {/* <!-- /Picture --> */}

            {/* <!-- Testimonial Text --> */}
            <div className="testimonial-text">
              <p>
                Donec eu est vel metus consequat volutpat. Nunc aliquet euismod
                mauris, a feugiat urna ullamcorper non.
              </p>
            </div>
            {/* <!-- /Testimonial Text --> */}

            {/* <!-- Testimonial author information --> */}
            <div className="testimonial-author-info">
              <h5 className="testimonial-author">Billy Adams</h5>
              <p className="testimonial-firm">Rolling Thunder</p>
            </div>
            {/* <!-- /Testimonial author information --> */}

            <div className="testimonial-icon">
              <i className="fa fa-quote-left"></i>
            </div>

            <div className="testimonial-icon-big">
              <i className="fa fa-quote-right"></i>
            </div>
          </div>
          {/* <!-- /Testimonial Content --> */}
        </div>
        {/* <!-- End of Testimonial 1 --> */}

        {/* <!-- Testimonial 2 --> */}
        <div className="testimonial-item">
          {/* <!-- Testimonial Content --> */}
          <div className="testimonial-content">
            {/* <!-- Picture --> */}
            <div className="testimonial-picture">
              <Image
                src="/images/testimonials/testimonial-2.jpg"
                alt="Gary Johnson"
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
              />
            </div>
            {/* <!-- /Picture --> */}

            {/* <!-- Testimonial Text --> */}
            <div className="testimonial-text">
              <p>
                Nam tempor commodo mi id sodales. Aenean sit amet nibh nec
                sapien consequat porta a sit amet diam.
              </p>
            </div>
            {/* <!-- /Testimonial Text --> */}

            {/* <!-- Testimonial author information --> */}
            <div className="testimonial-author-info">
              <h5 className="testimonial-author">Gary Johnson</h5>
              <p className="testimonial-firm">Locost Accessories</p>
            </div>
            {/* <!-- /Testimonial author information --> */}

            <div className="testimonial-icon">
              <i className="fa fa-quote-left"></i>
            </div>

            <div className="testimonial-icon-big">
              <i className="fa fa-quote-right"></i>
            </div>
          </div>
          {/* <!-- /Testimonial Content --> */}
        </div>
        {/* <!-- End of Testimonial 2 --> */}

        {/* <!-- End of Testimonial 3 --> */}
        <div className="testimonial-item">
          {/* <!-- Testimonial Content --> */}
          <div className="testimonial-content">
            {/* <!-- Picture --> */}
            <div className="testimonial-picture">
              <Image
                src="/images/testimonials/testimonial-3.jpg"
                alt="Daniel Pringle"
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
              />
            </div>
            {/* <!-- /Picture --> */}

            {/* <!-- Testimonial Text --> */}
            <div className="testimonial-text">
              <p>
                Etiam pretium ipsum quis justo dictum accumsan. Phasellus
                egestas odio a velit scelerisque.
              </p>
            </div>
            {/* <!-- /Testimonial Text --> */}

            {/* <!-- Testimonial author information --> */}
            <div className="testimonial-author-info">
              <h5 className="testimonial-author">Daniel Pringle</h5>
              <p className="testimonial-firm">Sagebrush</p>
            </div>
            {/* <!-- /Testimonial author information --> */}

            <div className="testimonial-icon">
              <i className="fa fa-quote-left"></i>
            </div>

            <div className="testimonial-icon-big">
              <i className="fa fa-quote-right"></i>
            </div>
          </div>
          {/* <!-- /Testimonial Content --> */}
        </div>
        {/* <!-- End of Testimonial 3 --> */}
      </div>
      {/* <!-- /Testimonials --> */}
    </>
  );
}
