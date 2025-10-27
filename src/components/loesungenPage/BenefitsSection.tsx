import { useState, useEffect, useRef } from 'react';

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.wId]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-w-id]').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const getAnimationStyle = (id) => {
    if (!isVisible[id]) {
      if (id === 'ef8b1336-bf27-16b0-512c-4f2fc4efd8e9' || id === 'ef8b1336-bf27-16b0-512c-4f2fc4efd8eb' || id === '4643d775-b50c-1aa9-7fdc-bd4a70f78926') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '1bc60307-07a1-f76c-c8db-018311b568b8' || id === '1bc60307-07a1-f76c-c8db-018311b568bf' ||
        id === '1bc60307-07a1-f76c-c8db-018311b568c7' || id === '1bc60307-07a1-f76c-c8db-018311b568ce' ||
        id === '1bc60307-07a1-f76c-c8db-018311b568d5') {
        return { opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
    }
    return { opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
  };

  return (
    <section id="benefits" className="section benefits">
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper">
          <div
            data-w-id="ef8b1336-bf27-16b0-512c-4f2fc4efd8e9"
            style={{
              ...getAnimationStyle('ef8b1336-bf27-16b0-512c-4f2fc4efd8e9'),
              transition: 'opacity 700ms ease 100ms, transform 700ms ease 100ms',
              transformStyle: 'preserve-3d'
            }}
            className="sub_header_transparent"
          >
            Your Advantages
          </div>
          <h2
            data-w-id="ef8b1336-bf27-16b0-512c-4f2fc4efd8eb"
            style={{
              ...getAnimationStyle('ef8b1336-bf27-16b0-512c-4f2fc4efd8eb'),
              transition: 'opacity 1000ms ease 200ms, transform 1000ms ease 200ms',
              transformStyle: 'preserve-3d'
            }}
            className="heading_h2 center white _705px"
          >
            Why Choose MEDeutsch MENA?
          </h2>
          <div className="benefits-wrapper">
            <div className="cards-wrapper">
              <div className="solution-card-border left">
                <img
                  className="card-illustration"
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min.png"
                  alt="increased-chard"
                  style={{
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568b8'),
                    transition: 'opacity 700ms ease 300ms, transform 700ms ease 300ms',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568b8"
                  loading="eager"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min.png 1770w"
                />
                <div className="vertical-center-wrapper _70">
                  <div className="small-title center">Streamlined Process</div>
                  <p className="paragraph-small center">
                    We handle all the complex paperwork and coordination with authorities, taking the administrative burden off your shoulders. From qualification recognition to visa applications – we manage everything for you efficiently and professionally.
                  </p>
                </div>
              </div>
              <div className="solution-card-border right">
                <img
                  className="card-illustration bg"
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min.png"
                  alt="together"
                  style={{
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568bf'),
                    transition: 'opacity 700ms ease 400ms, transform 700ms ease 400ms',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568bf"
                  loading="eager"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min.png 1770w"
                />
                <div className="vertical-center-wrapper _70">
                  <div className="small-title center">
                    Qualified Middle Eastern<br />Healthcare Professionals
                  </div>
                  <p className="paragraph-small center">
                    Our extensive network gives you access to highly qualified Iraqi nurses and healthcare professionals who are ready to contribute to German healthcare facilities. We ensure all candidates meet German standards and are fully prepared for their roles.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-layout-grid _3x1-grid">
              <div className="solution-card-border bottom-left">
                <img
                  className="card-illustration bottom"
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min.png"
                  alt="illustration"
                  style={{
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568c7'),
                    transition: 'opacity 700ms ease 500ms, transform 700ms ease 500ms',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568c7"
                  loading="eager"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min.png 1125w"
                />
                <div className="vertical-center-wrapper _90">
                  <div className="small-title center">Integration Support</div>
                  <p className="paragraph-small center">
                    We assist with housing arrangements and settlement support for candidates, ensuring they feel comfortable from day one. This smooth transition leads to better integration, higher satisfaction, and long-term success in their new roles.
                  </p>
                </div>
              </div>
              <div className="solution-card-border">
                <img
                  className="card-illustration bottom"
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min.png"
                  alt="illustration"
                  style={{
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568ce'),
                    transition: 'opacity 700ms ease 600ms, transform 700ms ease 600ms',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568ce"
                  loading="eager"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min.png 1125w"
                />
                <div className="vertical-center-wrapper _90">
                  <div className="small-title center">Partnership Guarantee</div>
                  <p className="paragraph-small center">
                    We work on a success-based model, ensuring alignment with your goals. Our commitment extends beyond placement – we provide ongoing support to ensure successful long-term partnerships between facilities and healthcare professionals.
                  </p>
                </div>
              </div>
              <div className="solution-card-border bottom-right">
                <img
                  className="card-illustration bottom"
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min.png"
                  alt="illustration"
                  style={{
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568d5'),
                    transition: 'opacity 700ms ease 700ms, transform 700ms ease 700ms',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568d5"
                  loading="eager"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min.png 1125w"
                />
                <div className="vertical-center-wrapper _90">
                  <div className="small-title center">Proven Track Record</div>
                  <p className="paragraph-small center">
                    Our strong reputation speaks for itself. We have numerous satisfied partners who trust our professionalism, reliability, and commitment to creating sustainable, quality-focused partnerships in international healthcare recruitment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="4643d775-b50c-1aa9-7fdc-bd4a70f78926"
            style={{
              ...getAnimationStyle('4643d775-b50c-1aa9-7fdc-bd4a70f78926'),
              transition: 'opacity 700ms ease 800ms, transform 700ms ease 800ms',
              transformStyle: 'preserve-3d'
            }}
            className="button_wrapper"
          >
            <a href="https://wa.me/+15155065027" target="_blank" className="primary_button blue w-button">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}