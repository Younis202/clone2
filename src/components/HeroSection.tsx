import { useState, useEffect, useRef } from 'react';
import Header from './Header';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section hero _0">
      <div className="w-layout-blockcontainer container_default overflow w-container">
        <Header />
        <div className="vertical_center_wrapper hero">
          <div
            data-w-id="34fd3018-4b1f-3f9b-753e-ac27f943cf6f"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s'
            }}
            className="sub_header_hero"
          >
            Germany's Leading Healthcare Staffing Agency
          </div>

          <h1
            data-w-id="34fd3018-4b1f-3f9b-753e-ac27f943cf71"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s'
            }}
            className="heading_h1 center white _900px"
          >
            Qualified Healthcare Professionals from Middle East
          </h1>

          <p
            data-w-id="34fd3018-4b1f-3f9b-753e-ac27f943cf73"
            style={{
              transform: isVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: isVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s'
            }}
            className="paragraph_large center white _680px"
          >
            Connect your healthcare facility with highly qualified nursing professionals through our proven recruitment platform with comprehensive language training and EU compliance.
          </p>

          <div
            data-w-id="34fd3018-4b1f-3f9b-753e-ac27f943cf75"
            style={{
              transform: isVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: isVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s'
            }}
            className="button_wrapper"
          >
            <a href="https://form.jotform.com/240765018573358" target="_blank" rel="noopener noreferrer" className="primary_button w-button">
              Request Partner Access
            </a>
          </div>

          <div
            data-w-id="34fd3018-4b1f-3f9b-753e-ac27f943cf78"
            style={{
              transform: isVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: isVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s'
            }}
            className="horizontal_wrapper"
          >
            <img
              src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66bf484dfe00397d24359099_germany%20(1).svg"
              loading="eager"
              width="20"
              alt="english-flag"
              className="english_flag"
            />
            <a href="/solutions" aria-current="page" className="text_link w--current">
              View All Candidates
            </a>
          </div>

          <a
            href="#"
            data-w-id="34fd3018-4b1f-3f9b-753e-ac27f943cf7c"
            style={{
              transform: isVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: isVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s'
            }}
            className="application_video w-inline-block w-lightbox"
            aria-label="open lightbox"
            aria-haspopup="dialog"
          >
            <img
              src="https://ik.imagekit.io/pcet3dvcu/thumb3-min.png?updatedAt=1761554977176"
              loading="eager"
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 75vw, 920px"
              srcSet="https://ik.imagekit.io/pcet3dvcu/thumb3-min.png?updatedAt=1761554977176"
              alt="video cover"
              className="video_cover application"
            />
            <script type="application/json" className="w-json">
              {`{
  "items": [
    {
      "url": "https://med.techdeutsch.com/ns3p7i6jyr",
      "originalUrl": "https://med.techdeutsch.com/ns3p7i6jyr",
      "width": 940,
      "height": 529,
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/e4499a782553ce04388d6ea8590df7d031b3eaec.jpg?image_crop_resized=960x540",
      "html": "<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fns3p7i6jyr&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Ffrese-recruiting.wistia.com%2Fmedias%2Fns3p7i6jyr&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2Fe4499a782553ce04388d6ea8590df7d031b3eaec.jpg%3Fimage_crop_resized%3D960x540&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=wistia\\" width=\\"940\\" height=\\"529\\" scrolling=\\"no\\" title=\\"Wistia, Inc. embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen; encrypted-media; picture-in-picture;\\" allowfullscreen=\\"true\\"></iframe>",
      "type": "video"
    }
  ],
  "group": ""
}`}
            </script>
          </a>
        </div>

        <img
          alt="circle"
          src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669beebc1867343b01df6c2f_Group%2046430.svg"
          className="medium_circle sub application"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1.02958, 1.02958, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            animation: 'pulse 2.4s ease-in-out infinite'
          }}
        />
      </div>

      <div className="w-layout-blockcontainer container_default w-container"></div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: translate3d(0px, 0px, 0px) scale3d(0.97, 0.97, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
          50% {
            transform: translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
        }
      `}</style>
    </section>
  );
}