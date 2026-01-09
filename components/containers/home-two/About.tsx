import Image from "next/image";
import about from "@/public/img/about/about-1.jpg";

const About = () => {
  return (
    <div className="about__one section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="about__one-area "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="about__one-left">
                <div className="about__one-left-image dark_image">
                  <Image src={about} alt="about" priority />
                </div>
              </div>
              <div className="about__one-right">
                <div className="about__one-right-title">
                  <h2>Why Choose ElectroPrime</h2>
                  <p>
                    ElectroPrime is a trusted manufacturer of electrical panel
                    boards and industrial steel solutions, delivering reliable,
                    standards-compliant products for power, infrastructure, and
                    industrial applications.
                  </p>
                </div>
                <div className="about__one-right-list">
                  <div className="about__one-right-list-item">
                    <h5>High-Quality Electrical Panels</h5>
                    <p>
                      Precision-engineered LT, HT, MCC, PCC, and control panels
                      built to meet international standards.
                    </p>
                  </div>
                  <div className="about__one-right-list-item">
                    <h5>Advanced Steel Fabrication</h5>
                    <p>
                      Custom steel enclosures and structures manufactured with
                      accuracy, durability, and industrial-grade finishes.
                    </p>
                  </div>
                  <div className="about__one-right-list-item">
                    <h5>Certified Quality & Safety</h5>
                    <p>
                      Strict quality control, testing procedures, and compliance
                      with electrical and safety standards.
                    </p>
                  </div>
                  <div className="about__one-right-list-item">
                    <h5>Reliable Project Delivery</h5>
                    <p>
                      On-time manufacturing and delivery to support EPC
                      contractors and industrial project timelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
