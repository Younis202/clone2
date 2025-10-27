import { useState, useEffect, useRef } from 'react';

const timelineSteps = [
  {
    number: 1,
    title: "Language Training",
    description: "Intensive German courses with medical terminology and cultural preparation for the German job market.\n‍\nComprehensive support from B2 to C1 level with specialized healthcare vocabulary.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min.png 1756w",
    reverse: false
  },
  {
    number: 2,
    title: "Qualification Assessment",
    description: "Comprehensive evaluation of professional qualifications and preparation for German healthcare standards.\n‍\nWe handle the EU recognition process and ensure all credentials meet requirements.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min.png 1756w",
    reverse: true
  },
  {
    number: 3,
    title: "Contract Negotiation",
    description: "Precise matching to suitable positions and negotiation of optimal working conditions for both parties.\n‍\nWe ensure transparent agreements and handle all documentation efficiently.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min.png 1756w",
    reverse: false
  },
  {
    number: 4,
    title: "Visa & Placement",
    description: "Complete support with visa procedures, relocation, and integration into the new work environment.\n\nWe coordinate arrival logistics and ensure smooth onboarding at your facility.\n\nContinuous support throughout the adaptation period.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min.png 1756w",
    reverse: true
  }
];

const faqItems = [
  {
    question: "What is the total placement timeline?",
    answer: "The complete process typically takes 12-18 months from initial candidate selection to final placement.\n\nThis includes language training (6-12 months), qualification assessment (2-4 months), and visa processing (4-8 weeks).\n\nWe provide detailed timelines for each candidate to help you plan accordingly."
  },
  {
    question: "What are the costs involved?",
    answer: "Our permanent placement service starts from €8,500 per successful placement.\n\nThis includes comprehensive candidate screening, language training support, EU recognition process, and 6 months follow-up support.\n\nWe offer transparent pricing with no hidden fees and a replacement guarantee for your peace of mind."
  },
  {
    question: "How do you ensure candidate quality?",
    answer: "Every candidate undergoes rigorous screening including credential verification, language proficiency testing (B2/C1), and professional skill assessment.\n\nWe only work with nurses who have completed formal healthcare education and have relevant clinical experience.\n\nAll candidates receive cultural preparation and are committed to long-term integration in Germany."
  },
  {
    question: "What language levels do your candidates have?",
    answer: "Our ready-to-deploy nurses have German language proficiency at B2 or C1 level, certified through recognized language institutes.\n\nCandidates in training are working towards B2/C1 certification with specialized medical terminology.\n\nWe also offer additional language training services if your facility has specific requirements."
  },
  {
    question: "Do you provide post-placement support?",
    answer: "Yes, we provide comprehensive 6-month follow-up support after placement to ensure successful integration.\n\nThis includes regular check-ins with both the healthcare facility and the nurse, assistance with any adaptation challenges, and administrative support.\n\nOur 24/7 support line is available for any urgent matters that may arise."
  },
  {
    question: "What if a placement doesn't work out?",
    answer: "We offer a replacement guarantee as part of our permanent placement service.\n\nIf a candidate leaves within the guarantee period for any reason, we will provide a replacement at no additional cost.\n\nOur 94% successful placement rate demonstrates our commitment to quality matching and long-term success."
  }
];

const PlusIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_43_556)">
      <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6"></path>
    </g>
    <defs>
      <clipPath id="clip0_43_556">
        <rect width="25" height="25" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const TimelineItem = ({ step, index }) => {
  const { number, title, description, image, srcSet, reverse } = step;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} data-w-id={`timeline-item-${index}`} className="timeline_item">
      <style>{`
        @media (max-width: 767px) {
          .timeline_item {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.5rem !important;
            padding: 2rem 0 !important;
          }
          .timeline_image-wrapper {
            order: 1 !important;
            width: 100% !important;
            max-width: 200px !important;
          }
          .timeline_centre {
            order: 2 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          .timeline_text-box {
            order: 3 !important;
            width: 100% !important;
            text-align: center !important;
          }
          .timeline_circle-padding {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 1rem !important;
          }
          .timeline_grey-line {
            width: 60px !important;
            height: 2px !important;
          }
          .ready_circle {
            flex-shrink: 0 !important;
          }
        }
      `}</style>

      <div className="timeline_image-wrapper">
        <div
          className="timeline_box"
          style={{
            willChange: 'opacity',
            opacity: isVisible ? 1 : 0.25,
            transition: 'opacity 0.7s ease'
          }}
        >
          <img
            src={image}
            loading="eager"
            sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 1439px) 37vw, 435px"
            srcSet={srcSet}
            alt="process-image"
            className="process_image"
          />
        </div>
      </div>

      <div id={`w-node-center-${index}`} className="timeline_centre">
        <div className="timeline_circle-padding">
          <div className="ready_circle">
            <div className="ready_number">{number}</div>
          </div>
          <div className="timeline_grey-line"></div>
        </div>
      </div>

      <div
        id={`w-node-text-${index}`}
        className="timeline_text-box"
        style={{
          willChange: 'opacity',
          opacity: isVisible ? 1 : 0.25,
          transition: 'opacity 0.7s ease'
        }}
      >
        <h3 className="timeline_heading" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
        <p className="paragraph_default" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
      </div>
    </div>
  );
};

const FAQItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
      <div
        className="faq-toggle w-dropdown-toggle"
        id={`w-dropdown-toggle-${index}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex="0"
      >
        <div className="faq-title-wrapper-large">
          <div className="paragraph-regular text-weight-medium">{item.question}</div>
          <div className="toggle_wrapper">
            <div
              className="faq-arrow w-embed"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease'
              }}
            >
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
      <nav
        className="faq-content w-dropdown-list"
        id={`w-dropdown-list-${index}`}
        style={{
          height: isOpen ? 'auto' : '0px',
          overflow: 'hidden',
          transition: 'height 0.4s ease'
        }}
      >
        <div className="faq-content-wrapper">
          <p className="faq-paragraph" dangerouslySetInnerHTML={{ __html: item.answer.replace(/\n/g, '<br />') }} />
        </div>
      </nav>
    </div>
  );
};

export default function ProcessSection() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [buttonRef, buttonVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [reviewHeaderRef, reviewHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [reviewTitleRef, reviewTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [caseStudyRef, caseStudyVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialRef, testimonialVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqHeaderRef, faqHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqTitleRef, faqTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqGridRef, faqGridVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [finalButtonRef, finalButtonVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section process">
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper text-span-3">
          <div
            ref={headerRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67b57"
            style={{
              transform: headerVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: headerVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">Proven Process</div>
          </div>

          <h2
            ref={titleRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67b5a"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'
            }}
            className="heading_h2 center"
          >
            Our 4-Stage Placement Process
          </h2>

          <div className="timeline_content">
            <div className="timeline_component">
              <div className="timeline_progress">
                <div className="timeline_progress-bar"></div>
              </div>
              {timelineSteps.map((step, index) => (
                <TimelineItem key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          <div
            ref={buttonRef}
            data-w-id="071797ac-8762-3ddc-bd9c-bb400c06a717"
            style={{
              transform: buttonVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: buttonVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s'
            }}
            className="button_wrapper sub"
          >
            <a href="https://form.jotform.com/240765018573358" className="primary_button blue sub w-button">
              Request Partner Access
            </a>
          </div>

          <div className="divider"></div>

          <div
            ref={reviewHeaderRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bbe"
            style={{
              transform: reviewHeaderVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: reviewHeaderVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">Partner Success Stories</div>
          </div>

          <h2
            ref={reviewTitleRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bc1"
            style={{
              transform: reviewTitleVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: reviewTitleVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'
            }}
            className="heading_h2 center _700px"
          >
            What our partner facilities say
          </h2>

          <div
            ref={caseStudyRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bc3"
            style={{
              opacity: caseStudyVisible ? 1 : 0,
              transform: caseStudyVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'
            }}
            className="case_study_wrapper"
          >
            <a href="#" className="case_study_video w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
              <img
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min.png"
                loading="lazy"
                sizes="(max-width: 479px) 89vw, (max-width: 767px) 92vw, (max-width: 991px) 90vw, (max-width: 1439px) 40vw, 496.34375px"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min.png 1221w"
                alt=""
                className="video_cover"
              />
            </a>
            <div className="realtive_wrapper">
              <p
                ref={testimonialRef}
                data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bc7"
                style={{
                  opacity: testimonialVisible ? 1 : 0,
                  transform: testimonialVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'
                }}
                className="paragraph_default _500px large"
              >
                "Working with MEDeutsch MENA has transformed our staffing challenges. <span className="text-span-2">The recruitment process was professional, transparent, and delivered exactly what was promised.</span><span className="text-span"> </span>The nurses are highly qualified and culturally prepared. <br /><br />The entire placement process was seamless and <span className="text-span-3">we're extremely satisfied with the quality of candidates.</span> Highly recommended for any healthcare facility facing staffing shortages.
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div
            ref={faqHeaderRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bd4"
            style={{
              transform: faqHeaderVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: faqHeaderVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">FAQ</div>
          </div>

          <h2
            ref={faqTitleRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bd7"
            style={{
              opacity: faqTitleVisible ? 1 : 0,
              transform: faqTitleVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'
            }}
            className="heading_h2 center"
          >
            Frequently asked questions
          </h2>

          <div
            ref={faqGridRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bd9"
            style={{
              opacity: faqGridVisible ? 1 : 0,
              transform: faqGridVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'
            }}
            className="w-layout-grid faq_grid"
          >
            {faqItems.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>

          <div
            ref={finalButtonRef}
            data-w-id="6b5e6f79-2809-520b-088f-a06a7450e1d7"
            style={{
              transform: finalButtonVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: finalButtonVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s'
            }}
            className="button_wrapper sub"
          >
            <a href="https://form.jotform.com/240765018573358" className="primary_button blue sub w-button">
              Apply now - it's easy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}