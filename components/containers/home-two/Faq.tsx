"use client";
import { useState } from "react";
import Image from "next/image";
import faq from "@/public/img/pages/WhatsApp Image 2026-01-11 at 18.10.17.jpeg";
import shape from "@/public/img/shape/faq-shape.png";

const Faq = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="faq__one section-padding pt-0">
      <div className="container">
        <div className="row ai-end">
          <div
            className="col-lg-6 "
            data-aos-duration="800"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="faq__one-image">
              <Image src={faq} alt="image" priority />
              <Image
                className="shape left-right-animate"
                src={shape}
                alt="image"
                priority
              />
            </div>
          </div>
          <div className="col-lg-6 lg-mt-30">
            <div className="faq__one-right">
              <div className="faq__one-right-title">
                <h2>Frequently Asked Questions</h2>
                <p
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Here are some common questions about our electrical panel
                  boards and industrial steel manufacturing solutions.
                </p>
              </div>
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="900"
                id="accordionExample"
              >
                <div className="faq__area-item">
                  <h5
                    className={(active == 0 ? "  " : " collapsed") + " icon"}
                    onClick={() => setActive(active === 0 ? -1 : 0)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    What types of electrical panels do you manufacture?
                  </h5>
                  <div
                    id="collapseOne"
                    className={`faq__area-item-body collapse${
                      active === 0 ? " show " : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      We manufacture LT panels, HT panels, MCC, PCC, APFC,
                      control panels, and custom PLC panels, all built to meet
                      international safety and quality standards.
                    </p>
                  </div>
                </div>
                <div className="faq__area-item">
                  <h5
                    className={(active == 1 ? "  " : " collapsed") + " icon"}
                    onClick={() => setActive(active === 1 ? -1 : 1)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    Do you provide custom steel fabrication for panels?
                  </h5>
                  <div
                    id="collapseTwo"
                    className={`faq__area-item-body collapse${
                      active === 1 ? " show " : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      Yes, we provide custom sheet metal and steel enclosures
                      for electrical panels, including powder-coated and
                      galvanized finishes for durability in industrial
                      environments.
                    </p>
                  </div>
                </div>
                <div className="faq__area-item">
                  <h5
                    className={(active == 2 ? "  " : " collapsed") + " icon"}
                    onClick={() => setActive(active === 2 ? -1 : 2)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    How do you ensure quality and compliance?
                  </h5>
                  <div
                    id="collapseThree"
                    className={`faq__area-item-body collapse${
                      active === 2 ? " show " : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      All products undergo strict quality control, testing, and
                      certification processes. Our panels comply with IEC, ISO,
                      and industry-specific safety standards to ensure reliable
                      performance.
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

export default Faq;
