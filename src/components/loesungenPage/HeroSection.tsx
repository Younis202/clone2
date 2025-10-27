import { useState, useEffect, useRef } from 'react';
import Header from '../Header';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <section className="section hero" ref={heroRef}>
      <div className="w-layout-blockcontainer container_default overflow w-container">
        {/* Navbar - View 0.1s animation */}
        <Header />
        <div className="vertical_center_wrapper hero">
          {/* Sub Header - View 0.2s animation */}
          <div
            data-w-id="df093de7-20ac-e0b8-01b8-eb3f00d5cdec"
            className="sub_header_hero"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s'
            }}
          >
            For German Healthcare Facilities
          </div>

          {/* H1 Heading - View 0.3s animation */}
          <h1
            data-w-id="e1dd8d5d-99aa-5bf0-3c39-035d2ff71190"
            className="heading_h1 center white _900px"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s'
            }}
          >
            Connect with Qualified Middle Eastern Healthcare Professionals
          </h1>

          {/* Paragraph - View 0.4s animation */}
          <p
            data-w-id="02da42f9-e56c-091b-04ad-0979a701d012"
            className="paragraph_large center white _680px"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s'
            }}
          >
            MEDeutsch MENA bridges German healthcare facilities with experienced Iraqi nurses and healthcare professionals, creating sustainable partnerships built on quality and trust.
          </p>

          {/* Button Wrapper - View 0.5s animation */}
          <div
            data-w-id="1fdf079a-91b5-5d74-087e-3c049df81327"
            className="button_wrapper"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s'
            }}
          >
            <a href="https://wa.me/+15155065027" target="_blank" className="primary_button w-button">Schedule Free Consultation</a>
          </div>

          {/* Bullet Wrapper - View 0.6s animation */}
          <div
            data-w-id="e39e5080-479c-462b-6da6-f8c8bcc8003f"
            className="bullet-wrapper"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s'
            }}
          >
            <div className="bullet-wrapper-single">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b98f06de75eb9da868901_Icon%20(39).svg"
                alt="check icon"
                className="check-icon"
              />
              <div className="benefit-title">Quality Focused</div>
            </div>
            <div className="bullet-wrapper-single">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b98f06de75eb9da868901_Icon%20(39).svg"
                alt="check icon"
                className="check-icon"
              />
              <div className="benefit-title">Full Support</div>
            </div>
            <div className="bullet-wrapper-single">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b98f06de75eb9da868901_Icon%20(39).svg"
                alt="check icon"
                className="check-icon"
              />
              <div className="benefit-title">Long-term Success</div>
            </div>
          </div>

          {/* Hero Images - Hero Animation (a-29) */}
          <div data-w-id="2e073c2f-4eb9-bef9-ca3b-083fd44f11a9" className="image_center_wrapper">
            {/* Left Image - slides in from right with rotation */}
            <img
              width="500"
              alt="hero_card_illustration"
              src="https://ik.imagekit.io/pcet3dvcu/can3.png?updatedAt=1761541955325"
              loading="lazy"
              srcSet="https://ik.imagekit.io/pcet3dvcu/can3.png?updatedAt=1761541955325"
              sizes="(max-width: 767px) 100vw, 500px"
              className="hero_image_left"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-3deg) skew(0deg, 0deg)'
                  : 'translate3d(20px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                transition: 'opacity 1s ease 0s, transform 1s ease 0s'
              }}
            />

            {/* Center Image */}
            <img
              className="hero_image_center"
              src="https://ik.imagekit.io/pcet3dvcu/can2.png?updatedAt=1761540248931"
              width="500"
              alt="hero_card_illustration"
              sizes="(max-width: 767px) 100vw, 500px"
              data-w-id="2e073c2f-4eb9-bef9-ca3b-083fd44f11ab"
              loading="lazy"
              srcSet="https://ik.imagekit.io/pcet3dvcu/can2.png?updatedAt=1761540248931"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                transition: 'opacity 1s ease 0.1s'
              }}
            />

            {/* Right Image - slides in from left with rotation */}
            <img
              width="500"
              alt="hero_card_illustration"
              src="https://ik.imagekit.io/pcet3dvcu/can1.png?updatedAt=1761538359656"
              loading="lazy"
              srcSet="https://ik.imagekit.io/pcet3dvcu/can1.png?updatedAt=1761538359656"
              sizes="(max-width: 767px) 100vw, 500px"
              className="hero_image_right"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg)'
                  : 'translate3d(-20px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                transition: 'opacity 1s ease 0s, transform 1s ease 0s'
              }}
            />
          </div>
        </div>

        {/* Pulsing Circle Background */}
        <img
          alt="circle"
          src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669beebc1867343b01df6c2f_Group%2046430.svg"
          className="medium_circle pulse-animation"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        />
      </div>

      <style jsx>{`
        /* Pulse Animation for Circle */
        @keyframes pulse {
          0% {
            transform: translate3d(0px, 0px, 0px) scale3d(0.97, 0.97, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
          50% {
            transform: translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
          100% {
            transform: translate3d(0px, 0px, 0px) scale3d(0.97, 0.97, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
        }

        .pulse-animation {
          animation: pulse 2s ease infinite;
        }
      `}</style>
    </section>
  );
}