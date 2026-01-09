import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo-3.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer__one">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-1"></div>
          <div className="col-xl-3 col-lg-5 col-md-6 xl-mb-30">
            <div
              className="footer__one-widget"
              data-aos-duration="800"
              data-aos="fade-up"
            >
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="logo"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "18px",
                      padding: "4px",
                    }}
                    priority
                  />
                </Link>
              </div>
              <div className="info">
                <div className="info-item">
                  <div className="info-item-icon">
                    <i className="fal fa-phone-alt icon-animation"></i>
                  </div>
                  <div className="info-item-content">
                    <span>Call Now</span>
                    <h6>
                      <a
                        href="https://wa.me/96181759507?text=Hello%20ElectroPrime!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +961 81 759 507
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="info-item-content">
                    <span>Office Address</span>
                    <h6>
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        Chouaifet El Aamroussieh
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
            <div
              className="footer__one-widget ml-60 xl-ml-0"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4>Quick links</h4>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="blog-grid">Blog</Link>
                  </li>
                  <li>
                    <Link href="testimonial">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="faq">Faqs</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 md-mb-30">
            <div
              className="footer__one-widget"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4>Services</h4>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <Link href="services-details">Drip Detectives</Link>
                  </li>
                  <li>
                    <Link href="services-details">Leak Stop Specialists</Link>
                  </li>
                  <li>
                    <Link href="services-details">Pipe Dream Team</Link>
                  </li>
                  <li>
                    <Link href="services-details">Rapid Repair Squad</Link>
                  </li>
                  <li>
                    <Link href="services-details">Clear Flow Plumbers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div
              className="footer__one-widget"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4>Working Time</h4>
              <div className="footer__one-widget-hour">
                <p>Mon - Fri : 7:00 AM - 10:00 PM</p>
                <p>Sat : 7:00 AM - 9:00 PM</p>
                <p>Sat : 8:00 AM - 4:00 PM</p>
                <div className="social__icon">
                  <ul>
                    <li>
                      <Link
                        href="https://www.facebook.com/profile.php?id=100082262150146"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/electroprime.sa/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="https://behance.net" target="_blank">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://linkedin.com" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="copyright__one">
              <div className="row">
                <div className="col-lg-6">
                  <div className="copyright__one-left lg-t-center">
                    <p>
                      &copy; <Link href="/">Electro Prime</Link> {currentYear} |
                      All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="copyright__one-menu t-right lg-t-center lg-mt-5">
                    <ul>
                      <li>
                        <Link href="#">Privacy & Policy</Link>
                      </li>
                      <li>
                        <Link href="#">Terms and Conditions</Link>
                      </li>
                    </ul>
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

export default Footer;
