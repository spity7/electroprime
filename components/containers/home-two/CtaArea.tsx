"use client";

import { useState } from "react";

const CtaArea = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const encodedMessage = encodeURIComponent(
      message ||
        "Hello ElectroPrime, I would like to inquire about your services."
    );

    window.open(`https://wa.me/96181759507?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="cta__one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta__one-area">
              <div className="row ai-center">
                <div className="col-xl-6 col-lg-7 lg-mb-30">
                  <div className="cta__one-area-content ">
                    <h2 className="lg-t-center">
                      Feel Free To Contact Us Get This Service
                    </h2>
                    <div className="cta__one-area-content-tel lg-jc-center">
                      <div className="icon">
                        <i className="fa-regular fa-phone"></i>
                      </div>
                      <div className="info">
                        <span>For Any Help</span>
                        <h4>
                          <a
                            href="https://wa.me/96181759507?text=Hello%20ElectroPrime!"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            +961 81 759 507
                          </a>
                          {/* <Link href="tel:+450570658567">+45 057 0658 567</Link> */}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                  <div
                    className="cta__one-form "
                    data-aos-duration="800"
                    data-aos="fade-left"
                    data-aos-delay="500"
                  >
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="message"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                      <button className="button-5" type="submit">
                        Send on WhatsApp
                      </button>
                    </form>
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

export default CtaArea;
