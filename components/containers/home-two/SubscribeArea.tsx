"use client";
import { useState } from "react";

const SubscribeArea = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Pre-fill the WhatsApp message
    const message = encodeURIComponent("Hello ElectroPrime");

    // Redirect to WhatsApp
    window.open(`https://wa.me/96181759507?text=${message}`, "_blank");
  };

  return (
    <div className="subscribe__area">
      <div className="container">
        <div className="row jc-center">
          <div className="col-lg-8 col-md-12">
            <div className="subscribe__area-title">
              <h1>Leave a message!</h1>
            </div>
            <div className="subscribe__area-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="message"
                  placeholder="Enter you message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button className="button-2" type="submit">
                  Send on Whatsapp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeArea;
