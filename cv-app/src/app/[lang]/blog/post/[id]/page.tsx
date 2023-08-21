import StandardPage from "@/components/layout/standard-page";
import MainLayout from "@/components/theme-components/main-layout";
import Image from "next/image";
import Link from "next/link";

export default function Post({ params }: { params: { id: number } }) {
  console.log(params);
  return (
    // TODO: refactor to components
    <StandardPage>
      <MainLayout title="Blog" subtitle="My Diary">
        <article className="post">
          <header className="entry-header">
            <div className="entry-meta entry-meta-top">
              <span>
                <a href="#" rel="category tag">
                  WordPress
                </a>
              </span>
            </div>

            {/* <!-- .entry-meta --> */}

            <h2 className="entry-title">
              How to Make a WordPress Plugin Extensible
            </h2>
          </header>

          {/* <!-- .entry-header --> */}

          <div className="post-thumbnail">
            <Image
              src="/images/blog/blog_post_1_full.jpg"
              alt="big image"
              width={929}
              height={435}
            />
          </div>

          <div className="post-content">
            <div className="entry-content">
              <div className="row">
                <div className=" col-xs-12 col-sm-12 ">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    cursus lorem a turpis feugiat, et porttitor leo dapibus. In
                    ut tincidunt lectus, id hendrerit enim. Maecenas at nibh eu
                    nulla dignissim posuere. Nullam viverra vitae elit a tempus.
                    Donec quis eleifend eros. Donec imperdiet nisi mi, in
                    ultricies risus porta ac. Nullam laoreet convallis nibh sed
                    congue. Donec nulla ipsum, tincidunt a augue maximus,
                    pellentesque imperdiet lectus. Aenean posuere consequat
                    libero, id efficitur quam dictum volutpat.
                  </p>

                  <p>
                    Donec mollis a lacus a pharetra. Nam facilisis enim erat, in
                    scelerisque eros mollis quis. Aliquam erat volutpat. Nam vel
                    nibh justo. Nunc vestibulum leo a ultricies malesuada. Proin
                    quis volutpat sem. Morbi consequat lacinia pulvinar.
                  </p>

                  <div className="single-image ">
                    <Link
                      href="/images/blog/blog_post_2_full.jpg"
                      className="lightbox"
                    >
                      {
                        <Image
                          src="/images/blog/blog_post_2_full.jpg"
                          alt="image"
                          width={789}
                          height={370}
                        />
                      }
                    </Link>
                  </div>

                  <p>
                    Cras commodo, nulla a commodo sodales, nisl mauris interdum
                    lectus, ac mattis lacus purus ut nunc. Fusce volutpat
                    aliquam euismod. Aliquam pulvinar neque turpis, in tincidunt
                    mi varius et. Curabitur vitae tempus mauris, porta dictum
                    ante. Nam pellentesque et mauris a suscipit. Vivamus gravida
                    erat nec elit ullamcorper, quis laoreet metus efficitur.
                    Duis vulputate, mauris a auctor pretium, elit nisl eleifend
                    nulla, non accumsan augue massa quis tellus. Aliquam at
                    justo libero.
                  </p>
                  <p>
                    Donec mollis a lacus a pharetra. Nam facilisis enim erat, in
                    scelerisque eros mollis quis. Aliquam erat volutpat. Nam vel
                    nibh justo. Nunc vestibulum leo a ultricies malesuada. Proin
                    quis volutpat sem. Morbi consequat lacinia pulvinar.
                  </p>

                  <blockquote className="quote fw-quote-left fw-quote-md ">
                    <p>
                      Mauris lectus dolor, varius ut imperdiet nec, dignissim
                      nec ligula. Cras posuere odio et finibus accumsan. Mauris
                      in sem non arcu consectetur posuere sed quis justo. Sed
                      turpis mauris, aliquet ac lacus nec, tempor condimentum
                      justo.
                    </p>
                    <footer className="quote-author">
                      <span>Edgar D. Wang</span>
                    </footer>
                  </blockquote>

                  <p>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Sed vestibulum mauris
                    condimentum ultrices scelerisque. Fusce pulvinar cursus
                    luctus. Cras dapibus placerat magna, quis euismod nisi
                    consequat euismod. Curabitur finibus nisi at justo
                    ultricies, nec congue metus rutrum. Quisque vulputate
                    sollicitudin aliquam. Curabitur posuere auctor dapibus.
                  </p>

                  <p>
                    Donec mollis a lacus a pharetra. Nam facilisis enim erat, in
                    scelerisque eros mollis quis. Aliquam erat volutpat. Nam vel
                    nibh justo. Nunc vestibulum leo a ultricies malesuada. Proin
                    quis volutpat sem. Morbi consequat lacinia pulvinar.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- .entry-content --> */}

            <div className="entry-meta entry-meta-bottom">
              <div className="date-author">
                <span className="entry-date">
                  <a href="#" rel="bookmark">
                    <i className="far fa-clock"></i>
                    {/* <time
                      className="entry-date"
                      datetime="2020-04-04T08:29:37+00:00"
                    >
                      {" "}
                      December 4, 2019
                    </time> */}
                  </a>
                </span>

                <span className="author vcard">
                  <a className="url fn n" href="#" rel="author">
                    <i className="fas fa-user"></i>
                    <span> Leven</span>
                  </a>
                </span>
              </div>

              {/* <!-- Share Buttons --> */}
              <div className="entry-share btn-group share-buttons">
                {/* onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" */}

                <Link
                  href="https://www.facebook.com/sharer/sharer.php?u=http://example.com/"
                  className="btn"
                  target="_blank"
                  title="Share on Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>

                {/* onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" */}
                <Link
                  href="https://twitter.com/share?url=http://example.com/"
                  className="btn"
                  target="_blank"
                  title="Share on Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </Link>

                {/* onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" */}
                <Link
                  href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://example.com/"
                  className="btn"
                  title="Share on LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>

                {/* onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" */}
                <Link
                  href="http://www.digg.com/submit?url=http://example.com/"
                  className="btn"
                  title="Share on Digg"
                >
                  <i className="fab fa-digg"></i>
                </Link>
              </div>
              {/*  <!-- /Share Buttons --> */}
            </div>

            <div className="post-tags">
              <span className="tags">
                <a href="#" rel="tag">
                  design
                </a>
                <a href="#" rel="tag">
                  plugin
                </a>
                <a href="#" rel="tag">
                  WordPress
                </a>
              </span>
            </div>
          </div>
        </article>
      </MainLayout>
    </StandardPage>
  );
}
