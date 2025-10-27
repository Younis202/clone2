import { useState, useEffect, useRef } from 'react';

export default function LoesungenSection() {
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
      if (id === '8746e608-406b-7112-0853-91810c387d1c') {
        return { opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === 'ec7de002-9976-b864-7df1-b939912577d6') {
        return { opacity: 0 };
      }
      if (id === 'ce2c0e8e-3f63-11d8-c893-f0ad5b40f3ba') {
        return { opacity: 0 };
      }
      if (id === '87436ace-1439-8664-0a5e-44190f92560b') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === 'ddf50d73-dc23-16d5-b40f-dcbdfb48634d') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '747cd999-3688-852a-0be2-3df66b1ad738') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '5ec46c1f-d650-43ea-7656-e7570f131f71') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '9ef10ab8-6773-728f-d0e6-470f7d2a7069') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '87f0e9e0-08d1-f23c-610f-18dced69d743') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === 'b293e41a-ccc4-7202-db2b-171813aab7cc') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '51149bca-558a-b60b-92fc-1e93d4f52963') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '72c39df5-3979-ee3e-9138-6a81e9d82e47') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '9dbe4e43-788e-743d-7c8c-7f2ad67ad3c7') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '9dbe4e43-788e-743d-7c8c-7f2ad67ad3cb') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === 'ad795259-cfb6-584f-dbea-528f9fa30b19') {
        return { opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === 'ad795259-cfb6-584f-dbea-528f9fa30b1b') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '87089697-c14e-05f0-ad26-69b4ffd03191') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
    }
    return { opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
  };

  return (
    <section id="solutions" className="section solutions">
      <div className="w-layout-blockcontainer container_default w-container">
        <div
          data-w-id="8746e608-406b-7112-0853-91810c387d1c"
          style={{
            ...getAnimationStyle('8746e608-406b-7112-0853-91810c387d1c'),
            transition: 'opacity 1000ms ease 100ms, transform 1000ms ease 100ms',
            transformStyle: 'preserve-3d'
          }}
          className="vertical_center_wrapper"
        >
          <div
            data-w-id="ec7de002-9976-b864-7df1-b939912577d6"
            style={{
              ...getAnimationStyle('ec7de002-9976-b864-7df1-b939912577d6'),
              transition: 'opacity 1000ms ease 100ms'
            }}
            className="banner_title"
          >
            TRUSTED PARTNERSHIPS IN HEALTHCARE RECRUITMENT
          </div>
          <div
            data-w-id="ce2c0e8e-3f63-11d8-c893-f0ad5b40f3ba"
            style={{
              ...getAnimationStyle('ce2c0e8e-3f63-11d8-c893-f0ad5b40f3ba'),
              transition: 'opacity 1000ms ease 100ms'
            }}
            className="w-layout-grid logo_grid"
          >
            <div className="logo_wrapper">
              <img
                width="200"
                loading="lazy"
                alt="customer-logo"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47f0fd60ac617f7cc265b_logo%20(28).svg"
                className="logo"
              />
            </div>
            <div className="logo_wrapper">
              <img
                width="200"
                loading="lazy"
                alt="customer-logo"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47f38c5a77e4944b19c6a_logo%20(29).svg"
                className="logo"
              />
            </div>
            <div className="logo_wrapper">
              <img
                width="200"
                sizes="200px"
                alt="customer-logo"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47f4469acafdcd6f5b366_logo%20(22)-min.png"
                loading="lazy"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47f4469acafdcd6f5b366_logo%20(22)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47f4469acafdcd6f5b366_logo%20(22)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47f4469acafdcd6f5b366_logo%20(22)-min.png 1092w"
                className="logo"
              />
            </div>
            <div className="logo_wrapper">
              <img
                width="200"
                loading="lazy"
                alt="customer-logo"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66bf416ea805fecc9c9a568a_logo%20(31).svg"
                className="logo"
              />
            </div>
            <div className="logo_wrapper">
              <img
                width="200"
                sizes="200px"
                alt="customer-logo"
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66bf417aaaebf8633cc5acfd_logo%20(23)-min.png"
                loading="lazy"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66bf417aaaebf8633cc5acfd_logo%20(23)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66bf417aaaebf8633cc5acfd_logo%20(23)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66bf417aaaebf8633cc5acfd_logo%20(23)-min.png 1092w"
                className="logo"
              />
            </div>
          </div>
        </div>
        <div className="vertical_center_wrapper">
          <div
            data-w-id="87436ace-1439-8664-0a5e-44190f92560b"
            style={{
              ...getAnimationStyle('87436ace-1439-8664-0a5e-44190f92560b'),
              transition: 'opacity 700ms ease 100ms, transform 700ms ease 100ms',
              transformStyle: 'preserve-3d'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">Our Services</div>
          </div>
          <h2
            data-w-id="ddf50d73-dc23-16d5-b40f-dcbdfb48634d"
            style={{
              ...getAnimationStyle('ddf50d73-dc23-16d5-b40f-dcbdfb48634d'),
              transition: 'opacity 1000ms ease 200ms, transform 1000ms ease 200ms',
              transformStyle: 'preserve-3d'
            }}
            className="heading_h2 center _320px"
          >
            How Can We Help You?
          </h2>
          <div id="w-node-c60ced10-c9b1-2c27-27a6-9badb9d59ed0-b094ed5a" className="w-layout-layout solution_stack wf-layout-layout">
            <div className="w-layout-cell">
              <a
                data-w-id="747cd999-3688-852a-0be2-3df66b1ad738"
                style={{
                  ...getAnimationStyle('747cd999-3688-852a-0be2-3df66b1ad738'),
                  transition: 'opacity 700ms ease 300ms, transform 700ms ease 300ms',
                  transformStyle: 'preserve-3d'
                }}
                href="/german-facilities"
                className="solution_card w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50d97d0525e752c1242bd_Physiotherapie-min.png"
                  loading="eager"
                  style={{
                    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transition: 'transform 500ms ease',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  alt="German Healthcare Facilities"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50d97d0525e752c1242bd_Physiotherapie-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50d97d0525e752c1242bd_Physiotherapie-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50d97d0525e752c1242bd_Physiotherapie-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50d97d0525e752c1242bd_Physiotherapie-min.png 1110w"
                  className="card_image"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}
                />
                <div className="vertical_left_wrapper _85">
                  <div className="sub_header_white small">For Facilities</div>
                  <div className="card_title">German Hospitals & Clinics</div>
                  <p className="paragraph_default">Discover how MEDeutsch MENA can connect your facility with qualified Middle Eastern healthcare professionals ready to join your team.</p>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669cc9cb53bb169b1ce8bfdc_add%20(4).svg"
                  loading="eager"
                  width="48"
                  style={{
                    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transition: 'transform 500ms ease',
                    transformStyle: 'preserve-3d'
                  }}
                  alt="card-button"
                  className="card_toggle"
                />
              </a>
            </div>
            <div className="w-layout-cell">
              <a
                data-w-id="5ec46c1f-d650-43ea-7656-e7570f131f71"
                style={{
                  ...getAnimationStyle('5ec46c1f-d650-43ea-7656-e7570f131f71'),
                  transition: 'opacity 700ms ease 400ms, transform 700ms ease 400ms',
                  transformStyle: 'preserve-3d'
                }}
                href="/recruitment-companies"
                className="solution_card w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669cc9cb53bb169b1ce8bfdc_add%20(4).svg"
                  loading="eager"
                  width="48"
                  style={{
                    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transition: 'transform 500ms ease',
                    transformStyle: 'preserve-3d'
                  }}
                  alt="card-button"
                  className="card_toggle"
                />
                <img
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50e9ccec856d23bbfe4bb_Physiotherapie%20(1)-min.png"
                  loading="eager"
                  style={{
                    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transition: 'transform 500ms ease',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  alt="Recruitment Partners"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50e9ccec856d23bbfe4bb_Physiotherapie%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50e9ccec856d23bbfe4bb_Physiotherapie%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50e9ccec856d23bbfe4bb_Physiotherapie%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50e9ccec856d23bbfe4bb_Physiotherapie%20(1)-min.png 1110w"
                  className="card_image"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}
                />
                <div className="vertical_left_wrapper _85">
                  <div className="sub_header_white small">For Partners</div>
                  <div className="card_title">Recruitment Agencies</div>
                  <p className="paragraph_default">Learn how MEDeutsch MENA can support your agency with access to qualified healthcare professionals from the Middle East.</p>
                </div>
              </a>
            </div>
            <div className="w-layout-cell">
              <a
                data-w-id="9ef10ab8-6773-728f-d0e6-470f7d2a7069"
                style={{
                  ...getAnimationStyle('9ef10ab8-6773-728f-d0e6-470f7d2a7069'),
                  transition: 'opacity 700ms ease 500ms, transform 700ms ease 500ms',
                  transformStyle: 'preserve-3d'
                }}
                href="/professionals"
                className="solution_card w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50f22530b2b28e506549c_Bewerber-min.png"
                  loading="eager"
                  style={{
                    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transition: 'transform 500ms ease',
                    transformStyle: 'preserve-3d'
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  alt="Healthcare Professionals"
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50f22530b2b28e506549c_Bewerber-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50f22530b2b28e506549c_Bewerber-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50f22530b2b28e506549c_Bewerber-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a50f22530b2b28e506549c_Bewerber-min.png 1110w"
                  className="card_image"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}
                />
                <div className="vertical_left_wrapper _85">
                  <div className="sub_header_white small">For Professionals</div>
                  <div className="card_title">Healthcare Professionals</div>
                  <p className="paragraph_default">Start your career journey in Germany with MEDeutsch MENA - discover exciting opportunities in German healthcare facilities.</p>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669cc9cb53bb169b1ce8bfdc_add%20(4).svg"
                  loading="eager"
                  width="48"
                  style={{
                    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transition: 'transform 500ms ease',
                    transformStyle: 'preserve-3d'
                  }}
                  alt="card-button"
                  className="card_toggle"
                />
              </a>
            </div>
          </div>
          <div className="divider"></div>
          <div
            id="partnerships"
            data-w-id="87f0e9e0-08d1-f23c-610f-18dced69d743"
            style={{
              ...getAnimationStyle('87f0e9e0-08d1-f23c-610f-18dced69d743'),
              transition: 'opacity 700ms ease 100ms, transform 700ms ease 100ms',
              transformStyle: 'preserve-3d'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">Success Stories</div>
          </div>
          <h2
            data-w-id="b293e41a-ccc4-7202-db2b-171813aab7cc"
            style={{
              ...getAnimationStyle('b293e41a-ccc4-7202-db2b-171813aab7cc'),
              transition: 'opacity 700ms ease 200ms, transform 700ms ease 200ms',
              transformStyle: 'preserve-3d'
            }}
            className="heading_h2 center _670px"
          >
            What Our Partners Say About Us
          </h2>
          <div
            data-w-id="51149bca-558a-b60b-92fc-1e93d4f52963"
            style={{
              ...getAnimationStyle('51149bca-558a-b60b-92fc-1e93d4f52963'),
              transition: 'opacity 1000ms ease 300ms, transform 1000ms ease 300ms',
              transformStyle: 'preserve-3d'
            }}
            className="case_study_wrapper"
          >
            <a href="#" className="case_study_video w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
              <img
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669ce20a954d4a3154d62e79_case-study-cover%20(1)-min.png"
                loading="lazy"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669ce20a954d4a3154d62e79_case-study-cover%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669ce20a954d4a3154d62e79_case-study-cover%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669ce20a954d4a3154d62e79_case-study-cover%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669ce20a954d4a3154d62e79_case-study-cover%20(1)-min.png 1221w"
                alt=""
                className="video_cover"
              />
              <script type="application/json" className="w-json">{`{
 "items": [
    {
      "url": "https://frese-recruiting.wistia.com/medias/70a0q0nwza",
      "originalUrl": "https://frese-recruiting.wistia.com/medias/70a0q0nwza",
      "width": 940,
      "height": 529,
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/99d1d33372f391264cfe33c7c2cc5d885fa0f4d4.jpg?image_crop_resized=960x540",
      "html": "<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2F70a0q0nwza&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Ffrese-recruiting.wistia.com%2Fmedias%2F70a0q0nwza&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F99d1d33372f391264cfe33c7c2cc5d885fa0f4d4.jpg%3Fimage_crop_resized%3D960x540&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=wistia\\" width=\\"940\\" height=\\"529\\" scrolling=\\"no\\" title=\\"Wistia, Inc. embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen; encrypted-media; picture-in-picture;\\" allowfullscreen=\\"true\\"></iframe>",
      "type": "video"
    }
  ],
  "group": ""
}`}</script>
            </a>
            <div className="realtive_wrapper">
              <p
                data-w-id="72c39df5-3979-ee3e-9138-6a81e9d82e47"
                style={{
                  ...getAnimationStyle('72c39df5-3979-ee3e-9138-6a81e9d82e47'),
                  transition: 'opacity 700ms ease 400ms, transform 700ms ease 400ms',
                  transformStyle: 'preserve-3d'
                }}
                className="paragraph_default _500px large"
              >
                "Working with MEDeutsch MENA has been exceptional. <span className="blue_text">They quickly connected us with highly qualified healthcare professionals who perfectly fit our team's needs.</span><br /><br />Their support throughout the entire process was outstanding. <em>We highly recommend MEDeutsch MENA for anyone seeking reliable international healthcare recruitment."</em>
              </p>
            </div>
          </div>
          <div
            data-w-id="9dbe4e43-788e-743d-7c8c-7f2ad67ad3c7"
            style={{
              ...getAnimationStyle('9dbe4e43-788e-743d-7c8c-7f2ad67ad3c7'),
              transition: 'opacity 1000ms ease 300ms, transform 1000ms ease 300ms',
              transformStyle: 'preserve-3d'
            }}
            className="case_study_wrapper reverse"
          >
            <div className="realtive_wrapper">
              <p
                data-w-id="9dbe4e43-788e-743d-7c8c-7f2ad67ad3cb"
                style={{
                  ...getAnimationStyle('9dbe4e43-788e-743d-7c8c-7f2ad67ad3cb'),
                  transition: 'opacity 700ms ease 400ms, transform 700ms ease 400ms',
                  transformStyle: 'preserve-3d'
                }}
                className="paragraph_default _500px large"
              >
                "MEDeutsch MENA exceeded our expectations. <span className="blue_text">They found excellent candidates in record time and handled the entire recruitment process professionally</span> from start to finish.<br /><br />This saved us significant time and resources. <strong><em>We're very satisfied and highly recommend their services."</em></strong><br />
              </p>
            </div>
            <a href="#" className="case_study_video w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
              <img
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47948f732ec8ad1f9e4ad_case-study-cover%20(3)-min.png"
                loading="lazy"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47948f732ec8ad1f9e4ad_case-study-cover%20(3)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47948f732ec8ad1f9e4ad_case-study-cover%20(3)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47948f732ec8ad1f9e4ad_case-study-cover%20(3)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47948f732ec8ad1f9e4ad_case-study-cover%20(3)-min.png 1221w"
                alt=""
                className="video_cover"
              />
              <script type="application/json" className="w-json">{`{
  "items": [
    {
      "url": "https://frese-recruiting.wistia.com/medias/o7iwnmid0i",
      "originalUrl": "https://frese-recruiting.wistia.com/medias/o7iwnmid0i",
      "width": 940,
      "height": 529,
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/209216ed2708a9a52a4e436560d1f4c54cdd2f07.jpg?image_crop_resized=960x540",
      "html": "<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fo7iwnmid0i&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Ffrese-recruiting.wistia.com%2Fmedias%2Fo7iwnmid0i&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F209216ed2708a9a52a4e436560d1f4c54cdd2f07.jpg%3Fimage_crop_resized%3D960x540&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=wistia\\" width=\\"940\\" height=\\"529\\" scrolling=\\"no\\" title=\\"Wistia, Inc. embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen; encrypted-media; picture-in-picture;\\" allowfullscreen=\\"true\\"></iframe>",
      "type": "video"
    }
  ],
  "group": ""
}`}</script>
            </a>
          </div>
          <div className="comparsion_wrapper_red cta">
            <p
              data-w-id="ad795259-cfb6-584f-dbea-528f9fa30b19"
              style={{
                ...getAnimationStyle('ad795259-cfb6-584f-dbea-528f9fa30b19'),
                transition: 'opacity 700ms ease 100ms, transform 700ms ease 100ms',
                transformStyle: 'preserve-3d'
              }}
              className="sub_header_light"
            >
              Get In Touch
            </p>
            <div
              data-w-id="ad795259-cfb6-584f-dbea-528f9fa30b1b"
              style={{
                ...getAnimationStyle('ad795259-cfb6-584f-dbea-528f9fa30b1b'),
                transition: 'opacity 700ms ease 200ms, transform 700ms ease 200ms',
                transformStyle: 'preserve-3d'
              }}
              className="cta_title"
            >
              Contact Us Today - No Obligation
            </div>
            <div
              data-w-id="87089697-c14e-05f0-ad26-69b4ffd03191"
              style={{
                ...getAnimationStyle('87089697-c14e-05f0-ad26-69b4ffd03191'),
                transition: 'opacity 700ms ease 300ms, transform 700ms ease 300ms',
                transformStyle: 'preserve-3d'
              }}
              className="button_wrapper"
            >
              <a href="https://wa.me/+15155065027" target="_blank" className="primary_button small _2 w-button">Schedule Free Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}