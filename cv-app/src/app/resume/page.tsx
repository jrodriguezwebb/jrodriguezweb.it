import StandardPage from "@/components/layout/standard-page";
import MainLayout from "@/components/theme-components/main-layout";
import Image from "next/image";

export default function Resume() {
  return (
    <StandardPage>
      <MainLayout>
        <div className="page-title">
          <h1>Resume</h1>
          <div className="page-subtitle">
            <h4> 8 Years of Experience</h4>
          </div>
        </div>

        <div
          id="content"
          className="page-content site-content single-post"
          role="main"
        >
          <div className="row">
            <div className=" col-xs-12 col-sm-6 ">
              <div className="block-title">
                <h2>Education</h2>
              </div>

              <div id="timeline_1" className="timeline clearfix">
                <div className="timeline-item clearfix">
                  <h5 className="item-period ">2009</h5>
                  <span className="item-company">University of Studies</span>
                  <h4 className="item-title">UI Design</h4>
                  <p>
                    Duis posuere, quam non imperdiet egestas, eros enim mattis
                    mauris, in posuere lacus arcu quis felis. Etiam interdum
                    erat non enim venenatis fermentum.
                  </p>
                </div>

                <div className="timeline-item clearfix">
                  <h5 className="item-period ">2008</h5>
                  <span className="item-company">University of Studies</span>
                  <h4 className="item-title">Graphic Design</h4>
                  <p>
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                    turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                    fringilla mollis risus, eu pulvinar dolor.
                  </p>
                </div>

                <div className="timeline-item clearfix">
                  <h5 className="item-period ">2007</h5>
                  <span className="item-company">University of Studies</span>
                  <h4 className="item-title">Frontend Development</h4>
                  <p>
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit,
                    laoreet sem in, lobortis ante.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-xs-12 col-sm-6 ">
              <div className="block-title">
                <h2>Experience</h2>
              </div>

              <div id="timeline_2" className="timeline clearfix">
                <div className="timeline-item clearfix">
                  <h5 className="item-period current">2016 - Current</h5>
                  <span className="item-company">Rolling Thunder</span>
                  <h4 className="item-title">Lead UI/UX Designer</h4>
                  <p>
                    Praesent dignissim sollicitudin justo, sed elementum quam
                    lacinia quis. Phasellus eleifend tristique posuere. Sed
                    vitae dui nec magna.
                  </p>
                </div>

                <div className="timeline-item clearfix">
                  <h5 className="item-period ">2013 - 2016</h5>
                  <span className="item-company">Locost Accessories</span>
                  <h4 className="item-title">Senior UI/UX Designer</h4>
                  <p>
                    Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                    vitae nulla tristique, ornare felis id, congue libero. Nam
                    volutpat euismod quam.
                  </p>
                </div>

                <div className="timeline-item clearfix">
                  <h5 className="item-period ">2011 - 2013</h5>
                  <span className="item-company">Sagebrush</span>
                  <h4 className="item-title">Junior UI/UX Designer</h4>
                  <p>
                    Duis mollis nunc quis quam viverra venenatis. Nulla nulla
                    arcu, congue vitae nunc ac, sodales ultricies diam. Nullam
                    justo leo, tincidunt sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className=" col-xs-12 col-sm-12 ">
              <div className="p-20"></div>

              <div className="block-title">
                <h2>Certificates</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className=" col-xs-12 col-sm-6 ">
              <a
                href="//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/1.jpg"
                className="lightbox"
              >
                <div className="certificate-item clearfix">
                  <div className="certi-logo">
                    <Image
                      src="/images/clients/client-7.png"
                      alt="logo"
                      height={144} // Desired size with correct aspect ratio
                      width={144} // Desired size with correct aspect ratio
                    />
                  </div>

                  <div className="certi-content">
                    <div className="certi-title">
                      <h4>Psyhology of Intertnation Design</h4>
                    </div>

                    <div className="certi-id">
                      <span>Membership ID: XXXX</span>
                    </div>
                    <div className="certi-date">
                      <span>19 April 2018</span>
                    </div>

                    <div className="certi-company">
                      <span></span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className=" col-xs-12 col-sm-6 ">
              <a
                href="//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/1.jpg"
                className="lightbox"
              >
                <div className="certificate-item clearfix">
                  <div className="certi-logo">
                    {/* <Image
                      src="https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client-1.png"
                      alt="logo"
                      height={144} // Desired size with correct aspect ratio
                      width={144} // Desired size with correct aspect ratio
                    /> */}
                  </div>

                  <div className="certi-content">
                    <div className="certi-title">
                      <h4>Psyhology of Intertnation Design</h4>
                    </div>

                    <div className="certi-id">
                      <span>Membership ID: XXXX</span>
                    </div>

                    <div className="certi-date">
                      <span>19 April 2018</span>
                    </div>

                    <div className="certi-company">
                      <span></span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className=" col-xs-12 col-sm-12 ">
              <div className="p-40"></div>
            </div>
          </div>

          <div className="row">
            <div className=" col-xs-12 col-sm-6 ">
              <div className="block-title">
                <h2>Design Skills</h2>
              </div>

              <div id="skills_1" className="skills-info skills-first-style">
                {/* <!-- Skill 1 --> */}
                <div className="clearfix">
                  <h4>UI/UX Design</h4>
                  <div className="skill-value">95%</div>
                </div>

                <div id="skill_1" data-value="95" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/*  <!-- /Skill 1 --> */}

                {/* <!-- Skill 2 --> */}
                <div className="clearfix">
                  <h4>Print Design</h4>
                  <div className="skill-value">75%</div>
                </div>

                <div id="skill_2" data-value="75" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/* <!-- /Skill 2 --> */}

                {/* <!-- Skill 3 --> */}
                <div className="clearfix">
                  <h4>Graphic Design</h4>
                  <div className="skill-value">85%</div>
                </div>
                <div id="skill_3" data-value="85" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/* <!-- Skill 3 --> */}

                {/* <!-- Skill 4 --> */}
                <div className="clearfix">
                  <h4>Logo Design</h4>
                  <div className="skill-value">90%</div>
                </div>
                <div id="skill_4" data-value="90" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/* <!-- /Skill 4 --> */}
              </div>
            </div>

            <div className=" col-xs-12 col-sm-6 ">
              <div className="block-title">
                <h2>Coding Skills</h2>
              </div>

              <div id="skills_2" className="skills-info skills-first-style">
                {/* <!-- Skill 5 --> */}
                <div className="clearfix">
                  <h4>HTML / CSS</h4>
                  <div className="skill-value">100%</div>
                </div>
                <div id="skill_5" data-value="100" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/* <!-- /Skill 5 --> */}

                {/* <!-- Skill 6 --> */}
                <div className="clearfix">
                  <h4>PHP</h4>
                  <div className="skill-value">90%</div>
                </div>
                <div id="skill_6" data-value="90" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/* <!-- /Skill 6 --> */}

                {/* <!-- Skill 7 --> */}
                <div className="clearfix">
                  <h4>JavaScript</h4>
                  <div className="skill-value">90%</div>
                </div>
                <div id="skill_7" data-value="90" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/* <!-- /Skill 7 --> */}

                {/* <!-- Skill 8 --> */}
                <div className="clearfix">
                  <h4>Smarty / Twig</h4>
                  <div className="skill-value">85%</div>
                </div>
                <div id="skill_8" data-value="85" className="skill-container">
                  <div className="skill-percentage"></div>
                </div>
                {/* <!-- /Skill 8 --> */}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </StandardPage>
  );
}
