import { useState } from 'react';
import Header from '../Header';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    agreeToPrivacy: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    window.location.href = 'https://www.medeutschmena.com/thank-you';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="section hero sub">
      <div className="w-layout-blockcontainer container_default overflow w-container">
        <Header />
        <div className="vertical_center_wrapper hero">
          <div
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d3b"
            style={{
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d'
            }}
            className="sub_header_hero"
          >
            Contact
          </div>
          <h1
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d3d"
            style={{
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d'
            }}
            className="heading_h1 center white _800px"
          >
            Get in Touch Today
          </h1>
          <p
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d3f"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1
            }}
            className="paragraph_large center white _680px"
          >
            Fill out the form below and one of our experts will contact you shortly, or book a convenient appointment directly on the next page.
          </p>
          <div
            data-w-id="f4713dc3-9a36-3909-091a-10277d57b864"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1
            }}
            className="button_wrapper"
          >
            <a href="/professionals" className="primary_button w-button">
              Are you a healthcare professional?
            </a>
          </div>
        </div>
        <img
          alt="circle"
          src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669beebc1867343b01df6c2f_Group%2046430.svg"
          className="medium_circle sub _1"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper">
          <div
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d44"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1
            }}
            className="form_wrapper"
          >
            <div
              data-w-id="e609d469-c552-e8ca-802b-2ef28127ace5"
              style={{
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                opacity: 1
              }}
              className="contact-card"
            >
              <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ace6-f527f600" className="form-block w-form">
                <div className="contact-form">
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ace8-f527f600" className="field-wrapper">
                    <label htmlFor="firstName" className="field-label">
                      First Name <span className="red">*</span>
                    </label>
                    <input
                      className="contact-form-text-field w-input"
                      maxLength={256}
                      name="firstName"
                      placeholder="John"
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127acef-f527f600" className="field-wrapper">
                    <label htmlFor="lastName" className="field-label">
                      Last Name <span className="red">*</span>
                    </label>
                    <input
                      className="contact-form-text-field w-input"
                      maxLength={256}
                      name="lastName"
                      placeholder="Doe"
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127acf6-f527f600" className="field-wrapper">
                    <label htmlFor="email" className="field-label">
                      Email Address <span className="red">*</span>
                    </label>
                    <input
                      className="contact-form-text-field w-input"
                      maxLength={256}
                      name="email"
                      placeholder="john@company.com"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127acfd-f527f600" className="field-wrapper">
                    <label htmlFor="phone" className="field-label">
                      Phone Number <span className="red">*</span>
                    </label>
                    <input
                      className="contact-form-text-field w-input"
                      maxLength={256}
                      name="phone"
                      placeholder="+49..."
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ad04-f527f600" className="field-wrapper">
                    <label htmlFor="company" className="field-label">
                      Company / Agency Name <span className="red">*</span>
                    </label>
                    <input
                      className="contact-form-text-field w-input"
                      maxLength={256}
                      name="company"
                      placeholder="Your Company GmbH"
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ad0b-f527f600" className="field-wrapper">
                    <label htmlFor="message" className="field-label">
                      Your Message <span className="red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      maxLength={5000}
                      placeholder="Tell us about your recruitment needs..."
                      className="contact-form-text-field textarea w-input"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ad12-f527f600" className="field-wrapper">
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                      <input
                        type="checkbox"
                        name="agreeToPrivacy"
                        id="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onChange={handleChange}
                        required
                        style={{
                          opacity: 0,
                          position: 'absolute',
                          zIndex: -1
                        }}
                      />
                      <span className="checkbox-label w-form-label" htmlFor="agreeToPrivacy">
                        I agree to the <a href="/privacy" className="red-text-link">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                      </span>
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    id="w-node-e609d469-c552-e8ca-802b-2ef28127ad1a-f527f600"
                    className="button w-button"
                  >
                    Submit Form
                  </button>
                </div>
              </div>
              <div
                id="w-node-e609d469-c552-e8ca-802b-2ef28127ad21-f527f600"
                data-w-id="e609d469-c552-e8ca-802b-2ef28127ad21"
                className="contact-information-wrapper"
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  opacity: 1
                }}
              >
                <div className="contact-person-wrapper">
                  <img
                    width="100"
                    height="Auto"
                    alt="contact-person"
                    src="https://ik.imagekit.io/pcet3dvcu/personal%20(1).png?updatedAt=1761527582055"
                    loading="lazy"
                    className="contact-person-image"
                  />
                  <div className="contact-person-info-wrapper">
                    <div className="contact-person-name">Eng Hossam Kamer</div>
                    <div className="contact-person-role">Business Development</div>
                  </div>
                </div>
                <div className="footer-contact-line">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4fdcae5371438740304c0_Group%207201.svg"
                    alt=""
                    className="contact-icon"
                  />
                  <a href="https://wa.me/+15155065027" className="link gray">
                    info@medeutschmena.com
                  </a>
                </div>
                <div className="footer-contact-line hide">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4fcaae2b43a9b49abc4f7_Group%2045050%20(2).svg"
                    alt="Phone Icon"
                    className="contact-icon"
                  />
                  <a href="https://wa.me/+15155065027" className="link gray">
                    +1 (515) 506-5027
                  </a>
                </div>
                <div className="footer-contact-line">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4fdd4bf26f8288bdbde0d_Group%207205.svg"
                    alt=""
                    className="contact-icon"
                  />
                  <a href="https://wa.me/+15155065027" className="link gray">
                    +1 (515) 506-5027
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}