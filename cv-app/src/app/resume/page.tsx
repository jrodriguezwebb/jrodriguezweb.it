import BlockTitle from "@/components/theme-components/block-title";
import Column from "@/components/layout/column";
import Image from "next/image";
import MainLayout from "@/components/theme-components/main-layout";
import Row from "@/components/layout/row";
import StandardPage from "@/components/layout/standard-page";
import Timeline from "@/components/theme-components/timeline";
import TimelineItem from "@/components/theme-components/time-line-item";
import { timelineItemsStudies } from "@/data/studies";
import { timelineItemsExperience } from "@/data/experience";

export default function Resume() {
  return (
    <StandardPage>
      <MainLayout title="Resume" subtitle="13 Years of Experience">
        <Row>
          <Column xs={12} sm={6}>
            <BlockTitle>
              <h2>Education</h2>
            </BlockTitle>

            <Timeline>
              {timelineItemsStudies.map((item, index) => (
                <TimelineItem
                  key={index}
                  period={item.period}
                  company={item.company}
                  title={item.title}
                  description={item.description}
                />
              ))}
              ;
            </Timeline>
          </Column>

          <Column xs={12} sm={6}>
            <BlockTitle>
              <h2>Experience</h2>
            </BlockTitle>

            <Timeline>
              {timelineItemsExperience.map((item, index) => (
                <TimelineItem
                  key={index}
                  period={item.period}
                  company={item.company}
                  title={item.title}
                  description={item.description}
                />
              ))}
              ;
            </Timeline>
          </Column>
        </Row>

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
      </MainLayout>
    </StandardPage>
  );
}
